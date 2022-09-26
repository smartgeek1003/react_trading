// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  PoweredBy,
  Discover,
  Borrowing,
  GetPaid,
  JoinOurComunity,
  BondingDeflation,
  Prescale,
  SyntheticArchitecture
} from '../components/_external-pages/landing-old';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Home | LVRJ" id="move_top">
      <LandingHero />
      <ContentStyle>
        <PoweredBy />
        <Discover />
        <Borrowing />
        <GetPaid />
        <SyntheticArchitecture />
        <Prescale />
        <BondingDeflation />
        <JoinOurComunity />
      </ContentStyle>
    </RootStyle>
  );
}
