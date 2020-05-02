function setOption(data, util) {
    let option = {
        grid: {
            left: '3%',
            right: '4%',
            bottom: '20',
            top: '40',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['来电数量', '建单数量'],
            right:10,
            textStyle:{
                color:'#eaeaea'
            }
        },
        xAxis: {
           type: 'category',
           data: data.x,
           axisLine:{
               show:true,
               lineStyle:{
                   color:'#23adbb80'
               }
           },
           axisTick:{
               show:false,
           },
           axisLabel: {
               color:'#eaeaea'
           },
           
       },
       yAxis: {
           type: 'value',
           name:util,
           nameTextStyle:{
               color:'#eaeaea'
           },
           axisLine:{
               show:false,
           },
           axisTick:{
               show:false
           },
           axisLabel: {
               color:'#eaeaea'
           },
           splitLine:{
               lineStyle:{
                   color:'#23adbb80'
               }
           }
       },
       series: [{
           type: 'line',
           name:'来电数量',
           data: data.y[0],
           smooth:true,
           itemStyle:{
               color:'rgba(28, 142, 241, 1)',
           },
           areaStyle:{
               color:{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(11,199,229,0.3)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgb(29,130,229)' // 100% 处的颜色
                    }],
               }
           }
       },{
        type: 'line',
        name:'建单数量',
        data: data.y[1],
        smooth:true,
        itemStyle:{
            color:'rgba(28, 142, 241, 1)',
        },
        areaStyle:{
            color:{
                 type: 'linear',
                 x: 0,
                 y: 0,
                 x2: 0,
                 y2: 1,
                 colorStops: [{
                    offset: 0, color: 'rgba(11,199,229,0.3)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgb(29,130,229)' // 100% 处的颜色
                }],
            }
        }
    }]
    }
    return option
}

module.exports = {
    setOption
}