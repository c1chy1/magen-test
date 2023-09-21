import { gql } from "graphql-tag";

export const queryCategories = gql`
    query queryCategories{
        categories {
            items {
                children {
                    uid
                    name
                    
                }
            }
        }
    }
        
`;

