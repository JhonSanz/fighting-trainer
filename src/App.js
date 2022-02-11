import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

function App() {
  const [fullHeight, setFullHeight] = useState(document.documentElement.clientHeight);

  useEffect(() => {
    setFullHeight(document.documentElement.clientHeight);
  }, [document.documentElement.clientHeight]);

  const [seconds, setSeconds] = useState(1);
  const [hits, setHits] = useState(0);

  const generateHit = () => {
    return Math.floor(Math.random() * (8 - 1)) + 1
  }
  let hit = 0;
  useEffect(() => {
    if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds - 1), 300);
    } else {
      hit = generateHit();
      if (hit === hits) {
        hit = hits + 1 < 8 ? hits + 1 : hit - 1;
      }
      setHits(hit);
      setSeconds(1);
    }
  });

  return (
    <div>
      <div style={{
        backgroundImage: `url("https://www.pngfind.com/pngs/m/235-2350603_png-file-svg-human-body-silhouette-png-transparent.png")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: fullHeight,
        width: 400
      }}>
        <Grid>
          <Grid container style={{ height: fullHeight / 3 }}>
            <Grid
              item
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: 10, backgroundColor: hits === 1 ? 'red' : 'transparent' }}></div>
              <div style={{ width: 10, backgroundColor: hits === 2 ? 'red' : 'transparent' }}></div>
              <div style={{ width: 10, backgroundColor: hits === 3 ? 'red' : 'transparent' }}></div>
            </Grid>
          </Grid>
          <Grid container style={{ height: fullHeight / 3 }}>
            <Grid
              item
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: 10, backgroundColor: hits === 4 ? 'red' : 'transparent' }}></div>
              <div style={{ width: 10, backgroundColor: hits === 5 ? 'red' : 'transparent' }}></div>
              <div style={{ width: 10, backgroundColor: hits === 6 ? 'red' : 'transparent' }}></div>
            </Grid>
          </Grid>
          <Grid container style={{ height: fullHeight / 3 }}>
            <Grid
              item
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: 10, backgroundColor: hits === 7 ? 'red' : 'transparent' }}></div>
              <div style={{ width: 10, backgroundColor: hits === 8 ? 'red' : 'transparent' }}></div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div >
  );
}

export default App;