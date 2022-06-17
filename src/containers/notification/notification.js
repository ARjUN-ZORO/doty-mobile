import React from 'react';
import {SafeAreaView, View, ScrollView, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

// Import Components
import {Span} from '../../components/Typography/typography';
import {BottomNavigation} from '../../components/BottomNav/bottomNav';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import Assets
import Person from '../../../assets/images/user.png';
import dotyNotification from '../../../assets/icons/doty_notification.png';
import notification1 from '../../../assets/icons/notification1.png';
import notification2 from '../../../assets/icons/notification2.png';
import notification3 from '../../../assets/icons/notification3.png';
import notification4 from '../../../assets/icons/notication4.png';
import notification5 from '../../../assets/icons/notification5.png';
import arrowLeft from '../../../assets/icons/arrow_chevron_right.png';

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const Notification = ({navigation, route}) => {
  return (
    <SafeAreaView  style={{paddingBottom: normalize(80), backgroundColor: color.light}}>
      <ScrollView style={styles.Container} nestedScrollEnabled={true}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: normalize(20),
          marginBottom: normalize(20),
        }}>
          <TouchableOpacity
            onPress={() => HandleNavigation('Home')}>
            <Image source={arrowLeft} style={{width: 30, height: 30, transform: [    
              {rotateY: '180deg'} //vertically
            ]}} />
          </TouchableOpacity>
          <Span
            fontSize={size.x20}
            color={color.darkBlack}
            fontWeight="200">
            Notifications
          </Span>
          <View/>
        </View>
        <View>
          <Span color={color.black} fontSize={size.x18}>
            Recent
          </Span>

          <View style={{marginTop: normalize(16)}}>
            <View
              style={{
                ...styles.notificationContainer,
                backgroundColor: color.gray[50],
              }}>
              <Image
                style={{
                  height: normalize(48),
                  width: normalize(48),
                  borderRadius: normalize(8),
                }}
                source={dotyNotification}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  marginLeft: normalize(16),
                }}>
                <Span
                  color={color.darkBlack}
                  fontWeight={'100'}
                  fontSize={size.x18}
                  numberOfLines={2}
                  lineHeight={normalize(20)}
                  maxWidth={normalize(225)}>
                  Doty has suggested 3 new explorations.{' '}
                  <Span
                    color={color.gray[100]}
                    fontSize={size.x14}
                    marginLeft={normalize(2)}>
                    1w
                  </Span>
                </Span>
              </View>
            </View>
            <View
              style={{
                ...styles.notificationContainer,
                backgroundColor: color.gray[50],
              }}>
              <Image
                style={{
                  height: normalize(48),
                  width: normalize(48),
                  borderRadius: normalize(8),
                }}
                source={notification1}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  marginLeft: normalize(16),
                }}>
                <Span
                  color={color.darkBlack}
                  fontWeight={'100'}
                  fontSize={size.x18}
                  numberOfLines={2}
                  lineHeight={normalize(20)}
                  maxWidth={normalize(225)}>
                  Samuel fin commented on {'\n'}your post.{' '}
                  <Span
                    color={color.gray[100]}
                    fontSize={size.x14}
                    marginLeft={normalize(2)}>
                    3h
                  </Span>
                </Span>
              </View>
            </View>
            <View
              style={{
                ...styles.notificationContainer,
                backgroundColor: color.gray[50],
              }}>
              <Image
                style={{
                  height: normalize(48),
                  width: normalize(48),
                  borderRadius: normalize(8),
                }}
                source={notification2}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  marginLeft: normalize(16),
                }}>
                <Span
                  color={color.darkBlack}
                  fontWeight={'100'}
                  fontSize={size.x18}
                  numberOfLines={2}
                  lineHeight={normalize(20)}
                  maxWidth={normalize(225)}>
                  12 people requested your perspective on.{' '}
                  <Span
                    color={color.gray[100]}
                    fontSize={size.x14}
                    marginLeft={normalize(2)}>
                    1w
                  </Span>
                </Span>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Span color={color.black} fontSize={size.x18}>
            Earlier
          </Span>
          
          <View style={{marginTop: normalize(16)}}>
            <View
              style={{
                ...styles.notificationContainer,
                backgroundColor: color.light,
              }}>
              <Image
                style={{
                  height: normalize(48),
                  width: normalize(48),
                  borderRadius: normalize(8),
                }}
                source={notification5}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  marginLeft: normalize(16),
                }}>
                <Span
                  color={color.darkBlack}
                  fontWeight={'100'}
                  fontSize={size.x18}
                  numberOfLines={2}
                  lineHeight={normalize(20)}
                  maxWidth={normalize(225)}>
                  Cherry followed you.{' '}
                  <Span
                    color={color.gray[100]}
                    fontSize={size.x14}
                    marginLeft={normalize(2)}>
                    8h
                  </Span>
                </Span>
              </View>
            </View>
          </View>

          <View >
            <View
              style={{
                ...styles.notificationContainer,
                backgroundColor: color.light,
              }}>
              <Image
                style={{
                  height: normalize(48),
                  width: normalize(48),
                  borderRadius: normalize(8),
                }}
                source={dotyNotification}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  marginLeft: normalize(16),
                }}>
                <Span
                  color={color.darkBlack}
                  fontWeight={'100'}
                  fontSize={size.x18}
                  numberOfLines={2}
                  lineHeight={normalize(20)}
                  maxWidth={normalize(225)}>
                  Table for 10 event is today, Get ready!.{' '}
                  <Span
                    color={color.gray[100]}
                    fontSize={size.x14}
                    marginLeft={normalize(2)}>
                    1h
                  </Span>
                </Span>
              </View>
            </View>
          </View>

          <View >
            <View
              style={{
                ...styles.notificationContainer,
                backgroundColor: color.light,
              }}>
              <Image
                style={{
                  height: normalize(48),
                  width: normalize(48),
                  borderRadius: normalize(8),
                }}
                source={notification3}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  marginLeft: normalize(16),
                }}>
                <Span
                  color={color.darkBlack}
                  fontWeight={'100'}
                  fontSize={size.x18}
                  numberOfLines={2}
                  lineHeight={normalize(20)}
                  maxWidth={normalize(225)}>
                  Finn posted a new perspective video.{' '}
                  <Span
                    color={color.gray[100]}
                    fontSize={size.x14}
                    marginLeft={normalize(2)}>
                    3d
                  </Span>
                </Span>
              </View>
            </View>
          </View>

          <View >
            <View
              style={{
                ...styles.notificationContainer,
                backgroundColor: color.light,
              }}>
              <Image
                style={{
                  height: normalize(48),
                  width: normalize(48),
                  borderRadius: normalize(8),
                }}
                source={notification4}
              />
              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  marginLeft: normalize(16),
                }}>
                <Span
                  color={color.darkBlack}
                  fontWeight={'100'}
                  fontSize={size.x18}
                  numberOfLines={2}
                  lineHeight={normalize(20)}
                  maxWidth={normalize(225)}>
                  Kevin posted a new perspective video.{' '}
                  <Span
                    color={color.gray[100]}
                    fontSize={size.x14}
                    marginLeft={normalize(2)}>
                    3d
                  </Span>
                </Span>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalHeader: {
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(8),
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.light,
  },
  Container: {
    padding: normalize(18),
    backgroundColor: color.light,
  },

  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(12),
    borderRadius: normalize(8),
    marginBottom: normalize(8),
    borderColor: color.gray[50],
    borderWidth: normalize(3),
  },
});

export default Notification;
