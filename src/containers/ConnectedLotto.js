import { connect } from 'react-redux';
import Lotto from '../components/Lotto';
import { pickWinner } from '../actions/actionCreators';

const mapStateToProps = (state) => {
  return {
    winner: state.winner
  }
}

const mapDispatchToProps = {
  pickWinner
}

export const ConnectedLotto = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lotto)
