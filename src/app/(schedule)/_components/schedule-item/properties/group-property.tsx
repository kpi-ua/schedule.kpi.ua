'use client';

import Link from 'next/link';
import React from 'react';
import { useLocalStorage } from 'react-use';

import ThreeUsersIcon from '@/assets/icons/users-three.svg?react';
import { routes } from '@/lib/constants/routes';
import { Group } from '@/models/Group';

import { Property } from './property';

interface Props {
  groups: Group[];
}

export const GroupProperty = ({ groups }: Props) => {
  const [, setGroupId] = useLocalStorage<string | null>('groupId');

  const handleGroupClick = (group: Group) => {
    return () => {
      setGroupId(group.id);
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
