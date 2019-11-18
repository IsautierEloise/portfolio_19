<template>
    <div class="wrap">
        <div class="topbar"></div>
        <div class="scrollbar" :style="{ height: (windowHeight + 'px') }">
            <span class="scroll">scroll</span>
        </div>
        <div class="intro">
            <div class="left"></div>
            <div class="intro-wrap">
                <h1>Bonjour</h1>
                <div class="intro-flex">
                    <div class="intro-text">
                        <p>Je m'appelle Eloïse et je suis une <strong>développeuse web</strong> créative. <br>J'ai 19 ans et j'étudie le développement web, design UX et marketing digital à HETIC Paris.</p>
                        <p class="check">Jetez un oeil à mes récents projets ou <router-link to="/contact" class="pink">contactez-moi.</router-link></p>
                    </div>
                </div>
            </div>
            <div class="links">
                <a href="https://www.linkedin.com/in/éloïse-isautier-865582178" target="_blank" class="li">
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.366 2.973C5.366 4.349 4.331 5.452 2.667 5.452H2.636C1.034 5.453 0 4.348 0 2.973C0 1.564 1.067 0.490998 2.698 0.490998C4.331 0.489998 5.336 1.564 5.366 2.973ZM0.28 21.766H5.052V7.413H0.28V21.766ZM16.764 7.077C14.233 7.077 13.1 8.467 12.463 9.447V9.493H12.432C12.444 9.479 12.455 9.463 12.463 9.447V7.414H7.692C7.754 8.759 7.692 21.767 7.692 21.767H12.463V13.751C12.463 13.319 12.492 12.896 12.62 12.587C12.966 11.733 13.752 10.84 15.066 10.84C16.795 10.84 17.486 12.159 17.486 14.087V21.767H22.257V13.538C22.258 9.126 19.902 7.077 16.764 7.077Z" fill="#85ACF8"/>
                    </svg>
                </a>
                <a href="https://www.behance.net/eloiseisautier" target="_blank" class="li">
                    <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0896 7.66181C10.0896 7.66181 12.4551 7.48618 12.4551 4.71145C12.4551 1.93698 10.5196 0.583405 8.06768 0.583405H3.55473H3.42216H0V16.0878H3.42216H3.55473H8.06768C8.06768 16.0878 12.9927 16.2436 12.9927 11.5117C12.9929 11.5117 13.2077 7.66181 10.0896 7.66181ZM3.55473 3.33935H7.48706H8.06794C8.06794 3.33935 9.16474 3.33935 9.16474 4.95231C9.16474 6.56527 8.51939 6.79909 7.7882 6.79909H3.55473V3.33935ZM7.8597 13.3326H3.55473V9.18891H8.06768C8.06768 9.18891 9.7023 9.16804 9.7023 11.3183C9.7023 13.1113 8.50687 13.3146 7.8597 13.3326Z" fill="#85ACF8"/>
                        <path d="M22.6231 1.49677H16.2261V3.40617H22.6231V1.49677Z" fill="#85ACF8"/>
                        <path d="M19.5615 4.52853C13.5992 4.52853 13.6044 10.4851 13.6044 10.4851C13.6044 10.4851 13.1958 16.4122 19.5618 16.4122C19.5618 16.4122 24.8672 16.7154 24.8672 12.2888H22.1387C22.1387 12.2888 22.2298 13.9566 19.6528 13.9566C19.6528 13.9566 16.9245 14.139 16.9245 11.2583H24.958C24.958 11.2583 25.8369 4.52853 19.5615 4.52853ZM21.9868 9.18893H16.8937C16.8937 9.18893 17.227 6.7991 19.622 6.7991C22.0173 6.79884 21.9868 9.18893 21.9868 9.18893Z" fill="#85ACF8"/>
                    </svg>
                </a>
                <a href="https://github.com/IsautierEloise/" target="_blank" class="li">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.7508 7.51968C24.5371 5.44031 22.891 3.79408 20.8118 2.5806C18.7323 1.36705 16.4621 0.760437 13.9996 0.760437C11.5375 0.760437 9.26653 1.36724 7.18747 2.5806C5.1081 3.79401 3.46199 5.44031 2.24838 7.51968C1.03496 9.59899 0.428223 11.8696 0.428223 14.3315C0.428223 17.2887 1.29102 19.948 3.01703 22.3099C4.74287 24.672 6.97239 26.3065 9.70541 27.2135C10.0235 27.2726 10.259 27.231 10.4122 27.09C10.5654 26.9487 10.6419 26.7718 10.6419 26.56C10.6419 26.5247 10.6388 26.2068 10.6329 25.6058C10.6269 25.0049 10.624 24.4807 10.624 24.0334L10.2176 24.1037C9.95843 24.1512 9.63151 24.1713 9.23682 24.1656C8.84231 24.1601 8.43276 24.1187 8.00873 24.0418C7.58451 23.9657 7.18994 23.789 6.82471 23.5121C6.45966 23.2353 6.20052 22.8729 6.04733 22.4255L5.87063 22.0189C5.75284 21.7481 5.56741 21.4474 5.31408 21.1178C5.06075 20.7878 4.80457 20.5641 4.54543 20.4463L4.4217 20.3578C4.33926 20.2989 4.26276 20.2279 4.19202 20.1455C4.12133 20.0632 4.06842 19.9807 4.03307 19.8982C3.99767 19.8155 4.02701 19.7478 4.1214 19.6946C4.21578 19.6414 4.38636 19.6156 4.63387 19.6156L4.98716 19.6684C5.22279 19.7156 5.51424 19.8567 5.8619 20.0924C6.20937 20.328 6.495 20.6343 6.71887 21.0111C6.98997 21.4942 7.31658 21.8623 7.69963 22.1157C8.08238 22.369 8.46829 22.4954 8.85698 22.4954C9.24567 22.4954 9.58138 22.466 9.86423 22.4074C10.1468 22.3484 10.4119 22.2599 10.6594 22.1422C10.7654 21.3525 11.0541 20.7459 11.5251 20.3219C10.8537 20.2513 10.2501 20.145 9.71389 20.0037C9.17802 19.8623 8.62426 19.6326 8.05298 19.3143C7.4814 18.9963 7.00723 18.6015 6.63037 18.1305C6.25344 17.6592 5.94409 17.0405 5.70277 16.275C5.46132 15.5091 5.34057 14.6256 5.34057 13.6243C5.34057 12.1986 5.80601 10.9854 6.7367 9.98396C6.30072 8.91209 6.34188 7.7105 6.8603 6.3793C7.20195 6.27315 7.70861 6.35281 8.38003 6.61777C9.05157 6.88286 9.54325 7.10995 9.85556 7.29823C10.1679 7.48644 10.4181 7.64594 10.6066 7.7753C11.7025 7.46911 12.8333 7.31599 13.9995 7.31599C15.1657 7.31599 16.2968 7.46911 17.3927 7.7753L18.0642 7.35139C18.5233 7.06854 19.0656 6.80933 19.6896 6.5737C20.314 6.3382 20.7914 6.27333 21.1214 6.37948C21.6514 7.71074 21.6986 8.91228 21.2625 9.98415C22.1931 10.9856 22.6588 12.1991 22.6588 13.6245C22.6588 14.6258 22.5376 15.5121 22.2965 16.2838C22.0551 17.0557 21.7431 17.6738 21.3604 18.1393C20.9772 18.6048 20.5 18.9966 19.9287 19.3144C19.3573 19.6326 18.8034 19.8622 18.2675 20.0037C17.7314 20.1452 17.1277 20.2515 16.4563 20.3222C17.0687 20.8521 17.3749 21.6886 17.3749 22.8313V26.5595C17.3749 26.7713 17.4486 26.9482 17.596 27.0895C17.7432 27.2305 17.9758 27.2721 18.2939 27.213C21.0273 26.306 23.2568 24.6715 24.9826 22.3094C26.7082 19.9475 27.5713 17.2882 27.5713 14.331C27.5707 11.8694 26.9636 9.59899 25.7508 7.51968Z" fill="#85ACF8"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="project"  :key="project.data" v-for="project in this.$store.state.projects">
            <div class="left"></div>
            <div class="center">
                <div class="project-head">     
                    <div class="num">{{ project.num }}</div>
                    <div class="project-flex">
                        <h2>{{ project.name }}</h2>
                        <div class="project-info-block">
                            <p class="project-infos"><span class="project-grey">YEAR : </span>{{ project.year }} </p>
                            <p class="project-infos" :style="{color: project.role[1]}"><span class="project-grey">ROLE : </span>{{ project.role[0] }}</p>
                        </div>
                        <div class="project-content">
                            <div class="project-left"></div>
                            <div class="project-desc">
                                <p v-html="project.desc"></p>
                                <a :href="project.discover" target="_blank" class="discover">Discover</a> <br>
                            </div>
                            <div class="arrow-flex">
                                <div class="arrow-head">▶</div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="project-img" :href="project.discover" target="_blank">
                    <div class="overlay"><span><i>{{project.name}}</i></span></div>
                    <img :src="project.img" alt="" class="project-img">
                </a>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            title: 'Home',
            windowHeight: '',
        }
    },
    methods : 
    {
        getHeight()
        {
            this.windowHeight = document.documentElement.scrollHeight - (0.21 * document.documentElement.clientWidth);
        }
        
    },
    mounted()
    { 
        this.getHeight();
    }
}
</script>

