import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tipoMapa:string = "precipitaciones";
  id: any;
  constructor(public route: ActivatedRoute) { 
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    console.log(this.id);
  }
  changeTipoMapa(valor:any): void{
    console.log(valor);
  }

}
