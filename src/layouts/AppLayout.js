import React from 'react';
import {BottomNavigation} from '../components/BottomNav/bottomNav';

const AppLayout = Children => {
  return (
    <>
      <Children />
      <BottomNavigation />
    </>
  );
};

export default AppLayout;
