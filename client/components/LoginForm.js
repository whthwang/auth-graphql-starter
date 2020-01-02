import React from 'react';
import AuthForm from './AuthForm';
// import { graphql } from 'react-apollo';
// import query from '../mutations/CurrentUser';
// import mutation from '../mutations/Login';

class LoginForm extends React.Component {

  // onSubmit({ email, password }) {
  //   this.props.mutate({
  //     variables: { email, password },
  //     refetchQueries: [{ query }]
  //     //find the errors under graphQLErrors!
  //   }).catch((err) => console.log(err.graphQLErrors));
  // }

  render() {
    return (
      <div>
        <h3>Login</h3>
        {/* <AuthForm onSubmit={this.onSubmit.bind(this)} /> */}
        <AuthForm />
      </div>
    )
  }
};

// export default graphql(mutation)
//   (graphql(query)(LoginForm));
export default LoginForm;