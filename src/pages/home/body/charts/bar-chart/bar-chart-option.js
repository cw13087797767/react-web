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
            formatter:function (a,b,c) {
                return`时间：${a[0].axisValue}月<br/>收益：${a[0].value}${util}`
            }
            
         },
         dataZoom: [{
             show: true,
             type: 'slider',
             borderColor : 'transparent',
             fillerColor: '#03F6FB',
             start: 60,
             end: 100,
             showDetail: false,
             handleSize: '80%',
             handleIcon: `
                    M 100, 100
                    m -75,0
                    a 75,75 0 1,0 150,0
                    a 75,75 0 1,0 -150,0`,
             handleStyle: {
                 color: '#03F6FB',
             },
             height: 10,
             bottom: 5,
         }],
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
            type: 'bar',
            name:'收益',
            data: data.y,
            itemStyle:{
                color:'#03F6FB',
                barBorderRadius:5,
            },
            label:{
                show:true,
                position:'top',
                color:'#eaeaea'
            },
            barWidth:10
        }]
     }
     return option
 }

 module.exports = {
     setOption
 }