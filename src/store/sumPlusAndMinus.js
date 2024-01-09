import { getDatabase, ref, update} from "firebase/database";
export default {
    actions: {
        async sumMinus({dispatch, commit}, {id, sum}) {
            const db = getDatabase()
            try {
                const uid = await dispatch('getUid')
                const updates = {};
                updates['/users/' + uid + '/basket/id' + id + '/sum'] = sum - 1;
                return update(ref(db), updates);
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async sumPlus({dispatch, commit}, {id, sum}) {
            const db = getDatabase()
            try {
                const uid = await dispatch('getUid')
                const updates = {};
                updates['/users/' + uid + '/basket/id' + id + '/sum'] = sum + 1;
                return update(ref(db), updates);
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}