import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ArticoloService } from '../services/articolo.service';
import { Articolo } from '../model/articolo';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { AutoreService } from '../services/autore.service';
import { Keyword } from '../model/keyword';
import { KeywordService } from '../services/keyword.service';

@Component({
  selector: 'app-lista-articoli',
  templateUrl: './lista-articoli.component.html',
  styleUrls: ['./lista-articoli.component.css']
})
export class ListaArticoliComponent implements OnInit {

  kwsel: number;
  art_list: Articolo[] = [];
  articoli_line: Articolo[] = [];
  articoli_pie: Articolo[] = [];
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

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top'
    },
  };
  public pieChartRepo: Label[] = [];
  public pieChartCount: number[] = [300, 500, 100, 15];
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(219,56,17,1)',
        'rgba(254,153,0,1)',
        'rgba(69,132,237,1)',
        'rgba(56,142,60,1)',
        'rgba(244,143,177,1)',
        'rgba(255,112,67,1)',
        'rgba(244,67,54,1)',
        'rgba(121,85,72,1)',
        'rgba(79,195,247,1)',
        'rgba(255,235,59,1)'
      ],
    },
  ];
  avgref: number;
  avgcoaut: number;
  top5kw: Keyword[] = [];
  filtro: Articolo = { Titolo: ''};

  constructor(private router: Router,
              private artService: ArticoloService,
              private autService: AutoreService,
              private kwService: KeywordService) {
   }

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
      this.artService.getAll().subscribe(list => {
        this.art_list = list;
      }, error => {
        console.log(error);
      });
      this.artService.getAllArtPerAnno().subscribe(list => {
        this.articoli_line = list;
        let data = this.lineChartCount[0].data as number[];
        data.length = 0;
        this.articoli_line.forEach(x => {
          this.lineChartAnno.push(x.AnnoPubblicazione.toString());
          data.push(x.num_art);
        });
      });

      this.artService.getAllArtPerRepo().subscribe(list => {
        this.articoli_pie = list;
        this.pieChartRepo.length = 0;
        this.pieChartCount.length = 0;
        this.articoli_pie.forEach(x => {
          this.pieChartRepo.push(x.Nome);
          this.pieChartCount.push(x.num_art);
        });
      });

      this.artService.getAllAvgRefs().subscribe(data => {
        let num = data[0].num_cit_medio;
        let inv = 1/num; 
        this.avgref = Math.round(inv);
      });
      this.autService.getAllavgcoautore().subscribe(data => {
        this.avgcoaut = Math.round(data[0].num_medio);
      });
      this.kwService.getAlltop5KW().subscribe(list => {
        this.top5kw = list;
      });
    } else {
      this.artService.getByKW(this.kwsel).subscribe(list => {
        this.art_list = list;
      }, error => {
        console.log(error);
      });
      this.artService.getArtPerAnnobyKW(this.kwsel).subscribe(list => {
        this.articoli_line = list;
        let data = this.lineChartCount[0].data as number[];
        data.length = 0;
        this.articoli_line.forEach(x => {
          this.lineChartAnno.push(x.AnnoPubblicazione.toString());
          data.push(x.num_art);
        });
      });

      this.artService.getArtPerRepobyKW(this.kwsel).subscribe(list => {
        this.articoli_pie = list;
        this.pieChartRepo.length = 0;
        this.pieChartCount.length = 0;
        this.articoli_pie.forEach(x => {
          this.pieChartRepo.push(x.Nome);
          this.pieChartCount.push(x.num_art);
        });
      });

      this.artService.getAvgRefsbyKW(this.kwsel).subscribe(data => {
        if (data[0].num_cit_medio == null) {
          this.avgref = 0; 
        } else {
          let num = data[0].num_cit_medio.parseFloat();
          let inv = 1/num; 
          this.avgref = Math.round(inv); 
        }
      });
      this.autService.getavgcoautorebykwid(this.kwsel).subscribe(data => {
        this.avgcoaut = Math.round(data[0].num_medio);
      });
      
      this.kwService.gettop5KWbyidKW(this.kwsel).subscribe(list => {
        this.top5kw = list;
      });
    }
  }

  

}
