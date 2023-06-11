export interface Category {

match : [string]

}



export interface  FilterEqualTypeInput {

    in : [string]
    eq: string

}

export interface  ProductAttributeFilterInput {

category_uid: FilterEqualTypeInput


}

export interface FilterMatchTypeInput {
    /** One or more words to filter on */
    match?: Maybe<Scalars['String']>;
}
export interface ProductCard {
     name: string
}
export interface CategoryFilterInput {
    /** Filter by the unique category ID for a `CategoryInterface` object. */
    category_uid?: Maybe<FilterEqualTypeInput>;
    /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
    ids?: Maybe<FilterEqualTypeInput>;
    /** Filter by the display name of the category. */
    name?: Maybe<FilterMatchTypeInput>;
    /** Filter by the unique parent category ID for a `CategoryInterface` object. */
    parent_category_uid?: Maybe<FilterEqualTypeInput>;
    /** Filter by the unique parent category ID for a `CategoryInterface` object. */
    parent_id?: Maybe<FilterEqualTypeInput>;
    /** Filter by the part of the URL that identifies the category. */
    url_key?: Maybe<FilterEqualTypeInput>;
    /** Filter by the URL path for the category. */
    url_path?: Maybe<FilterEqualTypeInput>;
}

