import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';

// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_ONLY'
// });

const Layout = ({ children, currentUser }) => {
  console.log('currentUser: ', currentUser);

  return (
    <div>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/tasks">Tasks</Link> &nbsp;
      <div className="container">
        {children}
      </div>
      <LoginButtons />
    </div>
  )
};

// This container brings in Apollo GraphQL data
// const LayoutWithData = connect({
//   mapQueriesToProps({ ownProps }) {
//     if (ownProps.userId) {
//       return {
//         currentUser: {
//           query: gql`
//             query getUserData ($id: String!) {
//               user(id: $id) {
//                 emails {
//                   address
//                   verified
//                 }
//                 username
//                 randomString
//               }
//             }
//           `,
//           variables: {
//             id: ownProps.userId,
//           },
//         },
//       };
//     }
//   },
// })(Layout);


const GET_USER = gql`
  query getUserData {
    user { username }
  }
`;
const LayoutWithUserId = graphql(GET_USER, {
  props({ data: { currentUser }}) {
    return { currentUser };
  }
})(Layout);

// const LayoutWithUserId = withUser(Layout);

export default LayoutWithUserId;
