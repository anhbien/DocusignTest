import React, { Component } from 'react'
import FileIcon from 'react-file-icon'
import FileIconTypes from '../../../../../data/FileIconTypes'

export default class ExplorerRow extends Component {
    
    //handle Checkboxes click event and add checked value in an array in state
    //TODO: Sent this back to parent for more action (delete, share,...)
    handleChange = (event) =>{
        const target = event.target
        const value = target.type === "checkbox"? target.checked: target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    //Handle Folder/File Name click event, return name and type back to parent
    handleItemClick = (event) =>{
        const target = event.target
        const name = target.getAttribute("name")
        const type = target.getAttribute("type")
        this.props.onRowClick(name, type)
    }

    render() {
        const value=this.props.value
        return (
            <React.Fragment>
                <div className="col name" onClick={this.handleItemClick}>
                    {
                        // show appropreate icon for folder/file type
                        (value.Type.toLowerCase()==="folder"?
                            <i className="fas fa-folder text-warning"></i>:
                            <FileIcon type={FileIconTypes.includes(value.Subtype.toLowerCase())?value.Subtype.toLowerCase():"document"} size={32} />
                        )
                    }
                    <span className="pl-2" name={value.Name} type={value.Type}>{value.Name}</span>
                </div>
                <div className="col">{value.Description}</div>
                <div className="col">{value.ModifiedDate}</div>
                <div className="col text-center"><input type="checkbox" onChange={this.handleChange} name={value.Name}/></div>
            </React.Fragment>
        )
    }
}
