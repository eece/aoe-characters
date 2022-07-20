import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UnitsPageComponent } from './pages/units-page/units-page.component';
import { UnitDetailPageComponent } from './pages/unit-detail-page/unit-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnitsPageComponent,
    UnitDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
