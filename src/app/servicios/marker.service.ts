import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/PuntosEjemplo.geojson';

  constructor(private http: HttpClient) { }

  makeCapitalMarkers(map: L.Map): void { 
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.circle([lat, lon],100);
        
        
        marker.addTo(map);
      }
    });
  }
}
