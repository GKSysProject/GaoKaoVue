<template>
    <div class="university-details" v-if="university">
      <h1>{{ university.name }}</h1>
      <img :src="university.logo" alt="校徽" />
      <p>{{ university.description }}</p>
      <h2>专业</h2>
      <ul>
        <li v-for="major in university.majors" :key="major.name">
          {{ major.name }} - 录取分数线: {{ major.admissionScore }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        university: null,
      };
    },
    created() {
      this.fetchUniversityDetails();
    },
    methods: {
      async fetchUniversityDetails(schoolName) {
        try {
          const response = await fetch(`${this.$config.serverUrl}/api/university-details?name=${schoolName}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.university = await response.json();
        } catch (error) {
          console.error('Error fetching university details:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .university-details {
    text-align: center;
  }
  .university-details img {
    width: 100px;
    height: 100px;
  }
  </style>
  