import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';

// import components
import Header from './src/components/Header/header';
import SideBar from './src/components/SideBar/sideBar';
// import BottomNavigation from './src/components/BottomNav/bottomNav';

// import containers
import Home from './src/containers/home/home';
import Login from './src/containers/login/login';
import OTP from './src/containers/otp/otp';
import Onboarding from './src/containers/onboarding/onboarding';
import PostModal from './src/containers/post/post';
import Profile from './src/containers/profile/profile';
import Notification from './src/containers/notification/notification';
import Explore from './src/containers/explore/explore';
import Design from './src/containers/design/design';
import InviteFriend from './src/containers/inviteFriend/inviteFriend';
import HowDotyWorks from './src/containers/howDotyWorks/howDotyWorks';
import AddPossibilityModal from './src/containers/addPossibility/addPossibility';
import PossibilityDetailModal from './src/containers/possibilityDetail/possibilityDetail';
import Content from './src/containers/content/content';
import Followers from './src/containers/followers/followers';
import DesignInfo from './src/containers/designInfo/designInfo'
import PrivacyPolicy from './src/containers/privacy-policy/privacyPolicy';
import EmptyPossibility from './src/containers/emptyPossibility/emptyPossibility';
import NewApp from './src/containers/newApp/newApp';
import FocusOn from './src/containers/focusOn/focusOn';
import Personalize from './src/containers/personalize/personalize';

import {
  GetLocalData,
  RemoveLocalData,
  NavigateTo,
  normalize,
} from './src/utils/helper';
import {color} from './src/utils/common';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
  );
};

const AppStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => (
          <Header onPressMenu={() => navigation.openDrawer()} {...props} />
        ),
        // headerMode: 'float',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="InviteFriend" component={InviteFriend} />
      <Stack.Screen name="HowDotyWorks" component={HowDotyWorks} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  const [userData, setUserData] = useState(null);

  const logoutUser = () => {
    RemoveLocalData('user');
    NavigateTo('Home');
  };

  const getUserData = () => {
    GetLocalData('user').then(res => {
      if (res !== null || res !== undefined) {
        setUserData(res);
      }
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName={'Onboarding'}
      headerMode="float"
      drawerContent={props => (
        <SideBar
          {...props}
          userData={userData}
          onLogout={logoutUser}
          isDrawerOpenCheck={() => getUserData()}
        />
      )}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          swipeEnabled: true,
          gestureEnabled: true,
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Login"
        component={OnboardingStack}
        options={{
          swipeEnabled: true,
          gestureEnabled: true,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="NewApp"
        component={NewApp}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Personalize"
        component={Personalize}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="FocusOn"
        component={FocusOn}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="App"
        component={AppStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notification}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="EmptyPossibility"
        component={EmptyPossibility}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="DesignInfo"
        component={DesignInfo}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Design"
        component={Design}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Explore"
        component={Explore}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Followers"
        component={Followers}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="PostModal"
        component={PostModal}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
        screenOptions={{presentation: 'modal'}}
      />
      <Drawer.Screen
        name="AddPossibilityModal"
        component={AddPossibilityModal}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
        screenOptions={{presentation: 'AddPossibilityModal'}}
      />
      <Drawer.Screen
        name="PossibilityDetailModal"
        component={PossibilityDetailModal}
        options={{
          swipeEnabled: false,
          gestureEnabled: false,
          headerShown: false,
        }}
        screenOptions={{presentation: 'PossibilityDetailModal'}}
      />
    </Drawer.Navigator>
  );
};

const Application = props => {
  return (
    <NavigationContainer ref={navigationRef} initialRouteName={'Onboarding'}>
      <StatusBar
        animated={true}
        backgroundColor={color.light}
        currentHeight
        barStyle="dark-content"
      />
      <DrawerNavigator {...props} />
    </NavigationContainer>
  );
};

export default Application;
