<template>
    <transition-group name="popular-list">
        <div class="popular-item item"
            v-for="popular in populars"
            :key="popular.id"
        >
            <div class="popular-img item-img">
                <img :src="'.' + popular.imgSrc" :alt="popular.title">
            </div>
            <div class="popular-name item-name">{{ popular.title }}</div>
            <div class="popular-gram item-gram">{{ popular.gram }}</div>
            <div class="popular-text item-text">{{ popular.description }}</div>
            <div class="popular-end item-end">
                <div class="popular-prices item-prices">
                    <div v-if="popular.priceOld" class="popular-old-price item-old-price">{{ (popular.priceOld * 1).toLocaleString() }} ₽</div>
                    <div class="popular-price item-price">{{ (popular.price * 1).toLocaleString() }} ₽</div>
                </div>
                <div @click="$router.push(`/towarpage/${popular.id}`)" v-if="popular.types" href="#" class="popular-btn item-view-btn">{{ popular.types }}</div>
                <div
                    @click="orderFood(popular.id, popular.title, popular.price, popular.gram, popular.imgSrc)"
                    v-if="!popular.types"
                    class="popular-btn item-btn">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.28475 24.1011L1.57399 13.3228H0V7.23318H6.00448L8.94843 0L10.639 0.657562L7.9574 7.26177H18.0135L15.361 0.657562L17.0516 0L19.9955 7.23318H26V13.3228H24.426L21.7152 24.1011H4.28475ZM20.3161 22.3285L22.5897 13.3514H3.43946L5.71301 22.3285H20.3161ZM24.1928 11.5502V9.06291H1.83632V11.5502H24.1928Z" fill="black"/>
                        <path d="M13.9327 14.838H12.0963V21.2707H13.9327V14.838Z" fill="black"/>
                        <path d="M17.4305 14.838H15.5942V21.2707H17.4305V14.838Z" fill="black"/>
                        <path d="M10.435 14.838H8.59865V21.2707H10.435V14.838Z" fill="black"/>
                        </svg>
                        
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script>
export default {
    props: {
        populars: {
            type: Array,
            required: true
        }
    },
    methods: {
        async orderFood(id, title, price, gram, imgSrc,) {
            const FoodInfo = {
                id, title, price, gram, imgSrc, sum: 1
            }
            try {
                await this.$store.dispatch('addToCart', FoodInfo)
            } catch (e) {}
        },
    },
    name: 'my-card'
}
</script>

<style scoped>
.popular-list-item {
  display: inline-block;
  margin-right: 10px;
}
.popular-list-enter-active,
.popular-list-leave-active {
  transition: all .5 ease;
}
.popular-list-enter-from,
.popular-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.popular-list-move {
  transition: transform 0.8s ease;
}
</style>