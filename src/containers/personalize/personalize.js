import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import Tabs from 'react-native-tabs';

// Import Components
import {BottomNavigation} from '../../components/BottomNav/bottomNav';
import {CardTitle, Span, HeadText,
    SubHeadText,
    SectionTitle,} from '../../components/Typography/typography';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';
import Slider from '@react-native-community/slider';

import arrowLeft from '../../../assets/icons/arrow_chevron_right.png';
import dotMenuIcon from '../../../assets/icons/dotMenu.png';
import sliderthumb from '../../../assets/icons/sliderthumb.png';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const Personalize = ({navigation, route}) => {
  const [selectedTab, setSelectedTab] = useState('Possibilities');
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={{marginBottom:50}}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: normalize(20),
      }}>
        <TouchableOpacity
          onPress={() => HandleNavigation('FocusOn')}>
          <Image source={arrowLeft} style={{width: 30, height: 30, transform: [    
            {rotateY: '180deg'} //vertically
          ]}} />
        </TouchableOpacity>
        <Image source={dotMenuIcon} style={{width: wp('10%'), height: wp('10%')}} />
      </View>
      <View style={{
            marginTop: normalize(10),
            marginBottom: normalize(10)
        }}>
            <HeadText fontWeight={'bold'} fontFamily={'Lato'} color={color.black}>Personalise Doty to work for you.</HeadText>
            <SubHeadText marginTop={normalize(20)} fontFamily={'Lato'}>
                This is a great way to understand yourself and an even better way to receive all things relevant.
            </SubHeadText>
        </View>
      <View style={{
        height: '8%', marginBottom: normalize(2), backgroundColor: color.skyBlue,
      display:"flex",}}>
            <Tabs
            selected={selectedTab}
            style={{backgroundColor: color.skyBlue, color: color.gray[100]}}
            selectedStyle={{
                backgroundColor: color.primary[900],
                padding: normalize(6),
                borderRadius: normalize(4),
              color: color.white,
                width:"100%"
            }}
            onSelect={el => setSelectedTab(el.props.name)}>
            <Span name="All" style={{color: color.gray[100], fontSize: wp('4 s%')}}>Identity</Span>
            <Span name="Video" style={{color: color.gray[100], fontSize: wp('4%')}}>Belief</Span>
            <Span name="Event" style={{color: color.gray[100], fontSize: wp('4%')}}>Personality</Span>
            <Span name="Members" style={{color: color.gray[100], fontSize: wp('4%')}}>Behaviour</Span>
            <Span name="Members" style={{color: color.gray[100], fontSize: wp('4%')}}>Behaviour</Span>
            </Tabs>
        </View>
        <Slider
            style={{width: '100%', height: 40}}
            minimumValue={0}
            maximumValue={100}
            value={sliderValue}
            // onValueChange={value => setSliderValue(value)}
            step={1}
            minimumTrackTintColor="#BDBDBD"
            maximumTrackTintColor="#BDBDBD"
            thumbImage={sliderthumb}
        />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Span
                marginBottom={normalize(14)}
                fontSize={wp('3%')}
                numberOfLines={1}
                color={color.gray[500]}>
                    I prefer structure
            </Span>
            <Span
                fontSize={wp('3%')}
                numberOfLines={1}
                color={color.gray[500]}>
                    Let life flow
            </Span>
        </View>
        <Slider
            style={{width: '100%', height: 40}}
            minimumValue={0}
            maximumValue={100}
            value={sliderValue}
            // onValueChange={value => setSliderValue(value)}
            step={1}
            minimumTrackTintColor="#BDBDBD"
            maximumTrackTintColor="#BDBDBD"
            thumbImage={sliderthumb}
        />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Span
                marginBottom={normalize(14)}
                fontSize={wp('3%')}
                numberOfLines={1}
                color={color.gray[500]}>
                    Starting new things
            </Span>
            <Span
                fontSize={wp('3%')}
                numberOfLines={1}
                color={color.gray[500]}>
                    Finishing what i started
            </Span>
        </View>
        <Slider
            style={{width: '100%', height: 40}}
            minimumValue={0}
            maximumValue={100}
            value={sliderValue}
            // onValueChange={value => setSliderValue(value)}
            step={1}
            minimumTrackTintColor="#BDBDBD"
            maximumTrackTintColor="#BDBDBD"
            thumbImage={sliderthumb}
        />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Span
                marginBottom={normalize(14)}
                fontSize={wp('3%')}
                numberOfLines={1}
                color={color.gray[500]}>
                    Ancient Wisdom
            </Span>
            <Span
                fontSize={wp('3%')}
                numberOfLines={1}
                color={color.gray[500]}>
                    Scientific Knowhow
            </Span>
        </View>
        <TouchableOpacity
            onPress={() => HandleNavigation('App')}
            style={{
              width: '100%',
              height: normalize(40),
              backgroundColor: color.primary[900],
              borderRadius: normalize(40),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop:"auto",
              position: "absolute",
              bottom: 0,
              left:0
            }}>
            <Span textAlign="center" color={color.default}>
              Done
            </Span>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(18),
    height: '100%',
    backgroundColor: color.light,
  },
  bodyContainer: {
    height: '100%',
    backgroundColor: color.light,
  },
  noPossibility: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: normalize(36),
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.white,
    marginBottom: normalize(20)
  },
  textInput: {
    height: 30,
    width: "90%",
  },
  closeButton: {
    height: 25,
    width: 25,
    marginLeft: normalize(5)
  },
  closeButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  slider: {
    marginLeft: normalize(-18),
  },
  carouselContainer: {
    marginTop: normalize(10)
  },
  Row: {
    width: '100%',
    flexDirection: 'row',
  },
  Col6: {
    width: '50%',
    margin: normalize(4),
    maxHeight: normalize(190),
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(12),
    borderRadius: normalize(8),
    marginBottom: normalize(8),
    borderColor: color.gray[50],
    borderWidth: normalize(2),
  },
});

export default Personalize;
