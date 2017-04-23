import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {signin} from '../../actions/auth';
import {withRouter} from 'react-router-dom';

class Signin extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // }

    handleFormSubmit({email, password}) {
        this.props.signin({email, password}, this.props.history);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field
                        name="email"
                        type="text"
                        className="form-control"
                        component="input"
                    />
                </fieldset>

                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field
                        name="password"
                        type="password"
                        className="form-control"
                        component="input"
                    />
                </fieldset>

                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}

const Form = reduxForm({form: 'signin'})(Signin);
export default withRouter(connect(null, {signin})(Form));