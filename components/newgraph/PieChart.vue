<script>
import { Pie } from 'vue-chartjs'
import titanic from './csvjson.json'

export default {
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        // labels: [],
        datasets: [
          {
            borderWidth: 1,
            borderColor: [
              '#FFF1C9',
              '#F7B7A3',
              '#EA5F89',
              '#9B3192',
              '#2B0B3F'
            ],
            backgroundColor: [
              '#FFF1C9',
              '#F7B7A3',
              '#EA5F89',
              '#9B3192',
              '#2B0B3F'
            ],
            data: [10, 29, 7, 29, 50]
            // data: []
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
  // created() {
  //   for(let i=0; i<titanic.length; i++) {
  //     this.chartData.labels.push(titanic[i].Age)
  //     this.chartData.datasets[0].data.push(titanic[i].Survived)
  //   } 
  // }
}
</script>
