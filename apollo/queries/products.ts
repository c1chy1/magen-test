






import { gql } from "graphql-tag";

export const products = gql`
    query Products($filter: ProductAttributeFilterInput) {
        products(filter: $filter) {

            items {
                name
                categories {
                    ... on CategoryTree {
                        uid
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


/*


import { gql } from "graphql-tag";

export const products = gql`
    query getProducts {
        categoryList  {
            products {
                items {
                    name
                    image{
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
            uid
        
        }
     
    }
`;
*/
