// Ultra-minimal HubSpot extension - v1.1
console.log('Line Items Extension v1.1 - Deploy Test');

const container = document.createElement('div');
container.style.cssText = 'padding: 16px; border: 1px solid #ccc; margin: 8px;';
container.innerHTML = '<h3>Line Items Extension</h3><p>Version 1.1 - Deploy Test</p><button onclick="alert(\'Test successful!\')">Test Button</button>';

if (typeof window !== 'undefined') {
  document.body.appendChild(container);
}
