import styled from 'styled-components';
import EmptyState from '~/core/components/EmptyState';

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, calc(50% - 1rem)));
`;

export const ListEmptyState = styled(EmptyState)`
  margin-right: auto;
  margin-left: auto;
`;
