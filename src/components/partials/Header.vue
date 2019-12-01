<template>
    <div class="header">
        <router-link to="/" class="logo">
        </router-link>
        <div class="menu">
            <div class="links">
                <router-link to="/" class="work" @click.native="scrollToTop">Projets <small>/></small></router-link>
                <router-link to="/about" class="about" @click.native="scrollToTop">À propos <small>/></small></router-link>
                <router-link to="/contact" class="contact" @click.native="scrollToTop">Contact <small>/></small></router-link>
            </div>
        </div>
        <div class="right-case">
            <div class="burger-menu">
                <div class="menu-toggle">
                    <input type="checkbox" class="toggle-input" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul class="hidden-menu">
                        <router-link to="/" @click.native="closeMenu"><li>Projets</li></router-link>
                        <router-link to="/about"  @click.native="closeMenu"><li>À propos</li></router-link>
                        <router-link to="/contact" @click.native="closeMenu"><li>Contact</li></router-link>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    
</template>

<script>
export default {
    methods:
    {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        closeMenu() {
            document.querySelector('.toggle-input').checked = false;
        },
    }
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
            
            @media screen and (max-width: 900px)
            {
                padding: 3vw
            }
        }

        .menu
        {
            
            width: 80vw;
            font-size: 1.1rem;

            .links
            {
                height: 100%;
                width: 50%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                float: right;
                font-weight: 800;
                padding: 0 3rem;
                user-select: none;
                
                @media screen and (max-width: 900px)
                {
                    display:none;
                }
                
                a
                {
                    text-decoration: none;
                    color: #4A4A4A;
                }
                .work, .about, .contact
                {       
                    transition: all .2s ease-in-out;
                }
                .work
                {
                    &.router-link-exact-active
                    {
                        color: #85ACF8;
                    }
                    &:hover
                    {
                        color: #85ACF8
                    }
                }

                .about
                {
                    &.router-link-exact-active
                    {
                        color: #FFA6B6;
                    }
                    &:hover
                    {
                        color: #FFA6B6
                    }
                }

                .contact
                {
                    &.router-link-exact-active
                    {
                        color: #FFB444;
                    }
                    &:hover
                    {
                        color: #FFB444
                    }
                }
            }
        }

        .right-case 
        {
            height: 10vw;
            width: 10vw;
            border-left: 1px solid rgba(0, 0, 0, 0.151);

            @media screen and (max-width: 900px)
            {
                height: 16vw;
                width: 16vw;
            }

            .burger-menu
            {
                display: none;
                position: relative;
                
                @media screen and (max-width: 900px)
                {
                    display: block;
                }

                .menu-toggle
                {
                    display: block;
                    position: relative;
                    height: 16vw;
                    
                    z-index: 1;
                    
                    -webkit-user-select: none;
                    user-select: none;

                    @media screen and (max-width: 900px)
                    {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                    }

                    input
                    {
                        display: block;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        cursor: pointer;
                        opacity: 0;
                        z-index: 3;
                    }
                    
                    input:checked ~ ul
                    {
                        transform: none;
                    }

                    input:checked ~ span
                    {
                        opacity: 1;
                        transform: rotate(45deg);
                        background: #232323;
                        position: absolute;

                        &:nth-last-child(3)
                        {
                            opacity: 0;
                            transform: rotate(0deg) scale(0.2, 0.2);
                        }

                        &:nth-last-child(2)
                        {
                            transform: rotate(-45deg);
                        }
                    }

                    span
                    {
                        display: block;
                        width: 2.5rem;
                        height: 2px;
                        margin: 1vw 0;
                        background: black;
                        border-radius: 3px;
                        z-index: 1;
                        transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
                        position: relative;
                    }
                }
                .hidden-menu
                {
                    position: fixed;
                    right: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    margin: 0 0 0 -5vw;
                    background-color: white;
                    list-style-type: none;
                    -webkit-font-smoothing: antialiased;
                    transform: translate(100%, 0);
                    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    a
                    {
                        color: black;
                        text-decoration: none;
                        
                        li
                        {
                            font-size: 2rem;
                            padding: 2.5rem 1rem;
                            font-weight: 800;
                        }
                    }
                }
            }
        }   
    }

</style>