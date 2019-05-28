import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListaAutoriComponent } from './lista-autori/lista-autori.component';
import { ListaArticoliComponent } from './lista-articoli/lista-articoli.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { AutoreComponent } from './autore/autore.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'autori', component: ListaAutoriComponent},
  {path: 'articoli', component: ListaArticoliComponent},
  {path: 'articolo/:id', component: ArticoloComponent},
  {path: 'autore/:id', component: AutoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
