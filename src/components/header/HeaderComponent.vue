<template>
    <section class="header">
        <div class="header__container container">
            <HeaderComponentLogo />
            <div class="header__menu">
                <router-link to="/" class="header__link text">О КОМПАНИИ</router-link>
                <router-link to="/catalog" class="header__link text">КАТАЛОГ</router-link>
                <router-link to="/cart" class="header__link text">КОРЗИНА</router-link>
                <div class="header__wrap">
                    <a href="tel:+79991234567" class="header__phone__link text">+7(999)-123-45-67</a>
                    <a href="tel:+78121234567" class="header__phone__link text">+7(812)-123-45-67</a>
                </div>
                <div class="header__wrap">
                    <p class="header__text text">Москва. ул. Ленина, 25</p>
                    <p class="header__text text">9:00-20:00 без выходных и перерывов</p>
                </div>
            </div>
            <HeaderComponentBurgerMenu class="header__burger_menu"/>
        </div>
    </section>
</template>

<script>
import HeaderComponentLogo from './HeaderComponentLogo.vue';
import HeaderComponentBurgerMenu from './HeaderComponentBurgerMenu.vue';

export default({
    name: 'HeaderComponent',
    components: {
        HeaderComponentLogo,
        HeaderComponentBurgerMenu,
    }
})
</script>

<style lang="scss">
.header {
    background-color: $color-header-background;
}
.header__container{
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.header__menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 125px);

    @media (max-width: 1098px){
        display: none;
    }
}
.header__burger_menu{
    @media (min-width: 1099px){
        display: none;
    }
}
.header__link{
    font-size: 1.25rem;
    text-decoration: none;
    color: $color-text;
}
.header__link:hover{
    color: $color-decoration;
}
.header__wrap{
    display: flex;
    flex-direction: column;
}
.header__phone__link:first-child{
margin-bottom: 13px;
}
.header__phone__link{
    font-size: 1rem;
    text-decoration: none;
    color: $color-text;
}
.header__phone__link:hover{
    color: $color-decoration;
}
.header__text{
    font-size: 1rem;
    color: $color-text;
}
.header__text:first-child{
    margin-bottom: 13px;
}
</style>