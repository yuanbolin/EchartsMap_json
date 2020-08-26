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
        roam: true, // �����϶�
        zoom: 1.2, //��ʼ�Ŵ����
        map: "liaocheng", // �Զ�����չͼ������ ����ѡ��ʡ��
        label: {
          show: true, // ��ʾ��ǩ
          // formatter: '{b}������:{c}'
        },
        itemStyle: {
          normal: {
            borderWidth: 5, //����߿���
            borderColor: "#0298fc", //����߿���ɫ
            areaColor: "#001d92", //������ɫ
            label: { show: true },
          },
          emphasis: {
            show: false, //ѡ��Ч��
            borderWidth: 5, //����߿���
            borderColor: "#0298fc", //����߿���ɫ
            areaColor: "#001d92", //������ɫ
          },
        },
      },
      series: [
        {
          name: "������",
          type: "scatter",
          coordinateSystem: "geo",
          data: [
            {
              name: "����",
              value: [115.80053329467772, 36.088228136087196],
            },
            {
              name: "����",
              value: [115.79813003540039, 36.10237644873644],
            },
            {
              name: "����",
              value: [115.76860427856445, 36.12012758978146],
            },
            {
              name: "����",
              value: [115.77272415161133, 36.145776445186726],
            },
            {
              name: "����",
              value: [115.81134796142578, 36.11929559467167],
            },
            {
              name: "����",
              value: [115.85014343261719, 36.20716097553515],
            },
            {
              name: "����",
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
          //   show: true, //����ʾ��ʾ��ǩ
          //   formatter: "{b}", //��ʾ��ǩ��ʽ
          //   backgroundColor: "#fff", //��ʾ��ǩ������ɫ
          //   borderColor: "#ccc",
          //   borderWidth: 5,
          //   textStyle: { color: "#000" } //��ʾ��ǩ������ɫ
          // },
          itemStyle: {
            normal: {
              color: "black",
            },
          },
        },
        {
          name: "ˮԴ",
          type: "scatter",
          coordinateSystem: "geo",
          data: [
            {
              name: "����",
              value: [115.772766, 36.115155],
            },
            {
              name: "����",
              value: [115.71916580200195, 36.10404078863735],
            },
            {
              name: "����",
              value: [115.86919784545898, 36.12983354794379],
            },
            {
              name: "����",
              value: [115.7419967651367, 36.10001857352145],
            },
            {
              name: "����",
              value: [115.92704772949219, 36.25700913637393],
            },
            {
              name: "����",
              value: [116.04772567749022, 36.24503463167856],
            },
            {
              name: "����",
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
          //   show: true, //����ʾ��ʾ��ǩ
          //   formatter: "{b}", //��ʾ��ǩ��ʽ
          //   backgroundColor: "#fff", //��ʾ��ǩ������ɫ
          //   borderColor: "#ccc",
          //   borderWidth: 5,
          //   textStyle: { color: "#000" } //��ʾ��ǩ������ɫ
          // },
          itemStyle: {
            normal: {
              color: "black",
            },
          },
        },
        {
          name: "������",
          type: "scatter",
          coordinateSystem: "geo",
          data: [
            {
              name: "����",
              value: [115.812248, 36.134012],
            },
            {
              name: "����",
              value: [115.75641632080077, 36.11541283425664],
            },
            {
              name: "����",
              value: [115.79795837402342, 36.10695329862145],
            },
            {
              name: "����",
              value: [115.76826095581053, 36.11887959381067],
            },
            {
              name: "����",
              value: [115.8120346069336, 36.1235941411731],
            },
            {
              name: "����",
              value: [115.78697204589844, 36.145915064868454],
            },
            {
              name: "����",
              value: [115.78697204589844, 36.145915064868454],
            },
            {
              name: "����",
              value: [115.95588684082033, 36.25756282630298],
            },
            {
              name: "����",
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
          //   show: true, //����ʾ��ʾ��ǩ
          //   formatter: "{b}", //��ʾ��ǩ��ʽ
          //   backgroundColor: "#fff", //��ʾ��ǩ������ɫ
          //   borderColor: "#ccc",
          //   borderWidth: 5,
          //   textStyle: { color: "#000" } //��ʾ��ǩ������ɫ
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
          name: "����·��",
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