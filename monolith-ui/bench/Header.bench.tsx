import { bench, describe } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import { Header } from '../src/layout/Header';
import React from 'react';

describe('Header component performance', () => {
  bench('render Header multiple times', () => {
    for (let i = 0; i < 100; i++) {
        render(
        <MemoryRouter initialEntries={['/']}>
            <ThemeProvider>
            <Header />
            </ThemeProvider>
        </MemoryRouter>
        );
    }
  });
});
