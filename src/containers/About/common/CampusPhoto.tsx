import clsx from 'clsx';

export const CampusPhoto = ({ className, ...props }: React.ComponentPropsWithoutRef<'img'>) => (
  <img {...props} className={clsx('w-full object-cover', className)} />
);
