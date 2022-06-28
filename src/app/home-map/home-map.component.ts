import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
// import * as L  from "leaflet";//libreria 1
// import {  } from "@asymmetrik/ngx-leaflet";
// import "@ngageoint/leaflet-geopackage";//libreria 1
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
  @Input() tipoMapa:string | undefined; 
  private map:any;



  constructor(private makerService:MarkerService) { 
    // alert(this.tipoMapa)
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
    const tiles = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
      maxZoom: 10,
      minZoom: 5,
      attribution: '<a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a> + <a href="http://www.osm.org/copyright" target="_blank">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    var algo = L.geoPackageFeatureLayer([], {
      geoPackageUrl: 'http://ngageoint.github.io/GeoPackage/examples/rivers.gpkg',
      layerName: 'rivers'
  }).addTo(this.map);
  }

  AfterViewInit(): void {
  }

}
