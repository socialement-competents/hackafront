import gql from 'graphql-tag'

export const REGISTER = gql`
mutation register($login: String!, $password: String!) {
  addUser(username: $login, password: $password) {
    id,
    email,
    firstname,
    lastname,
    bio,
    image
  }
}
`
