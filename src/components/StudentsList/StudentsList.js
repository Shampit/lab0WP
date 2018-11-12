import React, { Component } from 'react';
import StudentItem from '../StudentItem/StudentItem';

class StudentsList extends Component {

    render() {
        return (
            <table className="table table-stripped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Индекс</th>
                        <th>Име</th>
                        <th>Презиме</th>
                        <th>Насока</th>
                        <th>Акции</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.students.map((student, index) => {
                        return (<StudentItem key={index} student={student} edit={this.props.edit} />)
                    })}
                </tbody>
            </table>
        )
    }
}

export default StudentsList;