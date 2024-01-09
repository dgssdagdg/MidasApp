import { getDatabase, ref, update} from "firebase/database";
export default {
    actions: {
        async cartDeleteItem({dispatch, commit}, id) {
            const db = getDatabase()
            try {
                const uid = await dispatch('getUid')
                const removes = {};
                removes['/users/' + uid + '/basket/id' + id] = null
                return update(ref(db), removes);
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}