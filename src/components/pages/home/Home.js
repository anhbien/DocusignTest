import React, { Component } from 'react'
import Sidebar from './sidebar/Sidebar'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar border-right">
                        <Sidebar/>
                    </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        Main
                    </main>
                </div>
            </div>
        )
    }
}
