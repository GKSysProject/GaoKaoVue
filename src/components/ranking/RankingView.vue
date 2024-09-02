<template>
  <div class="main">
    <div class="main-table">
      <div class="select-wrapper">
        <select v-model="selectedChart" @change="onChartSelected" class="custom-select">
          <option value="scoreDistribution">一分一段表</option>
          <option value="admissionPlan">招生计划表</option>
        </select>
      </div>
      <div ref="chart" style="width: 600px; height: 400px"></div>
      <!-- Use the AppNavigation component -->
      <AppNavigation @yearSelected="onYearSelected" />
      <SchoolMap />
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import AppNavigation from "./AppNavigation.vue";
import SchoolMap from "../SchoolMap.vue";

export default {
  components: {
    AppNavigation,
    SchoolMap
  },
  data() {
    return {
      chart: null,
      selectedChart: 'scoreDistribution', // Default chart
    };
  },
  mounted() {
    this.initChart();
    this.fetchChartData(2020);
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart);
    },
    async fetchChartData(year) {
        try {
        const response = await fetch(`http://localhost:8080/api/year?y=${year}`);
        const data = await response.json();
        this.updateChart(data);
        }
        catch (error) {
        console.error("Error fetching data:", error);
        }
    },
    updateChart(data) {
    var  result = data.data;
    var xAxis = [];
    var value = [];
    var series = [];
    for(var i = 0;i < result.length;i++){
      xAxis.push(result[i].xaxis);
      value.push(result[i].value);
      series.push(result[i].series);
    }
       const option = {
        title: {
          text: this.selectedChart === 'scoreDistribution' ? "历年高考一分一段表" : "招生计划表",
        },
        xAxis: {
          type: "category",
          data: xAxis,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: result,
            type: "line",
          },
        ],
        tooltip:{
          trigger:"axis",
          axisPointer:{
            type:"line"
          },
          formatter(params){
            console.log(params);
              return "分数: " + params[0].data.xaxis + 
              "<br/>本段人数: " + params[0].data.value +
              "<br/>排名: " + params[0].data.series;
          }
        }
      };
      this.chart.setOption(option);
    },
    onYearSelected(year) {
      this.fetchChartData(year);
    },
    onChartSelected() {
      this.fetchChartData(new Date().getFullYear()); // Fetch data for the current year
    },
  },
};
</script>

  
  <style scoped>
  .main {
    position: relative;
    margin-top: 150px;
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 70%;
    min-height: 400px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    overflow: hidden; 
  }
  
  .main-table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 600px;
    width: 80%;
    min-height: 400px;
    border-radius: 5px; 
    overflow: hidden; 
    background-color: #ffffff; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    box-sizing: border-box;
    padding: 10px;
  }
  .main-table > img {
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
  .main-stu {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px; 
    background-color: #fafafa; 
    border-left: 1px solid #ddd; 
  }
  .main-stu span {
    margin: 0;
    font-size: 16px; 
    color: #333; 
  }
  .main-stu h2 {
    margin-bottom: 10px;
    font-size: 20px; 
    color: #007bff;
  }

  .select-wrapper {
  position: relative;
  display: inline-block;
}

.custom-select {
  appearance: none;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.custom-select:focus {
  border-color: #66afe9;
  outline: none;
  box-shadow: 0 0 5px rgba(102, 175, 233, 0.6);
}

.custom-select::after {
  content: '▼';
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
}
  </style>
  