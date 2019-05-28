import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizzazioneService } from '../services/organizzazione.service';
import { Organizzazione } from '../model/organizzazione';
import { Autore } from '../model/autore';
import { AutoreService } from '../services/autore.service';
import { ArticoloService } from '../services/articolo.service';
import { Articolo } from '../model/articolo';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})
export class AutoreComponent implements OnInit {

  autore: Autore = {};
  affiliazioni: Organizzazione[] = [];
  coaut: Autore[] = [];
  top5_coaut: Autore[] = [];
  articoli: Articolo[] = [];
  articoli_line: Articolo[] = [];
  lineChartAnno: Label[] = [];
  lineChartCount: ChartDataSets[] = [
    {data: [0, 1], label: 'Numero di articoli'}
  ];
  lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(240,240,240,1)',
          drawOnChartArea: true,
          display: true,
          drawBorder: false,
        },
      }],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(240,240,240,1)',
            drawOnChartArea: true,
            display: true,
            drawBorder: false,
          }
        }
      ]
    },
  };

  constructor(private route: ActivatedRoute,
              private autService: AutoreService,
              private artService: ArticoloService,
              private orgService: OrganizzazioneService) {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.autService.getById(params.id).subscribe(data => {
        this.autore = data[0];
        console.log(this.autore);
      });
      this.orgService.getByIdaut(params.id).subscribe(list => {
        this.affiliazioni = list;
      });
      this.autService.getcoautore(params.id).subscribe(list => {
        this.coaut = list;
      });
      this.artService.getbyidaut(params.id).subscribe(list => {
        this.articoli = list;
      });
      this.artService.getCountArtByautId(params.id).subscribe(list => {
        this.articoli_line = list;
        let data = this.lineChartCount[0].data as number[];
        this.lineChartAnno = [];
        data.length = 0;
        this.articoli_line.forEach(x => {
          this.lineChartAnno.push(x.AnnoPubblicazione.toString());
          data.push(x.num_art);
        });
      });
      this.autService.gettop5coaut(params.id).subscribe(list => {
        this.top5_coaut = list;
      });
    })
   }

  ngOnInit() {
  }

}
