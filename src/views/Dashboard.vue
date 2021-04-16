<template>
    <div class="chart">
      <h1>Graphical representation of the users details....</h1>
      <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
      <h3>Line chart representation</h3>
      <div class="barchart">
      <Barchart/>
      </div>
    </div>
</template>

<script>
import Barchart from '@/components/Barchart.vue';
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'Dashboard',
  components: {
    Barchart,
    apexchart: VueApexCharts,
  },
  data: () => ({
    series: [{
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    }],
    chartOptions: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
$background:  #f1f1f1;
h1{
  padding-top: 150px;
  color:  #c6538c;
  text-align: center;
  font-weight: bold;
  padding-bottom: 50px;
}
h3{
  padding-top: 20px;
  color:  #c6538c;
  text-align: center;
  font-weight: bold;
  padding-bottom: 20px;
}
.chart{
  width: 60%;
  margin-left: 250px;
}
#chart{
    background: $background;
}
</style>
