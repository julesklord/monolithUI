import { bench, describe } from 'vitest'
import { render } from '@testing-library/react'
import React from 'react'
import { DesktopUI } from '../src/docs/sections/DesktopUI'

describe('DesktopUI', () => {
  bench('render DesktopUI', () => {
    const { unmount } = render(<DesktopUI />);
    unmount();
  })
})
