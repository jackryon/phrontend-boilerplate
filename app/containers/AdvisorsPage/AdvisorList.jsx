import React from 'react';
import styled from 'styled-components';

const TH = styled.th`
  text-transform: uppercase;
  font-weight: bold;
`;

const AdvisorList = ({ advisors }) => {
  return (
    <table>
      <thead>
        <tr>
          <TH>avatar</TH>
          <TH>name</TH>
        </tr>
      </thead>
      <tbody>
        {advisors.length > 0 && advisors.map(adv => (
          <tr key={adv.id}>
            <td><img src={adv.avatar} alt="avatar" /></td>
            <td>{adv.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdvisorList;
