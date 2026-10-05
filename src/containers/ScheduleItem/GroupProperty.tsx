'use client';

import { Property } from './Property';
import { setLocalStorageItem } from '../../common/utils/parsedLocalStorage';
import { routes } from '../../common/constants/routes';
import { Group } from '../../models/Group';
import React from 'react';
import ThreeUsersIcon from '../../assets/icons/users-three.svg?react';
import Link from 'next/link';

interface Props {
  groups: Group[];
}

const GroupProperty = ({ groups }: Props) => {
  const handleGroupClick = (group: Group) => {
    return () => {
      setLocalStorageItem('groupId', group.id);
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
            <Link
              className="text-primary-font"
              onClick={handleGroupClick(group)}
              key={group.id}
              href={getGroupLink(group.id)}
            >
              {group.name}
            </Link>
            {index < groups.length - 1 && ', '}
          </React.Fragment>
        ))}
      </div>
    </Property>
  );
};

export default GroupProperty;
