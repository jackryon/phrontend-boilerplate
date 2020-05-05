import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import AdvisorsPage from 'containers/AdvisorsPage';
import AdvisorDetailsPage from 'containers/AdvisorDetailsPage';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <h1>AlwaysClear&trade; Advisors</h1>
      <Switch>
        <Route exact path="/" component={AdvisorsPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
