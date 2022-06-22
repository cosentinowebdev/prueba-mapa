import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tipoMapa:string = "precipitaciones";
  constructor() { }

  ngOnInit(): void {
  }
  changeTipoMapa(valor:any): void{
    console.log(valor);
  }

}
