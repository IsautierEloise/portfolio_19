<template>
    <div class="header">
        <div class="logo">
            <svg width="54" height="41" viewBox="0 0 54 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.155 1.5H28.755L29.305 12.39H28.315C26.775 8.68666 25.1617 6.15666 23.475 4.8C21.7883 3.40666 19.3133 2.71 16.05 2.71H14.125V19.705H15.995C17.7183 19.705 19.1667 19.0633 20.34 17.78C21.5133 16.46 22.3383 14.7 22.815 12.5H23.64V28.78H22.705C22.045 26.03 21.1467 24.0683 20.01 22.895C18.91 21.7217 17.3883 21.135 15.445 21.135H14.125V38.79H16.215C19.5883 38.79 22.4483 37.7817 24.795 35.765C27.1783 33.7483 28.81 31.1633 29.69 28.01H30.79L30.35 40H0.155V38.79H3.4V2.71H0.155V1.5ZM48.6113 30.21V25.48C48.6113 22.3267 48.0063 18.5867 46.7963 14.26C45.623 9.89667 45.0363 6.92667 45.0363 5.35C45.0363 3.77333 45.458 2.63666 46.3013 1.94C47.1813 1.24333 48.2446 0.894999 49.4913 0.894999C52.278 0.894999 53.6713 2.38 53.6713 5.35C53.6713 7.07333 53.0296 10.08 51.7463 14.37C50.463 18.66 49.8213 22.3817 49.8213 25.535V30.21H48.6113ZM48.9963 40.55C47.6396 40.55 46.613 40.165 45.9163 39.395C45.2563 38.5883 44.9263 37.5983 44.9263 36.425C44.9263 35.215 45.293 34.225 46.0263 33.455C46.7596 32.6483 47.768 32.245 49.0513 32.245C50.3346 32.245 51.3613 32.5933 52.1313 33.29C52.9013 33.95 53.2863 34.94 53.2863 36.26C53.2863 37.58 52.9196 38.625 52.1863 39.395C51.453 40.165 50.3896 40.55 48.9963 40.55Z" fill="black"/>
            </svg>
        </div>
        <div class="menu">
            <div class="links">
                <a href="">My work <small>/></small></a>
                <a href="">About <small>/></small></a>
                <a href="">Contact <small>/></small></a>
            </div>
        </div>
        <div class="right-case"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .header
    {
        border-bottom: 1px solid rgba(0, 0, 0, 0.151);
        display: flex;
        justify-content: space-between;
        position: fixed;
        width: 100%;
        z-index: 10;
        background-color: white;
        

        .logo
        {
            width: 10vw;
            height: 10vw;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Suranna', serif;
            border-right: 1px solid rgba(0, 0, 0, 0.151);
        }

        .menu
        {
            
            width: 86vw;
            font-size: 1.1rem;

            .links
            {
                height: 100%;
                width: 50%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                float: right;
                padding: 0 3rem;
                a
                {
                    text-decoration: none;
                    color: #4A4A4A;
                }
            }
        }

        .right-case 
        {
            height: 10vw;
            width: 10vw;
            border-left: 1px solid rgba(0, 0, 0, 0.151);
        }   
    }

</style>