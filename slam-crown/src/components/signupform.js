

import './signupform.css';
import React, { Component } from 'react'

export class SignUp extends Component {
    state = {
        email: ""     
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }  

  render() {
    return (
      <div>
        <h1>
        Sign up today <i class="fi-crown"></i>
    </h1>
        <h2>
            Report on your Concussion & TBI Recovery
        </h2>
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Sign Up:</legend>
                    Email: <input type="text" placeholder="demo@slamcrown.com" onInput={e => this.setState({
                        email: e.target.value
                    })
                    
                    } required /><br />
                    Password: <input type="text" required /><br />
                    Date of Concussion: <input type="date" />
                </fieldset>
                    <input type="submit" value="Submit!" />
            </form>
      </div>
    )
  }
}

export default SignUp
