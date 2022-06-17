import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  FlatList,
  Dimensions,
} from 'react-native';
import Carousel, { Pagination }  from 'react-native-snap-carousel';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import components
import {
  HeadText,
  SubHeadText,
  SectionTitle,
} from '../../components/Typography/typography';
import {PostCard, ShapedCard, QueryCard, PersonalizeCard, PerspectiveCard, MembersCard} from '../../components/Card/card';
import {BottomNavigation} from '../../components/BottomNav/bottomNav';

// Import assets
import C1 from '../../../assets/images/1.png';

// Import mock data
import {homeData} from '../../utils/data';

// Import assets
import user from '../../../assets/images/user.png';
import linedash from '../../../assets/icons/line-dash.png';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

//Members Assets
import member1 from '../../../assets/icons/member1.png';

const IS_IOS = Platform.OS === 'ios';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 4;

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const Home = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLike] = useState(false);
  const [latestData, setLatestData] = useState([]);
  const [videoPerspectiveData, setVideoPerspectiveData] = useState([]);
  const [streamData, setStreamData] = useState([]);
  const [dotyHelpData, setDotyHelpData] = useState(homeData.doty_help);
  const [eventData, setEventData] = useState(homeData.event);
  
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  //Suggested Members State
  const [memberId, setMemberId] = React.useState(0)

  const onPressLike = (object, index, dataType) => {
    // setLoading(true);
    // if (dataType === 'latest') {
    //   const newLatestData = latestData;
    //   newLatestData[index].liked = !object.liked;
    //   setLatestData(newLatestData);
    //   setLoading(false);
    //   setIsLike(true);
    // }
    // if (dataType === 'stream') {
    //   const newStreamData = streamData;
    //   newStreamData[index].liked = !object.liked;
    //   setStreamData(newStreamData);
    //   setLoading(false);
    //   setIsLike(true);
    // }
  };

  
  useEffect(() => {
    setLatestData(homeData.latest);
    setVideoPerspectiveData(homeData.videoPerspective);
    setStreamData(homeData.thoughtStream);
  }, []);

  if (loading === true)
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <HeadText>loading...</HeadText>
      </View>
    );
  return (
    <SafeAreaView
      style={{
        backgroundColor: color.light,
      }}>
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View>
        <HeadText fontWeight={'bold'} fontFamily={'Lato'} color={color.black}>Hey Arya,</HeadText>
        <SubHeadText marginTop={normalize(4)} fontFamily={'Lato'}>
        Let's join some dots!
        </SubHeadText>
      </View>

        <View style={{marginTop: normalize(32)}}>
          <SectionTitle fontWeight={'800'} fontFamily={'Inter'}>Doty’s Picks</SectionTitle>
          <Carousel
            data={[
              {
                image: require('../../../assets/images/C1.png'),
                id: 0,
              },
              {
                image: require('../../../assets/images/C2.png'),
                id: 1,
                title: 'Art as therapy - perspective',
              },
              {
                image: require('../../../assets/images/C3.png'),
                id: 2,
                title: 'Art as therapy - perspective',
              },
              {
                image: require('../../../assets/images/C4.png'),
                id: 3,
                title: 'Art as therapy - perspective',
              },
              {
                image: require('../../../assets/images/C5.png'),
                id: 3,
                title: 'Art as therapy - perspective',
              },
            ]}
            loop={true}
            layout={'stack'}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            layoutCardOffset={9}
            firstItem={3}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            containerCustomStyle={styles.slider}
            renderItem={(data) => {
              return(
                <View style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginVertical: normalize(20),
                  marginBottom: normalize(40)
                }}>
                  <Image source={data.item.image}/>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.section}>
          <SectionTitle fontWeight={'800'} fontFamily={'Inter'}>Latest Perspectives</SectionTitle>
          <View style={styles.sectionBody}>
            {latestData &&
              latestData.map((d, i) => {
                return (
                  <View key={i}>
                    <PostCard
                      content={d.content}
                      contentType={d.content_type}
                      postedBy={d.posted_by}
                      contentMedia={d.content_media}
                      posterMedia={d.poster_media}
                      postMedia={d.post_media}
                      isTransparentBg={true}
                      liked={d.liked}
                      tagData={d.tagData}
                      onPressLike={() => {
                        // onPressLike(d, i, 'latest');
                      }}
                    />
                  </View>
                );
              })}
          </View>
        </View>

        <View style={styles.section}>
          <SectionTitle>Thought Stream</SectionTitle>
          <View>
            <FlatList
              data={streamData}
              horizontal={true}
              renderItem={data => {
                return (
                  <View
                    key={data.index}
                    style={{...styles.sectionBody, marginRight: normalize(14)}}>
                    <ShapedCard
                      liked={data.item.liked || isLiked}
                      content={data.item.text}
                      indexVal={data.index}
                      postedBy={data.item.postedBy}
                      backgroundColor={data.item.backgroundColor}
                      onPressLike={() => {
                        // onPressLike(data.item, data.index, 'stream');
                      }}
                    />
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        
        <View style={{paddingVertical: normalize(24)}}>
          <View>
              <PersonalizeCard
              />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionBody}>
            {videoPerspectiveData &&
              videoPerspectiveData.map((d, i) => {
                return (
                  <View key={i}>
                    <PostCard
                      content={d.content}
                      contentType={d.content_type}
                      postedBy={d.posted_by}
                      contentMedia={d.content_media}
                      postMedia={d.post_media}
                      isTransparentBg={true}
                      liked={d.liked}
                      tagData={d.tagData}
                      onPressLike={() => {
                        // onPressLike(d, i, 'latest');
                      }}
                    />
                  </View>
                );
              })}
          </View>
        </View>

        <View>
          <SectionTitle>Help Doty Help you!</SectionTitle>
          <View
            style={{
              marginTop: normalize(10),
            }}>
          <FlatList
              data={homeData.doty_help}
              horizontal={true}
              renderItem={data => {
                return (
                  <View
                    key={data.index}
                    style={{...styles.sectionBody, marginRight: normalize(14), marginTop: normalize(30), marginBottom: normalize(20)}}>
                    <QueryCard
                      key={data.index}
                      queryValue={data.index}
                      backgroundColor={data.item.backgroundColor}
                    />
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        <View style={styles.section}>
          <View>
            {homeData.event.map((d, i) => (
              <PostCard
                content={d.content}
                key={i}
                imageUrl={d.post_media}
                postedBy={d.posted_by}
                contentMedia={d.content_media}
                postMedia={d.post_media}
                contentType={d.content_type}
                isTransparentBg={true}
                liked={true}
                isRSVP={true}
                tagData={d.tagData}
                liked={isLiked}
              />
            ))}
          </View>
        </View>
        <View style={{...styles.section, marginBottom: normalize(20)}}>
        <SectionTitle fontWeight={'bold'} fontFamily={'Inter'}>Suggested Members</SectionTitle>
          <View style={{...styles.sectionBody, marginTop: normalize(0)}}>
          <FlatList
              data={homeData.suggestedMembers}
              horizontal={true}
              renderItem={data => {
                return (
                  <View
                    key={data.index}
                    style={{...styles.sectionBody, marginRight: normalize(14)}}>
                    
                    <TouchableOpacity
                    style={{
                      borderWidth: memberId === data.index ? 3 : 0, 
                      borderRadius: 5,
                      
                    }}
                      onPress={() => {
                        setMemberId(data.index);
                      }}>
                      <Image source={data.item.image} style={{
                        width: memberId === data.index ? normalize(50) : normalize(40), 
                        height: memberId === data.index ? normalize(50) : normalize(40), 
                        marginTop: memberId === data.index ? normalize(5) : normalize(20), 
                        marginHorizontal: normalize(5), 
                        marginVertical: normalize(5),
                      }} />
                    </TouchableOpacity> 
                    {
                      memberId === data.index && <View style={{marginLeft: normalize(18), marginTop: normalize(4)}}>
                      <Image source={linedash} width={normalize(2)} height={normalize(2)}/>
                    </View>
                    }
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
            <MembersCard
                memberName={homeData.suggestedMembers[memberId].user_name}
                bio={homeData.suggestedMembers[memberId].bio}
            />
          </View>
        </View>
        
        {/* <View style={styles.section}>
          <SectionTitle>Suggested members</SectionTitle>
          <View style={styles.sectionBody}>
          
          </View>
        </View> */}

        <View style={{...styles.section, marginBottom: normalize(10)}}>
          <PostCard contentType="TEXT" isTransparentBg={true} isRSVP={false} />
        </View>

        <View style={{...styles.section, marginBottom: normalize(104)}}>
        <SectionTitle fontWeight={'bold'} fontFamily={'Inter'}>Share your perspective</SectionTitle>
          <View style={styles.sectionBody}>
            <PerspectiveCard/>
          </View>
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

export default Home;
