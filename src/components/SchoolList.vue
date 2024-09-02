<template>
  <div class="schools">
    <h3>热门院校</h3>
    <ul>
      <li v-for="school in schools" :key="school.name">
        {{ school.name }}
        <div class="school-info">
          <img :src="school.logo" :alt="`${school.name}校徽`" />
          <p>排名：{{ school.rank }}</p>
          <p>分数线：{{ school.score }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SchoolList",
  data() {
    return {
      schools: [
        {
          name: "清华大学",
          logo: "https://zh.m.wikipedia.org/wiki/File:Tsinghua_University_Logo.svg",
          rank: 1,
          score: 700,
        },
        {
          name: "北京大学",
          logo: "https://zh.m.wikipedia.org/wiki/File:Peking_University_seal.svg",
          rank: 2,
          score: 695,
        },
        {
          name: "山东大学",
          logo: "https://zh.m.wikipedia.org/wiki/File:Shandong_University.jpg",
          rank: 10,
          score: 650,
        },
        {
          name: "浙江大学",
          logo: "https://zh.m.wikipedia.org/wiki/File:Zhejiang_University_Logo.svg",
          rank: 3,
          score: 680,
        },
        {
          name: "南京大学",
          logo: "https://example.com/nanjing-university-logo.jpg",
          rank: 4,
          score: 675,
        },
        {
          name: "东北大学",
          logo: "https://example.com/dongbei-university-logo.jpg",
          rank: 15,
          score: 640,
        },
        {
          name: "西安大学",
          logo: "https://example.com/xian-university-logo.jpg",
          rank: 8,
          score: 660,
        },
        {
          name: "四川大学",
          logo: "https://example.com/sichuan-university-logo.jpg",
          rank: 7,
          score: 670,
        },
        {
          name: "国防科技大学",
          logo: "https://example.com/guofang-university-logo.jpg",
          rank: 5,
          score: 675,
        },
        {
          name: "齐鲁工业大学",
          logo: "https://example.com/qilu-university-logo.jpg",
          rank: 20,
          score: 600,
        },
      ],
    };
  },
};
</script>

<style scoped>
.schools {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  right: 150px;
  top: 100px;
  width: 250px;
  height: 80%;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 24px;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.schools>ul {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
  width: 100%;
  overflow: scroll;
}

.schools>ul>li {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  font-size: 18px;
  color: #333;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  height: auto;
  position: relative;
  /* Added to position the info box */
}

.schools>ul>li:last-child {
  border-bottom: none;
}

.schools>ul>li:hover {
  align-items: flex-start;
  background: rgba(243, 243, 243, 0.95);
  border-radius: 5px;
  height: 150px;
  border-bottom: 1px solid #eee;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.school-info {
  display: none;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 5px;
  left: 50%;
  width: 95%;
  transform: translateX(-50%);
  /* background: #fff; */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
  border-radius: 5px;
}

.schools>ul>li:hover .school-info {
  display: block;
}

.school-info img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.schools>ul::-webkit-scrollbar {
  width: 10px;
}

.schools>ul::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

.schools>ul::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
</style>
