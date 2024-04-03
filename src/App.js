// Import des modules React et Material-UI
import React from 'react';
import { Container, Typography } from '@mui/material';
import Map from './components/Map';

// Composant fonctionnel pour la page d'atterrissage
function App() {
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {/* Titre principal de la page */}
      <Typography variant="h4" align="center" gutterBottom>
        Google Maps : Un outil extraordinaire utilisé tous les jours !
      </Typography>
      {/* Texte d'introduction */}
      <Typography variant="body1" align="center" gutterBottom>
        Découvrez notre emplacement sur la carte :
      </Typography>
      {/* Utilisation du composant Map pour afficher la carte */}
      <Map />
    </Container>
  );
}

export default App; // Export du composant App
