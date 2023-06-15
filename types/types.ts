
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

export interface Aggregation {
    /** Attribute code of the aggregation group. */
    attribute_code: Scalars['String'];
    /** The number of options in the aggregation group. */
    count?: Maybe<Scalars['Int']>;
    /** The aggregation display name. */
    label?: Maybe<Scalars['String']>;
    /** Array of options for the aggregation. */
    options?: Maybe<Array<Maybe<AggregationOption>>>;
    /** The relative position of the attribute in a layered navigation block */
    position?: Maybe<Scalars['Int']>;
}

export interface AggregationOption extends AggregationOptionInterface {
    /** The number of items that match the aggregation option. */
    count?: Maybe<Scalars['Int']>;
    /** Aggregation option display label. */
    label?: Maybe<Scalars['String']>;
    /** The internal ID that represents the value of the option. */
    value: Scalars['String'];
}
export interface AggregationOptionInterface {
    /** The number of items that match the aggregation option. */
    count?: Maybe<Scalars['Int']>;
    /** Aggregation option display label. */
    label?: Maybe<Scalars['String']>;
    /** The internal ID that represents the value of the option. */
    value: Scalars['String'];
}
export interface CategoryInterface {
    available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** Breadcrumbs, parent categories info. */
/*    breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;*/
    /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled */
    canonical_url?: Maybe<Scalars['String']>;
    children_count?: Maybe<Scalars['String']>;
    /** Category CMS Block. */
/*    cms_block?: Maybe<CmsBlock>;*/
    /**
     * Timestamp indicating when the category was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>;
    custom_layout_update_file?: Maybe<Scalars['String']>;
    /** The attribute to use for sorting. */
    default_sort_by?: Maybe<Scalars['String']>;
    /** An optional description of the category. */
    description?: Maybe<Scalars['String']>;
    display_mode?: Maybe<Scalars['String']>;
    filter_price_range?: Maybe<Scalars['Float']>;
    /**
     * An ID that uniquely identifies the category.
     * @deprecated Use the `uid` argument instead.
     */
    id?: Maybe<Scalars['Int']>;
    image?: Maybe<Scalars['String']>;
    include_in_menu?: Maybe<Scalars['Int']>;
    is_anchor?: Maybe<Scalars['Int']>;
    landing_page?: Maybe<Scalars['Int']>;
    /** Indicates the depth of the category within the tree. */
    level?: Maybe<Scalars['Int']>;
    meta_description?: Maybe<Scalars['String']>;
    meta_keywords?: Maybe<Scalars['String']>;
    meta_title?: Maybe<Scalars['String']>;
    /** The display name of the category. */
    name?: Maybe<Scalars['String']>;
    /** Category Path. */
    path?: Maybe<Scalars['String']>;
    /** Category path in store. */
    path_in_store?: Maybe<Scalars['String']>;
    /** The position of the category relative to other categories at the same level in tree. */
    position?: Maybe<Scalars['Int']>;
    /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
    product_count?: Maybe<Scalars['Int']>;
    /** The list of products assigned to the category. */
    products?: Maybe<CategoryProducts>;
    /** The unique ID for a `CategoryInterface` object. */
    uid: Scalars['ID'];
    /**
     * Timestamp indicating when the category was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>;
    /** The url key assigned to the category. */
    url_key?: Maybe<Scalars['String']>;
    /** The url path assigned to the category. */
    url_path?: Maybe<Scalars['String']>;
    /** The part of the category URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>;
}


export interface CategoryProducts {
    /** An array of products that are assigned to the category. */
    items?: Maybe<Array<Maybe<ProductInterface>>>;
    /** An object that includes the page_info and currentPage values specified in the query. */
/*    page_info?: Maybe<SearchResultPageInfo>;*/
    /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
    total_count?: Maybe<Scalars['Int']>;
}
export interface CategoryTree extends CategoryInterface, RoutableInterface {
    available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
    /** Breadcrumbs, parent categories info. */
/*    breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;*/
    /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled */
    canonical_url?: Maybe<Scalars['String']>;
    /** Child categories tree. */
    children?: Maybe<Array<Maybe<CategoryTree>>>;
    children_count?: Maybe<Scalars['String']>;
    /** Category CMS Block. */
/*    cms_block?: Maybe<CmsBlock>;*/
    /**
     * Timestamp indicating when the category was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>;
    custom_layout_update_file?: Maybe<Scalars['String']>;
    /** The attribute to use for sorting. */
    default_sort_by?: Maybe<Scalars['String']>;
    /** An optional description of the category. */
    description?: Maybe<Scalars['String']>;
    display_mode?: Maybe<Scalars['String']>;
    filter_price_range?: Maybe<Scalars['Float']>;
    /**
     * An ID that uniquely identifies the category.
     * @deprecated Use the `uid` argument instead.
     */
    id?: Maybe<Scalars['Int']>;
    image?: Maybe<Scalars['String']>;
    include_in_menu?: Maybe<Scalars['Int']>;
    is_anchor?: Maybe<Scalars['Int']>;
    landing_page?: Maybe<Scalars['Int']>;
    /** Indicates the depth of the category within the tree. */
    level?: Maybe<Scalars['Int']>;
    meta_description?: Maybe<Scalars['String']>;
    meta_keywords?: Maybe<Scalars['String']>;
    meta_title?: Maybe<Scalars['String']>;
    /** The display name of the category. */
    name?: Maybe<Scalars['String']>;
    /** Category Path. */
    path?: Maybe<Scalars['String']>;
    /** Category path in store. */
    path_in_store?: Maybe<Scalars['String']>;
    /** The position of the category relative to other categories at the same level in tree. */
    position?: Maybe<Scalars['Int']>;
    /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
    product_count?: Maybe<Scalars['Int']>;
    /** The list of products assigned to the category. */
    products?: Maybe<CategoryProducts>;
    /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
    redirect_code: Scalars['Int'];
    /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
    relative_url?: Maybe<Scalars['String']>;
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  /*  type?: Maybe<UrlRewriteEntityTypeEnum>;*/
    /** The unique ID for a `CategoryInterface` object. */
    uid: Scalars['ID'];
    /**
     * Timestamp indicating when the category was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>;
    /** The url key assigned to the category. */
    url_key?: Maybe<Scalars['String']>;
    /** The url path assigned to the category. */
    url_path?: Maybe<Scalars['String']>;
    /** The part of the category URL that is appended after the url key */
    url_suffix?: Maybe<Scalars['String']>;
}




