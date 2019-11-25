import React, { Component } from 'react'
import './Sidebar.scss'
import MyContext from '../../../../context/MyContext'

export default class Sidebar extends Component {
    state={
        collapsed: true
    }

    toggle = () =>{
        const currentState= this.state.collapsed;
        this.setState({
            collapsed: !currentState
        })
    }

    render() {
        const Actions =(
            <MyContext.Consumer>
                {(context)=>(
                    context.Actions.map((value, key)=>
                        <button key={key} type="button" className="btn btn-info m-1" title={value.Name}>
                            <span className={"fas fa-" + value.ImageName}/>
                        </button>
                    )
                )}
            </MyContext.Consumer>
        )
        return (
            <nav className={"d-none d-md-block bg-light sidebar border-right " + (this.state.collapsed?"collapsed":"")}>
                <div className="sidebar-sticky">
                    <div className="text-right pr-1">
                        <span className="btn-collapse" onClick={this.toggle} title="Toggle">
                            <span className="fas fa-chevron-circle-left"></span>
                        </span>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center">{Actions}</div>
                </div>
            </nav>
            
        )
    }
}
