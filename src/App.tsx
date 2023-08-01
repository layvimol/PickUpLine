import React, { useEffect, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { fetchPickupLines } from './components/pickupLineUtils';
import { Box } from '@mui/system';

const App: React.FC = () => {
  const [pickupLines, setPickupLines] = useState<string[]>([]);
  const [randomPickupLine, setRandomPickupLine] = useState<string>('');

  useEffect(() => {
    fetchPickupLines().then((lines) => {
      setPickupLines(lines);
    });
  }, []);

  const generateRandomPickupLine = () => {
    const randomIndex = Math.floor(Math.random() * pickupLines.length);
    setRandomPickupLine(pickupLines[randomIndex]);
  };

  return (
    <div style={{ backgroundColor: "#a1dde6",display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
          padding: '24px',
          marginTop: '20px',
          backgroundColor: '#f0f0f0',
          marginBottom: '20px',
          transition: 'transform 0.5s', // Add transition for smooth effect
          '&:hover': {
            transform: 'scale(0.95)', // Apply the transformation on hover
          },
          '@media (max-width: 600px)': { // Adjust the value to target smaller screens (e.g., phones)
            marginLeft: '10px',
            marginRight: '10px',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="red"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: '8px' }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 16.29 2 13.24 2 9.5 2 7.02 4.02 5 6.5 5c1.74 0 3.41.81 4.5 2.09C12.09 5.81 13.76 5 15.5 5 17.98 5 20 7.02 20 9.5c0 3.74-3.4 6.79-8.55 10.54L12 21.35z" />
          </svg>
          <Typography variant="h4" sx={{ fontWeight: 'bold', '@media (max-width: 600px)': { textAlign: 'center' } }}>
             Pickup Lines
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Button variant="contained" onClick={generateRandomPickupLine} sx={{ background: 'red', color: '#fff', '&:hover': { background: 'darkred' } }}>
            Generate Pickup Line
          </Button>
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'center', fontStyle: 'italic', lineHeight: 1.5 }}>
          {randomPickupLine}
        </Typography>
        <footer style={{ marginTop: '20px', textAlign: 'center', color: '#888' }}>
        © 2023 Lay Vimol: Random Pick Up Line Generator
      </footer>
      </Container>
    </div>
  );
};

export default App;
