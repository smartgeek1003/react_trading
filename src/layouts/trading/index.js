import { Outlet } from 'react-router-dom';
//
import TradingNavbar from './TradingNavbar';

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <>
      <TradingNavbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
