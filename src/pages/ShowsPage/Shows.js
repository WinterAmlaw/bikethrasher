import React from 'react';
import styled from 'styled-components';
import { showsQuery } from './ShowsQuery';
import ContentfulApi from '../../services/ContentfulApi';
import { SHOWS } from '../../utils/constants'



const Shows = ({ shows }) => {
  const showsData = ContentfulApi(showsQuery, SHOWS)
  console.log(showsData);
  return (
    <>
    <Table>
      <THead>
        <tr>
          <TH>Event</TH>
          <TH>Location</TH>
          <TH>Date/Time</TH>
        </tr>
      </THead>
      <tbody>
    {showsData[0] && showsData.map(show => {
      const date = new Date(show.dateTime);
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString(undefined, { hour12: true, hour: 'numeric', minute: '2-digit' })}`;
      return (
        <tr key={show.dateTime}>
          <TD>{show.event}</TD>
          <TD>{show.location}</TD>
          <TD>{formattedDate}</TD>
        </tr>
      )
    })}
    </tbody>
    </Table>    
    </>

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

