<template>
  <header>
    <img src="@/assets/logo.png" id="logo" />
    <SearchSchool />
  </header>
</template>

<script>
import SearchSchool from './search/SearchSchool.vue';

export default {
  name: "AppHeader",
  components: {
    SearchSchool
  }
};
</script>

<style scoped>
#logo {
  margin-top: -15px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
}

header {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.2s;
  width: 95%;
  height: 50px;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background: rgba(243, 243, 243, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 7;
}

/* header > .input-container {
  flex: 1;
  display: flex;
  justify-content: center; 
}

header > .input-container > input {
  flex: 0 1 50%;
  height: 25px;
  margin-top: 2.5px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s, border-radius 0.2;
}

header > .input-container > input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  border-radius: 10px;
} */
</style>
