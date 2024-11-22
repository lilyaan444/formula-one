import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: any;

  // Coordonnées des GP (exemple avec quelques GP)
  grandPrixLocations = [
    { name: 'Bahrain GP', lat: 26.0325, lng: 50.5108 },
    { name: 'Saudi Arabian GP', lat: 24.4747, lng: 39.104 },
    { name: 'Australian GP', lat: -37.8497, lng: 144.9681 },
    { name: 'Chinese GP', lat: 31.7042, lng: 121.2292 },
    { name: 'Azerbaijan GP', lat: 40.3736, lng: 49.832 },
    { name: 'Miami GP', lat: 25.7787, lng: -80.209 },
    { name: 'Emilia Romagna GP', lat: 44.4936, lng: 11.4871 },
    { name: 'Monaco GP', lat: 43.7347, lng: 7.4206 },
    { name: 'Spanish GP', lat: 41.5703, lng: 2.2617 },
    { name: 'Canadian GP', lat: 45.5088, lng: -73.554 },
    { name: 'Austrian GP', lat: 47.2197, lng: 14.7644 },
    { name: 'British GP', lat: 52.0786, lng: -1.0169 },
    { name: 'Hungarian GP', lat: 47.687, lng: 19.2556 },
    { name: 'Belgian GP', lat: 50.4372, lng: 5.9714 },
    { name: 'Dutch GP', lat: 52.0378, lng: 4.5407 },
    { name: 'Italian GP', lat: 45.6156, lng: 9.2812 },
    { name: 'Singapore GP', lat: 1.2914, lng: 103.864 },
    { name: 'Japanese GP', lat: 34.8431, lng: 136.5415 },
    { name: 'Qatar GP', lat: 25.2763, lng: 51.52 },
    { name: 'United States GP', lat: 30.1745, lng: -97.6597 },
    { name: 'Mexican GP', lat: 19.7048, lng: -99.2192 },
    { name: 'Brazilian GP', lat: -23.7035, lng: -46.6997 },
    { name: 'Las Vegas GP', lat: 36.1274, lng: -115.1753 },
    { name: 'Abu Dhabi GP', lat: 24.467, lng: 54.6037 },
  ];

  // Définir une icône personnalisée
  private customIcon = L.icon({
    iconUrl: '../assets/icon/location-pin.png', // Remplacez par le chemin de votre icône
    iconSize: [35, 35], // Taille de l'icône
    iconAnchor: [12, 41], // Point d'ancrage de l'icône
    popupAnchor: [1, -34], // Point d'ancrage de la popup
  });

  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    // Localisation actuelle
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        // Initialisation de la carte
        this.map = L.map('map').setView([userLat, userLng], 6);

        // Ajouter des tuiles OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(this.map);

        // Marqueur pour la position actuelle
        L.marker([userLat, userLng], { icon: this.customIcon })
          .addTo(this.map)
          .bindPopup('Vous êtes ici.')
          .openPopup();

        // Ajouter les GP à la carte
        this.grandPrixLocations.forEach((gp) => {
          L.marker([gp.lat, gp.lng], { icon: this.customIcon })
            .addTo(this.map)
            .bindPopup(gp.name);
        });
      },
      (error) => {
        console.error('Erreur de localisation :', error);
        alert('Impossible d’accéder à la localisation.');
      }
    );
  }
}
