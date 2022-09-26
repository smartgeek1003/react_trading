import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const menuConfig = [
  {
    title: 'HOME',
    path: '/',
    icon: <Iconify icon="carbon:home" sx={{ width: 20, height: 20 }} />
  },
  {
    title: 'TOKENOMICS',
    path: '/about',
    icon: <Iconify icon="material-symbols:generating-tokens-outline-rounded" sx={{ width: 20, height: 20 }} />
  },
  {
    title: 'ABOUT',
    path: '/contact',
    icon: <Iconify icon="fluent:text-font-info-16-filled" sx={{ width: 20, height: 20 }} />
  },
  {
    title: 'CONTACT',
    path: '/contact',
    icon: <Iconify icon="fluent:contact-card-group-28-filled" sx={{ width: 20, height: 20 }} />
  }
];

export default menuConfig;
