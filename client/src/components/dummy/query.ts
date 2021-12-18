import gql from 'graphql-tag';

export const launchpads = gql`
  query launchpads {
    launchpads {
      id
      name
      status
      location {
        name
        region
      }
    }
  }`