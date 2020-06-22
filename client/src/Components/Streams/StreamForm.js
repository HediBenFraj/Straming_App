import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{

    renderError({ error , touched}){
        if( touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

   renderInput= ({ input, label, meta }) => {
       const className = `field ${meta.error && meta.touched ? 'error':''}`;
        return  (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                <div>{this.renderError(meta)}</div>
            </div>
            
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);

    }

    render(){
       
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="Title" component={this.renderInput} label="Enter Title"/>
                <Field name="Description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }  
}

const validate = (formValues) => {
    const errors={};

    if(!formValues.Title){
        errors.Title = " you must enter a title"
    }
    if(!formValues.Description){
        errors.Description=" you must enter a Description"
    }

    return errors;
}

export default reduxForm({ 
    form : 'StreamForm',
    validate
})(StreamForm);


