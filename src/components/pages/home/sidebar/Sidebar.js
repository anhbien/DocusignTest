import React, { Component } from 'react'
import './Sidebar.scss'
import MyContext from '../../../../context/MyContext'

export default class Sidebar extends Component {
    state={
        collapsed: true
    }

    //Toggle sidebar
    toggle = () =>{
        const currentState= this.state.collapsed;
        this.setState({
            collapsed: !currentState
        })
    }

    render() {
        //Render all action options
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
            <nav className={"bg-light sidebar border " + (this.state.collapsed?"collapsed":"")}>
                <div className="sidebar-sticky d-flex align-items-start flex-column">
                    <div className="ml-2 d-none d-sm-block">
                        <span className="text-left btn-collapse" onClick={this.toggle} title="Toggle">
                            <span className="fas fa-chevron-circle-right"></span>
                        </span>
                    </div>
                    {/* Append actions buttons */}
                    <div className="d-flex flex-wrap button-wrapper ml-2 mr-2">{Actions}</div>
                </div>
            </nav>
            
        )
    }
}
