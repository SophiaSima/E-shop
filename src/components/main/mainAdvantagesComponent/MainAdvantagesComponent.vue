<template>
    <section class="main__advantages">
        <div class="main__advantages__container container">
            <div class="main__advantages__card">
                <img src="@/assets/img/main__advantages__quality.png" alt="Качество" class="main__advantages__card__img">
                <p class="main__advantages__card__text text_bold">Только качественные материалы</p>
            </div>
            <div class="main__advantages__card">
                <img src="@/assets/img/main__advantages__delivery.png" alt="Доставка" class="main__advantages__card__img">
                <p class="main__advantages__card__text text_bold">Доставка до двери или подъезда</p>
            </div>
            <div class="main__advantages__card">
                <img src="@/assets/img/main__advantages__diversity.png" alt="Разнообразие" class="main__advantages__card__img">
                <p class="main__advantages__card__text text_bold">Разнообразный ассортимент товаров</p>
            </div>
            <div class="main__advantages__card">
                <img src="@/assets/img/main__advantages__price.png" alt="Цена" class="main__advantages__card__img">
                <p class="main__advantages__card__text text_bold">Цены на 10% ниже чем у конкурентов</p>
            </div>
        </div>
    </section>
</template>

<script>
export default({
    name: 'MainAdvantagesComponent',
})
</script>

<style lang="scss">
.main__advantages{
    margin-top: 120px;
}
.main__advantages__container{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 900px){
        flex-wrap: wrap;
    }
    @media (max-width: 760px){
        flex-direction: column;
        align-items: center;
    }
}

.main__advantages__card{
    width: calc((100% - 30px)/3);
    @media (max-width: 900px){
        max-width: 300px;
        margin-bottom: 30px;
    }
}
.main__advantages__card:last-child{
    @media (max-width: 900px){
        margin-bottom: 0px;
    }
}
.main__advantages__card__img{
    width: 80px;
    height: 80px;
    margin-bottom: 50px;
}
.main__advantages__card__text{
    font-size: 1.25rem;
    line-height: 2rem;
    color: $color-text;
}
</style>