<style lang="scss" scoped>
    .wrap
    {
        .topbar
        {
            width: 2rem;
            height: 1px;
            background-color: #e6e6e6;
            position: absolute;
            margin-left: .5rem;
            top: 21vw;
            left: 17.5vw;
        }
        .scrollbar
        {
            width: 1.5px;
            background-color: #e6e6e6;
            position: absolute;
            z-index: -1;
            top: 21vw;
            left: 19.35vw;

            .scroll
            {
                text-transform: uppercase;
                position: inherit;
                transform: rotate(-90deg);    
                top: 18%;
                left: -3rem;
                background-color: white;
                color: #cfcfcf;
                padding: 1rem;
            }
        }
        .intro
        {
            display: flex;
            height: 100%;   
            padding-top: 10vw;
            width: 100%;

            .left
            {
                width: 10vw;
                border-right: 1px solid rgba(0, 0, 0, 0.151);
            }

            .intro-wrap
            {
                width: 80vw;
                h1
                {
                    font-size: 3rem;
                    color: #85ACF8;
                    padding: 5vw 0 0 8vw;
                }  

                .intro-flex
                {
                    margin-top: 1rem;
                    padding-bottom: 5vw;
                    display: flex;    
                    width: 100%;
                   
                    .intro-text
                    {
                        padding: 5vw 15vw; 
                        p
                        {
                            line-height: 180%;
                            color: #4A4A4A;
                            font-size: 1.25rem;    
                            font-weight: 300;
                        }
                        .check
                        {
                            margin-top: 1rem;
                            .pink
                            {
                                color: #F8A6C8;
                                text-decoration: none;

                                &:hover
                                {
                                    color: #dd84a9
                                }
                            }
                        }
                    }
                }
            }
            .links
            { 
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                width: 10vw;     
                border-left: 1px solid rgba(0, 0, 0, 0.151);
            }
        }
        .project
        {
            display: flex;
            border-top: 1px solid rgba(0, 0, 0, 0.151);
            width: 100%;
            height: 80vh;
            .left
            {
                width: 10vw;
                border-right: 1px solid rgba(0, 0, 0, 0.151);
            }
            .center
            {      
                padding-top: 5rem;
                display: flex;  
                flex-direction: column;
                width: 80vw;
                margin-bottom: 5vw;
                position: relative;

                .project-head
                {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: baseline;
                    margin: 0 3vw;

                    h2
                    {
                        text-transform: uppercase;
                        font-weight:700;
                        font-size: 1.8rem;
                        color: #85ACF8
                    }

                    .project-flex
                    {
                        position: absolute;
                        left: 48vw;
                    }
                    .num
                    {    
                        font-family: 'Suranna', serif;
                        font-size: 4rem;
                        color: #e6e6e6;
                        margin-left: -1vw;
                        user-select: none;
                    }

                    .project-info-block
                    {
                        margin-top: 2rem;
                        margin-bottom: -1rem;
                        
                        .project-infos
                        {
                            font-size: 1.2rem;
                            font-weight: 300;
                            line-height: 2rem;
                            .project-grey
                            {
                                font-weight: 400;
                                color: #636363;
                            }
                        }
                    }

                    .project-content
                    {
                        position: absolute;
                        margin-top: 10vh;
                        .project-left
                        {
                            width: 2px;
                            height: 100%;
                            background-color: #85ACF8;
                            position: absolute;
                        }
                        .arrow-flex
                        {
                            display: flex;
                            width: 65%;
                            height: 2px;
                            background-color: #85ACF8;
                            align-items: center;
                            justify-content: flex-end;
                            user-select: none;

                            .arrow-head
                            {
                                color: #85ACF8;
                                position: absolute;
                                left: 64%
                            }
                        }
                        .project-desc
                        {
                            width: 24vw;
                            padding: 0 0 3vw 3vw;
                            color: #525252;
                            
                            .discover
                            {
                                margin-top: 3vw;
                                text-decoration: none;
                                color: #85ACF8;
                                font-weight: 600;
                                font-size: 1.2rem;
                                text-transform: uppercase;
                                transition: color .2s ease-out;

                                &:hover
                                {
                                    color: #4b6aa8;
                                }
                            }
                        }
                    }
                }


                .project-img
                {
                    position: relative;
                    height: 100%;

                    .overlay
                    {
                        background-color: #00000000;
                        transition: all .2s ease-out;
                        position: absolute;
                        top: -7vh;
                        width: 32vw;
                        height: 17vw;
                        z-index: 8;
                        margin-left: 13vw;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #ffffff00;
                        font-family: 'Suzanna', serif;

                        &:hover
                        {      
                            background-color: #000000b2;
                            color: #ffffffd0;
                        }

                        span
                        {
                            opacity: 1;
                            font-size: 2rem;
                        }
                    }

                    img
                    {
                        position: absolute;
                        width: 32vw;
                        height: 17vw;
                        z-index: 5;
                        margin-left: 13vw;
                        top: -7vh;
                    }
                }
            }
            .right
            {       
                width: 10vw;
                border-left: 1px solid rgba(0, 0, 0, 0.151);
            }
        }
    }
</style>