import React, { Component } from 'react'
import MyContext from '../../../../context/MyContext'
import './Explorer.scss'
import ExplorerRow from './ExplorerRow/ExplorerRow'

export default class Explorer extends Component {
    state={
        folderExpand: false,
        expandeFolderName: ""
    }

    //Handle row click event by getting info from ExplorerRow child
    //and only expand folder with the right name
    handleRowClick = (name, type) =>{
        //Expand folder by name
        //TODO: expand folder by ID if possible
        if(type && type.toLowerCase()==="folder"){
            const currentState = this.state.folderExpand
            this.setState({
                folderExpand : !currentState,
                expandeFolderName: name && name
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
                            <div className="col name">Name</div>
                            <div className="col">Description</div>
                            <div className="col">Modified Date</div>
                            <div className="col">&nbsp;</div>
                        </div>
                    </div>
                    {/* Table Content */}
                    <div className="pl-tbody scroll">
                        <MyContext.Consumer>
                            {(context)=>(
                                context.GridData.map((value, key)=>(
                                    <React.Fragment key={key}>
                                        <div className="row p-1 border-bottom">
                                            <ExplorerRow value={value} onRowClick={this.handleRowClick}/>
                                        </div>
                                        {                                           
                                            //Render children if available
                                            (value.Children && (
                                                value.Children.map((cValue, cKey)=>(
                                                <div className={"subRow row p-1 border-bottom " + 
                                                                (this.state.folderExpand && this.state.expandeFolderName === value.Name?
                                                                this.state.expandeFolderName:"d-none")} 
                                                                key={cKey}>
                                                    <ExplorerRow value={cValue} onRowClick={this.handleRowClick}/>
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
