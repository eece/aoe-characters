import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UnitsPageComponent } from './pages/units-page/units-page.component';
import { UnitDetailPageComponent } from './pages/unit-detail-page/unit-detail-page.component';
import { LabelValueItemComponent } from './components/label-value-item/label-value-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnitsPageComponent,
    UnitDetailPageComponent,
    LabelValueItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
