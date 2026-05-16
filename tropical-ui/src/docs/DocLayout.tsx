import React from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from './sections/Footer';
import { Outlet } from 'react-router-dom';

export const DocLayout: React.FC = () => {
  return (
    <div className="doc-layout">
      <Sidebar />
      <main className="doc-main">
        <div className="doc-content-scroller">
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
};
