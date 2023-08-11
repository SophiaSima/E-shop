<template>
    <div class="cart__item">
        <div class="cart__item__box">
            <img 
            class="cart__item__img"
            :src="require('@/assets/img/catalog/' + cart_item.img)"  
            alt="cart_item.title">
            <div class="cart__item__wrap">
                <p class="cart__item__title text_bold">{{cart_item.type}} {{cart_item.title}}</p>
                <p class="cart__item__price text_bold">{{cart_item.price}} &#8381;</p>
                <p class="cart__item__article text">Артикул {{cart_item.article}}</p>
            </div>
        </div>
        <div class="cart__item__quatity text">{{cart_item.quantity}}</div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'CartComponentItem',
    props: {
        cart_item: {
            type: Object,
            default(){
                return{}
            }
        }
    },
    methods:{
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
    mounted() {
        this.$set(this.cart_item, 'quantity', 1)
    }
}
</script>

<style lang="scss">
.cart__item{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    -webkit-box-shadow: 6px 6px 21px -12px $color-decoration;
        -moz-box-shadow: 6px 6px 21px -12px $color-decoration;
            box-shadow: 6px 6px 21px -12px $color-decoration;


    &__box{
        display: flex;
        gap: 70px;
    }

    &__img{
        max-height: 250px;
    }

    &__wrap{
        display: flex;
        flex-direction: column;
        text-align: start;
        justify-content: center;
    }

    &__title{
        font-size: 1.25rem;
        margin-bottom: 30px;
        color: $color-title;
    }

    &__price{
        font-size: 1.15rem;
        margin-bottom: 20px;
        color: $color-title;
    }

    &__article{
        font-size: 0.75rem;
        margin-bottom: 10px;
        color: $color-text;
    }
}
</style>