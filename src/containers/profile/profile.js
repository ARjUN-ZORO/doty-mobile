import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import Tabs from 'react-native-tabs';

import {Span} from '../../components/Typography/typography';
import {BottomNavigation} from '../../components/BottomNav/bottomNav';
import {PostCard} from '../../components/Card/card';
import {TagGroup} from '../../components/Tags/tags';

import {size, color} from '../../utils/common';
import {NavigateTo, normalize} from '../../utils/helper';

import person from '../../../assets/images/user.png';
import instagram from '../../../assets/icons/instagram.png';
import linkedin from '../../../assets/icons/linkedin.png';
import twitter from '../../../assets/icons/twitter.png';
import addFriend from '../../../assets/icons/friendrequest.png';
import arrowRight from '../../../assets/icons/arrow_chevron_right.png';
import badge from '../../../assets/icons/badge.png';
import dotMenuIcon from '../../../assets/icons/dotMenu.png';
import backgroundImage from '../../../assets/icons/Vector.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Import mock data
import {homeData} from '../../utils/data';
import { Marker } from 'react-native-svg';

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};


const MyPosts = props => {

  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    setLatestData(homeData.profilePerspectives);
  }, []);

  return (
    <>
      <View style={{marginVertical: normalize(12), marginHorizontal: normalize(18), paddingBottom: normalize(50)}}>
        {latestData &&
          latestData.map((d, i) => {
            return (
              <View key={i}>
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
      </View>
    </>
  );
};

const AboutMe = props => {
  return (
    <>
      <View
        style={{
          paddingHorizontal: normalize(16),
          marginVertical: normalize(12),
        }}>
        <View>
          <Span color={color.black} fontSize={size.x16} fontWeight={'bold'}>
            I am
          </Span>
          <Span color={color.gray[500]} fontSize={size.x16}>
            a musician who teaches gymnastic to young childrens around the
            world. I also aspire to join politcs in future...
          </Span>
        </View>

        <View>
          <Span color={color.black} fontWeight={'bold'} fontSize={size.x16} marginTop={normalize(10)}>
            Can help with
          </Span>
          <View style={{flexDirection: 'row', marginTop: normalize(12)}}>
            <TagGroup
              calledFrom={'profileAbout'}
              tagData={[
                {
                  text: 'Music',
                  color: color.warning[100],
                },
                {
                  text: 'Gymnastics',
                  color: color.success[500],
                },
                {
                  text: 'Teaching',
                  color: color.primary[500],
                },
              ]}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TagGroup
              calledFrom={'profileAbout'}
              tagData={[
                {
                  text: 'Getting dream job',
                  color: color.primary[100],
                },
                {
                  text: 'Finding Love',
                  color: color.danger[500],
                },
              ]}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const BusinessDetails = props => {
  return (
    <>
      <View
        style={{
          paddingHorizontal: normalize(16),
          marginVertical: normalize(12),
        }}>
        <View>
          <Span color={color.black} fontWeight={'bold'} fontSize={size.x16}>
            Service/program offered
          </Span>
          <Span color={color.gray[500]} fontSize={size.x16}>
            I offer sound healing as 1 hour session, this is conducted over
            video call and is suitable for beginners
          </Span>
        </View>

        <View>
          <Span color={color.black} fontWeight={'bold'} fontSize={size.x16}>
            Sound healing workshop introduction by Jessi
          </Span>
          <View style={{flexDirection: 'row', marginTop: normalize(12)}}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1586035758264-c5c685f55e9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
              }}
              style={{
                width: '100%',
                height: normalize(240),
                borderRadius: normalize(12),
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const TopHeader = () => {
  return(
    <View style={{
      flexDirection: 'row',
      top: normalize(-100),
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: normalize(20),
    }}>
      <TouchableOpacity
        onPress={() => HandleNavigation('Home')}>
        <Image source={arrowRight} style={{marginLeft: normalize(6), width: 30, height: 30, transform: [    
          {rotateY: '180deg'} //vertically
        ]}} />
      </TouchableOpacity>
      <Span
        fontSize={size.x20}
        color={color.darkBlack}
        fontWeight="200">
        Profile
      </Span>
      <Image source={dotMenuIcon} style={{marginRight: normalize(6), width: 40, height: 40}} />
    </View>
  );
}

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('Posts');

  return (
    <SafeAreaView>
      <ScrollView
        style={{...styles.container, height: '100%'}}
        nestedScrollEnabled={true}>
        <ImageBackground 
          source={backgroundImage}
          style={styles.solidBackground} />
        <TopHeader/>
        <View style={styles.detailsContainer}>
          <Image source={person} style={styles.profileImage} />
          <Image source={badge} style={styles.badgeImage} />
          <Span
            textAlign="center"
            fontSize={wp('6%')}
            fontWeight="bold"
            marginTop={24}>
            Arya D’souza
          </Span>
          <Span
            fontSize={wp('3.5%')}
            fontWeight="normal"
            marginTop={8}
            color={color.gray[500]}>
            <Span fontSize={wp('3.5%')} fontWeight="normal" color={color.black}>
              Musician / Teacher
            </Span>{' '}
            <Span fontSize={wp('3.5%')} fontWeight="normal" color={color.gray[100]}>
               from 
            </Span>{' '}
            <Span fontSize={wp('3.5%')} fontWeight="normal" color={color.black}>
              Bangalore
            </Span>
          </Span>

          <View
            style={{
              marginTop: normalize(14),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image source={twitter} style={styles.socialIcons} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: normalize(24)}}>
              <Image source={linkedin} style={styles.socialIcons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={instagram} style={styles.socialIcons} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: wp('8%'),
              flexDirection: 'row',
              width: wp("90%")
            }}>
            <TouchableOpacity
              style={{...styles.request_buttonIcon}}>
              <Text textAlign="center"  fontSize={wp('3.8%')} fontWeight={'bold'} numberOfLines={1} ellipsizeMode='tail'
              style={{fontSize: wp('3.8%'),
                      fontWeight: 'bold',
                      paddingLeft: wp('2%'),
                      paddingRight: wp('2%'),
                      color: color.default,
                      maxWidth:wp('40%'),
                      flex: 1}}>
                Request&nbsp;Perspective
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.buttonIcon, marginHorizontal: wp('3%')}}>
              <Span textAlign="center" fontSize={wp('4%')} color={color.primary[900]} marginLeft={wp('7%')} marginRight={wp('7%')}>
                Follow
              </Span>
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrow_buttonIcon } onPress={() => HandleNavigation('Followers')}>
              <Image source={arrowRight} style={{width: wp('2%')}} />
            </TouchableOpacity>
          </View>
        </View>

        <View
        style={{
          marginHorizontal: normalize(18),
          top: normalize(-30),
        }}>
          <Tabs
            selected={selectedTab}
            style={{backgroundColor: color.transparent}}
            selectedStyle={{
              padding: normalize(10),
              color: color.black,
              width: '100%',
              textAlign: 'center',
              borderBottomWidth: normalize(5),
              borderBottomColor: color.black,
              fontSize:wp('4.5%'),
              fontWeight: 'bold',
            }}
            onSelect={el => setSelectedTab(el.props.name)}>
            <Span name="Posts" fontSize={wp('4.5%')} color={color.gray[100]} borderBottomWidth={wp('0.5%')} borderBottomColor={color.gray[100]} padding={normalize(8)} textAlign={'center'} width={'100%'}>Posts</Span>
            <Span name="About" fontSize={wp('4.5%')} color={color.gray[100]} borderBottomWidth={wp('0.5%')} borderBottomColor={color.gray[100]} padding={normalize(8)} textAlign={'center'} width={'100%'} numberOfLines={1} ellipsizeMode='tail'>About Me</Span>
            <Span name="Business" fontSize={wp('4.5%')} color={color.gray[100]} borderBottomWidth={wp('0.5%')} borderBottomColor={color.gray[100]} padding={normalize(8)} textAlign={'center'} width={'100%'}>Business</Span>
          </Tabs>
        </View>
        <View style={styles.container}>
          {selectedTab === 'Posts' ? (
            <MyPosts />
          ) : selectedTab === 'About' ? (
            <AboutMe />
          ) : selectedTab === 'Business' ? (
            <BusinessDetails />
          ) : null}
        </View>
      </ScrollView>
      <BottomNavigation pathname={"Profile"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  solidBackground: {
    height: normalize(150),
  },
  detailsContainer: {
    position: 'absolute',
    top: -normalize(95),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileImage: {
    height: normalize(80),
    width: normalize(80),
    borderRadius: normalize(0),
  },
  socialIcons: {
    height: normalize(20),
    width: normalize(20),
  },
  request_buttonIcon: {
    backgroundColor: color.primary[900],
    borderRadius: wp('6%'),
    paddingHorizontal: wp('1%'),
    paddingVertical: wp('0.8%'),
    borderWidth: wp('0.5%'),
    borderColor: color.primary[900],
    height: wp('9%'),
    minWidth: wp('11%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    backgroundColor: color.transparent,
    borderRadius: wp('6%'),
    paddingHorizontal: wp('1%'),
    paddingVertical: wp('0%'),
    borderWidth: wp('0.5%'),
    borderColor: color.primary[900],
    height: wp('9%'),
    minWidth: wp('11%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow_buttonIcon: {
    backgroundColor: color.transparent,
    borderRadius: wp('15%'),
    paddingHorizontal: wp('1%'),
    paddingVertical: wp('0%'),
    borderWidth: wp('0.5%'),
    borderColor: color.primary[900],
    color: color.primary[900],
    height: wp('9%'),
    minWidth: wp('11%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: color.light,
    top: normalize(-30),
  },
  badgeImage: {
    position: 'absolute',
    top: 0,
    left: normalize(115),
    margin: normalize(60)
  },
});

export default Profile;
