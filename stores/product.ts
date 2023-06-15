import { defineStore } from 'pinia'

import {products} from "~/apollo/queries/products";

import { useClient } from '@/utilities/apollo-client'
import {
    FilterEqualTypeInput,
    ProductInterface,
    ProductAttributeFilterInput

} from '@/types/types'

interface Product {
  items : ProductInterface
}

interface ProductState {
    products: Product
}




const ProductAttributeFilterInput: FilterEqualTypeInput
    =   {
    in: ['1'],
    eq: 'Mw=='};


console.log(ProductAttributeFilterInput)

const FilterEqualTypeInput: FilterEqualTypeInput
    =   {
    in: ['1'],
    eq: 'Mw=='};



interface ProductActions {
    productCreate(): Promise<ProductState>
    getProduct(): Promise<ProductState>

}

type GetterFunctions = 'products'


type ProductGetters = {
    [key in GetterFunctions]: (state: ProductState) => any
}



export const useProduct = defineStore<'product', ProductState, ProductGetters, ProductActions>(
    'product',
    {
        state: () => ({

            products: {
                items: {

                    name: ''

                },
                en: '',
                in : ''
            }



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



            async  getProduct() {


                const {result, error} = useQuery(products,{

                    filter: ProductAttributeFilterInput

                });
                const productsArray =  result.value?.products.items

                this.products.items = productsArray


                console.log(this.products.items)

            },



        },
        getters: {
            products: (state) => state.products.items,

        },

    }
)



