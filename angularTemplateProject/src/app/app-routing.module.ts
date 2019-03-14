import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SecondaryComponent } from './secondary/secondary.component';


const routes: Routes = [
  { path: 'index', component: MainComponent },
  { path: 'secondary', component: SecondaryComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
