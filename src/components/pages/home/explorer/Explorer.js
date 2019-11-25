import React, { Component } from 'react'
import MyContext from '../../../../context/MyContext'
import './Explorer.scss'
import ExplorerRow from './ExplorerRow/ExplorerRow'

export default class Explorer extends Component {
    state={
        folderExpand: false
    }
    handleRowClick = (type) =>{
        if(type==="folder"){
            const currentState = this.state.folderExpand
            this.setState({
                folderExpand : !currentState
            })
        }
    }
    render() {
        return (
            <main role="main" className="w-100 ml-sm-auto px-4">
                <div className="pl-table border-bottom border-info">
                    {/* Sticky Header */}
                    <div className="pl-thead tall border-bottom border-info">
                        <div className="row p-2">
                            <div className="col">Name</div>
                            <div className="col">Description</div>
                            <div className="col">Modified Date</div>
                        </div>
                    </div>
                    {/* Table Content */}
                    <div className="pl-tbody scroll">
                        <MyContext.Consumer>
                            {(context)=>(
                                context.GridData.map((value, key)=>(
                                    <React.Fragment>
                                        <div className="row p-1 border-bottom" key={key} onClick={()=>this.handleRowClick(value.Type.toLowerCase())}>
                                            <ExplorerRow value={value}/>
                                        </div>
                                        {
                                            //Render children if available
                                            (value.Children&&(
                                                value.Children.map((cValue, cKey)=>(
                                                <div className={"row p-1 border-bottom " + (this.state.folderExpand?"":"d-none")} key={cKey}>
                                                    <ExplorerRow value={cValue}/>
                                                </div>
                                                )))
                                            )
                                        }
                                    </React.Fragment>
                                ))
                            )}
                        </MyContext.Consumer>
                    </div>
                </div>
            </main>
        )
    }
}
