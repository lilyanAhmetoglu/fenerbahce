import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import FormField from '../../ui/formFields'
import {validate} from '../../ui/misc'

export default class Enrool extends Component {
    state ={
        formError:false,
        formSuccess:'',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your email'
                },
                validation:{
                    required :true,
                    email:true
                },
                valid:false,
                validationMessage:''
            }
        }
    }
    updateForm(element){
        const newFormdata = {...this.state.formdata}
        const newElement = { ...newFormdata[element.id]}

        newElement.value = element.event.target.value;
        let validData = validate(newElement)
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        console.log(newFormdata)

        newFormdata[element.id] = newElement;

        this.setState({
            formdata:newFormdata
        })
    }
    submitForm(){

    }
    render() {
        return (
            <Fade >
                <div className="enroll_wrapper">
                    <form onSubmit={(event)=> this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your email
                        </div>
                        <div className="enroll_input">
                            <FormField 
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element)=> this.updateForm(element)}
                            />
                        </div>
                    </form>
                </div>
            </Fade>
        )
    }
}
