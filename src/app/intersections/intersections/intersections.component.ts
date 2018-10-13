import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ChartModel } from '../../models/chart-interface';

@Component({
  selector: 'app-intersections',
  templateUrl: './intersections.component.html',
  styleUrls: ['./intersections.component.css']
})
export class IntersectionsComponent implements OnInit {
  private Highcharts = Highcharts;
  private chartConstructor:String = 'chart';
  private chartOptions:ChartModel;

  

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type:'areaspline'
      },
      title:{
        text: 'Chartz'
      },

      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      xAxis: {
        categories: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ],
        plotBands: [{ // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)'
        }]
      },
      yAxis: {
        title: {
            text: 'Fruit units'
        }
      },
      tooltip: {
        shared: true,
        valueSuffix: ' units'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
      },
      series: [{
        name: 'John',
        data: [3, 4, 3, 5, 4, 10, 12]
      }, {
        name: 'Jane',
        data: [1, 3, 4, 3, 3, 5, 4]
      }]
    }
  }

  
  // getData(){
  //   this.appService.getData().subscribe(data =>{
  //     console.log(data)
  //     });
  // }





}
