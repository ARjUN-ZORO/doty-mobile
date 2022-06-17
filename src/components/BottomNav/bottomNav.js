import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Svg, Path} from 'react-native-svg';

import {Span} from '../Typography/typography';
import {normalize, windowWidth, NavigateTo, normalizeNew} from '../../utils/helper';
import {size, color} from '../../utils/common';

export const BottomNavigation = (props,{navigation}) => {

  console.log("Bottom nav",navigation, props.pathname)

  const HandleNavigation = (routeName, param) => {
    NavigateTo(routeName, param);
  };

  let [activeNav, setActiveNav] = useState('');

  useEffect(() => {
    setActiveNav(props.pathname);
  }, [activeNav]);
const screenInfo = normalizeNew()
  return (
    <View style={[styles.container, {width:screenInfo.width}]}>
      <TouchableOpacity
        style={[styles.optionBox,{width:screenInfo.width / 5}]}
        onPress={() => {
          setActiveNav('Home');
          HandleNavigation('Home');
        }}>
        {/* HOME */}

        {activeNav === 'Home' && (
          <View
            style={{
              height: normalize(24),
              width: '100%',
              backgroundColor: color.light,
              borderTopRightRadius: normalize(99),
              borderTopLeftRadius: normalize(99),
              borderTopWidth: normalize(2),
              borderTopColor: color.gray[50],
              position: 'absolute',
              top: normalize(-12),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: normalize(6),
                width: normalize(6),
                borderRadius: normalize(99),
                backgroundColor: color.primary[900],
              }}></View>
          </View>
        )}

        <View>
          <Svg
            width="21"
            height="18"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.99991 0L19.3292 7.2881L18.6707 8.04067L18.0713 7.57675V17H10.9999V12H8.99991V17H1.99991V7.52146L1.32916 8.04067L0.670654 7.2881L9.99991 0ZM11.9999 16V11H7.99991V16H2.99991V6.74737L9.99991 1.32877L17.0713 6.80266V16H11.9999Z"
              fill={activeNav === 'Home' ? color.primary[900] : 'black'}
              fillOpacity="0.6"
            />
          </Svg>
        </View>
        <Span color={activeNav === 'Home' ? color.primary[900] : 'black'}>
          Home
        </Span>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionBox,{width:screenInfo.width / 5}]}
        onPress={() => {
          setActiveNav('Design');
          HandleNavigation('DesignInfo');
        }}>
        {/* DESIGN */}

        {activeNav === 'Design' && (
          <View
            style={{
              height: normalize(24),
              width: '100%',
              backgroundColor: color.light,
              borderTopRightRadius: normalize(99),
              borderTopLeftRadius: normalize(99),
              borderTopWidth: normalize(2),
              borderTopColor: color.gray[50],
              position: 'absolute',
              top: normalize(-12),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: normalize(6),
                width: normalize(6),
                borderRadius: normalize(99),
                backgroundColor: color.primary[900],
              }}></View>
          </View>
        )}
        <View>
          <Svg
            width="16"
            height="18"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.3536 7.35355L15.3536 9.35355L14.6464 8.64645L16.6464 6.64645L17.3536 7.35355ZM13.3536 11.3536L5.35355 19.3536L4.64645 18.6464L12.6464 10.6464L13.3536 11.3536Z"
              fill={activeNav === 'Design' ? color.primary[900] : 'black'}
              fillOpacity="0.6"
            />
            <Path
              d="M13.1936 5.95346C13.0897 4.80456 12.2586 3.96899 11.1158 3.86455C12.2586 3.7601 13.0897 2.92454 13.1936 1.77563C13.2975 2.92454 14.1285 3.7601 15.2713 3.86455C14.1285 3.96899 13.2975 4.80456 13.1936 5.95346Z"
              fill={activeNav === 'Design' ? color.primary[900] : 'black'}
              fillOpacity="0.6"
            />
            <Path
              d="M8.62265 9.39999C8.51876 8.25109 7.68767 7.41552 6.54492 7.31108C7.68767 7.20663 8.51876 6.37107 8.62265 5.22217C8.72653 6.37107 9.55762 7.20663 10.7004 7.31108C9.55762 7.41552 8.62265 8.25109 8.62265 9.39999Z"
              fill={activeNav === 'Design' ? color.primary[900] : 'black'}
              fillOpacity="0.6"
            />
            <Path
              d="M7.06442 4.17782C6.96053 3.02892 6.12944 2.19336 4.98669 2.08891C6.12944 1.98447 6.96053 1.1489 7.06442 0C7.1683 1.1489 7.99939 1.98447 9.14214 2.08891C7.99939 2.19336 7.06442 3.02892 7.06442 4.17782Z"
              fill={activeNav === 'Design' ? color.primary[900] : 'black'}
              fillOpacity="0.6"
            />
            <Path
              d="M2.07772 6.26681C1.97384 5.11791 1.14275 4.28235 0 4.1779C1.14275 4.07345 1.97384 3.23789 2.07772 2.08899C2.18161 3.23789 3.0127 4.07345 4.15545 4.1779C3.0127 4.28235 2.18161 5.11791 2.07772 6.26681Z"
              fill={activeNav === 'Design' ? color.primary[900] : 'black'}
              fillOpacity="0.6"
            />
          </Svg>
        </View>
        <Span color={activeNav === 'Design' ? color.primary[900] : 'black'}>
          Design
        </Span>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionBox,{width:screenInfo.width / 5}]}
        onPress={() => {
          setActiveNav('PostModal');
          HandleNavigation('PostModal');
        }}>
        {/* POST */}
        {activeNav === 'PostModal' && (
          <View
            style={{
              height: normalize(24),
              width: '100%',
              backgroundColor: color.light,
              borderTopRightRadius: normalize(99),
              borderTopLeftRadius: normalize(99),
              borderTopWidth: normalize(2),
              borderTopColor: color.gray[50],
              position: 'absolute',
              top: normalize(-12),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: normalize(6),
                width: normalize(6),
                borderRadius: normalize(99),
                backgroundColor: color.primary[900],
              }}></View>
          </View>
        )}
        <View>
          <Svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.49998 6.5V0H7.49998V6.5H14V7.5H7.49998V14H6.49998V7.5H0V6.5H6.49998Z"
              fill="black"
              fillOpacity="0.6"
            />
          </Svg>
        </View>
        <Span>Post</Span>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionBox,{width:screenInfo.width / 5}]}
        onPress={() => {
          setActiveNav('Explore');
          HandleNavigation('Explore');
        }}>
        {/* EXPLORE */}
        {activeNav === 'Explore' && (
          <View
            style={{
              height: normalize(24),
              width: '100%',
              backgroundColor: color.light,
              borderTopRightRadius: normalize(99),
              borderTopLeftRadius: normalize(99),
              borderTopWidth: normalize(2),
              borderTopColor: color.gray[50],
              position: 'absolute',
              top: normalize(-12),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: normalize(6),
                width: normalize(6),
                borderRadius: normalize(99),
                backgroundColor: color.primary[900],
              }}></View>
          </View>
        )}
        <View>
          <Svg
            width="21"
            height="21"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M9.99976 19C14.9703 19 18.9998 14.9706 18.9998 10C18.9998 5.02944 14.9703 1 9.99976 1C5.02919 1 0.999756 5.02944 0.999756 10C0.999756 14.9706 5.02919 19 9.99976 19Z"
              stroke={activeNav === 'Explore' ? color.primary[900] : 'black'}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M11.8925 11.8925L6 14.25L8.3575 8.3575L14.25 6L11.8925 11.8925Z"
              stroke={activeNav === 'Explore' ? color.primary[900] : 'black'}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
        <Span color={activeNav === 'Explore' ? color.primary[900] : 'black'}>
          Explore
        </Span>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionBox,{width:screenInfo.width / 5}]}
        onPress={() => {
          setActiveNav('Profile');
          HandleNavigation('Profile');
        }}>
        {/* PROFILE */}
        {activeNav === 'Profile' && (
          <View
            style={{
              height: normalize(24),
              width: '100%',
              backgroundColor: color.light,
              borderTopRightRadius: normalize(99),
              borderTopLeftRadius: normalize(99),
              borderTopWidth: normalize(2),
              borderTopColor: color.gray[50],
              position: 'absolute',
              top: normalize(-12),
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: normalize(6),
                width: normalize(6),
                borderRadius: normalize(99),
                backgroundColor: color.primary[900],
              }}></View>
          </View>
        )}
        <View>
          <Svg
            width="17"
            height="18"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 7C10.6569 7 12 5.65685 12 4C12 2.34315 10.6569 1 9 1C7.34315 1 6 2.34315 6 4C6 5.65685 7.34315 7 9 7ZM12 13L6 13C3.23859 13 1.00002 15.2386 1.00001 18L17 18C17 15.2386 14.7614 13 12 13ZM9 8C11.2091 8 13 6.20914 13 4C13 1.79086 11.2091 0 9 0C6.79086 0 5 1.79086 5 4C5 6.20914 6.79086 8 9 8ZM6 12C2.68631 12 2.18183e-05 14.6863 5.058e-06 18L0 19H18V18C18 14.6863 15.3137 12 12 12L6 12Z"
              fill={activeNav === 'Profile' ? color.primary[900] : 'black'}
              fillOpacity="0.6"
            />
          </Svg>
        </View>
        <Span color={activeNav === 'Profile' ? color.primary[900] : 'black'}>
          Profile
        </Span>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: windowWidth,
    minHeight: normalize(52),
    backgroundColor: color.light,
    elevation: 8,
    borderTopRightRadius: normalize(18),
    borderTopLeftRadius: normalize(18),
    zIndex: 9,
  },
  optionBox: {
    // width: windowWidth / 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(10),
    position: 'relative',
  },
});
