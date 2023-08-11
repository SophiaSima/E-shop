<template>
    <div class="cart_page">
        <HeaderComponent />
        <CartComponent
            v-if="CART.length"
            :cart_data="CART"
        />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import CartComponent from '@/components/cart/CartComponent.vue';
import FooterComponent from '@/components/footer/FooterComponent.vue';
import { mapGetters } from 'vuex';

export default({
    name: 'CartPage',
    components: {
        HeaderComponent,
        CartComponent,
        FooterComponent,
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    }
})
</script>