<template>
  <div>
    <VSubHeader header="Titanic Data" />

    <v-item-group active-class="secondary">
      <div class="mx-md-12">
        <v-row justify="center">
          <v-col cols="12" md="12" sm="6">
            <v-item>
              <v-card :ripple="false" class="pa-6">
                <div align="center" id="chartTest">
                  <h3>Age compared with Survived people</h3>
                  <line-chart />
                </div>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-item>
              <v-card :ripple="false" class="pa-6">
                <div align="center">
                  <h3>Age vs Survived</h3>
                  <pie-chart></pie-chart>
                </div>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-item>
              <v-card :ripple="false" class="pa-6">
                <div align="center">
                  <h3>Sex vs Survived</h3>
                  <PolarAreaChart />
                </div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </div>
    </v-item-group>
  </div>
</template>

<script>
/* eslint-disable no-console */
import LineChart from '@/components/newgraph/LineChart'
import PolarAreaChart from '@/components/newgraph/PolarAreaChart'
import DoughnutChart from '@/components/newgraph/DoughnutChart'
import PieChart from '@/components/newgraph/PieChart'

export default {
  components: {
    LineChart,
    PolarAreaChart,
    DoughnutChart,
    PieChart
  }
}
</script>

<style>
/* #chartTest {
  height: 80vh;
} */
</style>
