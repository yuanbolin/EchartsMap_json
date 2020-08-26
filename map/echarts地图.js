  initalECharts = (data = []) => {
    // console.log(data)
    echarts.registerMap("liaocheng", geoJson);
    const myChart = echarts.init(this.ref);
    let coordsList = [];
    for (let i = 0; i < arr.length; i++) {
      coordsList.push({
        coords: arr[i],
        lineStyle: {
          color: "#fff",
        },
      });
    }
    myChart.setOption({
      tooltip: {
        trigger: "item",
      },
      geo: {
        roam: true, // 缩放拖动
        zoom: 1.2, //初始放大比例
        map: "liaocheng", // 自定义扩展图表类型 用于选择省份
        label: {
          show: true, // 显示标签
          // formatter: '{b}网点数:{c}'
        },
        itemStyle: {
          normal: {
            borderWidth: 5, //区域边框宽度
            borderColor: "#0298fc", //区域边框颜色
            areaColor: "#001d92", //区域颜色
            label: { show: true },
          },
          emphasis: {
            show: false, //选中效果
            borderWidth: 5, //区域边框宽度
            borderColor: "#0298fc", //区域边框颜色
            areaColor: "#001d92", //区域颜色
          },
        },
      },
      series: [
        {
          name: "消防车",
          type: "scatter",
          coordinateSystem: "geo",
          data: [
            {
              name: "测试",
              value: [115.80053329467772, 36.088228136087196],
            },
            {
              name: "测试",
              value: [115.79813003540039, 36.10237644873644],
            },
            {
              name: "测试",
              value: [115.76860427856445, 36.12012758978146],
            },
            {
              name: "测试",
              value: [115.77272415161133, 36.145776445186726],
            },
            {
              name: "测试",
              value: [115.81134796142578, 36.11929559467167],
            },
            {
              name: "测试",
              value: [115.85014343261719, 36.20716097553515],
            },
            {
              name: "测试",
              value: [115.82199096679688, 36.049098959065645],
            },
          ],
          symbol: `image://${xiaofangche}`,
          symbolSize: 10,
          label: {
            normal: {
              formatter: "{b}",
              position: "bottom",
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          // tooltip: {
          //   show: true, //不显示提示标签
          //   formatter: "{b}", //提示标签格式
          //   backgroundColor: "#fff", //提示标签背景颜色
          //   borderColor: "#ccc",
          //   borderWidth: 5,
          //   textStyle: { color: "#000" } //提示标签字体颜色
          // },
          itemStyle: {
            normal: {
              color: "black",
            },
          },
        },
        {
          name: "水源",
          type: "scatter",
          coordinateSystem: "geo",
          data: [
            {
              name: "测试",
              value: [115.772766, 36.115155],
            },
            {
              name: "测试",
              value: [115.71916580200195, 36.10404078863735],
            },
            {
              name: "测试",
              value: [115.86919784545898, 36.12983354794379],
            },
            {
              name: "测试",
              value: [115.7419967651367, 36.10001857352145],
            },
            {
              name: "测试",
              value: [115.92704772949219, 36.25700913637393],
            },
            {
              name: "测试",
              value: [116.04772567749022, 36.24503463167856],
            },
            {
              name: "测试",
              value: [115.89065551757811, 36.27085020723902],
            },
          ],
          symbol: `image://${shuiyuan}`,
          symbolSize: [10, 15],
          label: {
            normal: {
              formatter: "{b}",
              position: "bottom",
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          // tooltip: {
          //   show: true, //不显示提示标签
          //   formatter: "{b}", //提示标签格式
          //   backgroundColor: "#fff", //提示标签背景颜色
          //   borderColor: "#ccc",
          //   borderWidth: 5,
          //   textStyle: { color: "#000" } //提示标签字体颜色
          // },
          itemStyle: {
            normal: {
              color: "black",
            },
          },
        },
        {
          name: "消防队",
          type: "scatter",
          coordinateSystem: "geo",
          data: [
            {
              name: "测试",
              value: [115.812248, 36.134012],
            },
            {
              name: "测试",
              value: [115.75641632080077, 36.11541283425664],
            },
            {
              name: "测试",
              value: [115.79795837402342, 36.10695329862145],
            },
            {
              name: "测试",
              value: [115.76826095581053, 36.11887959381067],
            },
            {
              name: "测试",
              value: [115.8120346069336, 36.1235941411731],
            },
            {
              name: "测试",
              value: [115.78697204589844, 36.145915064868454],
            },
            {
              name: "测试",
              value: [115.78697204589844, 36.145915064868454],
            },
            {
              name: "测试",
              value: [115.95588684082033, 36.25756282630298],
            },
            {
              name: "测试",
              value: [115.8940887451172, 36.28192129773192],
            },
          ],
          symbol: `image://${xiaofangdui}`,
          symbolSize: 10,
          label: {
            normal: {
              formatter: "{b}",
              position: "bottom",
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          // tooltip: {
          //   show: true, //不显示提示标签
          //   formatter: "{b}", //提示标签格式
          //   backgroundColor: "#fff", //提示标签背景颜色
          //   borderColor: "#ccc",
          //   borderWidth: 5,
          //   textStyle: { color: "#000" } //提示标签字体颜色
          // },
          itemStyle: {
            normal: {
              color: "black",
            },
          },
        },
        {
          geoIndex: 0,
          type: "map",
          tooltip: {
            trigger: "none",
          },
        },
        {
          name: "测试路线",
          type: "lines",
          tooltip: {
            show: false,
          },
          coordinateSystem: "geo",
          data: coordsList,
          polyline: true,
          lineStyle: {
            color: "purple",
            opacity: 0.6,
            width: 1,
          },
        },
      ],
    });
  };