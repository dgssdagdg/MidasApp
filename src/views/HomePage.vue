<template>
    <div class="intro">
        <div class="container">
            <div class="intro-row">
                <div class="intro-content">
                    <div class="intro-content-title">Доставка готовой еды из фермерских продуктов!
                    </div>
                    <div class="intro-content-img">
                        <img src="@/assets/img/intro/points-one.png" alt="Points">
                    </div>
                    <a href="tel:+7 (499) 841-67-29" class="intro-content-tel">+7 (499) 841-67-29</a>
                    <a href="#" class="intro-content-mail">delivery@midas.rest</a>
                </div>
                <div class="intro-img">
                    <img class="intro-img-image" src="@/assets/img/intro/img-bg.jpg" alt="Доставка готовой еды из фермерских продуктов!">
                    <div class="intro-img-block">
                        <div class="intro-img-name">Стейк из лосося с овощами</div>
                        <div class="intro-img-grams item-gram">250 г</div>
                        <div class="intro-img-text">Нежный стейк дикого лосося, пропитанный соком и ароматом слегка обжаренных фермерских овощей</div>
                        <div class="intro-img-end">
                            <div class="intro-img-price item-price">1 200 ₽</div>
                            <a href="#" class="intro-img-btn item-btn">
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.28475 24.1011L1.57399 13.3228H0V7.23318H6.00448L8.94843 0L10.639 0.657562L7.9574 7.26177H18.0135L15.361 0.657562L17.0516 0L19.9955 7.23318H26V13.3228H24.426L21.7152 24.1011H4.28475ZM20.3161 22.3285L22.5897 13.3514H3.43946L5.71301 22.3285H20.3161ZM24.1928 11.5502V9.06291H1.83632V11.5502H24.1928Z" fill="black"/>
                                    <path d="M13.9327 14.838H12.0963V21.2707H13.9327V14.838Z" fill="black"/>
                                    <path d="M17.4305 14.838H15.5942V21.2707H17.4305V14.838Z" fill="black"/>
                                    <path d="M10.435 14.838H8.59865V21.2707H10.435V14.838Z" fill="black"/>
                                    </svg>
                                    
                            </a>
                        </div>
                        <img src="@/assets/img/intro/img-red-bg.png" alt="Red-bg" class="intro-img-block-img">
                    </div>
                    <img src="@/assets/img/intro/points-two.png" alt="Points" class="intro-img-points">
                </div>
            </div>
            <div class="intro-items">
                <div class="intro-item">
                    <div class="intro-item-img">
                        <img src="@/assets/img/intro/item-img.png" alt="Тирамису">
                    </div>
                    <div class="intro-item-content">
                        <div class="intro-item-name item-name">Тирамису</div>
                        <div class="intro-item-gram item-gram">430 г</div>
                        <div class="intro-item-end item-end">
                            <div class="intro-item-price item-price">370 ₽</div>
                            <a href="#" class="intro-item-btn item-btn">
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.28475 24.1011L1.57399 13.3228H0V7.23318H6.00448L8.94843 0L10.639 0.657562L7.9574 7.26177H18.0135L15.361 0.657562L17.0516 0L19.9955 7.23318H26V13.3228H24.426L21.7152 24.1011H4.28475ZM20.3161 22.3285L22.5897 13.3514H3.43946L5.71301 22.3285H20.3161ZM24.1928 11.5502V9.06291H1.83632V11.5502H24.1928Z" fill="black"/>
                                    <path d="M13.9327 14.838H12.0963V21.2707H13.9327V14.838Z" fill="black"/>
                                    <path d="M17.4305 14.838H15.5942V21.2707H17.4305V14.838Z" fill="black"/>
                                    <path d="M10.435 14.838H8.59865V21.2707H10.435V14.838Z" fill="black"/>
                                    </svg>
                                    
                            </a>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
    <section class="popular">
        <div class="container">
            <div class="popular-row">
                <h2 @click="createFoods()" class="popular-title _title">Популярные блюда</h2>
                <div class="popular-body">
                    
                    <my-card :populars="populars" />

                </div>
            </div>
        </div>
    </section>
    <section class="services">
        <div class="container">
            <h2 class="services-title _title">Меню</h2>
            <swiper class="services-sliders"
                :space-between="20"
                :slides-per-view="6"
            >
                <swiper-slide
                        class="swiper-slide"
                        v-for="slide in slides"
                        :key="slide.title"
                    >
                        <a 
                            href="#" 
                            class="services-link"
                            :class="{'services-link-promotion':slide.promotion === 'true'}"    
                        >
                            <div class="services-link-top services-link-img">
                                <img :src="slide.imgSrcOne" :alt="slide.title">
                            </div>
                            <div class="services-link-title">
                                {{slide.title}}
                                <span v-if="slide.imgSrcFire">
                                    <img :src="slide.imgSrcFire" alt="Тридцать">  
                                </span>
                            </div>
                            <div class="services-link-end services-link-img">
                                <img :src="slide.imgSrcTwo" :alt="slide.title">
                            </div>
                        </a>
                </swiper-slide>
                <div class="services-sliders-btns">
                    <div class="services-button-prev">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2.44784e-06 28C3.79974e-06 12.536 12.536 -3.79974e-06 28 -2.44784e-06C43.464 -1.09593e-06 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 1.09593e-06 43.464 2.44784e-06 28ZM1.12001 28C1.12001 13.1546 13.1546 1.12 28 1.12C42.8454 1.12 54.88 13.1546 54.88 28C54.88 42.8454 42.8454 54.88 28 54.88C13.1546 54.88 1.12 42.8454 1.12001 28ZM21.2664 36.4L12.8802 28.0068L12.8869 28.0001L12.88 27.9932L21.2662 19.6L22.7511 21.0861L16.8998 26.9423L41.72 26.9423L41.72 29.044L16.8863 29.044L22.7513 34.9139L21.2664 36.4Z" fill="white"/>
                            </svg>
                            
                    </div>
                    <div class="services-button-next">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28ZM54.88 28C54.88 42.8454 42.8454 54.88 28 54.88C13.1546 54.88 1.12 42.8454 1.12 28C1.12 13.1546 13.1546 1.12 28 1.12C42.8454 1.12 54.88 13.1546 54.88 28ZM34.7336 19.6L43.1198 27.9932L43.1131 27.9999L43.12 28.0068L34.7338 36.4L33.2489 34.9139L39.1002 29.0576H14.28V26.9559H39.1137L33.2487 21.0861L34.7336 19.6Z" fill="white"/>
                            </svg>
                            
                    </div>
                </div>
            </swiper>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
    data: () => ({
        slides: [
            {
                imgSrcOne: require('@/assets/img/services/thirty.png'),
                title: 'Акции',
                url: '',
                imgSrcFire: require('@/assets/img/fire.png'),
                imgSrcTwo: require('@/assets/img/services/twenty.png'),
                promotion: 'true',
            },
            {
                imgSrcOne: require('@/assets/img/services/one-s-one.png'),
                title: 'Горячие блюда',
                url: '',
                imgSrcTwo: require('@/assets/img/services/one-s-two.png'),
            },
            {
                imgSrcOne: require('@/assets/img/services/two-s-one.png'),
                title: 'Хинкали',
                url: '',
                imgSrcTwo: require('@/assets/img/services/two-s-two.png'),
            },
            {
                imgSrcOne: require('@/assets/img/services/three-s-one.png'),
                title: 'Горячие блюда',
                url: '',
                imgSrcTwo: require('@/assets/img/services/three-s-two.png'),
            },
            {
                imgSrcOne: require('@/assets/img/services/four-s-one.png'),
                title: 'Холодные закуски',
                url: '',
                imgSrcTwo: require('@/assets/img/services/four-s-two.png'),
            },
            {
                imgSrcOne: require('@/assets/img/services/five-s-one.png'),
                title: 'Салаты',
                url: '',
                imgSrcTwo: require('@/assets/img/services/five-s-two.png'),
            },
            {
                imgSrcOne: require('@/assets/img/services/four-s-one.png'),
                title: 'Холодные закуски',
                url: '',
                imgSrcTwo: require('@/assets/img/services/four-s-two.png'),
            },
            {
                imgSrcOne: require('@/assets/img/services/four-s-one.png'),
                title: 'Холодные закуски',
                url: '',
                imgSrcTwo: require('@/assets/img/services/four-s-two.png'),
            },
        ],
        popularsr: [
            {
              id: '1',
              imgSrc: require('@/assets/img/popular/img-one.jpg'),
              title: 'Хачапури по-аджарски',
              gram: '430 г',
              description: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
              price: '470',
            },
            {
              id: '2',
              imgSrc: require('@/assets/img/popular/img-two.jpg'),
              title: 'Хинкали традиционные (6шт)',
              gram: '350 г',
              description: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
              price: '495',
              priceOld: '620'
            },
            {
              id: '3',
              imgSrc: require('@/assets/img/popular/img-three.jpg'),
              title: 'Хинкали жаренные (6шт)',
              gram: '350 г',
              description: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
              price: '520',
              priceOld: '650'
            },
            {
              id: '4',
              imgSrc: require('@/assets/img/popular/img-four.jpg'),
              title: 'Ланч низкокалорийный',
              gram: '450 г',
              description: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
              price: '1148',
              priceOld: '1435'
            },
            {
              id: '5',
              imgSrc: require('@/assets/img/popular/img-five.jpg'),
              title: 'Хачапури по-мегрельски',
              gram: '430 г',
              description: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи.',
              price: '490',
            },
            {
              id: '6',
              imgSrc: require('@/assets/img/popular/img-six.jpg'),
              title: 'Котлета с картофелем по-деревенски',
              gram: '350 г',
              description: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
              price: '430',
              priceOld: '410',
              types: '3 вида'
            },
            {
              id: '7',
              imgSrc: require('@/assets/img/popular/img-seven.jpg'),
              title: 'Хинкали традиционные (6шт)',
              gram: '350 г',
              description: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
              price: '495',
              priceOld: '620'
            },
            {
              id: '8',
              imgSrc: require('@/assets/img/popular/img-eight.jpg'),
              title: 'Хачапури по-мегрельски',
              gram: '430 г',
              description: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
              price: '490',
            },
            {
              id: '9',
              imgSrc: require('@/assets/img/popular/img-nine.jpg'),
              title: 'Хачапури по-аджарски',
              gram: '430 г',
              description: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
              price: '470',
            },
            {
              id: '10',
              imgSrc: require('@/assets/img/popular/img-ten.jpg'),
              title: 'Котлета с картофелем по-деревенски',
              gram: '350 г',
              description: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
              price: '430',
              priceOld: '410',
              types: '3 вида'
            },
            {
              id: '11',
              imgSrc: require('@/assets/img/popular/img-eleven.jpg'),
              title: 'Хинкали жаренные (6шт)',
              gram: '350 г',
              description: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
              price: '520',
              priceOld: '650'
            },
            {
              id: '12',
              imgSrc: require('@/assets/img/popular/img-twelf.jpg'),
              title: 'Ланч низкокалорийный',
              gram: '450 г',
              description: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
              price: '1148',
              priceOld: '1435'
            },
        ],
        foods: [
            {
              id: '1',
              imgSrc: require('@/assets/img/popular/img-one.jpg'),
              title: 'Хачапури по-аджарски',
              gram: '430 г',
              description: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
              price: '470',
            },
            {
              id: '2',
              imgSrc: require('@/assets/img/popular/img-two.jpg'),
              title: 'Хинкали традиционные (6шт)',
              gram: '350 г',
              description: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
              price: '495',
              priceOld: '620'
            },
            {
              id: '3',
              imgSrc: require('@/assets/img/popular/img-three.jpg'),
              title: 'Хинкали жаренные (6шт)',
              gram: '350 г',
              description: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
              price: '520',
              priceOld: '650'
            },
            {
              id: '4',
              imgSrc: require('@/assets/img/popular/img-four.jpg'),
              title: 'Ланч низкокалорийный',
              gram: '450 г',
              description: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
              price: '1148',
              priceOld: '1435'
            },
            {
              id: '5',
              imgSrc: require('@/assets/img/popular/img-five.jpg'),
              title: 'Хачапури по-мегрельски',
              gram: '430 г',
              description: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи.',
              price: '490',
            },
            {
              id: '6',
              imgSrc: require('@/assets/img/popular/img-six.jpg'),
              title: 'Котлета с картофелем по-деревенски',
              gram: '350 г',
              description: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
              price: '430',
              priceOld: '410',
              types: '3 вида'
            },
            {
              id: '7',
              imgSrc: require('@/assets/img/popular/img-seven.jpg'),
              title: 'Хинкали традиционные (6шт)',
              gram: '350 г',
              description: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
              price: '495',
              priceOld: '620'
            },
            {
              id: '8',
              imgSrc: require('@/assets/img/popular/img-eight.jpg'),
              title: 'Хачапури по-мегрельски',
              gram: '430 г',
              description: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
              price: '490',
            },
            {
              id: '9',
              imgSrc: require('@/assets/img/popular/img-nine.jpg'),
              title: 'Хачапури по-аджарски',
              gram: '430 г',
              description: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
              price: '470',
            },
            {
              id: '10',
              imgSrc: require('@/assets/img/popular/img-ten.jpg'),
              title: 'Котлета с картофелем по-деревенски',
              gram: '350 г',
              description: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
              price: '430',
              priceOld: '410',
              types: '3 вида'
            },
            {
              id: '11',
              imgSrc: require('@/assets/img/popular/img-eleven.jpg'),
              title: 'Хинкали жаренные (6шт)',
              gram: '350 г',
              description: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
              price: '520',
              priceOld: '650'
            },
            {
              id: '12',
              imgSrc: require('@/assets/img/popular/img-twelf.jpg'),
              title: 'Ланч низкокалорийный',
              gram: '450 г',
              description: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
              price: '1148',
              priceOld: '1435'
            },
            {
              id: '13',
              imgSrc: require('@/assets/img/popular/img-therteenjpg.png'),
              title: 'Оджахури из телятины',
              gram: '430 г',
              description: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
              price: '490',
            },
            {
              id: '14',
              imgSrc: require('@/assets/img/popular/img-fourteen.jpg'),
              title: 'Долма',
              gram: '350 г',
              description: 'Невероятно ароматная начинка из рубленого мяса и свежей зелени, завернутая в виноградные листья, ...',
              price: '410',
              priceOld: '430',
              types: '3 вида'
            },
            {
              id: '15',
              imgSrc: require('@/assets/img/popular/img-fifteen.jpg'),
              title: 'Чихохбили',
              gram: '350 г',
              description: 'Невероятно ароматная начинка из рубленого мяса и свежей зелени, завернутая в виноградные листья, ...',
              price: '490',
            },
            {
              id: '16',
              imgSrc: require('@/assets/img/popular/img-sixteen.jpg'),
              title: 'Лобио по-имеретински',
              gram: '430 г',
              description: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
              price: '490',
            },
            {
              id: '17',
              imgSrc: require('@/assets/img/popular/img-seventeen.jpg'),
              title: 'Стейк из лосося с овощами',
              gram: '430 г',
              description: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
              price: '1200',
            },
        ],
    }),
    components: {
      Swiper,
      SwiperSlide,
    },
    computed: {
        populars() {
            return this.$store.getters.TowarPageInfo
        },
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



        // Функция для добавки обектов на сервер
        // async createFoods() {
        //     const FoodInfo = this.foods
        //     try {
        //         await this.$store.dispatch('createFoods', FoodInfo)
        //     } catch (e) {}
        // }
    },
}
</script>

<style scoped>
.item-view-btn {
    cursor: pointer;
}
</style>