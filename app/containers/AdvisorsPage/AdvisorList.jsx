import React from 'react';
import styled from 'styled-components';

const TH = styled.td`
  text-transform: uppercase;
  font-weight: bold;
`;

const AdvisorList = ({ advisors }) => {
  return (
    <table>
      <thead>
        <TH>avatar</TH>
        <TH>name</TH>
      </thead>
      {advisors.length > 0 && advisors.map(adv => (
        <tr key={adv.id}>
          <td><img src={adv.avatar} alt="avatar" /></td>
          <td>{adv.name}</td>
        </tr>
      ))}
    </table>
  );
};

export default AdvisorList;
