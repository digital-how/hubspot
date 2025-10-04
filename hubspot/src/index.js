// Simple HubSpot UI Extension
console.log('Company Line Items Extension loaded');

// Basic extension that just shows a simple message
const extension = {
  type: 'crm.record.sidebar',
  objectType: 'COMPANIES',
  render: (context) => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div style="padding: 16px; border: 1px solid #e1e5e9; border-radius: 8px; margin: 8px 0;">
        <h3 style="margin: 0 0 12px 0; color: #33475b; font-size: 16px;">Company Line Items</h3>
        <p style="margin: 0; color: #7c98b6; font-size: 14px;">
          This extension will display line items from company deals.
        </p>
        <button onclick="alert('Refresh clicked!')" style="
          margin-top: 12px;
          padding: 8px 16px;
          background: #ff7a59;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        ">Refresh</button>
      </div>
    `;
    return container;
  }
};

// Register the extension
if (typeof window !== 'undefined' && window.HubSpot) {
  window.HubSpot.extensions.register(extension);
}
