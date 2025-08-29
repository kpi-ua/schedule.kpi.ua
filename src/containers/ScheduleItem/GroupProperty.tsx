import { Property } from './Property.styled';
import { StyledLink } from '../../common/styles/styles';
import { setLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import { useStore } from '../../store';
import { routes } from '../../common/constants/routes';
import { Group } from '../../models/Group';
import React from 'react';
import styled from 'styled-components';

interface Props {
  groups: Group[];
}

const WrappedProperty = styled(Property)`
  flex-wrap: wrap;
`;

const GroupProperty = ({ groups }: Props) => {
  const setGroup = useStore((store) => store.setGroup);

  const handleGroupClick = (group: Group) => {
    return () => {
      setLocalStorageItem('groupId', group.id);
      setGroup(group);
    };
  };

  const getGroupLink = (groupId: string) => {
    if (!groupId) {
      return '#';
    }

    return `${routes.INDEX}?groupId=${groupId}`;
  };

  return (
    <WrappedProperty>
      {groups.map((group, index) => (
        <React.Fragment key={group.id}>
          <StyledLink onClick={handleGroupClick(group)} key={group.id} to={getGroupLink(group.id)}>
            {group.name}
            {index < groups.length - 1 && ', '}
          </StyledLink>
        </React.Fragment>
      ))}
    </WrappedProperty>
  );
};

export default GroupProperty;
