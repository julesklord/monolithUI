const fs = require('fs');

const files = [
  'K:/source/repos/TropicalDev-Design/monolith-ui/src/docs/sections/BrandTheming.tsx',
  'K:/source/repos/TropicalDev-Design/monolith-ui/src/docs/sections/Hero.tsx',
  'K:/source/repos/TropicalDev-Design/monolith-ui/src/docs/sections/Layout.tsx',
  'K:/source/repos/TropicalDev-Design/monolith-ui/src/docs/sections/Motion.tsx',
  'K:/source/repos/TropicalDev-Design/monolith-ui/src/docs/sections/Principles.tsx'
];

const map = {
  'IconSparkles': 'Sparkle',
  'IconCode': 'Code',
  'IconBug': 'Bug',
  'IconMeteor': 'Meteor',
  'IconPalette': 'Palette',
  'IconLayoutDashboard': 'Layout',
  'IconShoe': 'Sneaker',
  'IconHeart': 'Heart',
  'IconArrowUpRight': 'ArrowUpRight',
  'IconSun': 'Sun',
  'IconBounceRight': 'ArrowBendUpRight',
  'IconArrowDownCircle': 'ArrowCircleDown',
  'IconMinus': 'Minus',
  'IconRotateClockwise': 'ClockCounterClockwise',
  'IconDots': 'DotsThree',
  'IconLayersSubtract': 'Stack',
  'IconContrast': 'Contrast',
  'IconBrandOpenSource': 'CodeBlock',
  'IconRuler': 'Ruler'
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/@tabler\/icons-react/g, '@phosphor-icons/react');
  
  for (const [tabler, phosphor] of Object.entries(map)) {
    const importRegex = new RegExp(`\\b${tabler}\\b`, 'g');
    content = content.replace(importRegex, phosphor);
    
    const tagRegex = new RegExp(`<${phosphor}(\\s|>|\\/)`, 'g');
    content = content.replace(tagRegex, (match) => {
       if (match.includes('weight=')) return match;
       return `<${phosphor} weight="duotone"${match.substring(phosphor.length + 1)}`;
    });
  }
  
  fs.writeFileSync(file, content);
});
console.log('done');
