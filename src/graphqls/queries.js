import { gql } from "@apollo/client";

export const GET_ALL_BLOG = gql`
  query {
    getAllBlog {
      id
      title
      content
      author
    }
  }
`;

export const GET_B_ID = gql`
  query getBlogById($id: ID!) {
    getBlogById(id: $id) {
      id
      title
      content
      author
    }
  }
`;
