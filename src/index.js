// Minimal HubSpot UI Extension - Updated
console.log('Company Line Items Extension loaded - v1.1');

// Create a simple extension
const createExtension = () => {
  const container = document.createElement('div');
  container.style.cssText = `
    padding: 16px;
    border: 1px solid #e1e5e9;
    border-radius: 8px;
    margin: 8px 0;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  `;
  
  container.innerHTML = `
    <h3 style="margin: 0 0 12px 0; color: #33475b; font-size: 16px; font-weight: 600;">Company Line Items</h3>
    <p style="margin: 0 0 12px 0; color: #7c98b6; font-size: 14px; line-height: 1.4;">
      This extension displays line items from company deals in a clean, organized format.
    </p>
    <button onclick="alert('Refresh clicked! Data will be loaded...')" style="
      padding: 8px 16px;
      background: #ff7a59;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: background-color 0.2s;
    " onmouseover="this.style.backgroundColor='#e66a47'" onmouseout="this.style.backgroundColor='#ff7a59'">Refresh Data</button>
  `;
  
  return container;
};

// Export the extension
if (typeof module !== 'undefined' && module.exports) {
  module.exports = createExtension;
} else if (typeof window !== 'undefined') {
  window.CompanyLineItemsExtension = createExtension;
}
