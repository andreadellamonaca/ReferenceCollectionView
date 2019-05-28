import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autore } from '../model/autore';
import { AutoreService } from '../services/autore.service';
import { OrganizzazioneService } from '../services/organizzazione.service';
import { Organizzazione } from '../model/organizzazione';

@Component({
  selector: 'app-lista-autori',
  templateUrl: './lista-autori.component.html',
  styleUrls: ['./lista-autori.component.css']
})
export class ListaAutoriComponent implements OnInit {

  kwsel: number;
  aut_list: Autore[] = [];
  top5autori: Autore[] = [];
  top5orgs: Organizzazione[] = [];
  n_autoriperarticolo: number = 0;
  filtro: Autore = { NomeCompleto: ''};

  constructor(private router: Router,
              private autService: AutoreService,
              private orgService: OrganizzazioneService) { }

  ngOnInit() {
    this.kwsel = parseInt(localStorage.getItem('keyword'), 10);
    let last = history.state.kwid;
    if (this.kwsel == undefined || (this.kwsel != last && last != undefined)) {
      this.kwsel = history.state.kwid;
      localStorage.setItem('keyword', this.kwsel.toString());
      console.log('NEW'+this.kwsel); 
    }
    console.log('OLD'+ this.kwsel);
    if (this.kwsel == 0) {
      this.autService.getAll().subscribe(list => {
        this.aut_list = list;
      }, error => {
        console.log(error);
      });
      this.autService.getAlltop5().subscribe(list => {
        this.top5autori = list;
      });
      this.orgService.getAlltop5().subscribe(list => {
        this.top5orgs = list;
      });
      this.autService.getAllavgcoautore().subscribe(data => {
        this.n_autoriperarticolo = Math.round(data[0].num_medio);
      });
    } else {
      this.autService.getByKW(this.kwsel).subscribe(list => {
        this.aut_list = list;
      }, error => {
        console.log(error);
      });
      this.autService.gettop5byKWid(this.kwsel).subscribe(list => {
        this.top5autori = list;
      });
      this.orgService.gettop5byKWid(this.kwsel).subscribe(list => {
        this.top5orgs = list;
      });
      this.autService.getavgcoautorebykwid(this.kwsel).subscribe(data => {
        this.n_autoriperarticolo = Math.round(data[0].num_medio);
      });
    }
  }

}
