<template>
    <section class="footer">
        <div class="footer__container container">
                <div class="footer__catalog">
                    <ul class="footer__catalog__list"> 
                        <li><a class="footer__catalog__link text" href="#">Кровати</a></li>
                        <li><a class="footer__catalog__link text" href="#">Диваны</a></li>
                        <li><a class="footer__catalog__link text" href="#">Кресла</a></li>
                        <li><a class="footer__catalog__link text" href="#">Стулья</a></li>
                        <li><a class="footer__catalog__link text" href="#">Столы</a></li>
                        <li><a class="footer__catalog__link text" href="#">Шкафы</a></li>
                        <li><a class="footer__catalog__link text" href="#">Кухни</a></li>
                    </ul>
                </div>
                <div class="footer__menu">
                    <ul class="footer__menu__list"> 
                        <li><a class="footer__menu__link text" href="#">О компании</a></li>
                        <li><a class="footer__menu__link text" href="#">Обмен и возврат</a></li>
                        <li><a class="footer__menu__link text" href="#">Оплата и доставка</a></li>
                        <li><a class="footer__menu__link text" href="#">Рассрочка</a></li>
                        <li><a class="footer__menu__link text" href="#">Правила оферты</a></li>
                        <li><a class="footer__menu__link text" href="#">Политика конфиденциальности</a></li>
                    </ul>
                </div>
            <p class="footer__copiright text">Все права защищены 2023</p>
        </div>
    </section>
</template>

<script>
export default({
    name: 'FooterComponent',
})
</script>

<style lang="scss">
.footer{
    margin-top: 120px;
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: $color-background;
    color: $color-background-text;
}
.footer__catalog{
    padding-bottom: 60px;
    border-bottom: 2px solid $color-background-text;

}
.footer__catalog__list{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    @media (max-width:900px){
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 50px;
    }
}
.footer__catalog__link{
    text-decoration: none;
    color: $color-background-text;
    font-size: 1.125rem;
}
.footer__catalog__link:hover{
    color: $color-decoration;
}
.footer__menu{
    padding-top: 60px;
    padding-bottom: 60px;
    border-bottom: 2px solid $color-background-text;
}
.footer__menu__list{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    @media (max-width:900px){
        justify-content: flex-start;
        flex-wrap: wrap;
        text-align: start;
    }
}
.footer__menu__link{
    text-decoration: none;
    color: $color-background-text;
    font-size: 1.125rem;
}
.footer__menu__link:hover{
    color: $color-decoration;
}
.footer__copiright{
    padding-top: 60px;
    font-size: 1rem;
    text-align: end;
}
</style>