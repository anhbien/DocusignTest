import React, { Component } from 'react'
import FileIcon from 'react-file-icon'

export default class ExplorerRow extends Component {
    render() {
        const value=this.props.value
        return (
            <React.Fragment>
                <div className="col">
                    {
                        (value.Type.toLowerCase()==="folder"?
                            <i className="fas fa-folder text-warning"></i>:
                            <FileIcon type={value.Subtype.toLowerCase()} size={32} />
                        )
                    }
                    <span className="pl-2">{value.Name}</span>
                </div>
                <div className="col">{value.Description}</div>
                <div className="col">{value.ModifiedDate}</div>
            </React.Fragment>
        )
    }
}
