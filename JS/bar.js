
document.addEventListener('DOMContentLoaded',()=>{

    var jsondata = [{
        "Categories": "['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
      }, {
        "SeiresName": "corona total cases ",
        "Data": "[49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]"
      }, {
        "SeiresName": "Total Recovery",
        "Data": "[83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]"
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
      Highcharts.chart('container', {
        chart: {
          type: 'column'
        },
        title: {
            text: 'Corona Details in Nepal , 2019-2020',
            align: 'center'
        },
    
        subtitle: {
            text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
            align: 'left'
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Y-Axis Title'
          }
        },
        legend: {
          reversed: true
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