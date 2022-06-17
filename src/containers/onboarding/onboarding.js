import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Text,
  Button,
  Dimensions,
} from 'react-native';

// Import Components
import {Span} from '../../components/Typography/typography';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import Assets
import google from '../../../assets/icons/google.png';
import facebook from '../../../assets/icons/facebook.png';
import twitter from '../../../assets/icons/twitter.png';
import OnboardingImage from '../../../assets/icons/Onboarding.png';
import Onboarding from 'react-native-onboarding-swiper';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const onboarding = ({navigation, route}) => {
  const [state, setState] = useState({
    mobile: '',
    otp: '',
  });

  return (
    <View style={styles.container}>
        <ScrollView>
        <Swiper style={styles.wrapper} showsButtons={false} 
        activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 40,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
        paginationStyle={{
            left: 20,
            right: null
          }}>
          <View style={styles.slide1}>
              <Image source={OnboardingImage} style={{
                  left: 40,
                  height: hp('70%'),
                  width: wp('80%'),
              }}></Image>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                alignSelf: 'flex-start',
              }}>
                <Text style={styles.headText}>Life, by your design.</Text>
              <Text style={styles.subtitleText}>A fun way to unveil the best version of you.</Text>
              </View>
              <TouchableOpacity
                  onPress={() => HandleNavigation('Login')}
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    marginBottom: normalize(20),
                    marginHorizontal: normalize(10),
                    }}>
                <Span textAlign="center" color={color.primary[900]} fontSize={wp('4%')}>
                  Skip
                </Span>
              </TouchableOpacity>
          </View>
          <View style={styles.slide1}>
              <Image source={OnboardingImage} style={{
                  left: 40,
                  height: hp('70%'),
width: wp('80%'),
              }}></Image>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                alignSelf: 'flex-start',
              }}>
                <Text style={styles.headText}>Who knows what’s possible?</Text>
              <Text style={styles.subtitleText}>You do. Use the good, embrace the flaws, and control your journey. We’ll help.</Text>
              </View>
              <TouchableOpacity
                  onPress={() => HandleNavigation('Login')}
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    marginBottom: normalize(20),
                    marginHorizontal: normalize(10),
                    }}>
                <Span textAlign="center" color={color.primary[900]} fontSize={wp('4%')}>
                  Skip
                </Span>
              </TouchableOpacity>
          </View>
          <View style={styles.slide1}>
          <Image source={OnboardingImage} style={{
                  left: 40,
                  height: hp('70%'),
width: wp('80%'),
              }}></Image>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                alignSelf: 'flex-start',
              }}>
                <Text style={styles.headText}>Start now, from where you are, with what you have.</Text>
              <Text style={styles.subtitleText}>Because the “Today You” is the centre of your design.</Text>
              </View>
              <TouchableOpacity
                  onPress={() => HandleNavigation('Login')}
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    marginBottom: normalize(20),
                    marginHorizontal: normalize(10),
                    }}>
                <Span textAlign="center" color={color.primary[900]} fontSize={wp('4%')}>
                  Skip
                </Span>
              </TouchableOpacity>
          </View>
          <View style={styles.slide1}>
          <Image source={OnboardingImage} style={{
                  left: 40,
                  height: hp('70%'),
width: wp('80%'),
              }}></Image>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                alignSelf: 'flex-start',
              }}>
                <Text style={styles.headText}>With science, ancient wisdom, and experience.</Text>
              <Text style={styles.subtitleText}>Across relevant fields and by your side.</Text>
              </View>
              <TouchableOpacity
                  onPress={() => HandleNavigation('Login')}
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    marginBottom: normalize(20),
                    marginHorizontal: normalize(10),
                    }}>
                <Span textAlign="center" color={color.primary[900]} fontSize={wp('4%')}>
                  Skip
                </Span>
              </TouchableOpacity>
          </View>
          <View style={styles.slide1}>
          <Image source={OnboardingImage} style={{
                  left: 40,
                  height: hp('70%'),
width: wp('80%'),
              }}></Image>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                alignSelf: 'flex-start',
              }}>
                <Text style={styles.headText}>A personalised journey, not a lonely one.</Text>
              <Text style={styles.subtitleText}>Connect with others and share perspectives, if and when you want.</Text>
              </View>
              <TouchableOpacity
                  onPress={() => HandleNavigation('Login')}
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    marginBottom: normalize(20),
                    marginHorizontal: normalize(10),
                    }}>
                <Span textAlign="center" color={color.primary[900]} fontSize={wp('4%')}>
                  Skip
                </Span>
              </TouchableOpacity>
          </View>
          <View style={styles.slide1}>
          <Image source={OnboardingImage} style={{
                  left: 40,
                  height: hp('70%'),
width: wp('80%'),
              }}></Image>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                alignSelf: 'flex-start',
              }}>
                <Text style={styles.headText}>Even Anonymous is welcome here.</Text>
              <Text style={styles.subtitleText}>Share perspectives or ask for help - as yourself or anonymously.</Text>
              </View>
                <TouchableOpacity
                  onPress={() => HandleNavigation('Login')}
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    marginBottom: normalize(20),
                    marginHorizontal: normalize(10),
                    }}>
                <Span textAlign="center" color={color.primary[900]} fontSize={wp('4%')}>
                  Skip
                </Span>
              </TouchableOpacity>
          </View>
          <View style={styles.slide1}>
          <Image source={OnboardingImage} style={{
                  left: 40,
                  height: hp('70%'),
width: wp('80%'),
              }}></Image>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                alignSelf: 'flex-start'
              }}>
                <Text style={styles.headText}>Spies may be jealous of your privacy.</Text>
                <Text style={styles.subtitleText}>It’s simple, easy-to-understand, and iron-clad.</Text>
              </View>
              <TouchableOpacity
              onPress={() => HandleNavigation('Login')}
              style={{
                width: '30%',
                height: normalize(30),
                backgroundColor: color.primary[900],
                borderRadius: normalize(40),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
                marginBottom: normalize(20),
                marginHorizontal: normalize(10),
              }}>
              <Span textAlign="center" fontWeight={'bold'} color={color.default}>
                Get Started
              </Span>
            </TouchableOpacity>
          </View>
        </Swiper>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: color.light,
  },  
  wrapper: {
    height: hp('100%'), 
  },
  slide1: {
    height: hp('100%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headText: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginHorizontal: normalize(20),
    color: '#000',
    fontSize: hp('2.75%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },
  subtitleText: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginHorizontal: normalize(20),
    color: '#000',
    fontSize: wp('4%'),
    marginTop: hp('2%'),
    color: color.gray[900],
  },
});

export default onboarding;
