<template>
    <section class="catalog__cards">
        <div class="catalog__cards__container container">
            <CatalogCardsItem 
            v-for="card in cardsData"
            :card="card"
            :key="card.article"
            @addToCart="addToCart"
            />
        </div>
    </section>
</template>

<script>
import CatalogCardsItem from './CatalogCardsItem.vue';
import { mapActions } from 'vuex';
import { cardsData } from './card_data';

export default ({
    name: 'CatalogCards',
    components: {
        CatalogCardsItem,
    },
    data() {
    return {
      cardsData: []
    };
  },
  created() {
    this.cardsData = cardsData
  },
    // computed: {
    //     ...mapGetters([
    //         // == this.$store.state.cardsData
    //         'CARDSDATA'
    //     ]),
    // },
    methods: {
        ...mapActions([
            // 'GET_CARDSDATA_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
    },
    // mounted() {
    //     this.GET_CARDSDATA_FROM_API()
    //     .then((response) => {
    //         if (response.data) {
    //             console.log('Data arrived');
    //         }
    //     })
    // },
})
</script>

<style lang="scss">
.catalog__cards{
    margin-top: 60px;
}
.catalog__cards__container{
        display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}
</style>