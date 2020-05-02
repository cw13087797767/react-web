function setOption(data,legendArr) {
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'auto',
            data: legendArr,
            bottom:20,
            orient:'horizontal',
            itemWidth:15,
            itemHeight:10,
            textStyle:{
                color:'#eaeaea'
            }
        },
        series: [
            {
                type: 'pie',
                radius: ['35%', '60%'],
                center:['50%','35%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '15',
                        // fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: dataColorFormatter(data)
            }
        ]
    };
    return option
}

function dataColorFormatter(arr){
    let colorArr = [
        '#1C7FE1',
        '#00FFFF',
        '#E4007F',
        '#E3B308',
        '#208E6B',
        '#3FB220',
        '#EA5151',
        '#2B22FD',
        '#D82BF5',
        '#ffffff',

    ]
    arr.map((item,index) => {
        item.itemStyle = {
            color:colorArr[index]
        }
    })
    return arr
}

module.exports = {
    setOption
}