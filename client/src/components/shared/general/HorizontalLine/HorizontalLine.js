import React from "react";
import styled from "styled-components";

const HrLine = styled.hr`
  margin: ${props => props.margin || "5rem auto"};
  width: ${props => props.width || "25%"};
  border: 0.2rem solid ${({ theme }) => theme.main};
`;

const HorizontalLine = ({ width, margin }) => {
  return (
    <HrLine width={width} margin={margin} />
  );
};

export default HorizontalLine;