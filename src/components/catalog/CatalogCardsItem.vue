<template>
        <div class="catalog__card">
            <p class="card__article text">Артикул {{ card.article }}</p>
            <img 
            :src="require('@/assets/img/catalog/' + card.img)" 
            alt="card.title" 
            class="card__img">
            <p class="card__title text_bold">{{ card.type }}  {{ card.title }}</p>
            <p class="card__price text_bold">{{ card.price }} &#8381;</p>
            <button 
            class="card__btn__add_in_cart text" 
            @click="sendArticle">
                <span>Добавить в корзину</span>
            </button>
        </div>
</template>

<script>
export default {
    name: 'CatalogCardsItem',
    props: {
        card: {
            type: Object,
            default() {
                return{}
            }
        }
    },
    methods: {
        sendArticle() {
            this.$emit('sendArticle', this.card.article);
        }
    },
}
</script>

<style lang="scss">
.catalog__card{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 25px;
    -webkit-box-shadow: 6px 6px 21px -12px $color-decoration;
        -moz-box-shadow: 6px 6px 21px -12px $color-decoration;
            box-shadow: 6px 6px 21px -12px $color-decoration;
}
.card__article{
    font-size: 0.75rem;
    align-self: flex-end;
    margin-bottom: 10px;
    color: $color-text;
}
.card__img{
    height: 240px;
    align-self: center;
    margin-bottom: 20px;
}
.card__title{
    font-size: 1.25rem;
    margin-bottom: 30px;
    color: $color-title;
}
.card__price{
    font-size: 1.15rem;
    margin-bottom: 20px;
    color: $color-title;
}
.card__btn__add_in_cart{
    padding: 8px 24px;
    border-radius: 28px;
    border: none;
    background-color: $color-background;
    cursor: pointer;

    span{
        font-size: 1rem;
        color: $color-background-text;
    }
}
.card__btn__add_in_cart:hover{
    background-color: $color-title;
}
</style>