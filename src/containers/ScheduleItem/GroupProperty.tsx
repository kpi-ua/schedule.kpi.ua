import { Property } from './Property.styled';
import { StyledLink } from '../../common/styles/styles';
import { setLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import { useStore } from '../../store';
import { routes } from '../../common/constants/routes';
import { Group } from '../../models/Group';
import React from 'react';
import ThreeUsersIcon from '../../assets/icons/users-three.svg?react';

interface Props {
  groups: Group[];
}

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
    <Property>
      <ThreeUsersIcon />
      <div>
        {groups.map((group, index) => (
          <React.Fragment key={group.id}>
            <StyledLink onClick={handleGroupClick(group)} key={group.id} to={getGroupLink(group.id)}>
              {group.name}
            </StyledLink>
            {index < groups.length - 1 && ', '}
          </React.Fragment>
        ))}
      </div>
    </Property>
  );
};

export default GroupProperty;
