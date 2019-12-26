import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ResgateComponent } from '../resgate/resgate.component';
import { AdoteComponent } from '../adote/adote.component';
import { QuemSomosComponent } from '../quem-somos/quem-somos.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', component: HomeComponent },
  { path: 'resgate', component: ResgateComponent },
  { path: 'adote', component: AdoteComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
