import { getDatabase, ref, set, onValue, update} from "firebase/database";
export default {
    state: {
        infoBasket: {},
        TowarPageInfo: {}
    },
    mutations: {
        setInfoTowarPage(state, info) {
            state.TowarPageInfo = info
        },
        clearInfoTowarPage(state) {
            state.TowarPageInfo = {}
        },
        setInfoBasket(state, info) {
            state.infoBasket = info
        },
        clearInfoBasket(state) {
            state.infoBasket = {}
        }
    },
    actions: {
        async addToCart ({dispatch, commit}, {id, title, price, gram, imgSrc, sum}) {
            const db = getDatabase()
            try {
                const uid = await dispatch('getUid')
                const cartId = ref(db, `/users/${uid}/basket/id${id}`);
                let info
                onValue(cartId, (data) => {
                    info = data.val();
                });
                let total = 0
                if (info) {
                    total = info.sum + sum
                }
                if(!info) {
                    total = sum
                }
                await set(ref(db, `/users/${uid}/basket/id${id}`), {
                    id, title, price, gram, imgSrc, sum: total
                });
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async fetchInfoBasket({dispatch, commit}) {
            const db = getDatabase()
            try {
                const uid = await dispatch('getUid')
                const InfoBasketDb = ref(db, `/users/${uid}/basket/`);
                onValue(InfoBasketDb, (data) => {
                    const info = data.val();
                    commit('setInfoBasket', info)
                });
            } catch(e) {
            }
        },
        async toTowarPageInfo({dispatch, commit}) {
            const db = getDatabase()
            try {
                const TowarPageInfo = ref(db, `/foods`);
                onValue(TowarPageInfo, (data) => {
                    const info = data.val();
                    commit('setInfoTowarPage', info)
                });
            } catch(e) {
            }
        },

        // Функция для добавки обектов на сервер
        // async createFoods ({dispatch, commit}, foods) {
        //     const db = getDatabase()
        //     console.log(foods);
        //     try {
        //         for(let i = 0; i < foods.length; i++) {
        //             // await set(ref(db, `/foods`), {
        //             //     id: foods


        //             // })
        //             console.log(foods[i].id);
        //             const updates = {};
        //             updates[`/foods/id${foods[i].id}`] = foods[i]
        //             update(ref(db), updates);
        //         }
        //     } catch (e) {
        //         commit('setError', e)
        //         throw e
        //     }
        // },
    },
    getters: {
        infoBasket: s => s.infoBasket,
        TowarPageInfo: s => s.TowarPageInfo
    }
}