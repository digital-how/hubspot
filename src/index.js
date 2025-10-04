// Minimal HubSpot UI Extension
console.log('Company Line Items Extension loaded');

// Create a simple extension
const createExtension = () => {
  const container = document.createElement('div');
  container.style.cssText = `
    padding: 16px;
    border: 1px solid #e1e5e9;
    border-radius: 8px;
    margin: 8px 0;
    background: white;
  `;
  
  container.innerHTML = `
    <h3 style="margin: 0 0 12px 0; color: #33475b; font-size: 16px;">Company Line Items</h3>
    <p style="margin: 0 0 12px 0; color: #7c98b6; font-size: 14px;">
      This extension displays line items from company deals.
    </p>
    <button onclick="alert('Refresh clicked!')" style="
      padding: 8px 16px;
      background: #ff7a59;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    ">Refresh Data</button>
  `;
  
  return container;
};

// Export the extension
if (typeof module !== 'undefined' && module.exports) {
  module.exports = createExtension;
} else if (typeof window !== 'undefined') {
  window.CompanyLineItemsExtension = createExtension;
}
