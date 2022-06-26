import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMapComponent } from './home-map/home-map.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'monitoreo/estado-actual-de-la-sequia/:id',component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
