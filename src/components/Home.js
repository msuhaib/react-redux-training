import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class Home extends Component {
  render() {
    const {isAuth}=this.props.session
    return (
        <div className={isAuth?'':'d-none'}>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

Home.propTypes={
  session: PropTypes.object.isRequired
}
const mapStateToProps= state =>({
  session:state.session
})
export default connect(mapStateToProps)(Home)