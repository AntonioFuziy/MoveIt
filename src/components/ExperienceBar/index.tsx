import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Span, Progress, CurrentProgress, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience*100)/experienceToNextLevel);

  return (
    <Container>
      <Span>0 xp</Span>
      <Progress>
        <CurrentProgress style={{ width: `${percentToNextLevel}%` }}/>

        <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience}xp
        </CurrentExperience>
      </Progress>
      <Span>{experienceToNextLevel} xp</Span>
    </Container>
  );
}

export default ExperienceBar;