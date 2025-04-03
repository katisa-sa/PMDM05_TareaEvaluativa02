import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.page.html',
  styleUrls: ['./leaflet.page.scss'],
})
export class LeafletPage implements OnInit {
  
  constructor() {}

  ngOnInit() {
    this.initMap();
  }
  public initMap(): void {
    var map = L.map('map').setView([40.4168, -3.7038], 8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

        // Definir un icono personalizado
    const icon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',  // URL del icono
      iconSize: [25, 41],  // Tamaño del icono
      iconAnchor: [12, 41],  // Ancla del icono
      popupAnchor: [1, -34],  // Posición del pop-up
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',  // URL de la sombra
      shadowSize: [41, 41]  // Tamaño de la sombra
    });

    // Añadir un marcador en Madrid 
    const marker = L.marker([40.4168, -3.7038], {icon}).addTo(map!);
    // Mensaje del marcador
    marker.bindPopup('<b>Madrid</b>').openPopup();
    
    // Añadir un marcador en Madrid 
    const marker1 = L.marker([40.9478, -4.1106], {icon}).addTo(map!);
    // Mensaje del marcador
    marker1.bindPopup('<b>Segovia</b>').openPopup();

    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // Agregar control de rutas
    L.Routing.control({
      waypoints: [
        L.latLng(40.4168, -3.7038), // Punto de inicio
        L.latLng(40.9478, -4.1106), // Punto de destino
      ],
      routeWhileDragging: true,
      //show: false, // Oculta el panel de indicaciones
      lineOptions: {
        styles: [
          { color: 'blue', opacity: 1, weight: 5 } // Color azul con grosor de línea ajustado
        ],
        extendToWaypoints: false,
        missingRouteTolerance: 0
      }
    }).addTo(map);
  }
}
