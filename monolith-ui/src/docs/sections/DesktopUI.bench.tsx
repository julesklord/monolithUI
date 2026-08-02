import { bench, describe } from 'vitest';
import { render } from '@testing-library/react';
import { DesktopUI } from './DesktopUI';

describe('DesktopUI Benchmark', () => {
  bench('render DesktopUI', () => {
    render(<DesktopUI />);
  });
});
