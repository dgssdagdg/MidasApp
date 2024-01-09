<template>
    <section class="hot-menu">
        <div class="container">
            <div class="hot-menu-row">
                <h2 class="hot-menu-title _title">Горячие блюда</h2>
                <div class="hot-menu-pages">
                    <router-link to="/" class="hot-menu-page-prev">Главная</router-link>
                    <span>/</span>
                    <div class="hot-menu-page-this">Горячие блюда</div>
                </div>
                <div class="hot-menu-filters">
                    <div class="hot-menu-filter-text">Сортировать:</div>
                    <div class="hot-menu-filter-block">
                        <div @click="this.view = 'true'" class="hot-menu-filter">
                            <input class="hot-menu-filter-name" v-model="this.typeInput" type="text">
                            <span>
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.19884 4.6013e-07L5.71295 4.51411L4.51411 5.71295L0 1.19884L1.19884 4.6013e-07Z" fill="white"/>
                                    <path d="M9.03 1.19884L4.51589 5.71295L3.31705 4.51411L7.83116 0L9.03 1.19884Z" fill="white"/>
                                    </svg>
                                    
                            </span>
                        </div>
                        <div v-if="this.view == 'true'" class="hot-menu-filter-views">
                            <div @click="updateType(this.upPrice)" class="hot-menu-filter-view">{{ this.upPrice }}</div>
                            <div @click="updateType(this.downPrice)" class="hot-menu-filter-view">{{ this.downPrice }}</div>
                        </div>
                    </div>
                </div>
                <div class="hot-menu-body">
                    <my-card :populars="populars" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        typeInput: 'По возрастанию цены',
        upPrice: 'По возрастанию цены',
        downPrice: 'По убыванию цены',
        priceView: true,
        view: 'false',

    }),
    computed: {
        // populars() {
        //     return this.$store.getters.TowarPageInfo
        // },
        populars() {
            const array = this.$store.getters.TowarPageInfo
            console.log(array);
            return [...Object.values(array)].sort((a, b) => {
                if (this.priceView) {
                    return a.price - b.price 
                } else {
                    return b.price - a.price 
                }
            })
        },
    },
    methods: {
        updateType(types) {
            this.typeInput = types
            this.view = 'false'
            if (types === this.upPrice) {
                this.priceView = true
            } else this.priceView = false
        },
        
    },
}
</script>

<style scoped>
.hot-menu-filter-name {
    background-color: transparent;
    width: 200px;
    pointer-events: none;
}
.hot-menu-filter-views {
    display: flex !important;
}
</style>
