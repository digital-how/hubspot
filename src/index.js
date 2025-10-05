// Ultra-minimal HubSpot extension - v1.2
console.log('Line Items Extension v1.2 - Build Test');

const container = document.createElement('div');
container.style.cssText = 'padding: 16px; border: 1px solid #ccc; margin: 8px; background: #f9f9f9;';
container.innerHTML = '<h3>Line Items Extension</h3><p>Version 1.2 - Build Test</p><button onclick="alert(\'Build successful!\')">Test Button</button>';

if (typeof window !== 'undefined') {
  document.body.appendChild(container);
}
