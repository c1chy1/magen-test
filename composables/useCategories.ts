import {categories} from '~~/apollo/queries/categories'

import {
    Category,
    CategoryFilterInput,
    FilterMatchTypeInput
} from '@/types/types'
import {products} from "~/apollo/queries/products";


const state = reactive({
    categories: [],

})





/*
type CategoryFilterInput = {
   name: FilterMatchTypeInput
}
*/



export function useCategories() {



    async function fetchCategories() {


        const {result, error} = useQuery(categories);

        state.categories =  result.value?.categories?.items[0].children


    }

/*
    const filteredProducts = computed(() =>
        state.products.filter(
            product =>
                product.products.items.name.toLowerCase().includes(filter.value.toLowerCase())
        ),

    )*/


    const formattedCategories = computed(() => {

        state.categories
                .map(({uid, name}) => ({
                    uid,
                    name

                }))
        }

    )

/*

    const formattedProducts = computed(() =>
         state.products
                   .map(({ items, name }) => ({
                       items: state.products,
                       name

                   }))

    )
*/


    return {
        ...toRefs(state),
        fetchCategories,
        formattedCategories,

    }
}