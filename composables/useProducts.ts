


import { defineStore } from "pinia"
import { computed, ref } from "vue"

import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client/core"
import { provideApolloClient, useApolloClient } from "@vue/apollo-composable"
import { onError } from "@apollo/client/link/error"

import gql from "graphql-tag"
import {queryCategories} from "~/apollo/queries/categories";

const httpLink = createHttpLink({
    uri: "https://venia.magento.com/graphql",
})

// for handling all graphql errors in the response
const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
})

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization token to the headers
//   const token = useGlobalStore().getToken

//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : null,
//     },
//   })

//   return forward(operation)
// })

export const apolloClient = new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export const useRockets = () => {

    useApolloClient()
    provideApolloClient(apolloClient)



    const query = gql`
        query {
            categories {
                items {
                    children {
                        uid
                        name

                    }
                }
            }
        }`
    const response = apolloClient.query({
        query: queryCategories,
        fetchPolicy: "no-cache",
    })

    console.log(response)


    const categories = computed(() => response)

    return { categories, response }
}