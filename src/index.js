// Ultra-minimal HubSpot extension
console.log('Line Items Extension v1.0');

const container = document.createElement('div');
container.innerHTML = '<h3>Line Items</h3><p>Extension loaded successfully</p>';

if (typeof window !== 'undefined') {
  document.body.appendChild(container);
}
