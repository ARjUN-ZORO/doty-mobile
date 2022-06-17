import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Tabs from 'react-native-tabs';

// Import Components
import {Span} from '../../components/Typography/typography';
import {BottomNavigation} from '../../components/BottomNav/bottomNav';
import {PostCard, ShapedCard, QueryCard} from '../../components/Card/card';
import PersonalCard from '../followers/name_cards';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import Assets
import Person from '../../../assets/images/user.png';
import search from '../../../assets/icons/search.png';
import arrowLeft from '../../../assets/icons/arrow_chevron_right.png';
import explore1 from '../../../assets/icons/explore1.jpeg';
import explore2 from '../../../assets/icons/explore2.jpeg';
import explore3 from '../../../assets/icons/explore3.jpeg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Import mock data
import {homeData} from '../../utils/data';

const AllExplore = props => {

  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    setLatestData(homeData.exploreAll);
  }, []);

  return (
    <>
      <View style={styles.Row}>
        <View style={styles.Col6}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: wp('1%'),
            borderRadius: wp('1%'),
            borderWidth: wp('0.4%'),
            borderColor: color.gray[50],
            marginVertical: wp('1%'),
          }}>
          <Image source={explore1} style={{
            height: wp('15%'),
            borderRadius: wp('2%'),
            width:  wp('14%'),
          }}/>
          <View style={{marginLeft: wp('4%'),}}>
            <Span fontSize={wp('3.6%')} color={color.black} numberOfLines={1} maxWidth={wp('25%')}>
              Phoebe&nbsp;Flee
            </Span>
            <Span
              fontSize={wp('3.5%')}
              color={color.gray[100]}
              textAlign="center"
              marginTop={wp('-1%')}
              marginTop={wp('-0.8%')}>
              Designer
            </Span>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: wp('1%'),
            borderRadius: wp('1%'),
            borderWidth: wp('0.4%'),
            borderColor: color.gray[50],
            marginVertical: wp('1%'),
          }}>
          <Image source={explore2} style={{
            height: wp('15%'),
            borderRadius: wp('2%'),
            width:  wp('14%'),
          }}/>
          <View style={{marginLeft: wp('4%'),}}>
          <Span fontSize={wp('3.6%')} color={color.black} numberOfLines={1} maxWidth={wp('25%')}>
            Jame Alter
            </Span>
            <Span
              fontSize={wp('3.5%')}
              color={color.gray[100]}
              marginTop={wp('-1%')}
              textAlign="center">
              Producer
            </Span>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: wp('1%'),
            borderRadius: wp('1%'),
            borderWidth: wp('0.4%'),
            borderColor: color.gray[50],
            marginVertical: wp('1%'),
          }}>
          <Image source={explore3} style={{
            height: wp('15%'),
            borderRadius: wp('2%'),
            width:  wp('14%'),
          }}/>
          <View style={{marginLeft: wp('4%'),}}>
          <Span fontSize={wp('3.6%')} color={color.black} numberOfLines={1} maxWidth={wp('25%')}>
              Jakson K
            </Span>
            <Span
              fontSize={wp('3.4%')}
              marginTop={wp('-1%')}
              color={color.gray[100]}
              textAlign="center">
              Dancer
            </Span>
          </View>
        </View>
              
        </View>

        <View style={styles.Col6}>
          <ShapedCard
            cardHeight="100%"
            cardWidth="95%"
            backgroundColor={color.purple[200]}
            isSolid={true}
          />
        </View>
      </View>
      {latestData &&
      latestData.map((d, i) => {
        return (
          <View style={{marginVertical: normalize(12)}} key={i}>
            <PostCard
              content={d.content}
              contentType={d.content_type}
              postedBy={d.posted_by}
              contentMedia={d.content_media}
              postMedia={d.post_media}
              isTransparentBg={true}
              liked={d.liked || isLiked}
              tagData={d.tagData}
              onPressLike={() => {
                // onPressLike(d, i, 'latest');
              }}
            />
          </View>
        );
      })}
    </>
  );
};

