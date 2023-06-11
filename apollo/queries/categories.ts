import { gql } from "graphql-tag";

export const categories = gql`
    query getCategories {

        categories {
            items {
                children {
                    uid
                    name
                    products {
                        items {
                            uid
                            name

                        }
                    }
                }
            }
        }
    }
        
`;

