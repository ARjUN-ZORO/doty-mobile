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
  Button,
} from 'react-native';
import Tabs from 'react-native-tabs';
import Svg, {G, Path} from 'react-native-svg';

// Import Components
import {
    HeadText,
    SubHeadText,
    SectionTitle,
    Span,
} from '../../components/Typography/typography';
import {BottomNavigation} from '../../components/BottomNav/bottomNav';
import {PatternShapedCard} from '../../components/Card/card';
import {TagGroup} from '../../components/Tags/tags';
import Carousel from 'react-native-snap-carousel';
import Slider from '@react-native-community/slider';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import mock data
import {homeData} from '../../utils/data';
// Import assets
import C1 from '../../../assets/images/1.png';

// Import Assets
import charImg from '../../../assets/images/char_img.png';
import body from '../../../assets/icons/body.png';
import ayurveda from '../../../assets/icons/ayurveda.png';
import dancing from '../../../assets/icons/dancing.png';
import sun from '../../../assets/icons/sun.png';
import relaxation from '../../../assets/icons/relaxation.png';
import exchange from '../../../assets/icons/exchange.png';
import filter from '../../../assets/icons/filter.png';
import search from '../../../assets/icons/search.png';
import sliderthumb from '../../../assets/icons/sliderthumb.png';
import grid from '../../../assets/icons/grid.png';
import list from '../../../assets/icons/list.png';
import activeGrid from '../../../assets/icons/active_grid.png';
import activeList from '../../../assets/icons/active_list.png';
import designInfoVideo from '../../../assets/icons/designInfoVideo.png';
import crossIcon from '../../../assets/icons/cross.png';
import dotyIconSmall from '../../../assets/icons/dotyIconSmall.png';
import Video from 'react-native-video';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import YoutubePlayer from 'react-native-youtube-iframe';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const DesignInfo = ({navigation, route}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: wp('5%'),
      }}>
        <TouchableOpacity
          onPress={() => HandleNavigation('Design')}>
          <Image source={crossIcon} style={{marginLeft: normalize(6),marginTop: normalize(8),}} />
        </TouchableOpacity>
        <TouchableOpacity
            style={{
              width: '30%',
              height: normalize(40),
              backgroundColor: color.secondary[100],
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: normalize(140),
              borderRadius: normalize(10),
            }}>
            <Span textAlign="center" color={color.primary[900]} fontSize={wp('3.3%')} fontWeight={'bold'}>
                Here to Help!
            </Span>
        </TouchableOpacity>
        <Image source={dotyIconSmall} style={{marginRight: wp('1%'), marginTop: wp('1%'), width:  wp('5%'), height:  wp('5%')}} />
      </View>
      <ScrollView nestedScrollEnabled={true}>
      <View>
        <SectionTitle fontSize={wp('6%')} fontWeight={'800'} fontFamily={'Inter'} marginTop={wp('5%')}>Design your life</SectionTitle>
        <SubHeadText fontSize={wp('4%')} marginTop={wp('1%')} fontFamily={'Lato'}>
        For your eyes only.
        </SubHeadText>
        <Span marginTop={normalize(30)} fontSize={wp('4%')} marginBottom={normalize(30)}>
            Each person’s journey is unique, but may be categorised into 5 areas of life. This section helps you identify your patterns and personalises these areas, based on the possibilities or goals you choose for yourself. Live life, by your design.
        </Span>
        
        {/* <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: wp('2%'),
            width: '100%',
            height: normalize(300),
        }}>
          <Video
            source={{ uri: 'https://www.youtube.com/watch?v=n89ApZKxVsY' }}
            style={{ width: wp('50%'), height: wp('50%'), flex: 1 }}
            poster="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            posterResizeMode={'contain'}
            repeat={false}
            resizeMode={'contain'}
            fullscreen={true}
            position="absolute"
            
          />
          
        </View> */}
        <YoutubePlayer
            height={normalize(200)}
            play={true}
            videoId={'n89ApZKxVsY'}
        />
        <SectionTitle fontSize={size.x18} fontWeight={'800'} fontFamily={'Inter'}>Areas of life</SectionTitle>
        <View>
        <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <PatternShapedCard
              title="Mind"
              backgroundColor={color.secondary[100]}
              color={color.primary[900]}
              width={normalize(90)}
              height={normalize(120)}
              image={ayurveda}
              progressFill={100}
              calledFrom={'designInfo'}
            />
  
            <PatternShapedCard
              title="Body"
              backgroundColor={color.success[100]}
              color={color.success[900]}
              width={normalize(90)}
              height={normalize(120)}
              progressFill={100}
              image={body}
              calledFrom={'designInfo'}
            />

            <PatternShapedCard
              title="Purpose"
              backgroundColor={color.warning[100]}
              color={color.warning[900]}
              width={normalize(90)}
              height={normalize(120)}
              progressFill={100}
              image={relaxation}
              calledFrom={'designInfo'}
            />

        </View>
        <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <PatternShapedCard
              title="Relationships"
              backgroundColor={color.danger[100]}
              color={color.danger[900]}
              width={normalize(90)}
              height={normalize(120)}
              image={dancing}
              progressFill={100}
              calledFrom={'designInfo'}
            />
  
            <PatternShapedCard
              title="Wealth"
              backgroundColor={color.purple[200]}
              color={color.purple[500]}
              width={normalize(90)}
              height={normalize(120)}
              progressFill={100}
              image={exchange}
              calledFrom={'designInfo'}
            />

            <PatternShapedCard
              title="Flowwork"
              backgroundColor={color.gray[50]}
              color={color.gray[500]}
              width={normalize(90)}
              height={normalize(120)}
              progressFill={100}
              image={sun}
              calledFrom={'designInfo'}
            />

          </View>
        </View>
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
  itemContainer: {
    width: ITEM_WIDTH,
    height: SLIDER_HEIGHT / 1.6,
    backgroundColor: color.white,
    borderRadius: normalize(20)
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

export default DesignInfo;
