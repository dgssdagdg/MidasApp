<template>
    <header class="header">
        <div class="container">
            <div class="header-row">
                <router-link to="/" class="header-logo">
                    <img src="@/assets/img/logo.png" alt="Logo">
                </router-link>
                <nav class="header-nav">
                    <ul class="header-list">
                        <router-link
                            v-for="link in links"
                            tag="li"
                            :to="link.url"
                            :key="link.title"
                            :class="{'header-item':link.subList}"
                        >
                            <a href="#" class="header-link">
                                {{ link.title }}
                                <span v-if="link.imgSrc">
                                    <img v-bind:src="link.imgSrc" alt="#">
                                </span>
                            </a>
                            <div v-if="link.subList" class="header-sub-list">
                                <router-link
                                    v-for="sublink in link.subList"
                                    :key="sublink.title"
                                    :to='sublink.url'
                                    class="header-sub-link">
                                        {{ sublink.title }}
                                </router-link>
                            </div>
                        </router-link>
                    </ul>
                </nav>
                <div class="header-right">
                    <div class="header-search">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.10932 18.2186C14.1403 18.2186 18.2186 14.1402 18.2186 9.10931C18.2186 4.07838 14.1403 0 9.10932 0C4.07834 0 0 4.07838 0 9.10931C0 14.1402 4.07834 18.2186 9.10932 18.2186ZM9.10932 16.0752C12.9565 16.0752 16.0753 12.9565 16.0753 9.10931C16.0753 5.26212 12.9565 2.14337 9.10932 2.14337C5.26214 2.14337 2.14337 5.26212 2.14337 9.10931C2.14337 12.9565 5.26214 16.0752 9.10932 16.0752Z" fill="white"/>
                            <path d="M15.4475 13.9319L24 22.4844L22.4844 24L13.9319 15.4475L15.4475 13.9319Z" fill="white"/>
                            </svg>
                            
                    </div>
                    <div class="user-dropdown">
                        <div ref="dropdown" data-target='dropdown1' class="header-user dropdown-trigger">
                            <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 9.28132C4.98992 9.28132 2.93347 7.19149 2.93347 4.64066C2.96371 2.08983 4.98992 0 7.5 0C10.0101 0 12.0665 2.08983 12.0665 4.64066C12.0665 7.19149 10.0403 9.28132 7.5 9.28132ZM7.5 2.08983C6.10887 2.08983 4.98992 3.22695 4.98992 4.64066C4.98992 6.05437 6.10887 7.19149 7.5 7.19149C8.89113 7.19149 10.0101 6.05437 10.0101 4.64066C10.0101 3.22695 8.89113 2.08983 7.5 2.08983Z" fill="white"/>
                                <path d="M12.9738 24V18.2553C12.9738 15.182 10.5242 12.7234 7.53024 12.7234C4.50605 12.7234 2.08669 15.2128 2.08669 18.2553V24H0V18.2553C0 14.0449 3.35685 10.6336 7.5 10.6336C11.6431 10.6336 15 14.0449 15 18.2553V24H12.9738Z" fill="white"/>
                            </svg>
                        </div>
                        <div id='dropdown1' class='dropdown-content'>
                            <a class="dropdown-link" href="#">{{name}}</a>
                            <a @click.prevent="logout" class="dropdown-link" href="#">Выйти</a>
                        </div>
                    </div>

                    <router-link to="/basket" class="header-cart">
                        <span v-if="FoodInfos" class="header-cart-colvo">{{ colvoItem(FoodInfos) }}</span>
                        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.44457 25L1.6327 13.8197H0V7.50297H6.22844L9.2822 0L11.0358 0.682088L8.2542 7.53262H18.6853L15.9339 0.682088L17.6876 0L20.7413 7.50297H26.9698V13.8197H25.3371L22.5252 25H4.44457ZM21.0739 23.1613L23.4323 13.8493H3.56775L5.92609 23.1613H21.0739ZM25.0952 11.981V9.40095H1.90482V11.981H25.0952Z" fill="white"/>
                            <path d="M14.4523 15.3914H12.5475V22.064H14.4523V15.3914Z" fill="white"/>
                            <path d="M18.0806 15.3914H16.1758V22.064H18.0806V15.3914Z" fill="white"/>
                            <path d="M10.8242 15.3914H8.91936V22.064H10.8242V15.3914Z" fill="white"/>
                        </svg>
                    </router-link>
                    <div class="menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="menu">
        <router-link to="/" class="header-logo">
            <img src="@/assets/img/logo.png" alt="Logo">
        </router-link>
        <div class="header-user">
            <div class="header-user-block">
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 9.28132C4.98992 9.28132 2.93347 7.19149 2.93347 4.64066C2.96371 2.08983 4.98992 0 7.5 0C10.0101 0 12.0665 2.08983 12.0665 4.64066C12.0665 7.19149 10.0403 9.28132 7.5 9.28132ZM7.5 2.08983C6.10887 2.08983 4.98992 3.22695 4.98992 4.64066C4.98992 6.05437 6.10887 7.19149 7.5 7.19149C8.89113 7.19149 10.0101 6.05437 10.0101 4.64066C10.0101 3.22695 8.89113 2.08983 7.5 2.08983Z" fill="white"/>
                    <path d="M12.9738 24V18.2553C12.9738 15.182 10.5242 12.7234 7.53024 12.7234C4.50605 12.7234 2.08669 15.2128 2.08669 18.2553V24H0V18.2553C0 14.0449 3.35685 10.6336 7.5 10.6336C11.6431 10.6336 15 14.0449 15 18.2553V24H12.9738Z" fill="white"/>
                </svg>
                <div class="header-user-name">{{ name }}</div>
            </div>
            <img @click.prevent="logout" style="height: 30px; width: 30px;" src="@/assets/img/leave.png" alt="Leave" class="header-user-leave">
        </div>
        <nav class="header-nav">
            <ul class="header-list">
                <router-link
                    v-for="link in links"
                    tag="li"
                    :to="link.url"
                    :key="link.title"
                    :class="{'header-item':link.subList}"
                >
                    <a href="#" class="header-link">
                        {{ link.title }}
                        <span v-if="link.imgSrc">
                            <img v-bind:src="link.imgSrc" alt="#">
                        </span>
                    </a>
                    <div v-if="link.subList" class="header-sub-list">
                        <router-link
                            v-for="sublink in link.subList"
                            :key="sublink.title"
                            :to='sublink.url'
                            class="header-sub-link">
                                {{ sublink.title }}
                        </router-link>
                    </div>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data: () => ({
            links: [
                {
                    title: 'АКЦИИ',
                    url: '/',
                    imgSrc: require('@/assets/img/fire.png'),
                },
                {
                    title: 'ГОРЯЧЕЕ',
                    url: '/menu',
                    imgSrc: require('@/assets/img/arrow.png'),
                    subList: [
                        {title: 'Горячие блюда', url: '/menu'},
                        {title: 'Супы', url: '/menu'},
                        {title: 'НАПИТКИ', url: '/menu'}
                    ],
                },
                {
                    title: 'ХОЛОДНОЕ',
                    url: '/',
                    imgSrc: require('@/assets/img/arrow.png'),
                    subList: [
                        {title: 'СВЕЖАЯ ВЫПЕЧКА', url: '/'},
                        {title: 'ДЕСЕРТЫ', url: '/'},
                        {title: 'Хинкали', url: '/'}
                    ],
                },
                {
                    title: 'СВЕЖАЯ ВЫПЕЧКА',
                    url: '/',
                },
                {
                    title: 'ДЕСЕРТЫ',
                    url: '/',
                },
                {
                    title: 'НАПИТКИ',
                    url: '/',
                },
            ],
        }),
        methods: {
            async logout() {
                await this.$store.dispatch('logout')
                this.$router.push('/login?message=logout')
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
        },
        computed: {
          name() {
            return this.$store.getters.info.name
          },
          FoodInfos() {
            return this.$store.getters.infoBasket
          },
        },
        mounted() {
            M.Dropdown.init(this.$refs.dropdown, {
                constrainWidth: true
            })
            document.addEventListener('click', function(e) {
                let menuBtn = document.querySelector('.menu-btn');
                let menu = document.querySelector('.menu');
                if (menuBtn && e.target.closest('.menu-btn')) {
                    menuBtn.classList.toggle('active');
                    menu.classList.toggle('active');
                } else if (menuBtn && !e.target.closest('.menu') && menu.closest('.active')) {
                    menuBtn.classList.remove('active');
                    menu.classList.remove('active');
                }
            })
        },
    }
</script>

<style scoped>

nav {
    color: #fff;
    background-color: transparent;
    width: auto;
    height: auto;
    line-height: normal;
    box-shadow: none;
}
nav ul a {
    padding: 0 0;
}

.dropdown-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: auto !important;
    padding: 20px 30px 20px 10px !important;
    background-color: #fff;
    opacity: 0;
    position: absolute;
    top: 110% !important;
    left: auto !important;
}
.dropdown-link {
    color: #000;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    &:hover {
        text-decoration: underline;
    }
}
.user-dropdown {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-cart-colvo {
    color: #000;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    background-color: #FBD13E;
    padding: 4px 7px;
    border-radius: 2px;
    position: absolute;
    top: -5px;
    left: -9px;
}
.header-cart {
    position: relative;
}
.header-link span {
    line-height: 0;
}
@media(max-width: 767px) {
    .user-dropdown {
        display: none;
}
}
</style>