import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks
      savedBooks {
        _id
        thoughtText
        thoughtAuthor
        createdAt
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
