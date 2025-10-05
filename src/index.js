// Fresh HubSpot extension - v2.0
console.log('Fresh Line Items Extension v2.0');

const container = document.createElement('div');
container.style.cssText = 'padding: 16px; border: 1px solid #007acc; margin: 8px; background: #f0f8ff;';
container.innerHTML = '<h3>Fresh Line Items Extension</h3><p>Version 2.0 - Fresh Start</p><button onclick="alert(\'Fresh build successful!\')">Test</button>';

if (typeof window !== 'undefined') {
  document.body.appendChild(container);
}
