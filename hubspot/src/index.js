import React from 'react';
import { createRoot } from 'react-dom/client';
import { HubspotProvider } from '@hubspot/ui-extensions';
import CompanyLineItemsCard from './components/CompanyLineItemsCard';

// Simple extension registration
const root = createRoot(document.getElementById('root'));
root.render(<CompanyLineItemsCard />);
