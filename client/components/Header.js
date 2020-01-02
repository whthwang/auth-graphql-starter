import React from 'react';
import { graphql } from 'react-apollo';
import query from '../mutations/CurrentUser';
import mutation from '../mutations/Logout';
import { Link } from 'react-router';
import gql from 'graphql-tag';

class Header extends React.Component {

  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query }] //query is the currentUser query
    });
  };

  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) { return <div />; }
    if (user) { return <div onClick={this.onLogoutClick.bind(this)}>Logout</div>; }
    else {
      return (
        <div>
          <li>
            <Link to='/signup'>
              Signup
            </Link>
          </li>
          <li>
            <Link to='/login'>
              Login
            </Link>
          </li>
        </div>
      )
    }
  };

  render() {
    //CHECK THIS.PROPS.DATA!!!!!
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo-left'>
            Home
        </Link>
          <ul className='right'>
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    )
  };
}

export default graphql(mutation)
  (graphql(query)(Header));