<template>
    <section class="catalog__cards">
        <div class="catalog__cards__container container">
            <CatalogCardsItem 
            v-for="card in CARDSDATA"
            :card="card"
            :key="card.article"
            @sendArticle="showChildArticle"
            />
        </div>
    </section>
</template>

<script>
import CatalogCardsItem from './CatalogCardsItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default ({
    name: 'CatalogCards',
    components: {
        CatalogCardsItem,
    },
    computed: {
        ...mapGetters([
            // == this.$store.state.cardsData
            'CARDSDATA'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_CARDSDATA_FROM_API'
        ]),

        showChildArticle(data) {
            console.log(data);
        },
    },
    mounted() {
        this.GET_CARDSDATA_FROM_API()
        .then((response) => {
            if (response.data) {
                console.log('Data arrived');
            }
        })
    },
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