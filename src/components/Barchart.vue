<template>
<div>
      <div id="chart">
        <apexchart type="bar" height="430" :options="chartOptions" :series="series"></apexchart>
      </div>
         <h3>Bar chart representation</h3>
</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'Barchart',
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
    series: [{
      data: [44, 55, 41, 64, 22, 43, 21],
    }, {
      data: [53, 32, 33, 52, 13, 44, 32],
    }],
    chartOptions: {
      chart: {
        type: 'bar',
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
$background:  #f1f1f1;
#chart{
   background: $background;
}
h3{
  padding-top: 20px;
  color:  #c6538c;
  text-align: center;
  font-weight: bold;
  padding-bottom: 70px;
}
</style>
