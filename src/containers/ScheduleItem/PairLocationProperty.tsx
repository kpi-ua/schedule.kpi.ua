import LocationIcon from '../../assets/icons/location.svg?react';
import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils/getValueFromTheme';
import { Property } from './Property.styled';
import { PairLocation } from '../../models/PairLocation';

const LocationLink = styled.a`
  color: ${getValueFromTheme('primaryFontColor')};
`;

interface Props {
  location: PairLocation;
}

const PairLocationProperty = ({ location }: Props) => {
  return (
    <Property>
      <LocationIcon />
      {location.uri ? (
        <LocationLink href={location.uri} target="_blank" rel="noopener noreferrer">
          {location.title}
        </LocationLink>
      ) : (
        location.title
      )}
    </Property>
  );
};

export default PairLocationProperty;
