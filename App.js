import React, {useEffect} from 'react';
import Application from './routes';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Application />;
};

export default App;
