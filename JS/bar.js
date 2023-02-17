
document.addEventListener('DOMContentLoaded',()=>{

    var jsondata = [{
        "Categories": "['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
      }, {
        "SeiresName": "corona total cases ",
        "Data": "[9776,  88949, 872799, 6035242, 19900177,	39194882, 80052648,	174598008, 336071079, 456064183, 672189541,	834150040]"
      }, {
        "SeiresName": "Total Recovery",
        "Data": "[222,  46796, 178901, 1944850, 8549323, 21431446, 43199558, 107704148, 	233514398, 	313292830, 	447753320,	566308211]"
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
      Highcharts.chart('container', {
        chart: {
          type: 'column'
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