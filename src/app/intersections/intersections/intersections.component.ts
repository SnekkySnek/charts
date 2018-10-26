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
  private Highcharts = Highcharts;
  private chartConstructor: String = '';
  private chartOptions: ChartModel;



  constructor(private appService: AppService) {


  }

  ngOnInit() {

    this.getData();
  }



  private getData(): void {
    let categoriesArray = [];
    let seriesDataArray = [];

    const groupByStreets = (data): Object => {
      const streetObj = {};
      data.map(streetInfo => {
        streetObj[streetInfo['primary_street'] + ' at ' + streetInfo['cross_street']] = streetInfo;
      });
      console.log('streetObj', streetObj);

      return streetObj;
    };

    const formatDates = (data): void => {
      const dateOptions = { month: '2-digit', day: '2-digit', year: '2-digit' }
      Object.keys(data).map(streetInfo => {
        const dates = new Date(data[streetInfo]['count_date']).toLocaleDateString('en-US', dateOptions)
        data[streetInfo]['count_date'] = dates;


      });
    };


    const createCategories = (data): Array<String> => {
      console.log('canaiohdeaw');

      const categoriesArr = [];

      Object.keys(data).map(keys => {
        categoriesArray.push(keys);
      });
      console.log(categoriesArr);


      return categoriesArr;
    };

    const createSeriesDataArray = (data): Array<Object> => {
      const seriesArray: Array<any> = [];
      Object.keys(data).map(streetData => {
        seriesArray.push(
          {
            name: streetData,
            // tslint:disable-next-line:max-line-length
            data: [parseInt(data[streetData]['n_b'], 10), parseInt(data[streetData]['s_b'], 10), parseInt(data[streetData]['e_b'], 10), parseInt(data[streetData]['w_b'], 10)],
            stack: data[streetData]['type']

          });
      });

      return seriesArray;
    };

    this.appService.getIntersectionsData().subscribe(data => {
      const streetInfo = groupByStreets(data);
      formatDates(streetInfo);
      categoriesArray = createCategories(streetInfo);
      seriesDataArray = createSeriesDataArray(streetInfo);
      console.log('streetInfo', streetInfo);
      console.log('categories', categoriesArray);
      console.log('seriesDataArrray', seriesDataArray);

      this.createChart(categoriesArray, seriesDataArray.splice(0, 10));
    });
  }


  private createChart(categories: Array<any> = [], seriesData: Array<any> = []): void {
    this.Highcharts = Highcharts;
    this.chartConstructor = 'chart';
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
        categories: ['North Bound', 'South Bound', 'East Bound', 'West Bound'],
      },
      yAxis: {
        title: {
          text: 'Fruit units'
        }
      },
      tooltip: {
        shared: false,
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

    };

    console.log('this.chartOptions', this.chartOptions);
  }
}
