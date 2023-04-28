import styled from 'styled-components';

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  :not(:first-child) {
    margin-top: 10px;
  }
`;
