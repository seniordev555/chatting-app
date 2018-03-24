import React, { Component } from 'react';
import { Nav } from 'reactstrap';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <Nav>
            Sidebar
          </Nav>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
