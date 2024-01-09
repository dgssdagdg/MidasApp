import { getDatabase, ref, onValue  } from "firebase/database";
export default {
    state: {
        info: {},
    },
    mutations: { 
        setInfo(state, info) {
            state.info = info
        },
        clearInfo(state) {
            state.info = {}
        },
    },
    actions: {
        async fetchInfo({dispatch, commit}) {
            const db = getDatabase()
            try {
                const uid = await dispatch('getUid')
                const InfoDb = ref(db, 'users/' + uid + '/info');
                onValue(InfoDb, (data) => {
                    const info = data.val();
                    commit('setInfo', info)
                });
            } catch(e) {
                
            }
        },
    },
    getters: {
        info: s => s.info,
    }
}