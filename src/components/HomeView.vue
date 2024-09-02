<template>
    <div class="menubar">
        <ul>
            <li class="mb-list" :class="{ active: activeIndex === 0 }" data-color="#fe4d4d" @mouseenter="setActive(0)">
                <a href="#">
                    <span class="mb-icon">
                        <i class="fa-solid"></i>
                    </span>
                    <span class="mb-title">Chat</span>
                </a>
            </li>
            <li class="mb-list" :class="{ active: activeIndex === 1 }" data-color="#4bffc9" @mouseenter="setActive(1)">
                <a href="#">
                    <span class="mb-icon">
                        <i class="fa-solid"></i>
                    </span>
                    <span class="mb-title">Group</span>
                </a>
            </li>
            <li class="mb-list" :class="{ active: activeIndex === 2 }" data-color="#34e0ff" @mouseenter="setActive(2)">
                <a href="#">
                    <span class="mb-icon">
                        <i class="fa-solid"></i>
                    </span>
                    <span class="mb-title">Notification</span>
                </a>
            </li>
            <li class="mb-list" :class="{ active: activeIndex === 3 }" data-color="#c480ff" @mouseenter="setActive(3)">
                <a href="#">
                    <span class="mb-icon">
                        <i class="fa-solid"></i>
                    </span>
                    <span class="mb-title">More</span>
                </a>
            </li>

            <!-- <div class="indicator" :style="{ top: activeIndex * 70 + 'px' }"></div> -->
            <div class="indicator" :style="{ top: `${activeIndex * 70}px` }"></div>
        </ul>
    </div>
    <div class="content">
        <!-- 根据 activeIndex 显示不同的内容 -->
        <Header v-if="activeIndex === 0" />
        <RankingView v-if="activeIndex === 0" />
        <SchoolList v-if="activeIndex === 0 && showSchoolList"/>

        <div v-if="activeIndex === 1">
            <Header v-if="activeIndex === 1" />
        </div>

        <div v-if="activeIndex === 2">
            <Header v-if="activeIndex === 2" />
        </div>

        <div v-if="activeIndex === 3">

        </div>
    </div>
</template>

<script>
import Header from './AppHeader.vue'
import { RankingView } from './index'
import SchoolList from "./SchoolList.vue"

export default {
    name: 'HomeView',
    components: {
        Header,
        RankingView,
        SchoolList,
    },
    mounted() {
        this.checkToken()
        let mb_list = document.querySelectorAll('.mb-list');

        mb_list.forEach(element => {
            element.addEventListener('mouseover', () => {
                mb_list.forEach(el => el.classList.remove('active'));
                element.classList.add('active');
            });

            element.addEventListener('mouseenter', (event) => {
                let color = event.target.getAttribute('data-color');
                document.body.style.backgroundColor = color;
            });
        });

        window.addEventListener('resize', this.checkWindowSize);
    },

    beforeUnmount() {
            window.removeEventListener('resize', this.checkWindowSize);
    },

    data() {
        return {
            menuItems: [
                { title: 'Home', color: '#fe4d4d' },
                { title: 'Page', color: '#4bffc9' },
                { title: 'Page', color: '#34e0ff' },
                { title: 'Page', color: '#c480ff' }
            ],
            activeIndex: 0,
            showSchoolList: window.innerWidth >= 1520,
        };
    },
    methods: {
        updateSuggestions(suggestions) {
            this.suggestions = suggestions;
        },

        checkWindowSize() {
            this.showSchoolList = window.innerWidth >= 1520;
        },

        setActive(index) {
            this.activeIndex = index;
        },

        checkToken() {
            const token = localStorage.getItem('token');
            if (!token) {
                this.$router.push('/login');
            }
        }   
        
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Popins', sans-serif;
}

.menubar {
    position: fixed;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 70px;
    height: 280px;
    background: #fff;
    border-radius: 35px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.menubar>ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.menubar>ul>li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
}

.menubar>ul>li>a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #333;
    font-weight: 500;
}

.menubar>ul>li>a>.mb-icon {
    position: relative;
    display: block;
}

.menubar>ul>li.active>a>.mb-icon {
    color: #fff;
}

.menubar>ul>li>a>.mb-icon>i {
    font-size: 24px;
}

.menubar>ul>li>a>.mb-title {
    position: absolute;
    top: 50%;
    left: 110px;
    background: #fff;
    transform: translateY(-50%);
    padding: 5px 10px;
    border-radius: 6px;
    transition: .5s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
}

.menubar>ul>li:hover>a>.mb-title {
    opacity: 1;
    visibility: visible;
    transform: translateX(-25px) translateY(-50%);
}

.menubar>ul>li>a>.mb-title::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: -1px;
    top: 46%;
    transform: rotate(45deg) translateX(-50%);
    border-radius: 2px;
}

.menubar>ul>.indicator {
    position: absolute;
    left: 0;
    width: 70px;
    height: 70px;
    transition: .5s;
}

.menubar>ul>.indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background: #333;
    border-radius: 50%;
    transition: .5s;
}


.menubar>ul>li:nth-child(1).active~.indicator::before {
    background: #fe4d4d;
}

.menubar>ul>li:nth-child(2).active~.indicator::before {
    background: #4bffc9;
}

.menubar>ul>li:nth-child(3).active~.indicator::before {
    background: #34e0ff;
}

.menubar>ul>li:nth-child(4).active~.indicator::before {
    background: #c480ff;
}
</style>