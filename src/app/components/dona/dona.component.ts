import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  constructor() { }
  @Input() titulo: string = 'Sin titulo';

  doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  dataGraficos = { data: [350, 450, 100] };
  
  @Input() public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      this.dataGraficos
    ],

  };
  public doughnutChartType: ChartType = 'doughnut';

}
