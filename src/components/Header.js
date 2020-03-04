import React from 'react'

import Footer from './Footer'
// import avatar from '../assets/images/chris-fitkin.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src="#" alt="" />
          </a>
          <h1>Hi, I am Dalton!</h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
