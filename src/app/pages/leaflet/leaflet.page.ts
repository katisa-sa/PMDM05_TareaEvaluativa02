import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.page.html',
  styleUrls: ['./leaflet.page.scss'],
})
export class LeafletPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMap();
  }
  public initMap(): void {
     var map = L.map('map').setView([40.4168, -3.7038], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Añadir un marcador en Madrid
    const marker = L.marker([40.4168, -3.7038]).addTo(map!);

    // Mensaje del marcador
    marker.bindPopup('<b>Madrid</b><br>Capital de España').openPopup();

    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }

}
