import styled from 'styled-components';

export const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

export const StyledUserEmail = styled.p`
  margin: 0;
`;

export const StyledButton = styled.button`
  padding: 5px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #dddddd;
  }
`;
