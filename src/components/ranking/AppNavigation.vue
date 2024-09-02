<template>
  <div class="navi" id="navi" ref="nav">
    <ul>
      <li
        class="list"
        v-for="year in years"
        :key="year"
        :class="{ active: year === selectedYear }"
        @click="selectYear(year)"
      >
        <button>
          <span>{{ year }}</span>
        </button>
      </li>
      <div class="indicator"></div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: [2020, 2021, 2022, 2023],
      selectedYear: 2020,
    };
  },
  mounted() {
    this.addMouseMoveListener();
  },
  beforeUnmount() {
    this.removeMouseMoveListener();
  },
  methods: {
    selectYear(year) {
      this.selectedYear = year;
      this.$emit("yearSelected", year); // Emit event with the selected year
    },
    addMouseMoveListener() {
      document.addEventListener("mousemove", this.handleMouseMove);
    },
    removeMouseMoveListener() {
      document.removeEventListener("mousemove", this.handleMouseMove);
    },
    handleMouseMove(event) {
      const nav = this.$refs.nav;
      if (!nav) return; // Check if the nav element reference exists
      const bottomOffset = window.innerHeight - event.clientY;
      if (bottomOffset < 100) {
        nav.style.bottom = "10px";
      } else {
        nav.style.bottom = "-100px";
      }
    },
  },
};
</script>

<style scoped>
.navi {
  width: 350px;
  height: 70px;
  /* transition: transform 0.5s ease-in-out */
  transition: bottom 0.5s ease-out;
}

@media screen and (max-width: 400px) {
  .navi::before {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .navi {
    bottom: 0;
  }
}

.navi > ul {
  display: flex;
}

.navi > ul > li {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
}

.navi > ul > li > button {
  border: 0;
  background: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: default;
}

.indicator {
  position: absolute;
  width: 70px; /* Same with li */
  height: 30px;
  border-radius: 10px;
  transition: 0.5s;
  margin-top: 20px;
  /* bottom: 15px; */
}

.navi > ul > li:nth-child(1).active ~ .indicator {
  background: #f53b57;
  box-shadow: 0 5px 25px #f53b5799;
  transform: translateX(calc(70px * 0));
}

.navi > ul > li:nth-child(2).active ~ .indicator {
  background: #5d62fb;
  box-shadow: 0 5px 25px #5d62fb99;
  transform: translateX(calc(70px * 1));
}

.navi > ul > li:nth-child(3).active ~ .indicator {
  background: #05c46b;
  box-shadow: 0 5px 25px #05c46b99;
  transform: translateX(calc(70px * 2));
}

.navi > ul > li:nth-child(4).active ~ .indicator {
  background: #0fbcf9;
  box-shadow: 0 5px 25px #0fbcf999;
  transform: translateX(calc(70px * 3));
}

/* .navi > ul > li:nth-child(5).active ~ .indicator {
    background: #ffa801;
    box-shadow: 0 5px 25px #ffa80199;
    transform: translateX(calc(70px * 4));
} */
</style>
