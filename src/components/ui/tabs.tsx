import * as React from 'react';
import { Tabs as TabsPrimitive } from 'radix-ui';
import { cn } from '../../common/utils/cn';

export const Tabs = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root data-slot="tabs" className={cn(className)} {...props} />
);

type TabsStyleProps = {
  segmented?: boolean;
  rounded?: boolean;
};

export const TabsList = ({
  className,
  segmented,
  rounded,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & TabsStyleProps) => (
  <TabsPrimitive.List
    data-slot="tabs-list"
    className={cn(
      segmented && 'flex w-full justify-around gap-[4px] bg-bg-options p-[4px] shadow-radio-group',
      segmented && (rounded ? 'rounded-full' : 'rounded-[8px]'),
      className,
    )}
    {...props}
  />
);

export const TabsTrigger = ({
  className,
  segmented,
  rounded,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & TabsStyleProps) => (
  <TabsPrimitive.Trigger
    data-slot="tabs-trigger"
    className={cn(
      segmented &&
        'inline-flex grow cursor-pointer flex-col items-center justify-between border-0 bg-transparent px-[16px] py-[6px] text-[14px] leading-[1.43] font-medium tracking-[0.01em] whitespace-nowrap text-black transition-colors duration-200 ease-in after:pointer-events-none after:invisible after:h-0 after:select-none after:overflow-hidden after:font-semibold after:content-[attr(data-text)] data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=active]:text-tab-active data-[state=active]:shadow-radio-option max-sm:px-[6px]',
      segmented && (rounded ? 'rounded-full' : 'rounded-[6px]'),
      className,
    )}
    {...props}
  />
);

export const TabsContent = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content data-slot="tabs-content" className={cn(className)} {...props} />
);
