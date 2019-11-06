<template>
    <div class="wrap">
        <div class="intro">
            <h1>Hello</h1>
            <div class="flex">
                <div class="topbar"></div>
                <div class="scrollbar">
                    <span class="scroll">scroll</span>
                </div>
                <div class="intro-text">
                    <p>My name is Eloise and I’m a <strong>creative developer</strong> <br> inspired by <strong>the future</strong>. I’m 19 years old and study <br>in a web school called Hetic.</p>
                    <p>Check out my recent work or contact me </p>
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

            .flex
            {
                margin-top: 1rem;
                display: flex;
                .topbar
                {
                    width: 1rem;
                    height: 1px;
                    background-color: #e6e6e6;
                    position: absolute;
                    margin-left: .5rem;
                }
                .scrollbar
                {
                    width: 1.5px;
                    height: 100%;
                    background-color: #e6e6e6;
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
                        color: #cfcfcf;
                        padding: 1rem;
                    }
                }
                .intro-text
                {
                    padding: 1.5rem 4rem;     
                    p
                    {
                        line-height: 180%;
                        color: #4A4A4A;
                        font-size: 1.25rem;    
                        font-weight: 300;
                    }
                }
            }
        }
    }
</style>