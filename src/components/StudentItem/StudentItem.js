import React, { Component } from 'react';

class StudentItem extends Component {

    render() {
        return (
            <tr onClick={(e) => this.props.edit(this.props.student, e)}>
                <td>{ this.props.student.id }</td>
                <td>{ this.props.student.firstName }</td>
                <td>{ this.props.student.lastName }</td>
                <td>{ this.props.student.program }</td>
                <td>
                    <button type="button" className="btn btn-primary btn-sm btn-block rounded-0" onClick={(e) => this.props.edit(this.props.student, e)}>
                        <i className="fa fa-pencil mr-2"></i>
                        Измени
                    </button>
                </td>
            </tr>
        )   
    }
}

export default StudentItem;