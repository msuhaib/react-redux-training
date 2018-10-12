import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button } from 'reactstrap'
import {logout} from '../actions/authAction'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpen: false
    }
  }
  toggle=()=> {
    this.setState({
        isOpen: !this.state.isOpen
    })
  }
  logoutUser=(e)=>{
      const {user:{bio_access_id:bId}}=this.props.session
      this.props.logout({bio_access_id:bId})
  }
  render() {
      const {isAuth, user:{stakeholder_name:stakehName}} = this.props.session

    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{stakehName===undefined?'reactstrap':stakehName}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className={isAuth?"":"d-none"}>
                <Button outline color="info" onClick={this.logoutUser}>Logout</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
NavBar.propTypes={
    session: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }
  const mapStateToProps= state =>({
    session:state.session
  })
  export default connect(mapStateToProps,{logout})(NavBar)