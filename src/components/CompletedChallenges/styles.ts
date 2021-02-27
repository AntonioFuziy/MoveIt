import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.5rem;
  border-bottom: 2px solid var(--background-box);
  border-radius: 4px;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  margin-bottom: 1em;
`;
export const Completed = styled.span`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;