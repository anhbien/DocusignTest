import React, { Component } from 'react'
import MyContext from '../../../../context/MyContext'
import './Explorer.scss'

export default class Explorer extends Component {
    render() {
        return (
            <main role="main" className="w-100 ml-sm-auto px-4 mt-5">
                <div className="pl-table">
                    {/* Sticky Header */}
                    <div className="pl-thead tall border-bottom border-info">
                        <div className="row p-2">
                            <div className="col">Name</div>
                            <div className="col">Description</div>
                            <div className="col">Modified Date</div>
                            <div className="col">Select</div>
                        </div>
                    </div>
                    {/* Table Content */}
                    <div className="pl-tbody scroll">
                        <MyContext.Consumer>
                            {(context)=>(
                                context.GridData.map((value, key)=>(
                                    <div className="row p-1 border-bottom" key={key}>
                                        <div className="col">{value.Name}</div>
                                        <div className="col">{value.Description}</div>
                                        <div className="col">{value.ModifiedDate}</div>
                                        <div className="col">Test</div>
                                    </div>
                                ))
                            )}
                        </MyContext.Consumer>
                    </div>
                </div>
            </main>
        )
    }
}
