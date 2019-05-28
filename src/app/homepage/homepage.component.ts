import { Component, OnInit } from '@angular/core';
import { KeywordService } from '../services/keyword.service';
import { Keyword } from '../model/keyword';
import { AutoreService } from '../services/autore.service';
import { Autore } from '../model/autore';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  kws: Keyword[] = [];
  autori_list: Autore[] = [];
  selectedkw: number;
  selsection: string = "art";
  selectedaut: number;

  constructor(private kwService: KeywordService,
              private autService: AutoreService,
              private router: Router) { 
    this.kwService.getAll().subscribe(list => {
      this.kws = list;
    })
    this.autService.getAll().subscribe(list => {
      this.autori_list = list;
    })
  }

  ngOnInit() {
  }

  gotoVE() {
    console.log(this.selectedkw);
    console.log(this.selsection);
    if (this.selectedkw == undefined) {
      alert('Seleziona una parola chiave!');
    } else {
      let navigationExtras: NavigationExtras = {
        state: { kwid: this.selectedkw }
      };
      if (this.selsection == "art") {
        console.log('artrout');
        this.router.navigate(['articoli'], navigationExtras);
      } else {
        console.log('autrout');
        this.router.navigate(['autori'], navigationExtras);
      }
    }
  }
}
