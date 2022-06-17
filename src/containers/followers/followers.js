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
import Svg, {G, Path} from 'react-native-svg';

// Import Components
import {SectionTitle, Span} from '../../components/Typography/typography';
import {BottomNavigation} from '../../components/BottomNav/bottomNav';
import {PatternShapedCard} from '../../components/Card/card';
import {TagGroup} from '../../components/Tags/tags';
import Carousel from 'react-native-snap-carousel';
import Slider from '@react-native-community/slider';
import PersonalCard from './name_cards';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import mock data
import {homeData} from '../../utils/data';
// Import assets
import C1 from '../../../assets/images/1.png';

// Import Assets
import search from '../../../assets/icons/search.png';
import Person from '../../../assets/images/user.png';
import omarKenter from '../../../assets/icons/omarkenter.png';
import arrowLeft from '../../../assets/icons/arrow_chevron_right.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const Following = props => {

  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    setFollowingList(homeData.followers);
  }, []);

    return (
        <ScrollView style={{paddingBottom: normalize(52)}}>
          {followingList &&
            followingList.map((d, i) => {
              return (
                <TouchableOpacity
                  onPress={() => HandleNavigation('Profile')}
                  style={{
                    ...styles.memberContainer,
                    backgroundColor: color.light,
                  }}>
                  <PersonalCard person_name={d.person_name} person_image={d.person_image} person_danda={d.person_danda}></PersonalCard>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      );
};

const FollowersList = props => {

  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    setFollowingList(homeData.followers);
  }, []);

    return (
      <ScrollView style={{paddingBottom: normalize(52)}}>
      {followingList &&
        followingList.map((d, i) => {
          return (
            <TouchableOpacity
              onPress={() => HandleNavigation('Profile')}
              style={{
                ...styles.memberContainer,
                backgroundColor: color.light,
              }}>
              <PersonalCard person_name={d.person_name} person_image={d.person_image} person_danda={d.person_danda}></PersonalCard>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
      );
};

const Followers = ({navigation, route}) => {
  const [selectedTab, setSelectedTab] = useState('Following');
  
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}>
        <TouchableOpacity
        onPress={() => HandleNavigation('Profile')}>
        <Image source={arrowLeft} style={{ marginTop: normalize(8), marginRight: normalize(6), width: 30, height: 30, transform: [    
          {rotateY: '180deg'} //vertically
        ]}} />
      </TouchableOpacity>
        <View style={styles.parent} marginBottom={wp('10%')}>
            <TouchableOpacity
                  style={styles.closeButtonParent}
                >
              <Image
                style={styles.closeButton}
                source={search}
                width={wp('5%')}
                height={wp('5%')}
              />
            </TouchableOpacity>
            <TextInput
              multiline={false}
              numberOfLines={1}
              fontSize={wp('3.8%')}
              marginLeft={wp('1%')}
              width={wp('50%')}
              height={wp('12%')}
              placeholder="Search"
              placeholderTextColor="grey"           
              style={{
                color: color.black,
              }}
            />
        </View>
      </View>

      <View style={{height: '4%', backgroundColor: color.light}}>
        <Tabs
          selected={selectedTab}
          style={{
            color: color.black,
            width: '100%',
            textAlign: 'center',
          }}
          selectedStyle={{
            padding: normalize(8),
            color: color.black,
            width: '100%',
            textAlign: 'center',
            borderBottomWidth: normalize(3),
            borderBottomColor: color.black,
            fontSize:size.x16
          }}
          onSelect={el => setSelectedTab(el.props.name)}>
          <Span name="Following" fontSize={size.x16}>Following</Span>
          <Span name="Followers" fontSize={size.x16}>Followers</Span>
        </Tabs>
      </View>
      
      <ScrollView style={styles.bodyContainer}>
        {selectedTab === 'Following' ? (
          <Following />
        ) : selectedTab === 'Followers' ? (
          <FollowersList />
        ) : null}
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(20),
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
    backgroundColor: color.white,
    marginBottom: normalize(20),
    width: '90%',
    borderRadius: normalize(10),
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
    marginTop: 50
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: SLIDER_HEIGHT / 1.75,
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

  },
});

export default Followers;
