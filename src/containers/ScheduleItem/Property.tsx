import { cn } from '../../common/utils/cn';

export const Property = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    className={cn(
      'relative flex items-start gap-1.5 text-[13px] leading-4 font-medium text-primary-font [&>svg]:mt-px [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0',
      className,
    )}
    {...props}
  />
);
