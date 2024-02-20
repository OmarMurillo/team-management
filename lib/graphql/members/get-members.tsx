
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';


const GET_ALL_MEMBERS = gql`
  query GetAllMembers{
    members  {
        Age
        DateOfBirth
        DateOfCreation
        Email
        Name
        _id
        Phone
    }
  }
`;


export { GET_ALL_MEMBERS }