
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};

export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
}

export interface Category {

match : [string]

}

export interface ProductInterface {
    name:string

}


export interface  FilterEqualTypeInput {

    in : [string]
    eq: string

}

export interface  FilterEqualTypeInput {

    in : [string]
    eq: string

}

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


export interface FilterTypeInput {
    /** Equals */
    eq?: InputMaybe<Scalars['String']>;
    finset?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** From. Must be used with 'to' */
    from?: InputMaybe<Scalars['String']>;
    /** Greater than */
    gt?: InputMaybe<Scalars['String']>;
    /** Greater than or equal to */
    gteq?: InputMaybe<Scalars['String']>;
    /** In. The value can contain a set of comma-separated values */
    in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters */
    like?: InputMaybe<Scalars['String']>;
    /** Less than */
    lt?: InputMaybe<Scalars['String']>;
    /** Less than or equal to */
    lteq?: InputMaybe<Scalars['String']>;
    /** More than or equal to */
    moreq?: InputMaybe<Scalars['String']>;
    /** Not equal to */
    neq?: InputMaybe<Scalars['String']>;
    /** Not in. The value can contain a set of comma-separated values */
    nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Not null */
    notnull?: InputMaybe<Scalars['String']>;
    /** Is null */
    null?: InputMaybe<Scalars['String']>;
    /** To. Must be used with 'from' */
    to?: InputMaybe<Scalars['String']>;
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

