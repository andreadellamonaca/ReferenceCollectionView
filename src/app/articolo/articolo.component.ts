import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticoloService } from '../services/articolo.service';
import { Articolo } from '../model/articolo';
import { Keyword } from '../model/keyword';
import { KeywordService } from '../services/keyword.service';
import { Presentein } from '../model/presentein';
import { AutoreService } from '../services/autore.service';
import { Autore } from '../model/autore';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {

  detail: Articolo;
  kws: Keyword[] = [];
  urls: Presentein[] = [];
  autori: Autore[] = [];
  riferimenti: Articolo[] = [];

  constructor(private route: ActivatedRoute,
              private artService: ArticoloService,
              private kwService: KeywordService,
              private autService: AutoreService) { 
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.artService.getById(params.id).subscribe(data => {
        this.detail = data[0];
      });
      this.kwService.getByidart(params.id).subscribe(list => {
        this.kws = list;
      });
      this.artService.getlinks(params.id).subscribe(list => {
        this.urls = list;
      });
      this.autService.getByIdart(params.id).subscribe(list => {
        this.autori = list;
      });
      this.artService.getrefs(params.id).subscribe(list => {
        this.riferimenti = list;
      });
    })
  }

  ngOnInit() {
  }

}
