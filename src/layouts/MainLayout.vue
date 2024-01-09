<template>
    <div class="wrapper">
        <Header></Header>

        <main class="main">
            <router-view/>
        </main>

        <Footer></Footer>
        <img class="wrapper-bg" src="@/assets/img/wrapper-bg.png" alt="Blue-bg">
    </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
    export default {
        name: 'main-layout',
        computed: {
            name() {
                if(!this.$store.getters.info.name) {
                    this.$router.push("/login");
                }
            }
        },
        async mounted() {
            if (!Object.keys(this.$store.getters.infoBasket).length) {
                    await this.$store.dispatch('fetchInfoBasket')
            }
            if (!Object.keys(this.$store.getters.info).length) {
                await this.$store.dispatch('fetchInfo')
            }
            if (!Object.keys(this.$store.getters.TowarPageInfo).length) {
                await this.$store.dispatch('toTowarPageInfo')
            }
        },
        components: {
            Footer, Header
        }
    }
</script>

<style scoped>
    @import '@/assets/style.css';
</style>