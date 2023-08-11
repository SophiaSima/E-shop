<template>
    <section class="main__slogan">
        <div class="main__slogan__container container">
            <div class="main__slogan__collage">
                <img src="@/assets/img/main__slogan__collage.png" alt="Мебель" class="main__slogan__collage__img">
            </div>
            <div class="main__slogan__title">
                <h1 class="main__slogan__title__text text_bold">КАЧЕСТВЕННАЯ МЕБЕЛЬ<span>В РОССИИ</span></h1>
            </div>
        </div>
    </section>
</template>

<script>
export default({
    name: 'MainSloganComponent',
})
</script>

<style lang="scss">
.main__slogan{
    margin-top: 120px;
    @media (max-width: 760px){
        margin-top: 60px;
    }
}
.main__slogan__container{
    display: flex;
    @media (max-width: 760px){
        flex-direction: column-reverse;
    }
}
.main__slogan__collage{
    width: 50%;
    @media (max-width: 760px){
        width: 100%;
        margin-top: 60px;
    }
}
.main__slogan__collage__img{
    max-width: 100%;
}
.main__slogan__title{
    color: $color-title;
    display: flex;
    justify-content: center;
    width: 50%;
    background-image: url('../../../assets/img/main__slogan__title_background.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    @media (max-width: 760px){
        width: 100%;
        padding-top: 200px;
        padding-bottom: 200px;
    }
}
.main__slogan__title__text{
    font-size: 1.8rem;
    align-self: center;
    span{
        display: block;
    }
}
</style>