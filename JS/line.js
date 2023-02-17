
document.addEventListener('DOMContentLoaded',()=>{

    var jsondata = [{
        "Categories": "['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
      }, {
        "SeiresName": "Total Death",
        "Data": "[213,2994,41582,	374327,	730372,1098002,1789124,	3665821,	9240269,	11515227,	15444807,	18205584]"
   
           }]
      var categories = [];
      var seriesData = [];
      for (var i = 0; i < jsondata.length; i++) {
        if (jsondata[i].Categories) {
          categories =
           jsondata[i].Categories.replace(/\[|]|'/g, '').split(',')
        }
        if (jsondata[i].SeiresName) {
          seriesData.push({
            name: jsondata[i].SeiresName,
            data: JSON.parse(jsondata[i].Data)
          })
        }
      }
      Highcharts.chart('bargraph', {
        chart: {
          type: 'line'
        },
        title: {
            text: 'Corona Death in Nepal , 2019-2020',
            align: 'center'
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Numbers'
          }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: true
                },
                
            }
        },
        xAxis: {
          categories: categories
        },
        credits: {
          enabled: false
        },
        series: seriesData
      });
});