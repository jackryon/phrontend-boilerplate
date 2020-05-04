import React from 'react';
import { connect } from 'react-redux';
import AdvisorList from './AdvisorList';
import { advisorsSelector } from './selectors';

class AdvisorsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { advisors } = this.props;
    return <AdvisorList advisors={advisors} />;
  }
}

const mapStateToProps = state => {
  return {
    advisors: advisorsSelector(state),
  };
};

export default connect(mapStateToProps, null)(AdvisorsPage);
