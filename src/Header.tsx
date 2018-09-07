import * as React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <Link to="/">root</Link>
    <span>|</span>
    <Link to="/workflows">workflows</Link>
  </div>
);

export default withRouter(Header);
