<template>
    <div class="main_page">
        <HeaderComponent />
        <MainSloganComponent />
        <MainAdvantagesComponent />
        <MainAboutComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import MainSloganComponent from '@/components/main/mainSloganComponent/MainSloganComponent.vue';
import MainAdvantagesComponent from '@/components/main/mainAdvantagesComponent/MainAdvantagesComponent.vue';
import MainAboutComponent from '@/components/main/mainAboutComponent/MainAboutComponent.vue';
import FooterComponent from '@/components/footer/FooterComponent.vue';

export default({
    name: 'MainPage',
    components: {
        HeaderComponent,
        MainSloganComponent,
        MainAdvantagesComponent,
        MainAboutComponent,
        FooterComponent,
    }
})
</script>

<style lang="scss">
.main_page{
    display: flex;
    flex-direction: column;
}
</style>