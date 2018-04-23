import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import Lotto from '../components/Lotto';
import { pickWinner } from '../actions/actionCreators';
import { getWinner, getFilteredList } from '../reducers/appReducers';

const mapStateToProps = (state) => {
  return {
    winner: state.winner,
    filteredList: state.filteredList,
  	restaurants: state.restaurants,
  }
}

const mapDispatchToProps = {
  pickWinner
}

export const ConnectedLotto = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lotto)

// export const ConnectedLotto = compose(
//   firebaseConnect((props) => {
//     return [
//       'devEnvironment_1'
//     ]
//   }),
//   connect(
// 	  mapStateToProps,
// 	  mapDispatchToProps
//   )
// )(Lotto)
