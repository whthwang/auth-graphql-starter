import React from 'react';
import { graphql } from 'react-apollo';
import mutation from '../mutations/Login';
import query from '../mutations/CurrentUser';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: []
    };
  };

  // onSubmit(e) {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state);
  // }

  onLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    })
    .catch((err) => {
      const errors = err.graphQLErrors.map((error) => error.message);
      this.setState({ errors });
    });
  };



  render() {
    return (
      <div className='row'>
        <form className='col s6' onSubmit={this.onLogin.bind(this)}>
        {/* <form className='col s6' onSubmit={this.onSubmit.bind(this)}> */}
          <div className='input-field'>
            <input placeholder='Email' value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
          </div>
          <div className='input-field'>
            <input placeholder='Password' type='password' value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
          </div>
          {this.state.errors.map(error => <div className='error' key={error}>{error}</div>)}
          <button className='btn'>Submit</button>
        </form>
      </div>
    )
  }
};

export default graphql(mutation)
  (graphql(query)(AuthForm));
// export default graphql(query)(AuthForm);