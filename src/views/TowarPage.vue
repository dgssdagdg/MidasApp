<template>
    <section class="towar">
        <div class="container">
            <h2 class="towar-title _title">Хинкали жаренные</h2>
            <div class="hot-menu-pages">
                <a href="#" class="hot-menu-page-prev">Главная</a>
                <span>/</span>
                <a href="#" class="hot-menu-page-prev">Хинкали</a>
                <span>/</span>
                <div class="hot-menu-page-this">Хинкали жаренные</div>
            </div>
            <div class="towar-body">
                <div class="towar-image">
                    <img class="towar-image-photo" :src="filter(PageInfo, $route.params.id).imgSrc"   alt="Хинкали жаренные">
                </div>
                <div class="towar-content">
                    <div class="towar-views">
                        <div class="towar-views-text">Разновидность:</div>
                        <div class="towar-views-blocks">
                            <div class="towar-views-block">
                                <div class="towar-views-left">
                                    <div class="towar-views-name">С сыром </div>
                                    <div class="item-gram">80</div>
                                </div>
                                <div class="towar-views-right">
                                    <div class="towar-views-colvos colvos">
                                        <div class="towar-views-minus colvos-p colvos-minus ">
                                            <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3839 2.53966L0 2.53966V0.844238H11.3839L11.3839 2.53966Z" fill="white"/>
                                                </svg>
                                                
                                        </div>
                                        <div class="towar-views-total colvos-total">1шт</div>
                                        <div class="towar-views-plus colvos-plus colvos-p">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3839 6.53967L0 6.53967V4.84425H11.3839L11.3839 6.53967Z" fill="white"/>
                                                <path d="M6.54015 0L6.54015 11.3839L4.84473 11.3839V0H6.54015Z" fill="white"/>
                                                </svg>
                                                
                                        </div>
                                    </div>
                                    <div class="towar-views-box">
                                        <div class="towar-views-price item-price">125 ₽</div>
                                        <a href="#" class="item-btn">
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
                            <div class="towar-views-block">
                                <div class="towar-views-left">
                                    <div class="towar-views-name">Традиционные</div>
                                    <div class="item-gram">80</div>
                                </div>
                                <div class="towar-views-right">
                                    <div class="towar-views-colvos colvos">
                                        <div class="towar-views-minus colvos-p colvos-minus ">
                                            <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3839 2.53966L0 2.53966V0.844238H11.3839L11.3839 2.53966Z" fill="white"/>
                                                </svg>
                                                
                                        </div>
                                        <div class="towar-views-total colvos-total">1шт</div>
                                        <div class="towar-views-plus colvos-plus colvos-p">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3839 6.53967L0 6.53967V4.84425H11.3839L11.3839 6.53967Z" fill="white"/>
                                                <path d="M6.54015 0L6.54015 11.3839L4.84473 11.3839V0H6.54015Z" fill="white"/>
                                                </svg>
                                                
                                        </div>
                                    </div>
                                    <div class="towar-views-box">
                                        <div class="towar-views-price item-price">115 ₽</div>
                                        <a href="#" class="item-btn">
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
                            <div class="towar-views-block">
                                <div class="towar-views-left">
                                    <div class="towar-views-name">Из баранины с тархуном</div>
                                    <div class="item-gram">80</div>
                                </div>
                                <div class="towar-views-right">
                                    <div class="towar-views-colvos colvos">
                                        <div class="towar-views-minus colvos-p colvos-minus ">
                                            <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3839 2.53966L0 2.53966V0.844238H11.3839L11.3839 2.53966Z" fill="white"/>
                                                </svg>
                                                
                                        </div>
                                        <div class="towar-views-total colvos-total">1шт</div>
                                        <div class="towar-views-plus colvos-plus colvos-p">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3839 6.53967L0 6.53967V4.84425H11.3839L11.3839 6.53967Z" fill="white"/>
                                                <path d="M6.54015 0L6.54015 11.3839L4.84473 11.3839V0H6.54015Z" fill="white"/>
                                                </svg>
                                                
                                        </div>
                                    </div>
                                    <div class="towar-views-box">
                                        <div class="towar-views-price item-price">115 ₽</div>
                                        <a href="#" class="item-btn">
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
                    <div class="towar-desciption">
                        <div class="towar-desciption-title">Описание:</div>
                        <div class="towar-desciption-text"> {{ filter(PageInfo, $route.params.id).description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="product-addition">
        <div class="container">
            <div class="product-addition-row">
                <h3 class="product-addition-tilte">С этим блюдом часто заказывают:</h3>
                <div class="product-addition-body">
                    <div class="popular-item item">
                        <div class="popular-img item-img">
                            <img src="@/assets/img/popular/img-one.jpg" alt="Хачапури по-аджарски">
                        </div>
                        <div class="popular-name item-name">Хачапури по-аджарски</div>
                        <div class="popular-gram item-gram">430 г</div>
                        <div class="popular-text item-text">Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.</div>
                        <div class="popular-end item-end">
                            <div class="popular-price item-price">470 ₽</div>
                            <div class="popular-btn item-btn">
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.28475 24.1011L1.57399 13.3228H0V7.23318H6.00448L8.94843 0L10.639 0.657562L7.9574 7.26177H18.0135L15.361 0.657562L17.0516 0L19.9955 7.23318H26V13.3228H24.426L21.7152 24.1011H4.28475ZM20.3161 22.3285L22.5897 13.3514H3.43946L5.71301 22.3285H20.3161ZM24.1928 11.5502V9.06291H1.83632V11.5502H24.1928Z" fill="black"/>
                                    <path d="M13.9327 14.838H12.0963V21.2707H13.9327V14.838Z" fill="black"/>
                                    <path d="M17.4305 14.838H15.5942V21.2707H17.4305V14.838Z" fill="black"/>
                                    <path d="M10.435 14.838H8.59865V21.2707H10.435V14.838Z" fill="black"/>
                                    </svg>
                                    
                            </div>
                        </div>
                    </div>
                    <div class="popular-item item">
                        <div class="popular-img item-img">
                            <img src="@/assets/img/popular/img-four.jpg" alt="Ланч низкокалорийный">
                        </div>
                        <div class="popular-name item-name">Ланч низкокалорийный</div>
                        <div class="popular-gram item-gram">450 г</div>
                        <div class="popular-text item-text">Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс</div>
                        <div class="popular-end item-end">
                            <div class="popular-prices item-prices">
                                <div class="popular-old-price item-old-price">1 435 ₽</div>
                                <div class="popular-price item-price">1 148 ₽</div>
                            </div>
                            
                            <div class="popular-btn item-btn">
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.28475 24.1011L1.57399 13.3228H0V7.23318H6.00448L8.94843 0L10.639 0.657562L7.9574 7.26177H18.0135L15.361 0.657562L17.0516 0L19.9955 7.23318H26V13.3228H24.426L21.7152 24.1011H4.28475ZM20.3161 22.3285L22.5897 13.3514H3.43946L5.71301 22.3285H20.3161ZM24.1928 11.5502V9.06291H1.83632V11.5502H24.1928Z" fill="black"/>
                                    <path d="M13.9327 14.838H12.0963V21.2707H13.9327V14.838Z" fill="black"/>
                                    <path d="M17.4305 14.838H15.5942V21.2707H17.4305V14.838Z" fill="black"/>
                                    <path d="M10.435 14.838H8.59865V21.2707H10.435V14.838Z" fill="black"/>
                                    </svg>
                                    
                            </div>
                        </div>
                    </div>
                    <div class="popular-item item">
                        <div class="popular-img item-img">
                            <img src="@/assets/img/popular/img-five.jpg" alt="Хачапури по-мегрельски">
                        </div>
                        <div class="popular-name item-name">Хачапури по-мегрельски</div>
                        <div class="popular-gram item-gram">430 г</div>
                        <div class="popular-text item-text">Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи.</div>
                        <div class="popular-end item-end">
                            <div class="popular-prices item-prices">
                                <div class="popular-price item-price">490 ₽</div>
                            </div>
                            
                            <a href="#" class="popular-btn item-btn">
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
        
    </section>
</template>

<script>
export default {
    computed: {
        PageInfo() {
            return this.$store.getters.TowarPageInfo
        },
    },
    methods: {
        filter(PageInfo, id) {
            let am = ''
            const result = [...Object.values(PageInfo)].filter(function(number) {
                if (number.id == id) {
                    am = number
                }
            });
            return am
        }
    }
}
</script>

<style scoped>
.towar-image-photo {
    object-fit: cover;
}
</style>