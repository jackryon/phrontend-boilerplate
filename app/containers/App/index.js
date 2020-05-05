import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import AdvisorsPage from 'containers/AdvisorsPage';
import AdvisorDetailsPage from 'containers/AdvisorDetailsPage';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <div>All Advisors</div>
      <Switch>
        <Route exact path="/" component={AdvisorsPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
