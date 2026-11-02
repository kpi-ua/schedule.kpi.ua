import clsx from 'clsx';
import { forwardRef } from 'react';

export const MenuLink = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, ...props }, ref) => (
    <a
      {...props}
      ref={ref}
      className={clsx(
        'text-base font-medium text-black no-underline [&.selected]:pointer-events-none [&.selected]:cursor-default',
        className,
      )}
    />
  ),
);

MenuLink.displayName = 'MenuLink';
