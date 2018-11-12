import React, { Component } from 'react';

class EditStudentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: (props.student && props.student.id) || '',
            firstName: (props.student && props.student.firstName) || '',
            lastName: (props.student && props.student.lastName) || '',
            program: (props.student && props.student.program) || ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    save(student, event) {
        event.preventDefault();
        console.log('edit student details save', student, event);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log('handleChange fired', event, event.target.name, event.target.value);
    }

    render() {
        if (this.props.student) {
            return (
                <div className="row">
                    <div className="col-12">
                        <form className="form-inline" onSubmit={this.save}>
                            <div className="form-group mt-2 mb-2">
                                <input type="text" name="id" defaultValue={this.props.student.id} value={this.state.id} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="form-group ml-3 mt-2 mb-2">
                                <input type="text" name="firstName" defaultValue={this.props.student.firstName} value={this.state.firstName} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="form-group ml-3 mt-2 mb-2">
                                <input type="text" name="lastName"  defaultValue={this.props.student.lastName} value={this.state.lastName} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="form-group ml-3 mt-2 mb-2">
                                <input type="text" name="program" defaultValue={this.props.student.program} value={this.state.program} onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="form-group ml-3 mt-2 mb-2">
                                <button type="submit" className="btn btn-success btn-block">
                                    <i className="fa fa-pencil"></i>
                                    Сочувај
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default EditStudentDetails;