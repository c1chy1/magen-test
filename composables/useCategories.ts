
import {queryCategories} from "~/apollo/queries/categories";
import {queryProducts} from "~/apollo/queries/products";

import { useCategoryStore } from '~~/store/store'
import { storeToRefs } from 'pinia'
import {provideApolloClient, useApolloClient} from "@vue/apollo-composable";
import {CategoryListQuery, CategoryProducts, ProductInterface} from "~/types/types";




export const useCategories = () => {

    useApolloClient()
    provideApolloClient(apolloClient)


    const selectedVariation = ref()
    const { setCategory , setCategoryID , setProducts} = useCategoryStore()
    const { categories , categoryID, products } = storeToRefs(useCategoryStore())

    const state = reactive({
        products: [] as Array<ProductInterface>,
    })

    const fetchCategories = async () => {
        try {
            const { data, error } =
                await useAsyncQuery<CategoryListQuery>(queryCategories )
            if (error.value) {
                console.log(error.value)
            }
            if (data.value) {

                setCategory(data.value?.categories.items[0].children)
                setCategoryID(data.value?.categories.items[0].uid)

                return categories
            }
        } catch (error) {
            return error
        }
    }

    const fetchByCategories = async (CategoryFilterInput : any) => {



        const variables = {

            filters :    CategoryFilterInput

        }

        try {
            const { data, error, execute } =
                await useAsyncQuery<CategoryProducts>(queryProducts , variables )
            if (error.value) {
                console.log(error.value)
            }
            if (data.value) {


                console.log(data.value)

                state.products = data.value?.categories.items.map((category : any) => ({

                    uid: category.uid,
                    name: category.name,
                    products: category.products.items
                }))
                setProducts(state.products)

products.value = state.products


                return products
            }
        } catch (error) {
            return error
        }

            }
    return {
        ...toRefs(state),
        fetchCategories,
        fetchByCategories,
        categories,
        categoryID,
        products,
         state
    }
}