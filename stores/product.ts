import { defineStore } from 'pinia'

import {products} from "~/apollo/queries/products";

import { useClient } from '@/utilities/apollo-client'
import {
    FilterEqualTypeInput,
    ProductInterface,
    ProductAttributeFilterInput

} from '@/types/types'


interface ProductState {
    products:  ProductInterface
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
export interface FacetSearchParams {
    categorySlug?: string;
    rootCatSlug?: string;
    term?: string;
    page?: number;
    itemsPerPage?: number;
    sort?: string;
    filters?: Record<string, string[]>;
    metadata?: any;
    [x: string]: any;
}

const attributeFilter : Record<string, { from: number, to: number } | { eq: unknown } | { in: unknown }> = {};


 const params = {

    filters : {

        category_uid: {

            eq : "",
            in: ''
        }
    }
 }


const inputFilters = params?.filters ?? {};

const categoryFilter = {
    category_uid: { in: [params.filters.category_uid ?? []] },
};


console.log(categoryFilter)


export const useProduct = defineStore<'product', ProductState, ProductGetters, ProductActions>(
    'product',
    {
        state: () => ({

             products : []





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

                const FilterEqualTypeInput: FilterEqualTypeInput
                    =   {
                    in: ['1'],
                    eq: "Mw=="};
                const {result, error} = useQuery(products,{

                    filter: ProductAttributeFilterInput
                });
                const productsArray =  result.value?.products


                console.log(productsArray)

            },



        },
        getters: {
            products: (state) => state.products.items,

        },

    }
)



