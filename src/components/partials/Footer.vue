<template>
    <div class="footer">
        <div class="footer-left"></div>
        <div class="footer-center">Éloïse Isautier <br><small>2019 © Design : Croset Clarisse</small></div>
        <div class="footer-right"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

    .footer
    {
        height: 10vw;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center; 
        &-left
        {
            width: 10vw;
            height: 100%;
            border-top: 1px solid rgba(0, 0, 0, 0.151);
            border-right: 1px solid rgba(0, 0, 0, 0.151)
        }
        &-center
        {
            width: 80vw;
            height: 100%;
            text-align: center;
            border-top: 1px solid rgba(0, 0, 0, 0.151);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            small
            {
                color: #545454;
            }
        }
        &-right
        {
            width: 10vw;
            height: 100%;
            border-top: 1px solid rgba(0, 0, 0, 0.151);
            border-left: 1px solid rgba(0, 0, 0, 0.151)
        }
    }

</style>