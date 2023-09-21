import {defineStore} from 'pinia'
import {ProductInterface} from "~/types/types";

export const useCategoryStore =


    defineStore('categoryStore', () => {
        const categories = ref([])
        let products = reactive([] as Array<ProductInterface>)
const categoryID = ref('')


        const setCategory = (fetchedCategory: any) => {
            categories.value = fetchedCategory


        }
        const setCategoryID = (fetchedCategory: any) => {

            categoryID.value = fetchedCategory

        }


            const setProducts = (fetchedProducts: any) => {
            products = fetchedProducts

        }
        return {setCategory, setCategoryID,setProducts, categories, categoryID ,products}
    })