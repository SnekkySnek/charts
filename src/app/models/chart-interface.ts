export interface ChartModel {
    chart: { type: String };
    title: { text: String };
    credits: { enabled: Boolean}
    legend: Object;
    tooltip: Object;
    xAxis: Object;
    yAxis: Object;
    plotOptions: Object;    
    series: Array<any>;
}

