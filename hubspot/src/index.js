import React from 'react';
import { render } from 'react-dom';
import { HubspotProvider } from '@hubspot/ui-extensions';
import CompanyLineItemsCard from './components/CompanyLineItemsCard';

// Register the extension
HubspotProvider.registerExtension('company-line-items-card', () => {
  return <CompanyLineItemsCard />;
});
