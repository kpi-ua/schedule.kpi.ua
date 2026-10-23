import clsx from 'clsx';

export const PhotoWrapper = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={clsx('h-full w-full', className)} />
);
