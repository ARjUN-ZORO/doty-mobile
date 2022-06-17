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

const FocusOn = ({navigation, route}) => {
  const [selectedTab, setSelectedTab] = useState('Possibilities');
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: normalize(20),
      }}>
        <TouchableOpacity
          onPress={() => HandleNavigation('Home')}>
          <Image source={arrowLeft} style={{width: 30, height: 30, transform: [    
            {rotateY: '180deg'} //vertically
          ]}} />
        </TouchableOpacity>
        <Image source={dotMenuIcon} style={{width: wp('10%'), height: wp('10%')}} />
      </View>
      <ScrollView style={styles.bodyContainer}>
            <View style={{
                marginTop: normalize(40),
                marginBottom: normalize(10)
            }}>
                <HeadText fontWeight={'bold'} fontFamily={'Lato'} color={color.black}>What do you want to focus on?</HeadText>
                <SubHeadText marginTop={normalize(20)} fontFamily={'Lato'}>
                    Doty categories life into 5 areas to understand you and your needs better.
                    Help Doty help you.
                </SubHeadText>
            </View>
            <View style={{
                backgroundColor: '#AAD6E1',
                marginTop: normalize(20),
                borderRadius: normalize(10)
            }}>
                
                <View style={{
                    paddingHorizontal: normalize(20),
                    paddingTop: normalize(10),
                }}>
                    <Span
                    fontWeight="bold"
                    fontSize={wp('5%')}
                    numberOfLines={1}
                    color={color.black}>
                        Mind
                    </Span>
                    <Span
                    marginBottom={normalize(8)}
                    fontSize={wp('4%')}
                    numberOfLines={1}
                    color={color.black}>
                        Intellect, feelings, emotions, mental models etc
                    </Span>
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
                        minimumTrackImage={400}
                        maximumTrackImage={500}
                    />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Span
                            marginBottom={normalize(14)}
                            fontSize={wp('4%')}
                            numberOfLines={1}
                            color={color.gray[500]}>
                                Less Focus
                        </Span>
                        <Span
                            fontSize={wp('4%')}
                            numberOfLines={1}
                            color={color.gray[500]}>
                                More Focus
                        </Span>
                    </View>
                </View>
                
            </View>
            <View style={{
                backgroundColor: '#CFDCB2',
                marginTop: normalize(20),
                borderRadius: normalize(10)
            }}>
                
                <View style={{
                    paddingHorizontal: normalize(20),
                    paddingTop: normalize(10),
                }}>
                    <Span
                    fontWeight="bold"
                    fontSize={wp('5%')}
                    numberOfLines={1}
                    color={color.black}>
                        Body
                    </Span>
                    <Span
                    marginBottom={normalize(8)}
                    fontSize={wp('4%')}
                    numberOfLines={1}
                    color={color.black}>
                        Intellect, feelings, emotions, mental models etc
                    </Span>
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
                            fontSize={wp('4%')}
                            numberOfLines={1}
                            color={color.gray[500]}>
                                Less Focus
                        </Span>
                        <Span
                            fontSize={wp('4%')}
                            numberOfLines={1}
                            color={color.gray[500]}>
                                More Focus
                        </Span>
                    </View>
                </View>
                
            </View>
            <View style={{
                backgroundColor: '#EFCD83',
                marginTop: normalize(20),
                borderRadius: normalize(10)
            }}>
                
                <View style={{
                    paddingHorizontal: normalize(20),
                    paddingTop: normalize(10),
                }}>
                    <Span
                    fontWeight="bold"
                    fontSize={wp('5%')}
                    numberOfLines={1}
                    color={color.black}>
                        Purpose
                    </Span>
                    <Span
                    marginBottom={normalize(8)}
                    fontSize={wp('4%')}
                    numberOfLines={1}
                    color={color.black}>
                        Career, work, giving back, meaningful vocation, endeavours, hobbies etc.
                    </Span>
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
                            fontSize={wp('4%')}
                            numberOfLines={1}
                            color={color.gray[500]}>
                                Less Focus
                        </Span>
                        <Span
                            fontSize={wp('4%')}
                            numberOfLines={1}
                            color={color.gray[500]}>
                                More Focus
                        </Span>
                    </View>
                </View>
                
            </View>
            <TouchableOpacity
            onPress={() => HandleNavigation('Personalize')}
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
            <Span textAlign="center" color={color.default}>
              Next
            </Span>
          </TouchableOpacity>
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
    height: '92%',
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

export default FocusOn;
