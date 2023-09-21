

import { gql } from "graphql-tag";

export const queryProducts = gql`
    query($filters: CategoryFilterInput) {
        categories(filters: $filters) {
           
            items {
                name
                uid
                products {
                    items {
                        image
                        {
                            url
                        }
                        name
                        price_range {
                            maximum_price {
                                regular_price {
                                    value
                                    currency
                                }
                            }
                        }}
                }}}}
            
`;






/*
import { gql } from "graphql-tag";

export const queryProducts = gql`
    query ($filter: ProductAttributeFilterInput) {
        products(filter: $filter) {

            items {
                name
                categories {
                    ... on CategoryTree {
                        uid
                        products {
                            items {
                                name
                            }
                        }
                    }

                }
                image {
                    url
                }
                price_range {
                    maximum_price {
                        final_price {
                            value
                        }
                    }
                }
            }
        }
    }
`;
*/

/*

import { gql } from "graphql-tag";
*/


/*export const queryProducts = gql`
    query products($slug: String!) {
        products(filter: { category_uid: { eq: $slug } }) {
            items{
                name
                uid
            }
        }
    }`;*/

/*import { gql } from "graphql-tag";

export const queryProducts = gql`
    query ($categoryLevel: String!) {
        categories(filters: { parent_id: { eq: $categoryLevel } }, currentPage: 1) {
            total_count
            items {
                uid
                level
                name
                path
                image
                children_count
            }
            page_info {
                current_page
                page_size
                total_pages
            }
        }
    }
`;*/

/*
export const queryProducts = gql`
    query ($filters: CategoryFilterInput) {
        categories(filters: $filters) {
            items {
                uid
                products {
                    items {
                        uid
                        name
                    }
                }
            }
        }
    }
    `;

*/




