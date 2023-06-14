export interface Category {

match : [string]

}

export interface Product {
    items: []



}

export interface  FilterEqualTypeInput {

    in : [string]
    eq: string

}

export interface  ProductAttributeFilterInput {

category_uid: FilterEqualTypeInput


}

export interface FilterMatchTypeInput {

    match?:['String']
}

export interface CategoryFilterInput {

    category_uid?: FilterEqualTypeInput
    /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
    ids?: FilterEqualTypeInput
    /** Filter by the display name of the category. */
    name?: FilterMatchTypeInput
    /** Filter by the unique parent category ID for a `CategoryInterface` object. */
    parent_category_uid?: FilterEqualTypeInput
    /** Filter by the unique parent category ID for a `CategoryInterface` object. */
    parent_id?:FilterEqualTypeInput
    /** Filter by the part of the URL that identifies the category. */
    url_key?: FilterEqualTypeInput
    /** Filter by the URL path for the category. */
    url_path?: FilterEqualTypeInput
}

