import {products} from '~~/apollo/queries/products'

import {
    FilterEqualTypeInput
} from '@/types/types'



const eq = ref('')


const state = reactive({
    products: [],
    eq : 'Mw=='
})



const FilterEqualTypeInput: FilterEqualTypeInput
    =   {
    in: ['1'],
    eq: state.eq
};


console.log(FilterEqualTypeInput)

export function useProducts() {



    async function fetchProducts() {



        const {result, error} = useQuery(products,{

            filter: {

                category_uid : FilterEqualTypeInput

            },

        });



        const productsArray =  result.value?.products.items

        state.products = productsArray

        console.log()

    }

    return {
        ...toRefs(state),
        fetchProducts,

    }
}