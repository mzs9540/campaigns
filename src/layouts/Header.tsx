import { PureComponent } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { ProfileDropdown } from 'shared';

type Props = {
  stickyHeaderClassName: any,
  handleSidebar: () => void,
  navbarItems: any,
};

export class Header extends PureComponent<Props, any> {
  render() {
    return (
      <header
        className={
          `header dashboard-header h-70p ${this.props.stickyHeaderClassName}`
        }
      >
        <Navbar className="bg-white">
          <button
            type="button"
            className="border-0 bg-transparent d-block"
            onClick={this.props.handleSidebar}
          >
            <i className="hamburger" />
          </button>

          {this.props.navbarItems}

          <div className="navbar-right">
            <div
              className="ml-auto d-flex align-items-center justify-content-end"
            >
              <Nav className="d-flex align-items-center">
                <ProfileDropdown />
              </Nav>
            </div>
          </div>
        </Navbar>
      </header>
    );
  }
}
