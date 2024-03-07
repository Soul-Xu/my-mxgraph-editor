import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import './index.less'

const HostInfo = () => {
  useEffect(() => {
    // 在 useEffect 中初始化 ECharts 实例
    const chart = echarts.init(document.getElementById('cpuChart'));

    // 配置图表选项
    const option = {
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 23, 19],
          type: 'line',
          smooth: true
        }
      ]
    };

    // 设置图表配置项
    chart.setOption(option);

    // 在组件销毁时销毁图表
    return () => {
      chart.dispose();
    };
  }, []);

  useEffect(() => {
    // 在 useEffect 中初始化 ECharts 实例
    const chart = echarts.init(document.getElementById('memoryChart'));

    // 配置图表选项
    const option = {
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 23, 19],
          type: 'line',
          areaStyle: {}
        },
      ]
    };    

    // 设置图表配置项
    chart.setOption(option);

    // 在组件销毁时销毁图表
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className='host-container'>
      <div className='header'>
        <div className='header-title'>
          主机详情
        </div>
      </div>
      <div className='info-box'>
        <div className='info-title'>
          <div className='info-title-icon'></div>
          <div className='info-title-text'>
            主机概要信息
          </div>
        </div>
        <div className='info-content'>
          <div className='info-content-item'>
            <div className='content-item-key'>主机名</div>
            <div className='content-item-value'>ggwy_app</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key'>IP</div>
            <div className='content-item-value'>10.10.10.1</div>
          </div>
          <div className='info-content-item'>
            <div className='content-item-key' style={{ height: '28px', lineHeight: '28px', color: '#333333' }}>最近变更数(个)</div>
            <div className='content-item-value' style={{ color: '#E62828' }}>3</div>
          </div>
        </div>
      </div>
      <div className='info-box' style={{ marginTop: '-32px' }}>
        <div className='info-title'>
          <div className='info-title-icon'></div>
          <div className='info-title-text'>
            关键指标
          </div>
        </div>
        <div className='info-graph'>
          <div className='info-graph-title'>
            CPU
          </div>
          <div id="cpuChart" style={{ width: '350px', height: '250px' }}></div>
        </div>
        <div className='info-graph' style={{ marginTOp: '-50px' }}>
          <div className='info-graph-title'>
            内存
          </div>
          <div id="memoryChart" style={{ width: '350px', height: '250px' }}></div>
        </div>
      </div>
    </div>
  )
}

export default HostInfo;