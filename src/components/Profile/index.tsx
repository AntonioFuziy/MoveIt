import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, ProfileImage, Strong, TextContent, Xp, XpIcon } from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <Container>
      <ProfileImage src="https://github.com/AntonioFuziy.png" alt="Antonio Fuziy"/>
      <TextContent>
        <Strong>Antonio Fuziy</Strong>
        <Xp>
          <XpIcon src="icons/level.svg" alt="Level"/>
          Level {level}
        </Xp>
      </TextContent>
    </Container>
  );
}

export default Profile;