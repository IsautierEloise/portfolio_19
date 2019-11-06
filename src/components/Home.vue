<template>
    <div class="wrap">
        <div class="intro">
            <h1>Hello</h1>
            <div class="scroll-indic">
                <div class="topbar"></div>
                <div class="scrollbar">
                    <span class="scroll">scroll</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .wrap
    {
        width: calc(100%-10rem);
        margin: 0 10rem;
        padding-top: 10rem;

        .intro
        {
            padding: 6rem;

            h1
            {
                font-size: 3rem;
                color: #4A4A4A;
            }

            .scroll-indic
            {
                margin-top: 1rem;
                .topbar
                {
                    width: 1rem;
                    height: 1px;
                    background-color: #dadada;
                    position: absolute;
                    margin-left: .5rem;
                }
                .scrollbar
                {
                    width: 1.5px;
                    height: 100%;
                    background-color: #dadada;
                    margin-left: 1rem;
                    position: absolute;

                    .scroll
                    {
                        text-transform: uppercase;
                        position: inherit;
                        transform: rotate(-90deg);    
                        top: 25%;
                        left: -3rem;
                        background-color: white;
                        color: #dadada;
                        padding: 1rem;
                    }
                }
            }
        }
    }
</style>