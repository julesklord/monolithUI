const fs = require('fs');

let html = fs.readFileSync('fearless-ui-guidelines.html', 'utf8');
let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (!bodyMatch) process.exit(1);

let body = bodyMatch[1];

// Remove the script tag at the bottom
body = body.replace(/<script>[\s\S]*?<\/script>/, '');

// Convert class to className
body = body.replace(/class=/g, 'className=');

// Convert SVG attributes
body = body.replace(/viewBox/g, 'viewBox'); // already fine
body = body.replace(/fill-rule/g, 'fillRule');
body = body.replace(/clip-rule/g, 'clipRule');

// Make self closing tags valid JSX
body = body.replace(/<input([^>]*[^\/])>/g, '<input$1/>');
body = body.replace(/<br>/g, '<br/>');

// Replace comments
body = body.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Styles conversion
body = body.replace(/style="([^"]*)"/g, (match, p1) => {
  const styles = p1.split(';').filter(s => s.trim().length > 0);
  const obj = {};
  styles.forEach(s => {
    const parts = s.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      const val = parts.slice(1).join(':').trim();
      obj[key] = val;
    }
  });
  return 'style={{ ' + Object.entries(obj).map(([k, v]) => `${k}: '${v}'`).join(', ') + ' }}';
});

// Create the React component wrapper
const reactCode = `
import React, { useState, useEffect } from 'react';
import './styles/index.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [brand, setBrand] = useState('brand-pitahaya');

  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'light' ? 'light' : '';
  }, [theme]);

  useEffect(() => {
    const brands = ['brand-gemini', 'brand-tropical', 'brand-void', 'brand-ocean', 'brand-ember', 'brand-pitahaya', 'brand-mango', 'brand-papaya'];
    brands.forEach(b => document.documentElement.classList.remove(b));
    document.documentElement.classList.add(brand);
  }, [brand]);

  // Brand switcher logic
  const handleBrandClick = (selectedBrand) => {
    setBrand(selectedBrand);
    // Update the live preview pill
    const bpPillText = document.getElementById('bpPillText');
    if (bpPillText) {
      const texts = {
        'brand-gemini': 'gemini-2.5-pro',
        'brand-tropical': 'tropical-app',
        'brand-void': 'void-terminal',
        'brand-ocean': 'ocean-studio',
        'brand-ember': 'ember-dash',
        'brand-pitahaya': 'pitahaya-app',
        'brand-mango': 'mango-app',
        'brand-papaya': 'papaya-app'
      };
      bpPillText.textContent = texts[selectedBrand] || selectedBrand;
    }
  };

  return (
    <>
      ${body}
    </>
  );
}
`;

fs.writeFileSync('tropical-ui/src/App.tsx', reactCode);
console.log('App.tsx generated successfully.');
