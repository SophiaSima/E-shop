<template>
    <div class="catalog_page">
        <HeaderComponent />
        <CatalogCards/>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import CatalogCards from '@/components/catalog/CatalogCards.vue';
import FooterComponent from '@/components/footer/FooterComponent.vue';

export default({
    name: 'CatalogPage',
    components: {
        HeaderComponent,
        CatalogCards,
        FooterComponent,
    },
})
</script>