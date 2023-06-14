import { defineStore } from 'pinia'

import {products} from "~/apollo/queries/products";

import { useClient } from '@/utilities/apollo-client'
import {
    FilterEqualTypeInput

} from '@/types/types'

interface ProductState {
  items : []
}



const FilterEqualTypeInput: FilterEqualTypeInput
    =   {
    in: ['1'],
    eq: 'Mw=='};



interface ProductActions {
    getProduct(): Promise<ProductState>

}

type GetterFunctions =
    | 'lineItems'


type ProductGetters = {
    [key in GetterFunctions]: (state: ProductState) => any
}



export const useProduct = defineStore<'product', ProductState, ProductGetters, ProductActions>(
    'product',
    {
        state: () => ({
            items: []

        }),


        actions: {




         /*   async ProductCreate() {
                try {
                    this.loading = true


                    const { data } = await useClient().mutate<CartMutCreate>({
                        mutation: cartCreate,
                    })
                    if (!data.cartCreate.cart.id) {
                        throw 'cartCreate: error'
                    }
                    const { cart } = data.cartCreate
                    this.cart = cart
                } catch (e) {
                    return e
                } finally {
                    this.loading = false
                    return this
                }
            },*/
            async getProduct() {


                const {result, error} = useQuery(products,{

                    filter: {

                        category_uid : FilterEqualTypeInput

                    },

                });

            },



        },
        getters: {
            lineItems: (state) => state.items,

        },

    }
)



