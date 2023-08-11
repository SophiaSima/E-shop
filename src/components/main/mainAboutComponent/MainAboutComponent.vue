<template>
    <section class="main__about">
        <div class="main__about__container container">
            <div class="main__about__wrap">
                <h2 class="main__about__title text_bold">О КОМПАНИИ</h2>
                <p class="main__about__text text">Мы занимаемся продажей качественной и доступной мебели в России. Мы обеспечиваем наши клиетам качество и экологичность материалом с гарантией больше года. Также у нас есть доставка до двери частного дома или подъзда! Если ваша мебель не была доставлена в течении 60 минут после оговоренного времени - доставка бесплатно.</p>
            </div>
            <img src="@/assets/img/main__about.png" alt="Стул" class="main__about__img">
        </div>
    </section>
</template>

<script>
export default({
    name: 'MainAboutComponent',
})
</script>

<style lang="scss">
.main__about{
    margin-top: 120px;
}
.main__about__container{
    display: flex;
    @media (max-width: 760px){
        flex-direction: column;
    }
}
.main__about__wrap{
    width: 50%;
    margin: auto;
    @media (max-width: 760px){
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
}
.main__about__title{
    font-size: 1.25rem;
    text-align: start;
    margin-bottom: 60px;
    color: $color-title;
}
.main__about__text{
    font-size: 1.125rem;
    line-height: 1.8rem;
    color: $color-text;
    max-width: 415px;
    text-align: start;
    padding-bottom: 20px;
    border-bottom: 2px solid $color-decoration;
}
.main__about__img{
    max-width: 430px;
    align-self: center;
    @media (max-width: 760px){
        margin-top: 60px;
        max-width: 300px;
    }
}
</style>