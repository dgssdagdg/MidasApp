<template>
    <section class="basket">
        <div class="container">
            <div class="basket-row">
                <div class="basket-c-cart">
                    <h2 class="basket-title _title">Корзина</h2>
                    <span class="basket-total-item">
                        {{colvoItem(FoodInfos)}} шт
                    </span>
                </div>
                
                <div class="hot-menu-pages">
                    <a href="#" class="hot-menu-page-prev">Главная</a>
                    <span>/</span>
                    <div class="hot-menu-page-this">Корзина</div>
                </div>
                <div class="basket-body">

                    <div class="basket-item"
                        v-for="FoodInfo in FoodInfos"
                        :key="FoodInfo.id"
                    >
                        <div class="basket-img">
                            <img :src="'.' + FoodInfo.imgSrc" :alt="FoodInfo.title">
                        </div>
                        <div class="basket-content">
                            <div class="basket-names basket-block">
                                <div class="basket-name item-name">{{ FoodInfo.title }}</div>
                                <div class="item-gram">{{ FoodInfo.gram }}</div>
                            </div>
                            <div class="basket-price item-price basket-block">{{ (FoodInfo.price * 1).toLocaleString() }} ₽</div>
                            <div class="basket-block">
                                <div class="colvos">
                                    <div @click="sumMinus(FoodInfo.id, FoodInfo.sum)" class="colvos-p colvos-minus ">
                                        <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3839 2.53966L0 2.53966V0.844238H11.3839L11.3839 2.53966Z" fill="white"/>
                                            </svg>
                                            
                                    </div>
                                    <div class="colvos-total"> <span class="colvos-total-sum" >{{ FoodInfo.sum }}</span>шт</div>
                                    <div @click="sumPlus(FoodInfo.id, FoodInfo.sum)" class="colvos-plus colvos-p">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3839 6.53967L0 6.53967V4.84425H11.3839L11.3839 6.53967Z" fill="white"/>
                                            <path d="M6.54015 0L6.54015 11.3839L4.84473 11.3839V0H6.54015Z" fill="white"/>
                                            </svg>
                                            
                                    </div>
                                </div>
                            </div>
                            <div class="basket-right basket-block">
                                <div class="basket-total-price item-price">{{ (FoodInfo.price * FoodInfo.sum).toLocaleString() }} ₽</div>
                                <button @click="itemDelete(FoodInfo.id)" class="basket-del-item">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.8508 15.9764L0.437193 1.56281L1.63604 0.363965L16.0496 14.7776L14.8508 15.9764Z" fill="#B70000"/>
                                        <path d="M0.165475 14.9927L14.5791 0.579074L15.7779 1.77792L1.36432 16.1915L0.165475 14.9927Z" fill="#B70000"/>
                                        </svg>
                                        
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="basket-item">
                        <div class="basket-img">
                            <img src="@/assets/img/popular/img-fourteen.jpg" alt="Долма">
                        </div>
                        <div class="basket-content">
                            <div class="basket-names basket-block">
                                <div class="basket-name item-name">Долма</div>
                                <div class="basket-makeup item-makeup">С бараниной</div>
                                <div class="item-gram">80 г</div>
                            </div>
                            <div class="basket-price item-price basket-block">490 ₽</div>
                            <div class="basket-block">
                                <div class="colvos">
                                    <div class="colvos-p colvos-minus ">
                                        <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3839 2.53966L0 2.53966V0.844238H11.3839L11.3839 2.53966Z" fill="white"/>
                                            </svg>
                                            
                                    </div>
                                    <div class="colvos-total">1шт</div>
                                    <div class="colvos-plus colvos-p">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3839 6.53967L0 6.53967V4.84425H11.3839L11.3839 6.53967Z" fill="white"/>
                                            <path d="M6.54015 0L6.54015 11.3839L4.84473 11.3839V0H6.54015Z" fill="white"/>
                                            </svg>
                                            
                                    </div>
                                </div>
                            </div>
                            <div class="basket-right basket-block">
                                <div class="basket-total-price item-price">490 ₽</div>
                                <button class="basket-del-item">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.8508 15.9764L0.437193 1.56281L1.63604 0.363965L16.0496 14.7776L14.8508 15.9764Z" fill="#B70000"/>
                                        <path d="M0.165475 14.9927L14.5791 0.579074L15.7779 1.77792L1.36432 16.1915L0.165475 14.9927Z" fill="#B70000"/>
                                        </svg>
                                        
                                </button>
                            </div>
                        </div>
                    </div> -->

                    <div class="basket-types">
                        <div class="basket-type">Блюдо:</div>
                        <div class="basket-type">Цена:</div>
                        <div class="basket-type">Кол-во:</div>
                        <div class="basket-type">Сумма:</div>
                    </div>
                </div>
                <div class="basket-end">
                    <div class="basket-form">
                        <div class="basket-form-text">Применить промокод:</div>
                        <div class="basket-form-inputs">
                            <input type="text" class="basket-form-input">
                            <div class="basket-form-kod-active _btn">Применить</div>
                        </div>
                        <div class="basket-form-texts">
                            <div class="basket-form-text">Итого к оплате:</div>
                            <div class="basket-form-total-price item-price">{{ totalPrice(FoodInfos).toLocaleString() }} ₽</div>
                        </div>
                        <router-link to="/order" class="basket-form-btn _btn-t">Оформить заказ</router-link>
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
        async sumMinus(id, sum) {
            const sumItemId = {
                id, sum
            }
            if (--sum < 1) {
                try {
                    await this.$store.dispatch('cartDeleteItem', id)
                } catch (e) {}
            }
            if (sum > 0) {
                try {
                    await this.$store.dispatch('sumMinus', sumItemId)
                } catch (e) {}
            }
        },
        async sumPlus(id, sum) {
            const sumItemId = {
                id, sum
            }
            try {
                await this.$store.dispatch('sumPlus', sumItemId)
            } catch (e) {}
        },
        async itemDelete(id) {
            try {
                await this.$store.dispatch('cartDeleteItem', id)
            } catch (e) {}
        },
        colvoItem(basket) {
            if (basket) {
                const result = [...Object.values(basket)].reduce(function(sum, current) {
                    return sum + current.sum;
                }, 0);
                return result
            } else if (!basket) {
                return 0
            }
        },
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
    },
}
</script>

<style scoped>

</style>