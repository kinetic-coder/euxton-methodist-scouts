import './App.css';

import './views/HomeView/HomeView';
import HomeView from './views/HomeView/HomeView';
import { Container, Grid2 } from '@mui/material';

import logo from './assets/scouts-logo-purple.png';
import banner from './assets/kids-camp-fire.jpg';

function App() {
  return (
    <Container className="App">
      <body>
        <Grid2 container spacing={0}>
          <Grid2 size={12}>
            <div className="site-heading" style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between' }}>
              <div>
                <div className="organisation-name">Scouts</div>
                <div className="group-name">Euxton Methodist</div>
              </div>
              <div>
                <img className="site-logo" src={logo} alt="Scouts Logo" width="50" />
              </div>
            </div>
          </Grid2>
          <Grid2 size={12}>
            <div style={{ position: 'relative', overflow: 'hidden', height: '50vh', display: 'flex', alignItems: 'flex-start' }}>
              <img src={banner} alt="Scouts Banner" className="banner" style={{ width: '100%', height: 'auto' }} />
              <div style={{ position: 'absolute', top: '2%', left: '1%', width: '95%', height: '50%', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                <h2 className="banner-header">Skills for Life</h2>
                <p className="banner-text">We are a thriving scout group located in the Northwest of England. We pride ourselves on providing a varied, exciting programme in a safe env for all our young people in Beavers, Cubs and Scouts.</p>
              </div>
            </div>
          </Grid2>
          <Grid2 size={12}>
            <HomeView />
          </Grid2>
        </Grid2>
      </body>
    </Container>
  );
}

export default App;
