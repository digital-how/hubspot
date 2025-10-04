import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Text, 
  Table, 
  Button, 
  Spinner, 
  Alert,
  Flex,
  Heading,
  HubspotProvider
} from '@hubspot/ui-extensions';

const CompanyLineItemsCard = () => {
  const [lineItems, setLineItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [companyId, setCompanyId] = useState(null);

  useEffect(() => {
    // Get company ID from HubSpot context
    HubspotProvider.getContext().then(context => {
      setCompanyId(context.crm.objectId);
      fetchLineItems(context.crm.objectId);
    });
  }, []);

  const fetchLineItems = async (companyId) => {
    if (!companyId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await HubspotProvider.fetch(`/api/company/${companyId}/line-items`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-HubSpot-Portal-Id': HubspotProvider.getPortalId()
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setLineItems(data.line_items || []);
    } catch (err) {
      console.error('Error fetching line items:', err);
      setError('Failed to load line items. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    if (companyId) {
      fetchLineItems(companyId);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount || 0);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num || 0);
  };

  if (loading) {
    return (
      <Card>
        <Flex direction="column" align="center" gap="medium">
          <Spinner size="medium" />
          <Text>Loading line items...</Text>
        </Flex>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <Alert variant="error">
          <Text>{error}</Text>
          <Button onClick={handleRefresh} variant="primary" size="sm">
            Try Again
          </Button>
        </Alert>
      </Card>
    );
  }

  if (lineItems.length === 0) {
    return (
      <Card>
        <Flex direction="column" gap="medium">
          <Flex justify="between" align="center">
            <Heading>Company Line Items</Heading>
            <Button onClick={handleRefresh} variant="secondary" size="sm">
              Refresh
            </Button>
          </Flex>
          <Text>No line items found for this company.</Text>
        </Flex>
      </Card>
    );
  }

  const tableData = lineItems.map((item, index) => ({
    id: index,
    dealName: item.deal_name || 'Unknown Deal',
    lineItemName: item.line_item_name || 'Unknown Item',
    quantity: formatNumber(item.quantity),
    unitPrice: formatCurrency(item.unit_price),
    amount: formatCurrency(item.amount)
  }));

  const columns = [
    {
      key: 'dealName',
      title: 'Deal Name',
      width: '25%'
    },
    {
      key: 'lineItemName',
      title: 'Line Item Name',
      width: '25%'
    },
    {
      key: 'quantity',
      title: 'Quantity',
      width: '15%'
    },
    {
      key: 'unitPrice',
      title: 'Unit Price',
      width: '15%'
    },
    {
      key: 'amount',
      title: 'Amount',
      width: '20%'
    }
  ];

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Flex justify="between" align="center">
          <Heading>Company Line Items ({lineItems.length})</Heading>
          <Button onClick={handleRefresh} variant="secondary" size="sm">
            Refresh
          </Button>
        </Flex>
        
        <Table
          data={tableData}
          columns={columns}
          pagination={true}
          pageSize={10}
        />
      </Flex>
    </Card>
  );
};

export default CompanyLineItemsCard;
