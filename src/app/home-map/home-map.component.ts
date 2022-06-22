import { Component, AfterViewInit } from '@angular/core';
import * as L  from "leaflet";
import { MarkerService } from '../servicios/marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.css']
})
export class HomeMapComponent implements AfterViewInit {

  private map:any;



  constructor(private makerService:MarkerService) { 

  }
  ngAfterViewInit(): void {
    this.initMap();
    this.makerService.makeCapitalMarkers(this.map);
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [ -36, -64 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 10,
      minZoom: 5,
      attribution: ''
    });

    tiles.addTo(this.map);
  }

  AfterViewInit(): void {
  }

}
