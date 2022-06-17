import React from 'react';
import {
  SafeAreaViewComponent,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../utils/common';
import {normalize, windowWidth} from '../../utils/helper';

// Import assets
import MenuIcon from '../../../assets/icons/menuicon.png';
import BellIcon from '../../../assets/icons/bellicon.png';

// Import utils
import {NavigateTo} from '../../utils/helper';

const HandleNavigation = routeName => {
  NavigateTo(routeName);
};

const Header = props => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity
          onPress={props.onPressMenu}
          style={styles.ActionContainer}>
          <Image source={MenuIcon} style={styles.MenuIcon} />
      </TouchableOpacity>
      <Text>
          {/* Title */}
          {props.title}
      </Text>
      <TouchableOpacity
        onPress={() => HandleNavigation('Notifications')}
        style={styles.ActionContainer}>
        <Image source={BellIcon} style={styles.BellIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(48),
    width: windowWidth,
    paddingHorizontal: normalize(18),
    backgroundColor: color.light,
  },
  ActionContainer: {
    paddingVertical: normalize(12),
  },
  MenuIcon: {
    height: normalize(12),
  },
  BellIcon: {
    height: normalize(18),
  },
});

export default Header;
