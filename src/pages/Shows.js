import React, { useContext } from 'react';
import styled from 'styled-components';
import { contentContext } from '../context/ContentProvider';

const Shows = () => {
  const { showsData } = useContext(contentContext);

  return (
    <ShowsWrapper>
      <h2>Where and When to Melt your Mind</h2>
      <Table>
        <THead>
          <tr>
            <TH>Event</TH>
            <TH>Location</TH>
            <TH>Date/Time</TH>
          </tr>
        </THead>
        <tbody>
          {showsData && showsData.map((show) => {
            const date = new Date(show.dateTime);
            const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString(undefined, {
              hour12: true,
              hour: 'numeric',
              minute: '2-digit',
            })}`;
            return (
              <tr key={show.dateTime}>
                <TD>{show.event}</TD>
                <TD>{show.location}</TD>
                <TD>{formattedDate}</TD>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </ShowsWrapper>
  );
};

const ShowsWrapper = styled.div`
  margin: 80px 20px;
  text-align: center;

  h2 {
    font-size: 48px;
    letter-spacing: 4px;
    color: #fa8072;
    text-shadow: 3px 3px 0 #f8dada, 5px 5px 0 black, 7px 7px 0 #ff5c5c;
    border-bottom: 1px solid #e5e5e5;
    animation: slide 10s ease-in-out infinite;
  }
  @keyframes slide {
    0% {
      text-shadow: 3px 3px 0 #f8dada, 5px 5px 0 black, 7px 7px 0 #ff5c5c;
    }
    25%{
      text-shadow: 0px 3px 0 #f8dada, 0px 5px 0 black, 0px 7px 0 #ff5c5c;
    }
    50% {
      text-shadow: -3px 3px 0 #f8dada, -5px 5px 0 black, -7px 7px 0 #ff5c5c;
    }
    75%{
      text-shadow: 0px 3px 0 #f8dada, 0px 5px 0 black, 0px 7px 0 #ff5c5c;
    }
    100% {
      text-shadow: 3px 3px 0 #f8dada, 5px 5px 0 black, 7px 7px 0 #ff5c5c;
    }
  }
  @media only screen and (max-width: 780px) {
    margin-top: -8vh;
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
      width: 100%;
    }

    tbody{
      // padding-top: 2px;
    }
    tr{
      margin-top: 1rem;
      border: 3px solid rgba(255, 76, 91, 0.6);
      border-radius: 18px;

    }
    td {
      text-align: center;
      width: 80%;
      margin: 0 auto;

    }
  
    td:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 10px;
  background-color: transparent;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), inset 0 3em 3em rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  border-radius: 10px;
`;

const THead = styled.thead`
  color: #fa8072;
  text-align: center;

  tr {
    height: 70px;
    border-bottom: 1px solid #e5e5e5;
    background-image: linear-gradient(90deg, rgba(250, 128, 114, 0.4) 0%, rgba(250, 128, 114, 0) 100%);
  }

  @media only screen and (max-width: 780px) {
    tr{
      display: none;
    }
  }
`;

const TH = styled.th`
  padding: 24px;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const TD = styled.td`
  padding: 32px;
  font-size: 24px;
  color: #fa8072;
  text-align: center;
  // background: linear-gradient(to top, #fg416c, #ff416c);
  border-radius: 10px;
  box-shadow: 3px 3px 4px rgba(255, 76, 91, 0.6);
  animation: td-slide 10s ease-in-out infinite;

  @keyframes td-slide {
    0%{
      box-shadow: 3px 3px 4px rgba(255, 76, 91, 0.6);
    }
    25%{
      box-shadow: 0px 3px 4px rgba(255, 76, 91, 0.6);
    }
    50%{
      box-shadow: -3px 3px 4px rgba(255, 76, 91, 0.6);
    }
    75%{
      box-shadow: 0px 3px 4px rgba(255, 76, 91, 0.6);
    }
    100%{
      box-shadow: 3px 3px 4px rgba(255, 76, 91, 0.6);
    }
  }

  @media screen and (max-width: 780px){
    animation: none;
    box-shadow: none;
    padding: 8px;
  }
`;

export default Shows;



