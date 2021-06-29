import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages
} from './styles';

export function CarDetails(){
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}}/>
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={['https://beta.alpes.one/storage/app/uploads/public/5f1/58b/578/5f158b57828a1446732254.png']}/>
      </CarImages>
    </Container>
  );
}