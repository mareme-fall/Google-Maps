// Import des modules React et des composants Google Maps
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Style CSS pour définir la taille du conteneur de la carte
const containerStyle = {
    width: '100%',
    height: '400px',
};

// Coordonnées du centre de la carte (Paris)
const center = {
    lat: 48.8566,
    lng: 2.3522,
};

// Composant fonctionnel pour afficher la carte Google Maps
function Map() {
    return (
        // Utilisation de LoadScript pour charger l'API Google Maps avec votre clé API
        <LoadScript googleMapsApiKey="VOTRE_CLE_API">
            {/* Utilisation de GoogleMap pour afficher la carte */}
            <GoogleMap
                mapContainerStyle={containerStyle} // Style du conteneur de la carte
                center={center} // Centre de la carte
                zoom={12} // Niveau de zoom de la carte
            >
                {/* Ajout d'un marqueur sur la carte */}
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map; // Export du composant Map
