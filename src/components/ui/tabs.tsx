import * as React from 'react';
import { Tabs as TabsPrimitive } from 'radix-ui';
import { cn } from '../../common/utils/cn';

export const Tabs = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root data-slot="tabs" className={cn(className)} {...props} />
);

export const TabsList = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List data-slot="tabs-list" className={cn(className)} {...props} />
);

export const TabsTrigger = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger data-slot="tabs-trigger" className={cn(className)} {...props} />
);

export const TabsContent = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content data-slot="tabs-content" className={cn(className)} {...props} />
);
