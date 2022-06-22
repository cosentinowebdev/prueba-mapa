import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMapComponent } from './home-map/home-map.component';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './servicios/marker.service';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeMapComponent,
    HomeComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
