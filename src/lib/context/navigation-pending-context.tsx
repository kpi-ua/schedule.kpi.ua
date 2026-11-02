'use client';

import { type TransitionStartFunction, createContext, useContext, useTransition } from 'react';

interface NavigationPendingContextValue {
  isPending: boolean;
  startTransition: TransitionStartFunction;
}

const NavigationPendingContext = createContext<NavigationPendingContextValue | undefined>(undefined);

export const useNavigationPendingContext = () => {
  const context = useContext(NavigationPendingContext);

  if (!context) {
    throw new Error('useNavigationPendingContext must be used within a NavigationPendingContextProvider');
  }

  return context;
};

interface NavigationPendingContextProviderProps {
  children: React.ReactNode;
}

// Shared transition so entity search (settings slot) and the schedule grid (page content) —
// separate parallel-route subtrees — agree on when a group/lecturer switch is in flight.
export const NavigationPendingContextProvider = ({ children }: NavigationPendingContextProviderProps) => {
  const [isPending, startTransition] = useTransition();

  return (
    <NavigationPendingContext.Provider value={{ isPending, startTransition }}>
      {children}
    </NavigationPendingContext.Provider>
  );
};
