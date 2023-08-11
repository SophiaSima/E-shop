<template>
    <section class="cart">
        <div class="cart__contaier container">
            <CartComponentItem
                v-for="(cart_item, index) in cart_data"
                :key="cart_item.article"
                :cart_item="cart_item"
                @deleteFromCart="deleteFromCart(index)"
            />
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
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index)
        }
    }
}
</script>