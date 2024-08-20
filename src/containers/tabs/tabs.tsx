import React, { useCallback, useEffect, useState } from "react";

interface TabsProps {
  children: React.ReactElement[];
  onChange: (tab: number) => void;
}

const Tabs = ({ children, onChange }: TabsProps) => {
  const [currentTab, setTab] = useState(0);
  const onChangeCallback = useCallback((tab: number) => onChange(tab), [onChange]);

  useEffect(() => {
    onChangeCallback(currentTab);
  }, [onChangeCallback, currentTab]);

  return (
    <>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          tabClick: () => setTab(index),
          activeTab: currentTab === index,
        });
      })}
    </>
  );
};

export default Tabs;
