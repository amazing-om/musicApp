import { connect } from 'react-redux'
import { setSelectedTab } from '../actions'
import Tab from '../components/Tab'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.selectedTab
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setSelectedTab(ownProps.filter))
  }
})

const Tabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab)

export default Tabs
