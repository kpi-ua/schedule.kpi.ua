import React, { useEffect, useState } from 'react';

const Tabs = ({children, onTabChanged}) => {
  const [currentTab, setTab] = useState(0);

  useEffect(() => {
    onTabChanged(currentTab);
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
