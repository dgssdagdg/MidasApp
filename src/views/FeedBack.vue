<template>
    <section class="feedback">
        <div class="container">
            <div class="feedback-row">
                <h2 class="feedback-title _title">Обратная связь</h2>
                <div class="hot-menu-pages">
                    <router-link to="/" class="hot-menu-page-prev">Главная</router-link>
                    <span>/</span>
                    <div class="hot-menu-page-this">Обратная связь</div>
                </div>
                <form class="feedback-form">
                    <div class="feedback-box">
                        <div class="feedback-text">Ваш вопрос, отзыв или пожелание:</div>
                        <textarea name="" id="" cols="30" rows="10" class="feedback-textarea"></textarea>
                    </div>
                    <div class="feedback-box">
                        <div class="feedback-text">Email для получения ответа:</div>
                        <input type="text" class="feedback-input">
                    </div>
                    <button class="feedback-btn _btn">ОТПРАВИТЬ</button>
                </form>
                <img src="@/assets/img/feedback/img-one.png" alt="#" class="feedback-img">
                <img src="@/assets/img/feedback/img-two.png" alt="#" class="feedback-img">
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    input, textarea {
        background-color: white !important;
    }
    input {
        width: 360px !important;
        height: 42px !important;
    }
</style>