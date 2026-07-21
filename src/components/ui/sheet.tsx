import * as React from 'react';
import { Dialog as SheetPrimitive } from 'radix-ui';
import { cn } from '../../common/utils/cn';

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;

export const SheetContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content>) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Content
      data-slot="sheet-content"
      className={cn(
        'fixed inset-x-0 z-[1200] flex h-[calc(100%-var(--sheet-top))] w-full flex-[1_0_auto] flex-col overflow-hidden bg-white outline-0 data-[state=closed]:animate-sheet-close data-[state=open]:animate-sheet-open',
        className,
      )}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
);

export const SheetTitle = ({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) => (
  <SheetPrimitive.Title data-slot="sheet-title" className={cn(className)} {...props} />
);
