import LocationIcon from '../../assets/icons/location.svg?react';
import { Property } from './Property';
import { PairLocation } from '../../models/PairLocation';

interface Props {
  location: PairLocation;
}

const PairLocationProperty = ({ location }: Props) => {
  return (
    <Property>
      <LocationIcon />
      {location.uri ? (
        <a className="text-primary-font" href={location.uri} target="_blank" rel="noopener noreferrer">
          {location.title}
        </a>
      ) : (
        location.title
      )}
    </Property>
  );
};

export default PairLocationProperty;
