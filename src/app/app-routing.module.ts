import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UnitDetailPageComponent } from './pages/unit-detail-page/unit-detail-page.component';
import { UnitsPageComponent } from './pages/units-page/units-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'units', component: UnitsPageComponent },
  { path: 'unit-detail/:id', component: UnitDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
