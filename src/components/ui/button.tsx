import * as React from 'react';
import { Slot } from 'radix-ui';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../common/utils/cn';

const buttonVariants = cva(
  'flex cursor-pointer items-center gap-2 rounded-lg border border-transparent font-semibold',
  {
    variants: {
      variant: {
        default:
          'bg-basic-blue text-white [&_path]:fill-white enabled:hover:bg-brand-700 enabled:active:border-brand-900 enabled:active:bg-basic-blue disabled:bg-brand-700 disabled:opacity-40',
        secondary:
          'border-neutral-300 bg-transparent text-neutral-900 enabled:hover:border-neutral-900 enabled:hover:text-neutral-900 enabled:active:border-basic-blue enabled:active:bg-brand-00 enabled:active:text-basic-blue disabled:bg-neutral-50 disabled:text-neutral-300 disabled:[&_path]:fill-neutral-300',
        ghost:
          'bg-transparent text-neutral-600 enabled:hover:bg-neutral-50 enabled:hover:text-neutral-700 enabled:active:text-neutral-900 disabled:bg-brand-700 disabled:opacity-40',
      },
      size: {
        default: 'p-[11px] text-sm leading-5',
        sm: 'p-[9px] text-xs leading-4',
        lg: 'p-[15px] text-base leading-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot.Root : 'button';

    return (
      <Component ref={ref} data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  },
);

Button.displayName = 'Button';
