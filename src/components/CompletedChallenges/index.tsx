import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Title, Completed } from './styles';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <Title>Desafios Completos</Title>
      <Completed>{challengesCompleted}</Completed>
    </Container>
  );
}

export default CompletedChallenges;