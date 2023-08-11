<template>
    <section class="cart">
        <div class="cart__contaier container">
            <!-- НЕ РАБОТАЕТ -->
            <p class="cart__empty text_bold" v-if="!cart_data">Вы ничего не добавили в корзину...</p>
            <CartComponentItem
                v-for="(cart_item, index) in cart_data"
                :key="cart_item.article"
                :cart_item="cart_item"
                @deleteFromCart="deleteFromCart(index)"
                @increment="increment(index)"
                @decrement="decrement(index)"
            />
            <p class="cart__total text_bold" v-if="cart_data.length">Итого: {{cartTotalCost}} &#8381;</p>
        </div>
    </section>
</template>

<script>
import { mapActions } from 'vuex';
import CartComponentItem from './CartComponentItem.vue';

export default {
    name: 'CartComponent',
    components: {
        CartComponentItem
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods:{
        ...mapActions([
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM',
            'DELETE_FROM_CART'
        ]),

        increment(index){
            this.INCREMENT_CART_ITEM(index)
        },

        decrement(index){
            this.DECREMENT_CART_ITEM(index)
        },

        deleteFromCart(index){
            this.DELETE_FROM_CART(index)
        }
    },
    computed: {
        cartTotalCost() {
            let result = [];
            if (this.cart_data.length) {
                for (let item of this.cart_data) {
                    result.push(item.price * item.quantity);
                }
                result = result.reduce(function (sum, el) {
                    return sum + el;
                })
                return result
            } else {
                return 0
            }
        }
    }
}
</script>

<style lang="scss">
.cart{
    margin-top: 60px;
}
.cart__total{
    text-align: end;
    font-size: 1.25rem;
}
</style>