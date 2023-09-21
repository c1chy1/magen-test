export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
}


export interface CategoryListQuery {

    categories:
        {
            items:
                Array<{
                name?: string,
                    uid: string,
                    children: Array<{
                        name: string,
                        uid: string,
                    }>}>}
    products?: CategoryProducts,

}


export interface Products {
    products: Product[]
}


export interface Image {
 url: string
}
export interface Money {

    value : Scalars['Float'];
    currency : string

}
export interface ProductPrice {
    regular_price: Money
}
export interface PriceRange {
    maximum_price: ProductPrice
}

export interface Product {

    items?: [ProductInterface]
        name:  Scalars['String'];
        uid:  Scalars['String'];
        image:  Image
    price_range: PriceRange,
    products: []
}

export interface ProductInterface {
    id?: string,
    name?: string,
    uid?: string,
    products?: Product[]

}
export interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordCheck?: string,
    id: string,
    role: number,
}

export enum SortEnum {
    ASC = 'ASC',
    DESC = 'DESC',
}

export type ProductSortInput = {
    createdAt: string;
};

export type ProductAttributeSortInput = {
    name: SortEnum;
    position: SortEnum;
    price: SortEnum;
    relevance: SortEnum;
};
export interface ProductAttributeFilterInput {
    /** Attribute label: Activity */
    activity?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Category Gear */
    category_gear?: InputMaybe<FilterEqualTypeInput>;
    /** Deprecated: use `category_uid` to filter product by category id. */
    category_id?: InputMaybe<FilterEqualTypeInput>;
    /** Filter product by the unique ID for a `CategoryInterface` object. */
    category_uid?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Climate */
    climate?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Collar */
    collar?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Color */
    color?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Description */
    description?: InputMaybe<FilterMatchTypeInput>;
    /** Attribute label: Eco Collection */
    eco_collection?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Erin Recommends */
    erin_recommends?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Features */
    features_bags?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Format */
    format?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Gender */
    gender?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Material */
    material?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Product Name */
    name?: InputMaybe<FilterMatchTypeInput>;
    /** Attribute label: New */
    new?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Pattern */
    pattern?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Performance Fabric */
    performance_fabric?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Price */
    /** Attribute label: Sale */
    sale?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Short Description */
    short_description?: InputMaybe<FilterMatchTypeInput>;
    /** Attribute label: Size */
    size?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: SKU */
    sku?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Sleeve */
    sleeve?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Strap/Handle */
    strap_bags?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Style Bags */
    style_bags?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Style Bottom */
    style_bottom?: InputMaybe<FilterEqualTypeInput>;
    /** Attribute label: Style General */
    style_general?: InputMaybe<FilterEqualTypeInput>;
    /** The part of the URL that identifies the product */
    url_key?: InputMaybe<FilterEqualTypeInput>;
}
export type CategoryProducts = {

    categories : {

        items: [ProductInterface]
    }


    total_count: number
}

export type CategoryInterface = {
    created_at: string
    description: string
    id: number
    image: string
    include_in_menu: number
    level: number
    meta_description: string
    meta_keywords: string
    meta_title: string
    name: string
    path: string
    position: number
    product_count: number
    products: CategoryProducts
    updated_at: string
    url_key: string
    url_path: string
    url_suffix: string
}

export interface CategoryTree extends CategoryInterface {
    children: [CategoryTree]
}

export type categoryList = [CategoryTree]

export interface FilterEqualTypeInput {

    eq?: string
    in?: string[]

}

export interface CategoryResult {
    /** A list of categories that match the filter criteria. */
    items?: Maybe<Array<Maybe<CategoryTree>>>;
    /** The total number of categories that match the criteria. */
    total_count?: Maybe<Scalars['Int']>;
}

export interface CategoryFilterInput {
    search?: string | null;
    ids?: InputMaybe<FilterEqualTypeInput>;
    category_uid?: FilterEqualTypeInput
}

/*export type CategoryProducts = {
    items: [ProductInterface];
    total_count: number;
};

export type CategoryInterface = {

    uid: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    products?: CategoryProducts,



};*/

/*export interface CategoryTree extends CategoryInterface {
    uid: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    children?: [CategoryTree];

}*/


export type Category = [CategoryTree]

export interface FilterMatchTypeInput {
    /** One or more words to filter on */
    match?: Maybe<Scalars['String']>;
}

/*
export type CategoryFilterInput = {
    /!** Filter by category ID that uniquely identifies the category. *!/
    ids?: Maybe<FilterEqualTypeInput>
    /!** Filter by the display name of the category. *!/
    name?: Maybe<FilterMatchTypeInput>
    /!** Filter by the part of the URL that identifies the category. *!/
    url_key?: Maybe<FilterEqualTypeInput>
    /!** Filter by the URL path for the category. *!/
    url_path?: Maybe<FilterEqualTypeInput>
}
*/

