import { defineStore } from 'pinia'
import { FilterEqualTypeInput } from '@/types/types'

export const useProduct = defineStore('product', {
    state: () => ({
        variant: null as FilterEqualTypeInput | null,
    }),
    getters: {},
    actions: {
        setVariant(variant: FilterEqualTypeInput | null) {
            this.variant = variant
        }
    }
})
