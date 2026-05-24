import { Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./providers";
import { Header } from "./layout";
import { DocLayout } from "./docs/DocLayout";
import {
  Hero,
  Principles,
  Philosophy,
  ColorSystem,
  Typography,
  Motion,
  Layout,
  ComponentsSection,
  DesktopUI,
  WebUI,
  TerminalUI,
  BrandTheming,
  TokenSpec,
  IconSystem,
  TUIComponents,
} from "./docs/sections";
import "./styles/index.css";

const AppRoutes = () => {
  const { brand, setBrand } = useTheme();

  return (
    <Routes>
      <Route path="/" element={<DocLayout />}>
        <Route index element={<Hero />} />
        <Route path="principles" element={<Principles />} />
        <Route path="philosophy" element={<Philosophy />} />
        <Route path="color" element={<ColorSystem />} />
        <Route path="typography" element={<Typography />} />
        <Route path="icons" element={<IconSystem />} />
        <Route path="tui-system" element={<TUIComponents />} />
        <Route path="motion" element={<Motion />} />
        <Route path="layout" element={<Layout />} />
        <Route
          path="branding"
          element={<BrandTheming brand={brand} handleBrandClick={setBrand} />}
        />
        <Route path="spec" element={<TokenSpec />} />
        <Route path="components" element={<ComponentsSection />} />
        <Route path="desktop" element={<DesktopUI />} />
        <Route path="web" element={<WebUI />} />
        <Route path="terminal" element={<TerminalUI />} />
      </Route>
    </Routes>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <AppRoutes />
    </ThemeProvider>
  );
}
