import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ResgateComponent } from '../resgate/resgate.component';
import { AdoteComponent } from '../adote/adote.component';
import { QuemSomosComponent } from '../quem-somos/quem-somos.component';
import { DoeComponent } from '../doe/doe.component';
import { ContatoComponent } from '../contato/contato.component';


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
  { path: 'doe', component: DoeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
