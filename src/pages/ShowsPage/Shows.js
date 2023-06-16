import React from 'react';
import styled from 'styled-components';



const Shows = ({ shows }) => {
  return (
    <Table>
      <THead>
        <tr>
          <TH>Date/Time</TH>
          <TH>Event</TH>
          <TH>Location</TH>
        </tr>
      </THead>
      <tbody>
        {shows && shows.map(show => (
          <tr key={show.id}>
            <TD>{show.dateTime}</TD>
            <TD>{show.event}</TD>
            <TD>{show.location}</TD>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const THead = styled.thead`
  color: #FFFFFF80;
`;

const TH = styled.th`
  padding: 12px;
  text-align: center;
`;

const TD = styled.td`
  padding: 12px;
  color: #14E162;
  text-align: center;
`;

export default Shows;

