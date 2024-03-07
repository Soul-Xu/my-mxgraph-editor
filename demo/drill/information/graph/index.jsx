import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const SimpleLineChart = () => {
  useEffect(() => {
    // 在 useEffect 中初始化 ECharts 实例
    const chart = echarts.init(document.getElementById('lineChart'));

    // 配置图表选项
    const option = {
      title: {
        text: ''
      },
      xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };

    // 设置图表配置项
    chart.setOption(option);

    // 在组件销毁时销毁图表
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="lineChart" style={{ width: '300px', height: '300px', marginTop: '-40px' }} />
  );
};

export default SimpleLineChart;
