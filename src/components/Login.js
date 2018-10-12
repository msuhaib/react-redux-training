import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {login} from '../actions/authAction'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Login extends Component {
  userAuth=(e)=>{
    e.preventDefault()

    const loginObj={
        username:e.target.username.value,
        password:e.target.password.value,
        repository_id:"repo3",
        language_id:"en_US"
    }
    this.props.login(loginObj)
  }
  render() {
      const {isAuth}=this.props.session
    return (
      <div className={isAuth?'d-none':''}>
       <Form inline onSubmit={this.userAuth}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">Email</Label>
          <Input type="type" name="username" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
    )
  }
}
Login.propTypes={
    session: PropTypes.object.isRequired,
    login:PropTypes.func.isRequired
  }
  const mapStateToProps= state =>({
    session:state.session
  })
export default connect(mapStateToProps, {login})(Login)