<template>
    <section class="order">
        <div class="container">
            <div class="order-row">
                <div class="order-contents">
                    <h2 class="order-title ">Оформление заказа</h2>
                    <div class="hot-menu-pages">
                        <router-link to="/" class="hot-menu-page-prev">Главная</router-link>
                        <span>/</span>
                        <router-link to="/basket" class="hot-menu-page-prev">Корзина</router-link>
                        <span>/</span>
                        <div class="hot-menu-page-this">Оформление заказа</div>
                    </div>
                    <div class="order-right">
                        <div class="order-right-items">
                            <div class="order-right-item"
                                v-for="FoodInfo in FoodInfos"
                                :key="FoodInfo.id"
                            >
                                <div class="order-right-img">
                                    <img :src="'.' + FoodInfo.imgSrc" :alt="FoodInfo.title">
                                </div>
                                <div class="order-right-content">
                                    <div class="order-right-name">{{ FoodInfo.title }}</div>
                                    <div class="order-right-box">
                                        <div class="order-right-total">{{ FoodInfo.sum }} шт</div>
                                        <div class="order-right-price item-price">{{ (FoodInfo.price * FoodInfo.sum).toLocaleString() }} ₽</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-right-end">
                            <div class="order-right-text">Итого к оплате:</div>
                            <div class="order-right-total-price item-price">{{ totalPrice(FoodInfos).toLocaleString() }} ₽</div>
                        </div>
                    </div>
                    <div class="order-blocks order-blocks-one">
                        <div class="order-number">01. Контактные данные</div>
                        <div class="order-block">
                            <div class="order-block-texts">
                                <a href="#" class="order-block-link">Уже покупали у нас?</a>
                                <div class="order-block-text">Войдите в личный кабинет, и все ваши данный автоматически заполнятся</div>
                            </div>

                            <div class="order-inputs">
                                <div class="order-inputs-type">Имя *</div>
                                <input type="text" class="order-inputs-input">
                            </div>
                            <div class="order-inputs">
                                <div class="order-inputs-type">Телефон *</div>
                                <input type="text" class="order-inputs-input">
                            </div>
                            <div class="order-inputs">
                                <div class="order-inputs-type">Email</div>
                                <input type="text" class="order-inputs-input">
                            </div>
                            <div class="order-inputs">
                                <div class="order-inputs-type">кол-во персон</div>
                                <input type="text" class="order-inputs-input-min">
                            </div>
                        </div>
                    </div>
                    <div class="order-blocks order-blocks-two">
                        <div class="order-number">02. Способ доставки</div>
                        <div class="order-views">
                            <div class="order-view">
                                <div class="order-view-title">
                                    Бесконтактная доставка
                                    <span>300 ₽</span>
                                </div>
                                <div class="order-view-text">
                                    Доставка по Москве в пределах МКАД
                                    Осуществляется: ежедневно с 12:00 до 00:00, Диапозон времени: от 1 до 1.5 часов
                                </div>
                            </div>
                            <div class="order-view">
                                <div class="order-view-title">
                                    Самовывоз
                                    <span>+0 ₽</span>
                                </div>
                                <div class="order-view-text">
                                    Доступен с 12:00 до 00:00 <br> По адресу <a href="#">ул. Улофа Пальме 5с2</a>
                                </div>
                            </div>
                        </div>
                        <div class="order-block">
                            <div class="order-block-texts">
                                <div class="order-block-sub-text">Адрес доставки</div>
                            </div>

                            <div class="order-inputs">
                                <div class="order-inputs-type">Улица</div>
                                <input type="text" class="order-inputs-input">
                            </div>
                            <div class="order-inputs-block">
                                <div class="order-inputs">
                                    <div class="order-inputs-type">дом</div>
                                    <input type="text" class="order-inputs-input-min">
                                </div>
                                <div class="order-inputs">
                                    <div class="order-inputs-type">квартира</div>
                                    <input type="text" class="order-inputs-input-min">
                                </div>
                            </div>
                            
                            <div class="order-inputs">
                                <div class="order-inputs-type">Комментарий <br> к заказу</div>
                                <textarea type="text" class="order-inputs-input order-inputs-area"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="order-blocks order-blocks-three">
                        <div class="order-number">03. Оплата</div>
                        <div class="order-radios">
                            <div class="order-radio">
                                <input checked type="radio" id="shipadd1" name="address" />
                                <label for="shipadd1">
                                    <div class="order-radio-crug"></div>
                                    <div class="order-radio-texts">
                                        <div class="order-radio-text">Банковские карты / Электронные деньги / Другое</div>
                                        <div class="order-radio-imgs">
                                            <img src="@/assets/img/order/img-one.png" alt="MasterCard">
                                            <img src="@/assets/img/order/img-two.png" alt="Visa">
                                            <img src="@/assets/img/order/img-three.png" alt="Mir">
                                            <img src="@/assets/img/order/img-four.png" alt="AplPay">
                                            <img src="@/assets/img/order/img-five.png" alt="GPay">
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div class="order-radio">
                                <input type="radio" id="shipadd2" name="address" />
                                <label for="shipadd2">
                                    <div class="order-radio-crug"></div>
                                    <div class="order-radio-texts">
                                        <div class="order-radio-text">Наличными курьеру</div>
                                    </div>
                                </label>
                            </div>
                            <div class="order-radio">
                                <input type="radio" id="shipadd3" name="address" />
                                <label for="shipadd3">
                                    <div class="order-radio-crug"></div>
                                    <div class="order-radio-texts">
                                        <div class="order-radio-text">Картой курьеру</div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button class="order-btn _btn-t">Подтвердить заказ</button>
                </div>
                <div class="order-right">
                    <div class="order-right-items">
                        <div class="order-right-item"
                            v-for="FoodInfo in FoodInfos"
                            :key="FoodInfo.id"
                        >
                            <div class="order-right-img">
                                <img :src="'.' + FoodInfo.imgSrc" :alt="FoodInfo.title">
                            </div>
                            <div class="order-right-content">
                                <div class="order-right-name">{{ FoodInfo.title }}</div>
                                <div class="order-right-box">
                                    <div class="order-right-total">{{ FoodInfo.sum }} шт</div>
                                    <div class="order-right-price item-price">{{ (FoodInfo.price * FoodInfo.sum).toLocaleString() }} ₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order-right-end">
                        <div class="order-right-text">Итого к оплате:</div>
                        <div class="order-right-total-price item-price">{{ totalPrice(FoodInfos).toLocaleString() }} ₽</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        FoodInfos() {
            return this.$store.getters.infoBasket
        },
    },
    methods: {
        totalPrice(basket) {
            if (basket) {
                const result = [...Object.values(basket)].reduce(function(sum, current) {
                    return sum + (current.price * current.sum);
                }, 0);
                return result  
            } else if (!basket) {
                return 0
            }
        }
    }
}
</script>

<style scoped>

</style>