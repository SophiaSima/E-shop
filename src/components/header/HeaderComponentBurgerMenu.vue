<template>
    <div>
        <button @click="toggleMenu" class="burger__btn" :class="{ 'burger__btn_active': buttonActive }"><span></span></button>
        <div class="burger_hidden" :class="{ 'burger_visible': menuVisible }">
                <router-link to="/" class="header__link text">О КОМПАНИИ</router-link>
                <router-link to="/catalog" class="header__link text">КАТАЛОГ</router-link>
                <router-link to="/" class="header__link text">КОРЗИНА</router-link>
                <a href="tel:+79991234567" class="header__phone__link text">+7(999)-123-45-67</a>
                <a href="tel:+78121234567" class="header__phone__link text">+7(812)-123-45-67</a>
                <p class="header__text text">Москва. ул. Ленина, 25</p>
                <p class="header__text text">9:00-20:00 без выходных и перерывов</p>
        </div>
    </div>
</template>

<script>
export default({
    name: 'HeaderComponentBurgerMenu',
    data: function() {
        return {
            menuVisible: false,
            buttonActive: false,
        }
    },
    methods: {
        toggleMenu: function() {
            this.menuVisible = !this.menuVisible,
            this.buttonActive = !this.buttonActive
        }
    }
})
</script>

<style lang="scss">
.burger_hidden {
    display: none;
    flex-direction: column;
    text-align: start;
    position: absolute;
    box-sizing: border-box;
    top: 91px;
    right: 0;
    gap: 20px;
    padding: 20px 20px;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    background-color: $color-header-background;
}
.burger_visible{
    display: flex;
}
.burger__wrap{
    display: flex;
    flex-direction: column;
}

/*----------КНОПКА-----------*/
.burger__btn {
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    width: 80px;
    height: 70px;
    font-size: 0;
    border: none;
    cursor: pointer;
    background-color: $color-header-background;
    -webkit-transition: background 0.3s;
        transition: background 0.3s;
}


.burger__btn span{
    display: block;
    position: absolute;
    top: 45px;
    left: 18px;
    right: 18px;
    height: 5px;
    background: $color-title;
    -webkit-transition: background 0 0.3s;
        transition: background 0 0.3s;
    @media (max-width:900px){
        top: 35px;
    }
}
.burger__btn span::before,
.burger__btn span::after{
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: $color-title;
    content: "";
    -webkit-transition-duration: 0.3s, 0.3s;
        transition-duration: 0.3s, 0.3s;
    -webkit-transition-delay: 0.3s, 0;
        transition-delay: 0.3s, 0;
}
.burger__btn span::before{
    top: -20px;
    -webkit-transition-property: top, -webkit-transform;
        transition-property: top, transform;
}
.burger__btn span::after{
    bottom:-20px;
    -webkit-transition-property: bottom, -webkit-transform;
        transition-property: bottom, transform;
}

.burger__btn_active span{
    background: none;
}
.burger__btn_active span::before{
    top: 0;
    -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
          transform: rotate(45deg);
}
.burger__btn_active span::after{
    bottom: 0;
    -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
}
.burger__btn_active span::before,
.burger__btn_active span::after{
    -webkit-transition-delay: 0, 0.3s;
        transition-delay: 0, 0.3s;
}
</style>