import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
// import {useIsDrawerOpen} from '@react-navigation/drawer';

// Import Components
import {Span} from '../../components/Typography/typography';

// Import utils
import {NavigateTo, normalize, GetLocalData} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import Assets
import Avatar from '../../../assets/images/user.png';
import ChevronRight from '../../../assets/icons/arrow_chevron_right.png';
import bellIcon from '../../../assets/icons/bellicon.png';
import wand from '../../../assets/icons/wand.png';
import explore from '../../../assets/icons/explore.png';
import profile from '../../../assets/icons/profile.png';
import setting from '../../../assets/icons/gear.png';
import invite from '../../../assets/icons/invite.png';
import howitworks from '../../../assets/icons/info.png';
import logout from '../../../assets/icons/log-out.png';

const SideBar = props => {
  // const isDrawerOpen = useIsDrawerOpen();
  const [userData, setUserData] = useState(null);

  const HandleNavigation = (routeName, isProtected) => {
    if (isProtected === true) {
      if (userData) {
        NavigateTo(routeName);
      } else {
        NavigateTo('Login');
      }
    } else {
      NavigateTo(routeName);
    }
  };

  // useEffect(() => {
  //   if (isDrawerOpen === true) {
  //     GetLocalData('user').then(res => {
  //       if (res !== null || res !== undefined) {
  //         setUserData(res);
  //       }
  //     });
  //   }
  // }, [isDrawerOpen]);

  return (
    <View
      style={{
        padding: normalize(12),
        height: '100%',
        backgroundColor: color.light,
      }}>
      <View style={styles.HeaderContainer}>
        <Image
          source={Avatar}
          style={{
            borderWidth: normalize(2),
            borderRadius: normalize(8),
            height: normalize(40),
            width: normalize(40),
          }}
        />
        {/* <Span fontSize={size.x20} fontWeight="bold"
          // marginLeft={normalize(24)}
        >
          Arya D’souza
        </Span> */}
      </View>

      <View
        style={{
          borderRadius: normalize(8),
          borderWidth: normalize(2),
          borderColor: color.gray[100],
          height: normalize(32),
          backgroundColor: color.default,
          marginTop: normalize(8),
          marginBottom: normalize(32),
          paddingHorizontal: normalize(8),
        }}>
        <TextInput
          style={{
            width: '100%',
            height: normalize(32),
            borderRadius: normalize(8),
            backgroundColor: color.transparent,
            color: color.black,
          }}
          placeholder="Search"
        />
      </View>

      <View style={styles.MainContainer}>
        <View>
          <TouchableOpacity
            style={styles.MenuItem}
            onPress={() => {
              HandleNavigation('Notification');
            }}>
            <View style={styles.MenuItemBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={bellIcon} />
                <Span
                  marginLeft={normalize(16)}
                  fontSize={size.x14}
                  color={color.black}>
                  Notifications
                </Span>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={ChevronRight} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.MenuItem}
            onPress={() => {
              HandleNavigation('Design');
            }}>
            <View style={styles.MenuItemBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={wand} />
                <Span
                  marginLeft={normalize(16)}
                  fontSize={size.x14}
                  color={color.black}>
                  Design
                </Span>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={ChevronRight} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.MenuItem}
            onPress={() => {
              HandleNavigation('Explore');
            }}>
            <View style={styles.MenuItemBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={explore} />
                <Span
                  marginLeft={normalize(16)}
                  fontSize={size.x14}
                  color={color.black}>
                  Explore
                </Span>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={ChevronRight} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.MenuItem}
            onPress={() => {
              HandleNavigation('Profile');
            }}>
            <View style={styles.MenuItemBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={profile} />
                <Span
                  marginLeft={normalize(16)}
                  fontSize={size.x14}
                  color={color.black}>
                  Profile
                </Span>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={ChevronRight} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.MenuItem}
            onPress={() => {
              HandleNavigation('Setting');
            }}>
            <View style={styles.MenuItemBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={setting} />
                <Span
                  marginLeft={normalize(16)}
                  fontSize={size.x14}
                  color={color.black}>
                  Settings
                </Span>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={ChevronRight} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.MenuItem}
            onPress={() => {
              HandleNavigation('InviteFriend');
            }}>
            <View style={styles.MenuItemBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={invite} />
                <Span
                  marginLeft={normalize(16)}
                  fontSize={size.x14}
                  color={color.black}>
                  Invite a friend
                </Span>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={ChevronRight} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.MenuItem}
            onPress={() => {
              HandleNavigation('HowDotyWorks');
            }}>
            <View style={styles.MenuItemBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={howitworks} />
                <Span
                  marginLeft={normalize(16)}
                  fontSize={size.x14}
                  color={color.black}>
                  How doty works
                </Span>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={ChevronRight} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.MenuItem}
            onPress={() => {
              HandleNavigation('Onboarding');
            }}>
            <View style={styles.MenuItemBox}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={logout} />
                <Span
                  marginLeft={normalize(16)}
                  fontSize={size.x14}
                  color={color.black}>
                  Logout
                </Span>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={ChevronRight} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    height: normalize(78),
    alignItems: 'center',
    width: '100%',
  },
  MainContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: `68%`,
    width: '100%',
  },
  MenuItem: {
    paddingVertical: normalize(8),
    width: '100%',
  },
  MenuItemBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  MenuText: {
    color: color.textPrimaryColor,
    fontSize: size.lg,
  },
});

export default SideBar;
