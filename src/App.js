import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import Settings from './components/settings';
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import ThemePrimaryColor from './components/ThemePrimaryColor';

import ThemeContextProvider from './contexts/ThemeContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeContextProvider>
      <ThemeConfig>
        <ThemePrimaryColor>
          <RtlLayout>
            <Settings />
            <ScrollToTop />
            <Router />
          </RtlLayout>
        </ThemePrimaryColor>
      </ThemeConfig>
    </ThemeContextProvider>
  );
}
