import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

//initial state
const state = {
    added: [],
    all: [
        {
            id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
            name: 'Amazon Echo',
            description: 'A speaker with cloud connection for home assistance',
            price: '80'
        },
        {
            id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
            name: 'Philips Sonicare Flexcare',
            description: 'Sonic toothbrush with pressure sensitive head for gum health',
            price: '59.99'
        },
        {
            id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
            name: 'Gunnar Intercept Black Advanced Gaming Glasses ',
            description: 'Eye blue light and screen strain preventing glasses',
            price: '34.20'
        }
    ]
}

//getters
const getters = {
    allProducts: state => state.all, // would need action/mutation if data fetched async
    getNumberOfProducts: state => (state.all) ? state.all.length : 0,
    cartProducts: state => {
        return state.added.map(({ id, quantity }) => {
            const product = state.all.find(p => p.id === id)

            return {
                name: product.name,
                price: product.price,
                quantity
            }
        })
    }
}

// actions
const actions = {
    addToCart({ commit }, product){
        commit(types.ADD_TO_CART, {
            id: product.id
        })
    }
}

// mutations
const mutations = {


    [types.ADD_TO_CART] (state, { id }) {
        const record = state.added.find(p => p.id === id)

        if(!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    }
}

//one store for the entire application
export default new Vuex.Store({
    state,
    strict: debug,
    getters,
    actions,
    mutations
})
