import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaAutoriComponent } from './lista-autori/lista-autori.component';
import { ListaArticoliComponent } from './lista-articoli/lista-articoli.component';
import { FormsModule } from '@angular/forms';
import { ArticoloComponent } from './articolo/articolo.component';
import { AutoreComponent } from './autore/autore.component';
import { ChartsModule } from 'ng2-charts';
import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListaAutoriComponent,
    ListaArticoliComponent,
    ArticoloComponent,
    AutoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
