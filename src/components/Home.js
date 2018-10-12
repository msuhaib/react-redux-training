import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getApiModule} from '../actions/recAction'


class Home extends Component {
  getApi=(e)=>{
    const {user:{bio_access_id:bid,stakeholder_id:sId}}=this.props.session
    const searchObj={
      bio_access_id: bid,
      action: "ADVANCED_SEARCH_PAGING",
      // query: `owner_id:%22quostr%3B${sId}%22quostr%3B`,
      query: `title:%22quostr%3Ba*%22quostr%3B`,
      record_type_ids: []
    }
    this.props.getApiModule(searchObj)
  }
  render() {
    const {isAuth}=this.props.session
    const{recordList}=this.props.records
    console.log(recordList)
    return (
        <div className={isAuth?'':'d-none'}>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary" onClick={this.getApi}>Learn More</Button>
          </p>
        </Jumbotron>
          {
            recordList.map(rec=>rec.title)
          }
      </div>
    )
  }
}

Home.propTypes={
  session: PropTypes.object.isRequired,
  records: PropTypes.array.isRequired,
  getApiModule:PropTypes.func.isRequired,
}
const mapStateToProps= state =>({
  session:state.session,
  records:state.records
})
export default connect(mapStateToProps,{getApiModule})(Home)