export interface FilterEqualTypeInput {
    /** A string to filter on */
    eq?: InputMaybe<Scalars['String']>;
    /** An array of values to filter on */
    in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}


export interface ProductInterface {
    activity?: Maybe<Scalars['String']>;
    /**
     * The attribute set assigned to the product.
     * @deprecated The field should not be used on the storefront.
     */
    attribute_set_id?: Maybe<Scalars['Int']>;
    /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
    canonical_url?: Maybe<Scalars['String']>;
    /** The categories assigned to a product. */
    categories?: Maybe<Array<Maybe<CategoryInterface>>>;
    category_gear?: Maybe<Scalars['String']>;
    climate?: Maybe<Scalars['String']>;
    collar?: Maybe<Scalars['String']>;
    color?: Maybe<Scalars['Int']>;
    /** The product's country of origin. */
    country_of_manufacture?: Maybe<Scalars['String']>;
    /**
     * Timestamp indicating when the product was created.
     * @deprecated The field should not be used on the storefront.
     */
    created_at?: Maybe<Scalars['String']>;
    /** Crosssell Products */
    crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
    /** Detailed information about the product. The value can include simple HTML tags. */
/*    description?: Maybe<ComplexTextValue>;*/
    eco_collection?: Maybe<Scalars['Int']>;
    erin_recommends?: Maybe<Scalars['Int']>;
    features_bags?: Maybe<Scalars['String']>;
    format?: Maybe<Scalars['Int']>;
    gender?: Maybe<Scalars['String']>;
    /** Indicates whether a gift message is available. */
    gift_message_available?: Maybe<Scalars['String']>;
    /**
     * The ID number assigned to the product.
     * @deprecated Use the `uid` field instead.
     */
    id?: Maybe<Scalars['Int']>;
    /** The relative path to the main image on the product page. */
    image?: Maybe<ProductImage>;
    /** A number representing the product's manufacturer. */
    manufacturer?: Maybe<Scalars['Int']>;
    material?: Maybe<Scalars['String']>;
    /** An array of Media Gallery objects. */
/*    media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;*/
    /**
     * An array of MediaGalleryEntry objects.
     * @deprecated Use product's `media_gallery` instead
     */
/*    media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;*/
    /** A brief overview of the product for search results listings, maximum 255 characters. */
    meta_description?: Maybe<Scalars['String']>;
    /** A comma-separated list of keywords that are visible only to search engines. */
    meta_keyword?: Maybe<Scalars['String']>;
    /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
    meta_title?: Maybe<Scalars['String']>;
    /** The product name. Customers use this name to identify the product. */
    name?: Maybe<Scalars['String']>;
    new?: Maybe<Scalars['Int']>;
    /**
     * The beginning date for new product listings, and determines if the product is featured as a new product.
     * @deprecated The field should not be used on the storefront.
     */
    new_from_date?: Maybe<Scalars['String']>;
    /**
     * The end date for new product listings.
     * @deprecated The field should not be used on the storefront.
     */
    new_to_date?: Maybe<Scalars['String']>;
    /** Product stock only x left count */
    only_x_left_in_stock?: Maybe<Scalars['Float']>;
    /** If the product has multiple options, determines where they appear on the product page. */
    options_container?: Maybe<Scalars['String']>;
    pattern?: Maybe<Scalars['String']>;
    performance_fabric?: Maybe<Scalars['Int']>;
    /**
     * A ProductPrices object, indicating the price of an item.
     * @deprecated Use price_range for product price information.
     */
/*    price?: Maybe<ProductPrices>;*/
    /** A PriceRange object, indicating the range of prices for the product */
/*    price_range: PriceRange;*/
    /** An array of TierPrice objects. */
/*    price_tiers?: Maybe<Array<Maybe<TierPrice>>>;*/
    /** An array of ProductLinks objects. */
/*    product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;*/
    /** The average of all the ratings given to the product. */
    rating_summary: Scalars['Float'];
    /** Related Products */
    related_products?: Maybe<Array<Maybe<ProductInterface>>>;
    /** The total count of all the reviews given to the product. */
    review_count: Scalars['Int'];
    /** The list of products reviews. */
/*    reviews: ProductReviews;*/
    sale?: Maybe<Scalars['Int']>;
    /** A short description of the product. Its use depends on the theme. */
/*    short_description?: Maybe<ComplexTextValue>;*/
    size?: Maybe<Scalars['Int']>;
    /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
    sku?: Maybe<Scalars['String']>;
    sleeve?: Maybe<Scalars['String']>;
    /** The relative path to the small image, which is used on catalog pages. */
    small_image?: Maybe<ProductImage>;
    /**
     * The beginning date that a product has a special price.
     * @deprecated The field should not be used on the storefront.
     */
    special_from_date?: Maybe<Scalars['String']>;
    /** The discounted price of the product. */
    special_price?: Maybe<Scalars['Float']>;
    /** The end date that a product has a special price. */
    special_to_date?: Maybe<Scalars['String']>;
    /** Stock status of the product */
   /* stock_status?: Maybe<ProductStockStatus>;*/
    strap_bags?: Maybe<Scalars['String']>;
    style_bags?: Maybe<Scalars['String']>;
    style_bottom?: Maybe<Scalars['String']>;
    style_general?: Maybe<Scalars['String']>;
    /** The file name of a swatch image */
    swatch_image?: Maybe<Scalars['String']>;
    /** The relative path to the product's thumbnail image. */
    thumbnail?: Maybe<ProductImage>;
    /**
     * The price when tier pricing is in effect and the items purchased threshold has been reached.
     * @deprecated Use price_tiers for product tier price information.
     */
    tier_price?: Maybe<Scalars['Float']>;
    /**
     * An array of ProductTierPrices objects.
     * @deprecated Use price_tiers for product tier price information.
     */
/*    tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;*/
    /**
     * One of simple, virtual, bundle, downloadable, grouped, or configurable.
     * @deprecated Use __typename instead.
     */
    type_id?: Maybe<Scalars['String']>;
    /** The unique ID for a `ProductInterface` object. */
    uid: Scalars['ID'];
    /**
     * Timestamp indicating when the product was updated.
     * @deprecated The field should not be used on the storefront.
     */
    updated_at?: Maybe<Scalars['String']>;
    /** Upsell Products */
    upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
    /** The part of the URL that identifies the product */
    url_key?: Maybe<Scalars['String']>;
    /** @deprecated Use product's `canonical_url` or url rewrites instead */
    url_path?: Maybe<Scalars['String']>;
    /** URL rewrites list */

