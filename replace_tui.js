const fs = require('fs');
let code = fs.readFileSync('tropical-ui/src/App.tsx', 'utf8');

// Ensure TerminalView is imported
if (!code.includes('TerminalView')) {
  code = code.replace(/Drawer \n\} from '\.\/components'/g, "Drawer,\n  TerminalView\n} from './components'");
}

// Replace non-greedy matches of tui-block
code = code.replace(/<div className="tui-block">([\s\S]*?)<\/div>/g, "<TerminalView>$1</TerminalView>");

fs.writeFileSync('tropical-ui/src/App.tsx', code);
console.log('App.tsx updated with TerminalView');
