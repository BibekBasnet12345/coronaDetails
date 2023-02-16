
document.addEventListener('DOMContentLoaded',()=>{

    var jsondata = [{
        "Categories": "['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
      }, {
        "SeiresName": "Total Death",
        "Data": "[48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]"
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