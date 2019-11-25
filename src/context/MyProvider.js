import React, { Component } from 'react'
import MyContext from './MyContext'
import data from '../data/SpringCM UI Exercise.json'

export default class MyProvider extends Component {
    state={
        data
    }
    render() {
        return (
            <MyContext.Provider value={this.state.data}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
