import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { ChartModel } from '../../models/chart-interface';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-coding-violations',
  templateUrl: './coding-violations.component.html',
  styleUrls: ['./coding-violations.component.css']
})
export class CodingViolationsComponent implements OnInit {
  private Highcharts = Highcharts;
  private chartConstructor: String = '';
  private chartOptions: ChartModel;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getData();
  }


  private getData(): void {
    let categoriesArray = [];
    let seriesDataArray = [];

    const groupByStreets = (data): Object => {
      const streetObj = {};
      data.map(streetInfo => {
        streetObj[streetInfo['grp_description']] = [];
      });

      return streetObj;
    };

    const formatDates = (data): void => {
      const dateOptions = { month: '2-digit', day: '2-digit', year: '2-digit' };
      Object.keys(data).map(streetInfo => {
        const dates = new Date(data[streetInfo]['arst_date']).toLocaleDateString('en-US', dateOptions)
        data[streetInfo]['arst_date'] = dates;
      });
    };


    // const createCategories = (data): Array<String> => {
    //   const categoriesArr = [];

    //   Object.keys(data).map(keys => {
    //     categoriesArr.push(keys);
    //   });

    //   return categoriesArr;
    // };

    const createSeriesDataArray = (data, xArray): Array<Object> => {
      const seriesDataArr = [];



      Object.keys(data).map(streetName => {
        let x = 0;
        const tmpArr: Array<number> = new Array(xArray.length).fill(0);
        const index = xArray.indexOf(streetName);
        const age = parseInt(data[streetName]['age'], 10);
        console.log('age', age);


        switch (age !== NaN) {
          case age >= 18 || age <= 30:
            x++;
            tmpArr[0] = x;
            console.log('tmpArr', tmpArr);
            break;

          default:
            return null;
        }
        // const dataObj = {};
        //   seriesDataArr.push(
        //     {
        //       name: data[streetName]['area_planning_commission_apc'],
        //       data: [streetName, parseInt(data[streetName]['ladbs_inspection_district'], 10)],
        //     });
      });

      return seriesDataArr;
    };

    this.appService.getCodingViolationsData().subscribe(data => {
      const streetInfo = groupByStreets(data);
      formatDates(streetInfo);
      // categoriesArray = createCategories(streetInfo);
      categoriesArray = ['18-30', '31-50', '50+'];
      seriesDataArray = createSeriesDataArray(streetInfo, categoriesArray);
      console.log('streetInfo', streetInfo);
      console.log('categories', categoriesArray);
      console.log('seriesDataArrray', seriesDataArray);
      this.createChart([], seriesDataArray.splice(0, 10));
    });
  }


  private createChart(categories: Array<String> = [], seriesData: Array<Object> = []): void {
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
        categories: categories
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

        }
      },
      series: seriesData

    };

    console.log('this.chartOptions', this.chartOptions);

  }

}
