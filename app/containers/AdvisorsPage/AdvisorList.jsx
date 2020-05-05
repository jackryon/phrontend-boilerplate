import React from 'react';
import styled from 'styled-components';

const TH = styled.th`
  text-transform: uppercase;
  font-weight: bold;
`;

const AdvisorName = styled.td`
  font-size: 20px;
`;

const SmallTD = styled.td`
  width: 120px;
`;

const AdvisorList = ({ advisors }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <TH>avatar</TH>
          <TH>name</TH>
          <TH>actions</TH>
        </tr>
      </thead>
      <tbody>
        {advisors.length > 0 && advisors.map(adv => (
          <tr key={adv.id}>
            <SmallTD><img src={adv.avatar} alt="avatar" /></SmallTD>
            <AdvisorName>{adv.name}</AdvisorName>
            <td><a href="#">View Profile</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdvisorList;