const VideoExplore = props => {

  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    setLatestData(homeData.exploreVideos);
  }, []);

  return (
    <>
      {latestData &&
      latestData.map((d, i) => {
        return (
          <View style={{marginVertical: normalize(12)}} key={i}>
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
    </>
  );
};

const EventsExplore = props => {
  return (
    <>
      {homeData.exploreEvent.map((d, i) => (
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
        />
      ))}
    </>
  );
};

const PostsExplore = props => {
  return (
    <>
      <View style={{marginVertical: normalize(12)}}>
        <PostCard
          content="Art therapy a complement to traditional mental health"
          postedBy="Jerry Rosser"
          contentType="TEXT"
          isTransparentBg={true}
          liked={true}
        />
      </View>
      <View style={{marginVertical: normalize(12)}}>
        <PostCard
          content="Art therapy a complement to traditional mental health"
          postedBy="Jerry Rosser"
          contentType="TEXT"
          isTransparentBg={true}
          liked={true}
        />
      </View>
      <View style={{marginVertical: normalize(12)}}>
        <PostCard
          content="Art therapy a complement to traditional mental health"
          postedBy="Jerry Rosser"
          contentType="TEXT"
          isTransparentBg={true}
          liked={true}
        />
      </View>
    </>
  );
};

const MembersExplore = props => {
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

  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    setFollowingList(homeData.followers);
  }, []);

  return (
    <>
      {followingList &&
        followingList.map((d, i) => {
          return (
            <TouchableOpacity
              onPress={() => HandleNavigation('Profile')}
              style={{
                ...styles.memberContainer,
                backgroundColor: color.light,
                borderWidth: normalize(3),
                borderColor: color.gray[200],
              }}>
              <PersonalCard person_name={d.person_name} person_image={d.person_image} person_danda={d.person_danda}></PersonalCard>
            </TouchableOpacity>
          );
        })}
    </>
  );
};

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const Explore = ({navigation, route}) => {
  const [selectedTab, setSelectedTab] = useState('All');

  return (
    <SafeAreaView style={{paddingBottom: normalize(56), backgroundColor: color.light}}>
       <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        {
          selectedTab != 'All' && <TouchableOpacity
          onPress={() => setSelectedTab('All')}>
          <Image source={arrowLeft} style={{ marginTop: normalize(28), marginRight: normalize(6), width: 30, height: 30, transform: [    
            {rotateY: '180deg'} //vertically
          ]}} />
        </TouchableOpacity>
        }
        <View style={styles.parent}>
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
              fontSize={wp('3%')}
              marginLeft={wp('1%')}
              placeholder="Search"
              placeholderTextColor="grey"
              marginRight={normalize(210)}
              style={{
                backgroundColor: color.default,
                height: normalize(40),
                borderRadius: normalize(8),
                color: color.black,
              }}
            />
        </View>
      </View>
      <View style={{height: '8%', backgroundColor: color.light,}}>
        <Tabs
          selected={selectedTab}
          style={{backgroundColor: color.transparent, color: color.gray[100]}}
          selectedStyle={{
            backgroundColor: color.black,
            padding: normalize(6),
            borderRadius: normalize(4),
            color: color.white,
          }}
          onSelect={el => setSelectedTab(el.props.name)}>
          <Span name="All" style={{color: color.gray[100], fontSize: size.x12}}>All</Span>
          <Span name="Video" style={{color: color.gray[100], fontSize: size.x12}}>Videos</Span>
          <Span name="Event" style={{color: color.gray[100], fontSize: size.x12}}>Events</Span>
          <Span name="Members" style={{color: color.gray[100], fontSize: size.x12}}>Members</Span>
          <Span name="Posts" style={{color: color.gray[100], fontSize: size.x12}}>Posts</Span>
        </Tabs>
      </View>
      <ScrollView style={styles.Container} nestedScrollEnabled={true}>
        {selectedTab === 'All' ? (
          <AllExplore />
        ) : selectedTab === 'Video' ? (
          <VideoExplore />
        ) : selectedTab === 'Event' ? (
          <EventsExplore />
        ) : selectedTab === 'Posts' ? (
          <PostsExplore />
        ) : selectedTab === 'Members' ? (
          <MembersExplore />
        ) : null}
      </ScrollView>
      <BottomNavigation pathname={'Explore'}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: normalize(18),
    paddingTop: normalize(12),
    height: '83%',
    backgroundColor: color.light,
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
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.default,
    marginTop: normalize(20)
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
});

export default Explore;
