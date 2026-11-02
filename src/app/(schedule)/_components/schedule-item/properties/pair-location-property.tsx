import LocationIcon from '@/assets/icons/location.svg?react';
import { PairLocation } from '@/models/PairLocation';

import { Property } from './property';

interface Props {
  location: PairLocation;
}

export const PairLocationProperty = ({ location }: Props) => {
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
