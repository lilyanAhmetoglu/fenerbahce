import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../ui/formFields";
import { validate } from "../../ui/misc";
import {firebasePromoion} from '../../../firebase';

export default class Enrool extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };
  updateForm(element) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;
    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    console.log(newFormdata);

    newFormdata[element.id] = newElement;

    this.setState({
      formdata: newFormdata,
      formError: false
    });
  }

  resetFormSuccess(type){
    const newFormdata = { ...this.state.formdata }
    for(let key in newFormdata){
        newFormdata[key].value='';
        newFormdata[key].valid=false;
        newFormdata[key].validationMessage ='';
    }
    this.setState({
        formError:false,
        formdata : newFormdata,
        formSuccess:type ? 'congrats' : 'Already in our database'
    });
    this.successMessage();
  }
  successMessage(){
      setTimeout(()=> {
          this.setState({
            formSuccess:''
          })
      },2000)
  }


  submitForm(event) {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = "ture";
    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value; // the key is the email object in this case
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    if (formIsValid) {
        firebasePromoion.orderByChild('email').equalTo(dataToSubmit.email).once("value")
        .then((snapshot) => {
           if(snapshot.val()=== null){ //not exist in the databse
                firebasePromoion.push(dataToSubmit);
                this.resetFormSuccess(true)
           }else{
            this.resetFormSuccess(false)
           }
        })
       // 
    } else {
      this.setState({
        formError: true
      });
    }
  }
  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">
                  {" "}
                  something is worng, Try again
                </div>
              ) : null}
              <div className="success_label">{this.state.formSuccess}</div>
              <button onClick={event => this.submitForm(event)}>Enroll</button>
              <div className="enroll_discl">
                lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}
