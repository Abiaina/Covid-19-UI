import React, {Component} from 'react';
import './App.css'
import Home from './pages/Home'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
      return <Home />
    }
}
