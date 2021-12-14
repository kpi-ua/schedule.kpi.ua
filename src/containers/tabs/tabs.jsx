import React, { useEffect, useState } from 'react';

const Tabs = ({children, onTabChanged, initial}) => {
  const [currentTab, setTab] = useState(null);

  useEffect(() => {
    if (typeof currentTab === 'number') {
      onTabChanged(currentTab);
    }
  }, [currentTab]);

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
