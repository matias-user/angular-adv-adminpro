import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  
  doughnutChartData1: ChartData<'doughnut'> = {
    labels: [ 'Galletas', 'Bebidas', 'Ensaladas' ],
    datasets: [
      { data: [600, 450, 100] }
    ],
  };
  doughnutChartData2: ChartData<'doughnut'> = {
    labels: [ 'Chips', 'Harina', 'Azucar' ],
    datasets: [
      { data: [ 400, 1000, 800] }
    ],
  };
  doughnutChartData3: ChartData<'doughnut'> = {
    labels: [ 'Galletas', 'Bebidas', 'Ensaladas' ],
    datasets: [
      { data: [600, 450, 100] }
    ],
  };
  doughnutChartData4: ChartData<'doughnut'> = {
    labels: [ 'Galletas', 'Bebidas', 'Ensaladas' ],
    datasets: [
      { data: [600, 450, 100] }
    ],
  };
}
