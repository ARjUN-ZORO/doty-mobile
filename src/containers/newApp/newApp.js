import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import components
import {
    HeadText,
    SubHeadText,
    SectionTitle,
    Span,
} from '../../components/Typography/typography';
import {BottomNavigation} from '../../components/BottomNav/bottomNav';

// Import assets
import NewAppImage from '../../../assets/images/NewApp.png';


const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const NewApp = ({navigation, route}) => {
 
  return (
    <SafeAreaView
      style={{
        backgroundColor: color.light,
      }}>
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
        <View style={{marginBottom:90}}>
            <View style={{
                marginTop: normalize(40),
            }}>
                <HeadText fontWeight={'bold'} fontFamily={'Lato'} color={color.black}>Welcome Arya, 👋</HeadText>
                <SubHeadText marginTop={normalize(4)} fontFamily={'Lato'}>
                Let's join some dots!
                </SubHeadText>
            </View>
            <View style={{
                marginTop: normalize(20),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={NewAppImage} style={{
                    width: wp('100%'),
                    height: hp('25%')
                }}/>
            </View>
            <Span marginTop={normalize(30)} fontSize={wp('5%')} marginBottom={normalize(20)}>
                Doty is about you. You design your life. We provide a growing set of tools and a helpful community.
            </Span>
            <Span fontSize={wp('5%')} marginBottom={normalize(30)}>
                Your active particitpation is the primary prerequisite. Start from where you are, to set doty up for you.
            </Span>
            <TouchableOpacity
                onPress={() => HandleNavigation('FocusOn')}
                style={{
                width: '100%',
                height: normalize(40),
                backgroundColor: color.primary[900],
                borderRadius: normalize(40),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: normalize(20),
                }}>
                <Span textAlign="center" fontWeight="bold" fontSize={wp('4%')} color={color.default}>
                Start
                </Span>
          </TouchableOpacity>
          </View>
      </ScrollView>
      <BottomNavigation pathname={"Home"}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(18),
    paddingTop: normalize(12),
    height: '100%',
  },
  slider: {
    marginLeft: normalize(-18),
  },
  sectionBody: {
    marginTop: normalize(18),
  },
});

export default NewApp;
