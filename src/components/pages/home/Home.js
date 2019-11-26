import React, { Component } from 'react'
import Sidebar from './sidebar/Sidebar'
import Explorer from './explorer/Explorer'

export default class Home extends Component {
    render() {
        return (
            <div className="d-flex">
                <Explorer/>
                <Sidebar/>
            </div>
        )
    }
}
