import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { IntroductionPage } from './pages/docs/IntroductionPage';
import { InstallationPage } from './pages/docs/InstallationPage';
import { DesignPrinciplesPage } from './pages/docs/DesignPrinciplesPage';
import { ColorsPage } from './pages/foundations/ColorsPage';
import { TypographyPage } from './pages/foundations/TypographyPage';
import { SpacingPage } from './pages/foundations/SpacingPage';
import { RadiusPage } from './pages/foundations/RadiusPage';
import { ShadowsPage } from './pages/foundations/ShadowsPage';
import { ButtonPage } from './pages/components/ButtonPage';
import { InputPage } from './pages/components/InputPage';
import { SelectPage } from './pages/components/SelectPage';
import { ModalPage } from './pages/components/ModalPage';
import { CardPage } from './pages/components/CardPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/docs/introduction" element={<IntroductionPage />} />
        <Route path="/docs/installation" element={<InstallationPage />} />
        <Route path="/docs/design-principles" element={<DesignPrinciplesPage />} />

        <Route path="/foundations/colors" element={<ColorsPage />} />
        <Route path="/foundations/typography" element={<TypographyPage />} />
        <Route path="/foundations/spacing" element={<SpacingPage />} />
        <Route path="/foundations/radius" element={<RadiusPage />} />
        <Route path="/foundations/shadows" element={<ShadowsPage />} />

        <Route path="/components/button" element={<ButtonPage />} />
        <Route path="/components/input" element={<InputPage />} />
        <Route path="/components/select" element={<SelectPage />} />
        <Route path="/components/modal" element={<ModalPage />} />
        <Route path="/components/card" element={<CardPage />} />

        {/* Without this, an unknown URL rendered the shell around an empty
            <main> — a blank page with no way back. */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
