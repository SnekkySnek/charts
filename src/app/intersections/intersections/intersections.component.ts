import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { ChartModel } from '../../models/chart-interface';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-intersections',
  templateUrl: './intersections.component.html',
  styleUrls: ['./intersections.component.css']
})
export class IntersectionsComponent implements OnInit {
  private Highcharts = Highcharts
  private chartConstructor: String = ''
  private chartOptions: ChartModel;



  constructor(private appService: AppService) {


  }

  ngOnInit() {

    this.getData()
  }



  private getData(): void {
    let categoriesArray = []
    let seriesDataArray = []

    const groupByStreets = (data): Object => {
      const streetObj = {}
      data.map(streetInfo => {
        streetObj[streetInfo['primary_street'] + ' at ' + streetInfo['cross_street']] = streetInfo;
      })
      console.log('streetObj', streetObj);

      return streetObj
    };

    const formatDates = (data): void => {
      const dateOptions = { month: '2-digit', day: '2-digit', year: '2-digit' }
      Object.keys(data).map(streetInfo => {
        let dates = new Date(data[streetInfo]['count_date']).toLocaleDateString('en-US', dateOptions)
        data[streetInfo]['count_date'] = dates


      })
    };

    const groupByDate = (data): Object => {
      const dateObj = {};
      Object.keys(data).map(streetName => {
        dateObj[data[streetName]['count_date']] = {
          name: streetName,
          data: data[streetName]
        }
      })
      return dateObj
    }

    const createCategories = (data): Array<String> => {
      const categoriesArray = []

      Object.keys(data).map(keys => {
        categoriesArray.push(keys)
      })

      return categoriesArray
    }

    const createSeriesDataArray = (data): Array<Object> => {
      const seriesDataArray = []
      Object.keys(data).map(streetData => {
        seriesDataArray.push({
          name: data[streetData]['name'],
          data: parseInt(data[streetData]['data']['total'])
        })
      })

      return seriesDataArray
    }

    this.appService.getData().subscribe(data => {
      let streetInfo = groupByStreets(data);
      formatDates(streetInfo);
      streetInfo = groupByDate(streetInfo);
      categoriesArray = createCategories(streetInfo)
      seriesDataArray = createSeriesDataArray(streetInfo);
      console.log('streetInfo', streetInfo);
      console.log('seriesDataArrray', seriesDataArray);

      this.createChart([], seriesDataArray)




    });

  }

  private createChart(categories: Array<any> = [], seriesData: Array<any> = []): void {
    this.Highcharts = Highcharts
    this.chartConstructor = 'chart'
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Average fruit consumption during one week'
      },
      legend: {
        enabled: true
      },
      xAxis: {
        categories: categories,
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
        column: {
          fillOpacity: 0.5,
          stacking: 'normal'
        }
      },
      series: seriesData

    }

    console.log('this.chartOptions', this.chartOptions);

  }




}