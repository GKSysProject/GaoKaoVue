<!-- src/components/SearchSchool.vue -->
<template>
    <div :style="{ zIndex: 1000, position: 'relative' }">
      <form id="search">
        <input id="content" type="text" autocomplete="off"
        placeholder="请输入学校名称"
        v-model="searchQuery"
        @keyup="context($event)">
        <button v-on:click="searchButton()">搜索</button>
      </form>
      <div class="suggestions" v-if="suggestions.length > 0">
      <div
        class="suggestion"
        v-for="(suggestion, index) in suggestions"
        :key="index"
        @click="selectSuggestion(suggestion)"
      >
        {{ suggestion }}
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SearchSchool',
    data() {
      return {
        searchQuery: null,
        suggestions: [],
        result: [],
      };
    },
    methods: {
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion;
      this.suggestions = [];
    },
    //搜索功能
    searchButton(){
      this.suggestions = [];
      this.$emit('search', this.result.data.data);
    },
    //搜索框输入时，显示提示框
    async context(event){
      this.suggestions = [];
      if(this.searchQuery != ''){
        const result = await axios.get("http://localhost:8080/search?q="+this.searchQuery);
        this.result = result;
        for(let i = 0; i < result.data.data.length; i++){
          if(i > 9) break;
          this.suggestions.push(result.data.data[i].schoolName);
        }
        if (event.keyCode === 13) {
        this.suggestions = [];
      }
      }else{
        this.suggestions = [];
           
           }
        }
        
    },
  };
  </script>
  
  <style scoped>
  .search-school {
    position: relative;
    text-align: center;
    width: 40%;
    left: 45%;
    transform: translateX(-50%);
    /* margin-top: 60px; */
  }
  #search{
    display: flex;
    width: 500px;
    height: 30px;
    line-height: 50px;
}
#search input{
    flex: 1;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    outline: none;
    border: 1px #00b3ff;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 0 20px;
    transition: all .3s;
}
#search button{
    height: 30px;
    line-height: 30px;
    padding: 0 30px;
    border: none;
    box-sizing: border-box;
    background-color: #00b3ff;
    font-size: 10px;
    color: #fff;
    cursor: pointer;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}
#search input:focus{
    box-shadow: 0 0 5px #eee;
}

.suggestions {
  text-align: left;
  font-size: 10px;
  position: absolute;
  width: 380px;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 3px 3px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.suggestion {
  padding: 10px;
  height: 10px;
  cursor: pointer;
}

.suggestion:hover {
  background-color: #f0f0f0;
}
  </style>
  