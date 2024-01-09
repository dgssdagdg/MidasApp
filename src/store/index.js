import { createStore } from 'vuex'
import auth from '@/store/auth'
import info from './info'
import addToCart from './addToCart'
import sumPlusAndMinus from './sumPlusAndMinus'
import cartDeleteItem from './cartDeleteItem'
export default createStore({
  state: {
    error: null
  },
  getters: {
    error: s => s.error
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
  },
  modules: {
    auth, info, addToCart, sumPlusAndMinus, cartDeleteItem
  }
})
