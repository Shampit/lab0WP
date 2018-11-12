import React, { Component } from 'react';
import StudentsList from '../StudentsList/StudentsList';
import EditStudentDetails from '../EditStudentDetails/EditStudentDetails';
import { listStudents } from '../../repository/studentRepository';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: listStudents(),
      student: null
    };
  }

  edit(student, event) {
    event.stopPropagation();
    this.setState({
      student
    });
  }

  save(student, event) {
    event.preventDefault();
    console.log('App.js save clicked', student, event);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="display-4 text-center">Students List</h1>
          <EditStudentDetails student={this.state.student} save={this.save.bind(this)} />
          <StudentsList students={this.state.students} edit={this.edit.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
