import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Header from './Header.js'
import Search from './Search.js'
import Find from './Find.js'
import Message from './Message.js'
import Setting from './Setting.js'

class Router extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <Routes>
            <Route exact path="/search" element={<Search/>}/>
            <Route exact path="/find" element={<Find/>}/>
            <Route exact path="/message" element={<Message/>}/>
            <Route exact path="/setting" element={<Setting/>}/>
          </Routes>
        </div>
    )
  }
}


export default Router;
