import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  lluvias:any[] = [{
    value:"0.1",
    title:"Más de 0.1 mm"
  },
  {
    value:"1",
    title:"Más de 1 mm"
  },
  {
    value:"3",
    title:"Más de 3 mm"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
