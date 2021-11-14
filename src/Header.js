import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  render() {
    return (
      <div>
        <header className="container">
          <div className="navContainer">

            <Link to='/search' className="link">
              <p className="navItem">検索</p>
            </Link>
            <Link to='/find' className="link">
              <p className="navItem">掲示板</p>
            </Link>
            <Link to='/message' className="link">
              <p className="navItem">メール</p>
            </Link>
            <Link to='/setting' className="link">
              <p className="navItem">設定</p>
            </Link>
          </div>
        </header>

        </div>
    )
  }
}

export default Menu;