    url_suffix?: Maybe<Scalars['String']>;
    /**
     * An array of websites in which the product is available.
     * @deprecated The field should not be used on the storefront.
     */
 /*   websites?: Maybe<Array<Maybe<Website>>>;*/
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

export interface MediaGalleryInterface {
    /** Whether the image is hidden from view. */
    disabled?: Maybe<Scalars['Boolean']>;
    /** The label of the product image or video. */
    label?: Maybe<Scalars['String']>;
    /** The media item's position after it has been sorted. */
    position?: Maybe<Scalars['Int']>;
    /** The URL of the product image or video. */
    url?: Maybe<Scalars['String']>;
}

export interface ProductImage extends MediaGalleryInterface {
    /** Whether the image is hidden from view. */
    disabled?: Maybe<Scalars['Boolean']>;
    /** The label of the product image or video. */
    label?: Maybe<Scalars['String']>;
    /** The media item's position after it has been sorted. */
    position?: Maybe<Scalars['Int']>;
    /** The URL of the product image or video. */
    url?: Maybe<Scalars['String']>;
}
export interface Products {
    /** Layered navigation aggregations. */
    aggregations?: Maybe<Array<Maybe<Aggregation>>>;
    /**
     * Layered navigation filters array.
     * @deprecated Use aggregations instead
     */
/*    filters?: Maybe<Array<Maybe<LayerFilter>>>;*/
    /** An array of products that match the specified search criteria. */
    items?: Maybe<Array<Maybe<ProductInterface>>>;
    /** An object that includes the page_info and currentPage values specified in the query. */
/*    page_info?: Maybe<SearchResultPageInfo>;*/
    /** An object that includes the default sort field and all available sort fields. */
/*    sort_fields?: Maybe<SortFields>;*/
    /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
    total_count?: Maybe<Scalars['Int']>;
}

export interface RoutableInterface {
    /** Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect */
    redirect_code: Scalars['Int'];
    /** The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original */
    relative_url?: Maybe<Scalars['String']>;
    /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
/*    type?: Maybe<UrlRewriteEntityTypeEnum>;*/
    sku?: Maybe<Scalars['String']>;
    uid?: Maybe<Scalars['String']>;
    identifier?: Maybe<Scalars['String']>;
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

