<template>
  <div class="example-charts-page">
    <NavBar />
    <div class="charts-content">
      <div class="chart-wrap trend-wrap">
        <v-chart
          :option="optionTrend"
          :autoresize="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import buildEchartOption, { echartsSizeTrans } from '@utils/echart-option';
import NavBar from '@components/NavBar.vue';

export default {
  setup() {
    const chartTrendData = ref(
      [
        ['category', 'Q1'],
        ['01', 20],
        ['02', 25],
        ['03', 21],
        ['04', 28],
        ['05', 32],
      ]
    );
    const optionTrend = computed(() => {
      return buildEchartOption(
        {
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
          tooltip: {
            show: false,
            trigger: 'item',
          },
          dataset: {
            source: chartTrendData.value,
          },
          xAxis: {
            type: 'category',
            show: false,
            boundaryGap: false,
          },
          yAxis: {
            boundaryGap: false,
          },
          series: [
            {
              type: 'line',
              name: '库存金额',
              smooth: 0.5,
            },
          ],
        },
      );
    });
    return {
      optionTrend,
    };
  },
  components: {
    NavBar,
  }
}
</script>

<style lang="less" scoped>
  .example-charts-page {
    height: 100%;
    .charts-content {
      height: calc(~"100% - 132px");
      .chart-wrap {
        height: 200px;
        background: #FFFFFF;
      }
    }
  }
</style>