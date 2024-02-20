'use client'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache  } from "@apollo/client";

export const client = new ApolloClient({
    link : new HttpLink( { uri: process.env["GRAPHQL_ENDPOINT"] }),
    cache: new InMemoryCache()
})

const ApolloClientProvider = ({ children }: {  children: React.ReactNode }) => {

    return <ApolloProvider client={client}>
        { children }
    </ApolloProvider>
}

export default ApolloClientProvider;