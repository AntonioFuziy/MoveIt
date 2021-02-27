import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 16px;
`;

export const Progress = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--background-box);
  margin: 0 1.5rem;
  position: relative;
`;

export const CurrentProgress = styled.div`
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;

