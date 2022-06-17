import React, {useState, useEffect, createRef, useRef} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  Text,
  Share,
  Modal,
  Animated,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import ActionSheet from 'react-native-actions-sheet';
import * as Progress from 'react-native-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import YoutubePlayer from 'react-native-youtube-iframe';

// Import components
import {CardTitle, Span} from '../Typography/typography';
import {TagGroup} from '../Tags/tags';
import {Checkbox} from '../FormFields/formElements';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';

// Import utils
import {normalize, windowWidth, NavigateTo} from '../../utils/helper';
import {size, color} from '../../utils/common';

// Import assets
import dotMenuIcon from '../../../assets/icons/dotMenu.png';
import pinIcon from '../../../assets/icons/pin_white.png';
import heartOutlineIcon from '../../../assets/icons/heart-outline.png';
import heartFilledIcon from '../../../assets/icons/heart-filled.png';
import person from '../../../assets/images/profile.png';
import contentImage from '../../../assets/images/content.png';
import arrowLeft from '../../../assets/icons/arrow-right.png';
import logoWrapper from '../../../assets/images/logo-bg.png';
import clap from '../../../assets/icons/tray/clap.png';
import eye from '../../../assets/icons/tray/eye.png';
import heart from '../../../assets/icons/tray/heart.png';
import idea from '../../../assets/icons/tray/idea.png';
import faceGlass from '../../../assets/icons/tray/face-glass.png';
import comment from '../../../assets/icons/comment.png';
import union from '../../../assets/icons/union.png';
import user from '../../../assets/images/user.png';
import send from '../../../assets/icons/send.png';
import rsvp from '../../../assets/icons/rsvp-image.png';
import rsvptick from '../../../assets/icons/rsvp-tick.png';
import rsvpcross from '../../../assets/icons/rsvp-cross.png';
import rsvpquestion from '../../../assets/icons/rsvp-question.png';
import sliderthumb from '../../../assets/icons/sliderthumb.png';
import shareIcon from '../../../assets/icons/share.png';
import perspectiveGroup from '../../../assets/icons/perspectiveGroup.png';
import ThoughtStreamModal from '../../../assets/icons/ThoughtStreamModal.png';
import crossIcon from '../../../assets/icons/cross.png';
import HomeTabImage from '../../../assets/images/HomeTabImage.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//Posted People Perspectives
import lincoln from '../../../assets/icons/lincoln.png';

// Import mock data
import {homeData} from '../../utils/data';

const tags = [
  {
    text: 'Mind',
    color: color.primary[500],
  },
  {
    text: 'Purpose',
    color: color.success[500],
  },
];

const shadowOptions = {
  width: 160,
  height: 170,
  color: '#000',
  border: 2,
  radius: 3,
  opacity: 0.2,
  x: 0,
  y: 3,
  style: {marginVertical: 5},
};

export const PostCard = props => {
  const [like, setLike] = useState(true);
  const [showReactionTray, setShowReactionTray] = useState(false);

  const [tagsValue, setTagsValue] = useState([]);

  useEffect(() => {
    setTagsValue(props.tagData);
  }, []);

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

  // Start Video Controls
  const videoPlayer = useRef(null);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);

    const [currentTime, setCurrentTime] = useState(0);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
    const [isLoading, setIsLoading] = useState(true);

    const onSeek = (seek) => {
        videoPlayer?.current.seek(seek);
    };

    const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

    const onPaused = (newState) => {
        setPaused(!paused);
        setPlayerState(newState);
    };

    const onReplay = () => {
        videoPlayer?.current.seek(0);
        setCurrentTime(0);
        if (Platform.OS === 'android') {
            setPlayerState(PLAYER_STATES.PAUSED);
            setPaused(true);
        } else {
            setPlayerState(PLAYER_STATES.PLAYING);
            setPaused(false);
        }
    };

    const onProgress = (data) => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = (data) => {
        setDuration(Math.round(data.duration));
        setIsLoading(false);
    };

    const onLoadStart = () => setIsLoading(true);

    const onEnd = () => {
        setPlayerState(PLAYER_STATES.ENDED);
        setCurrentTime(duration);
    };
  // End Video Controls

  return (
    <View style={{ overflow: 'hidden',  paddingBottom: 10,}}>
    <TouchableOpacity
     disabled={props.contentType === 'VIDEO' && true}
      onPress={() => HandleNavigation('Content')}
      style={{...styles.cardContainer, marginBottom: normalize(18), 
      backgroundColor: '#fcf9f3',
      width: '100%',
      shadowColor: '#505050',
      shadowOffset: { width: 1.2, height: 0 },
      shadowOpacity:  0.4,
      shadowRadius: 8,
      elevation: 2,}}>
      {(props.contentType === 'IMAGE' || props.contentType === 'VIDEO') && (
        <View>
          <CardTitle fontSize={wp('5%')}>{props.isRSVP ? <Text flexDirection={'row'}><Text style={{fontWeight: 'bold'}}>You are invited to</Text> curate virtual meetup of 10 people.</Text> : props.content }</CardTitle>
          <View style={styles.tagWrapper}>
            <TagGroup tagData={ (typeof props.tagData !== 'undefined' && props.tagData && props.tagData.length)  ? props.tagData : tags} />
          </View>
          <View style={{
            ...styles.createdWrapper,
          }}>
            <Span fontSize={size.x14} color={color.gray[100]}>{props.isRSVP ? 'curated by' : 'perspective by' }</Span>
            <TouchableOpacity
              onPress={() => HandleNavigation('Profile')}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={props.postMedia != '' ?  props.postMedia : person} style={styles.profilePic} />
              <Span fontWeight="bold" color={color.black} fontSize={size.x14}>
                {props.postedBy}
              </Span>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={styles.cardBody}>
        {props.contentType === 'IMAGE' ? (
          <ImageBackground
            source={props.contentMedia}
            style={{...styles.cardMedia, maxHeight:normalize(178)}}
            imageStyle={styles.cardMediaStyle}
            resizeMode="cover"
          />
        ) : props.contentType === 'VIDEO' ? (
          // <Video
          //   source={{uri: props.contentMedia}}
          //   allowsExternalPlayback={false}
          //   muted={false}
          //   controls={true}
          //   useTextureView={false}
          //   preventsDisplaySleepDuringVideoPlayback={true}
          //   automaticallyWaitsToMinimizeStalling={true}
          //   resizeMode="cover"
          //   posterResizeMode="cover"
          //   paused={true}
          //   style={{
          //     ...styles.cardMedia,
          //     borderTopRightRadius: normalize(8),
          //     borderTopLeftRadius: normalize(8),
          //   }}
          // />
          <View>
                <Video
                    onEnd={onEnd}
                    onLoad={onLoad}
                    onLoadStart={onLoadStart}
                    posterResizeMode={'cover'}
                    onProgress={onProgress}
                    paused={paused}
                    useTextureView={false}
                    preventsDisplaySleepDuringVideoPlayback={true}
                    automaticallyWaitsToMinimizeStalling={true}
                    resizeMode="cover"
                    posterResizeMode="cover"
                    poster={props.posterMedia}
                    ref={(ref) => (videoPlayer.current = ref)}
                    resizeMode={'cover'}
                    source={{uri: props.contentMedia}}
                    style={styles.backgroundVideo}
                />
                <MediaControls
                    isFullScreen={false}
                    duration={duration}
                    isLoading={isLoading}
                    progress={currentTime}
                    onPaused={onPaused}
                    onReplay={onReplay}
                    onSeek={onSeek}
                    onSeeking={onSeeking}
                    mainColor={"black"}
                    playerState={playerState}
                    showOnStart={true}
                    sliderStyle={{ containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
                />
            </View>
        //   <YoutubePlayer
        //     height={normalize(170)}
        //     play={true}
        //     videoId={props.contentMedia}
        // />
        ) : (
          
          <View>
            <Span color={color.black} fontSize={wp('5%')}>
              How to get over the addicition to caffine 
            </Span>
            <View style={{flexDirection: 'row', marginTop: normalize(20)}}>
                <View>
                  <Image source={HomeTabImage} style={{
                    width: wp('35%'),
                    height: wp('20%'),
                  }}/>
                </View>
                <View style={{width: wp('50%'), margin: wp('3%')}}>
                  <Span color={color.black} fontSize={wp('4%')}>
                  8 proven techniques to getting over the addiction to caffine... 
                  </Span>
                </View>
            </View>
          </View>
        )}
        {props.contentType === 'TEXT' && (
        <View>
          <CardTitle fontSize={size.x22}>{props.content}</CardTitle>
          <View style={styles.createdWrapper}>
            <Span fontSize={size.x14} color={color.gray[100]}>{props.isRSVP ? 'curated by' : 'Shared by' }</Span>
            <TouchableOpacity
              onPress={() => HandleNavigation('Profile')}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={lincoln} style={styles.profilePic} />
              <Span fontWeight="bold" color={color.black} fontSize={size.x14}>
                Lincoln Dorwart
              </Span>
            </TouchableOpacity>
          </View>
        </View>
      )}
        <View
          style={{
            ...styles.actionBar,
            // borderWidth:
            //   props.contentType === 'TEXT' ? normalize(0) : normalize(2),
            // borderColor: '#0000000d',
            justifyContent: 'space-between',
            backgroundColor: props.isTransparentBg
              ? color.transparent
              : color.light,
          }}>
          <View style={styles.iconWrapper}>
            <TouchableOpacity
              style={{
                ...styles.iconBox,
                marginLeft: normalize(8),
              }}
              onPress={() => {
                props.onPressLike;
                setLike(!like);
              }}>
              <Image
                source={props.liked ? heartFilledIcon : heartOutlineIcon}
                style={{...styles.actionIcon, width: normalize(19.5)}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{
              ...styles.iconBox,
            }}>
              <Image style={{
                width: (props.contentType === 'TEXT' ? normalize(20) : normalize(30)),
                height: (props.contentType === 'TEXT' ? normalize(20) : normalize(30)),
              }} resizeMode = 'cover' source={props.contentType === 'TEXT' ? shareIcon : dotMenuIcon} marginLeft={props.contentType === 'TEXT' ? normalize(10) : 0}/>
            </TouchableOpacity>
          </View>
          <View style={styles.iconWrapper}>
          {showReactionTray && (
              <View
                style={{
                  backgroundColor: color.black,
                  position: 'absolute',
                  top: -normalize(42),
                  left: 80,
                  paddingHorizontal: normalize(12),
                  paddingVertical: normalize(8),
                  flexDirection: 'row',
                  zIndex: 9,
                }}>
                <TouchableOpacity
                  onPress={() => setReactionIcon('heart')}
                  style={{marginHorizontal: normalize(8)}}>
                  <Image source={rsvpcross} width={normalize(2)} height={normalize(2)}/>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setReactionIcon('clap')}
                  style={{marginHorizontal: normalize(8)}}>
                  <Image source={rsvpquestion} width={normalize(2)} height={normalize(2)} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setReactionIcon('eye')}
                  style={{marginHorizontal: normalize(8)}}>
                  <Image source={rsvptick} width={normalize(2)} height={normalize(2)}/>
                </TouchableOpacity>
              </View>
            )}
            {props.isRSVP && (
              <TouchableOpacity
                style={{
                  ...styles.iconBox,
                  backgroundColor: color.black,
                  height: normalize(24),
                  marginLeft: normalize(100),
                  borderRadius: normalize(4),
                  paddingHorizontal: normalize(8),
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setShowReactionTray(!showReactionTray);
                }}>
                <Span
                  textAlign="center"
                  color={color.default}
                  fontSize={size.x14}>
                  RSVP
                </Span>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={{...styles.iconBox, marginRight: (props.contentType === 'TEXT' ? normalize(0) : normalize(10))}}>
              <Image
                source={props.contentType === 'TEXT' ? dotMenuIcon : pinIcon}
                style={{
                  ...styles.actionIcon,
                  width: (props.contentType === 'TEXT' ? normalize(32) : normalize(19)),
                }}
              />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export const ContentCard = props => {
  const actionSheetRef = createRef();

  const [like, setLike] = useState(true);
  const [showReactionTray, setShowReactionTray] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [reactionIcon, setReactionIcon] = useState('heart-o');

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

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Doty',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{...styles.cardContainer}}>
      {(props.contentType === 'IMAGE' || props.contentType === 'VIDEO') && (
        <View>
          <Span fontSize={wp('6%')} numberOfLines={2}>{props.content}</Span>
          <View style={styles.tagWrapper}>
            <TagGroup tagData={tags} />
          </View>
          <View style={styles.createdWrapper}>
            <Span>Perspective by</Span>
            <TouchableOpacity
              onPress={() => HandleNavigation('Profile')}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={person} style={styles.profilePic} />
              <Span fontWeight="bold" color={color.black}>
                {props.postedBy}
              </Span>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={{flexDirection: 'column'}}>
        {props.contentType === 'IMAGE' ? (
          <ImageBackground
            source={contentImage}
            style={styles.cardMedia}
            imageStyle={styles.cardMediaStyle}
            resizeMode="cover"
          />
        ) : props.contentType === 'VIDEO' ? (
          <Video
            source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
            allowsExternalPlayback={false}
            muted={true}
            useTextureView={false}
            preventsDisplaySleepDuringVideoPlayback={true}
            automaticallyWaitsToMinimizeStalling={true}
            resizeMode="cover"
            posterResizeMode="cover"
            style={{
              ...styles.cardMedia,
            }}
          />
        ) : (
          <View style={{paddingHorizontal: normalize(16)}}>
            <Span fontSize={normalize(size.x18)}>
              WHO is bringing world’s scientists and global health professionals
              together to accelerate the research and development process,
              on.....
            </Span>
          </View>
        )}
        {props.contentType === 'TEXT' && (
          <View
            style={{
              ...styles.createdWrapper,
              paddingHorizontal: normalize(16),
            }}>
            <Span>perspective by</Span>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={person} style={styles.profilePic} />
              <Span fontWeight="bold" color={color.black}>
                Terry Rosser
              </Span>
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            ...styles.actionBar,
            borderWidth:
              props.contentType === 'TEXT' ? normalize(0) : normalize(2),
            borderColor: '#fcf9f3',
            justifyContent: 'space-between',
            backgroundColor: props.isTransparentBg
              ? color.transparent
              : color.light,
            paddingHorizontal: normalize(12),
            // borderRadius: normalize(99),
          }}>
          <View style={styles.contentIconWrapper}>
            {showReactionTray && (
              <View
                style={{
                  backgroundColor: color.default,
                  position: 'absolute',
                  top: -normalize(62),
                  left: 0,
                  borderRadius: normalize(99),
                  flexDirection: 'row',
                  zIndex: 9,
                }}>
                <TouchableOpacity
                  onPress={() => setReactionIcon('heart')}
                  style={{marginHorizontal: normalize(8)}}>
                  <Image source={heart} height={wp('5%')} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setReactionIcon('clap')}
                  style={{marginHorizontal: normalize(8)}}>
                  <Image source={clap} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setReactionIcon('eye')}
                  style={{marginHorizontal: normalize(8)}}>
                  <Image source={eye} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setReactionIcon('idea')}
                  style={{marginHorizontal: normalize(8)}}>
                  <Image source={idea} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setReactionIcon('faceGlass')}
                  style={{marginHorizontal: normalize(8)}}>
                  <Image source={faceGlass} />
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity
              style={styles.iconBox}
              onPress={() => {
                props.onPressLike;
                setShowReactionTray(!showReactionTray);
                setLike(!like);
              }}>
              <Image
                source={
                  reactionIcon === 'heart'
                    ? heartFilledIcon
                    : reactionIcon === 'clap'
                    ? clap
                    : reactionIcon === 'eye'
                    ? eye
                    : reactionIcon === 'idea'
                    ? idea
                    : reactionIcon === 'faceGlass'
                    ? faceGlass
                    : heartOutlineIcon
                }
                style={{height: wp('6%'), width: wp('6%'), marginLeft: wp('3%')}}
                // style={{...styles.actionIcon, width: normalize(19.5)}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconBox}
              onPress={() => actionSheetRef.current?.setModalVisible()}>
              <Image source={comment} style={{height: wp('6%'), width: wp('6%'), marginLeft: wp('3%')}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBox} onPress={onShare}>
              <Image source={union} style={{height: wp('6%'), width: wp('7%'), marginLeft: wp('3%')}} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isPinned ? color.primary[100] : 'transparent',
              // padding: normalize(8),
              height: normalize(32),
              width: normalize(32),
              borderRadius: normalize(99),
            }}>
            <TouchableOpacity
              style={styles.roundButton}>
              <Image
                source={pinIcon}
                style={{
                  ...styles.actionIcon,
                  width: normalize(19),
                  color: color.white
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
};

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            marginTop: wp('-180%')}}>
              <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>

    </Modal>
  );
};

export const ShapedCard = props => {
  const [like, setLike] = useState(false);
  const [visible, setVisible] = React.useState(false);

  return (
    <TouchableOpacity
      disabled={props.isSolid && true}
      onPress={() => setVisible(true)}
      style={{
        ...styles.shapedCardContainer,
        height: !props.cardHeight ? normalize(240) : props.cardHeight,
        width: !props.cardWidth ? normalize(240) : props.cardWidth,
        backgroundColor: props.isSolid && props.backgroundColor,
        borderRadius: props.isSolid && normalize(8),
      }}>

      <View>
        <ModalPoup visible={visible}>
          <View style={{
            // ...styles.shapeBox,
            // backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'relative',
            height: wp('100%'),
            width: wp('85%'),
          }}>
            <Image
            source={ThoughtStreamModal}
            marginTop={normalize(80)}
            style={{
              width: wp('70%'),
              height: hp('70%'),
            }}
            // width={wp('20%')}
            />
            <View
              style={{
                ...styles.shapedCardContent,
                padding: props.isSolid ? normalize(8) : normalize(42),
                justifyContent: props.isSolid && 'center',
                marginLeft: wp('-8%')
              }}>
              <TouchableOpacity onPress={() => setVisible(false)} style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: wp('5%'),
                marginTop: normalize(80),
                marginBottom: normalize(50),
              }}>
                <Image
                source={crossIcon}
                />
              </TouchableOpacity>
              <Span
                color={color.black[100]}
                fontSize={props.isSolid ? wp('4%') : wp('6%')}
                fontWeight={'normal'}
                lineHeight={normalize(30)}
                textAlign={'center'}
                height={wp('100%')}
                numberOfLines={props.isSolid ? 8 : 6}>
                Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.
              </Span>
              <View
                style={{
                  ...styles.actionBar,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  marginTop: normalize(30),
                  paddingVertical: normalize(0),
                  paddingHorizontal: normalize(0),
                }}>
                <TouchableOpacity
                  style={{...styles.iconBox, margin: 0}}
                  onPress={() => {
                    props.onPressLike;
                    setLike(!like);
                  }}>
                  <Image
                    source={props.liked ? heartFilledIcon : heartOutlineIcon}
                    style={{...styles.actionIcon, width: normalize(19.5)}}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.iconBox, marginRight: 0}}>
                  <Image
                    source={pinIcon}
                    style={{
                      ...styles.actionIcon,
                      width: normalize(19),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ModalPoup>
      </View>

      <View style={styles.shapeBox}>
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.687 1.36919C144.784 2.44667 202.095 -3.80409 224.073 15.9368C246.016 35.647 238.254 96.7694 239.01 124.601C239.782 153.003 244.819 206.248 221.622 225.618C199.2 244.341 144.557 237.505 113.907 237.452C83.3263 237.399 35.2731 247.349 13.3118 228.281C-8.96593 208.938 3.99791 152.393 3.49299 124.601C2.97901 96.311 -8.54888 36.3546 13.3117 15.9368C35.5959 -4.8766 81.5214 0.254654 113.687 1.36919Z"
            fill={
              props.backgroundColor ? props.backgroundColor : color.primary[100]
            }
          />
        </Svg>

        <View
          style={{
            ...styles.shapedCardContent,
            padding: props.isSolid ? normalize(8) : normalize(42),
            justifyContent: props.isSolid && 'center',
            alignContent: props.isSolid && 'center',
          }}>
          <View style={{
            height: hp('15%'),
          }}>
            <Span
              color={color.black[100]}
              fontSize={props.isSolid ? wp('5%') : wp('4%')}
              fontWeight={props.isSolid && '200'}
              lineHeight={normalize(22)}
              textAlign={'center'}
              numberOfLines={props.isSolid ? 8 :  3}>
              {props.isSolid ? "Your attitude, not your aptitude, will determine your altitude." : props.content}
            </Span>
          </View>
          <View  style={{
            height: hp('10%'),
          }}>
            <Span
              marginTop={wp('2%')}
              color={color.gray[500]}
              textAlign={'center'}
              fontSize={hp('2%')}>
              {props.isSolid ? "Cheyenne" : props.postedBy}
            </Span>
          </View>
          {!props.isSolid && (
            <View
              style={{
                ...styles.actionBar,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: hp('3%'),
                paddingVertical: normalize(0),
                paddingHorizontal: normalize(0),
              }}>
              <TouchableOpacity
                style={{...styles.iconBox, margin: 0}}
                onPress={() => {
                  props.onPressLike;
                  setLike(!like);
                }}>
                <Image
                  source={props.liked ? heartFilledIcon : heartOutlineIcon}
                  style={{...styles.actionIcon, width: normalize(19.5)}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{...styles.iconBox, marginRight: 0}}>
                <Image
                  source={pinIcon}
                  style={{
                    ...styles.actionIcon,
                    width: normalize(19),
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

    </TouchableOpacity>
  );
};

export const PatternShapedCard = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.shapedCardContainer,
        height: props.height,
        width: props.width,
      }}>
      <View style={styles.shapeBox}>
        <Svg
          width={props.width}
          height={props.height}
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.687 1.36919C144.784 2.44667 202.095 -3.80409 224.073 15.9368C246.016 35.647 238.254 96.7694 239.01 124.601C239.782 153.003 244.819 206.248 221.622 225.618C199.2 244.341 144.557 237.505 113.907 237.452C83.3263 237.399 35.2731 247.349 13.3118 228.281C-8.96593 208.938 3.99791 152.393 3.49299 124.601C2.97901 96.311 -8.54888 36.3546 13.3117 15.9368C35.5959 -4.8766 81.5214 0.254654 113.687 1.36919Z"
            fill={
              props.backgroundColor
                ? props.backgroundColor
                : color.secondary[100]
            }
          />
        </Svg>

        <View
          style={{
            ...styles.shapedCardContent,
            paddingHorizontal: normalize(18),
            paddingVertical: normalize(32),
            marginLeft:wp('-0.4%'),
            alignItems: (props.calledFrom && props.calledFrom == 'designInfo') && 'center',
          }}>
          {/* <Progress.Circle
            size={normalize(50)}
            thickness={normalize(5)}
            endAngle={'0.5'}
            progress={'0.5'}
            showsText='true'
            style={{
              // height: normalize(42),
              // width: normalize(42),
              // borderRadius: normalize(80),
              // borderWidth: normalize(4),
              // borderColor: props.color,
              // backgroundColor: color.default,
              // justifyContent: 'center',
              // alignItems: 'center',
            }}> */}
            {/* <Progress.Circle size={normalize(50)} /> */}
            {/* <Image source={props.image} style={{height: normalize(22), width: normalize(22)}} />
          </Progress.Circle> */}
          <AnimatedCircularProgress
            rotation={0}
            size={normalize(50)}
            width={3}
            fill={props.progressFill}
            tintColor={props.color}
            backgroundColor={color.default}>
            {
              (fill) => (
                <Image source={props.image} style={{height: normalize(22), width: normalize(22)}} />
              )
            }
          </AnimatedCircularProgress>
          <View style={{
            
          }}>
            <Span numberOfLines={1} fontSize={ (props.calledFrom && props.calledFrom == 'designInfo') ?  wp('3.5%') : wp('4%')} fontWeight="bold" color={props.color} marginTop={wp('6%')} textAlign={(props.calledFrom && props.calledFrom == 'designInfo') ?  'center' : 'left'}>
              {props.title}
            </Span>
            {
              (props.calledFrom && props.calledFrom == 'designInfo') ? <View></View> : <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Span marginTop={wp('-2%')}>{props.progressText}</Span>
              <Image source={arrowLeft} style={{marginLeft: wp('4%'), marginTop: wp('-1%')}} />
            </View>
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const QueryCard = props => {
  const [sliderValue, setSliderValue] = useState(0);

  switch (props.queryValue) {
    case 1:
      return (
        <View
          style={{
            ...styles.queryCard,
            width: wp('80%'),
            height: hp('36%'),
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : color.primary[100],
          }}>
          <View style={styles.cardHeader}>
            <Image source={logoWrapper} style={styles.absoluteLogoImage} />
            <Image source={arrowLeft} style={{height: normalize(8)}} />
          </View>
          <Span
            marginBottom={normalize(14)}
            fontSize={wp('4%')}
            numberOfLines={1}
            color={color.black}>
            How do you remember yourself as a child?
          </Span>
          
          <View style={{
            marginBottom: normalize(20),
            height: hp('12%')
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: normalize(20)
            }}>

            <TouchableOpacity style={{
              ...styles.helpYouButton,
              width: windowWidth/3.5
            }}>
              <Span textAlign="center" fontSize={wp('3%')}>
                Secure
              </Span>
            </TouchableOpacity> 
            <TouchableOpacity style={{
              ...styles.helpYouButton,
              width: windowWidth/3.5
            }}>
              <Span textAlign="center" fontSize={wp('3%')}>
                Avoidant
              </Span>
            </TouchableOpacity>

            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>

            <TouchableOpacity style={{
              ...styles.helpYouButton,
              width: windowWidth/3.5
            }}>
              <Span textAlign="center" fontSize={wp('3%')}>
                Ambivalent
              </Span>
            </TouchableOpacity> 
            <TouchableOpacity style={{
              ...styles.helpYouButton,
              width: windowWidth/3.5
            }}>
              <Span textAlign="center" fontSize={wp('3%')}>
                Disorganised
              </Span>
            </TouchableOpacity>

            </View>
          </View>

          <View style={styles.queryCardActions}>
          <TouchableOpacity style={{
              ...styles.actionButton,
              width: wp('70%'),
              backgroundColor: color.black,
            }}>
              <Span textAlign="center" fontSize={wp('4%')} color={color.default}>
                Done
              </Span>
            </TouchableOpacity>
          </View>
        </View>
      ); 
      break;

    case 0:
      return (
        <View
          style={{
            ...styles.queryCard,
            width: wp('80%'),
            height: hp('36%'),
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : color.success[100],
          }}>
          <View style={styles.cardHeader}>
            <Image source={logoWrapper} style={styles.absoluteLogoImage} />
            <Image source={arrowLeft} style={{height: normalize(8)}} />
          </View>
          <Span
            marginBottom={normalize(14)}
            fontSize={wp('4%')}
            numberOfLines={1}
            color={color.black}>
            Whom do you want to focus on??
          </Span>
    
          <View style={{
              marginBottom: normalize(20),
              height: hp('12%')
            }}>
            <ScrollView nestedScrollEnabled={true}>
              <Checkbox label="Kids" />
              <Checkbox label="Partner" />
              <Checkbox label="Kids" />
              <Checkbox label="Friends" />
            </ScrollView>
          </View>

          <View style={styles.queryCardActions}>
            <TouchableOpacity style={{
              ...styles.actionButton,
              width: wp('70%'),
              backgroundColor: color.black,
            }}>
              <Span textAlign="center" fontSize={wp('4%')} color={color.default}>
                Done
              </Span>
            </TouchableOpacity>
          </View>
        </View>
      ); 
      break;
    
      case 2:
        return (
          <View
            style={{
              ...styles.queryCard,
              width: wp('80%'),
              height: hp('36%'),
              backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : color.primary[100],
            }}>
            <View style={styles.cardHeader}>
              <Image source={logoWrapper} style={styles.absoluteLogoImage} />
              <Image source={arrowLeft} style={{height: normalize(8)}} />
            </View>
            <Span
              marginBottom={normalize(14)}
              fontSize={wp('4%')}
              numberOfLines={1}
              color={color.black}>
              Number of people I can call at 2 AM to talk
            </Span>
            
            <View style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: normalize(20),
              height: hp('12%')
            }}>
            <Text style={{fontSize: normalize(14)}}>{sliderValue}</Text>
            <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={100}
                value={sliderValue}
                onValueChange={value => setSliderValue(value)}
                step={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#FFFFFF"
                thumbImage={sliderthumb}
              />
  
            </View>
  
            <View style={styles.queryCardActions}>
            <TouchableOpacity style={{
              ...styles.actionButton,
              backgroundColor: color.black,
            }}>
              <Span textAlign="center" fontSize={wp('4%')} color={color.default}>
                Done
              </Span>
            </TouchableOpacity>
            </View>
          </View>
        ); 
        break;

      case 3:
        return (
          <View
            style={{
              ...styles.queryCard,
              width: wp('80%'),
              height: hp('36%'),
              backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : color.primary[100],
            }}>
            <View style={styles.cardHeader}>
              <Image source={logoWrapper} style={styles.absoluteLogoImage} />
              <Image source={arrowLeft} style={{height: normalize(8)}} />
            </View>
            <Span
              marginBottom={normalize(14)}
              fontSize={wp('4%')}
              color={color.black}>
              Select your city
            </Span>
            
            <View style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: normalize(20),
              height: hp('12%')
            }}>
            <Picker
              mode="dropdown"
              numberOfLines={1}
              backgroundColor={color.white}
              selectedValue={'City'}
              onValueChange={(itemValue, itemIndex) =>
                console.log(itemValue, itemIndex)
              }
              dropdownIconRippleColor={color.white}
              dropdownIconColor={color.black}
              style={{
                width: '100%',
                borderBottomWidth: normalize(2),
                borderBottomColor: color.white,
                backgroundColor: color.white,
                borderRadius: normalize(8)
              }}>
              <Picker.Item label="Banglore" value="everyone" />
              <Picker.Item label="Mumbai" value="friends" />
              <Picker.Item label="Delhi" value="private" />
            </Picker>
  
            </View>
  
            <View style={styles.queryCardActions}>
            <TouchableOpacity style={{
              ...styles.actionButton,
              backgroundColor: color.black,
            }}>
              <Span textAlign="center" fontSize={wp('4%')} color={color.default}>
                Done
              </Span>
            </TouchableOpacity>
            </View>
          </View>
        ); 
        break;
  
    default:
      return (
        <View
          style={{
            ...styles.queryCard,
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : color.primary[100],
          }}>
          <View style={styles.cardHeader}>
            <Image source={logoWrapper} style={styles.absoluteLogoImage} />
            <Image source={arrowLeft} style={{height: normalize(8)}} />
          </View>
          <Span
            marginBottom={normalize(14)}
            fontSize={size.x16}
            color={color.black}>
            Select the relation you want to focus on?
          </Span>
    
          <ScrollView nestedScrollEnabled={true}>
            <Checkbox label="Kids" />
            <Checkbox label="Friends" />
            <Checkbox label="Partner" />
            <Checkbox label="Kids" />
            <Checkbox label="Friends" />
          </ScrollView>
          <View style={styles.queryCardActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Span textAlign="center" fontSize={size.x12}>
                Done
              </Span>
            </TouchableOpacity>
          </View>
        </View>
      ); 
      break;
  }
};

export const PersonalizeCard = props => {
  return (
    <View
      style={{
        ...styles.queryCard,
        width: '100%',
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : color.purple[100],
      }}>
      <Image source={logoWrapper} style={{ height: normalize(30), width: normalize(30), marginBottom: normalize(10) }}/>
      <Span
        marginBottom={normalize(8)}
        marginTop={normalize(10)}
        fontSize={wp('4%')}
        fontWeight='bold'
        color={color.black}>
        Add a possibility
      </Span>
      <View style={[styles.container, {
        flexDirection: "row",
      }]}>
          <Span
          marginBottom={normalize(14)}
          fontSize={wp('4%')}
          width={wp('60%')}
          numberOfLines={2}
          color={color.darkBlack}>
          Design your life, one dot at a time
        </Span>
        <Image source={arrowLeft} marginTop={normalize(8)} marginLeft={normalize(50)} style={{height: normalize(8), width: normalize(16)}} />
      </View>
      <FlatList
        data={homeData.persnalize}
        horizontal={true}
        renderItem={data => {
          return (
            <View
              key={data.index}
              marginRight={normalize(10)}
              marginBottom={normalize(4)}
              style={{
                maxWidth: '100%',
              }}>
              <TouchableOpacity style={styles.personalizeButton}>
                <Span textAlign="center" fontSize={wp('3.1%')}>
                  {data.item.content}
                </Span>
              </TouchableOpacity>             
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export const PerspectiveCard = props => {
  return (
    <View
      style={{
        ...styles.queryCard,
        borderColor: color.gray[50],
        borderWidth: normalize(3),
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : color.light,
      }}>
        <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: normalize(43)
            }}>
            <Image source={perspectiveGroup} alignItems={'center'}/>
          </TouchableOpacity>
        
      <Span
        marginBottom={normalize(10)}
        fontSize={size.x22}
        textAlign='center'
        fontWeight='800'
        color={color.darkBlack}>
        How can I calm my {"\n"}mind?
      </Span>
      <View style={[styles.container, {
        flexDirection: "row"
      }]}>
      <Span
        marginBottom={normalize(14)}
        marginRight={normalize(20)}
        marginTop={normalize(30)}
        fontSize={size.x14}
        color={color.darkBlack}>
        View all
      </Span>
      <TouchableOpacity
            style={{
              width: '60%',
              height: normalize(30),
              backgroundColor: color.primary[900],
              borderRadius: normalize(40),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: normalize(25),
              marginRight: normalize(40)
            }}>
            <Span textAlign="center" color={color.default} fontSize={size.x14}>
              Share your perspective
            </Span>
          </TouchableOpacity>
      <Span
        marginBottom={normalize(14)}
        marginTop={normalize(30)}
        fontSize={size.x14}
        color={color.darkBlack}>
        +1
      </Span>
      </View>
    </View>
  );
};

export const MembersCard = props => {
  return (
    <View
      style={{
        ...styles.queryCard,
        maxHeight: normalize(100),
        marginBottom: normalize(0),
        marginTop: normalize(8),
        marginHorizontal: normalize(16),
        width: '90%',
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : color.white,
      }}>
      <View style={[styles.container, {
        flexDirection: "row",
        justifyContent: 'space-between'
      }]}>
        <Span
        marginBottom={normalize(14)}
        fontSize={size.x16}
        fontWeight='800'
        color={color.darkBlack}>
        {props.memberName}
      </Span>
      <Image source={arrowLeft} marginTop={normalize(8)} style={{height: normalize(8)}} />
      </View>
      <Span
        marginBottom={normalize(14)}
        fontSize={size.x14}
        color={color.gray[100]}>
        {props.bio}
      </Span>
    </View>
  );
};

const styles = StyleSheet.create({
  // PostCard
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  cardContainer: {
    flexDirection: 'column',
    borderColor: color.white,
    width: '100%',
    maxHeight: normalize(360),
  },
  tagWrapper: {
    flexDirection: 'row',
    marginTop: normalize(12),
  },
  createdWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: wp('2%')
  },
  profilePic: {
    height: normalize(24),
    width: normalize(24),
    borderRadius: normalize(4),
    marginHorizontal: normalize(8),
  },
  cardBody: {
    flexDirection: 'column',
    marginTop: normalize(12),
    borderRadius: normalize(8),
  },
  cardMedia: {
    maxHeight: normalize(188),
    height: '100%',
    width: '100%',
  },
  cardMediaStyle: {
    borderTopRightRadius: normalize(8),
    borderTopLeftRadius: normalize(8),
  },
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(52),
    width: '100%',
    paddingVertical: normalize(18),
    borderBottomLeftRadius: normalize(8),
    borderBottomRightRadius: normalize(8),
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.4,
    // shadowRadius: normalize(1),
    // elevation: normalize(1),
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: normalize(99),
  },
  iconBox: {
    paddingHorizontal: normalize(8),
  },
  actionIcon: {
    height: normalize(19),
    color: color.white
  },
  contentIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e7e4df',
    paddingVertical: normalize(2),
    paddingHorizontal: normalize(8),
    borderRadius: normalize(99),
    marginTop: wp('4%'),
    height: wp('15%')
  },

  //   Shaped Cards

  shapedCardContainer: {
    position: 'relative',
  },
  shapeBox: {
    position: 'relative',
    height: '100%',
    width: '100%',
    
  },
  shapedCardContent: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignContent: 'center',
    // marginLeft: wp('4%'),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  roundButton: {
    width: wp('16%'),
    height: wp('16%'),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: wp('7%'),
    marginRight: wp('5%'),
    borderRadius: 100,
    backgroundColor: '#04809c',
  },

  // Query Cards

  queryCard: {
    maxHeight: normalize(260),
    width: '100%',
    borderRadius: normalize(12),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(20),
  },
  cardHeader: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: normalize(12),
  },
  absoluteLogoImage: {
    height: normalize(50),
    width: normalize(50),
    position: 'absolute',
    left: 0,
    top: -normalize(45),
  },
  queryCardActions: {
    width: '100%',
    marginTop: normalize(18),
  },
  actionButton: {
    borderWidth: normalize(2),
    borderRadius: normalize(8),
    borderColor: color.black,
    padding: normalize(4),
  },
  personalizeButton: {
    borderWidth: normalize(3),
    borderRadius: normalize(50),
    borderColor: color.black,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1%'),
    // width: wp('35%'),
    // height: hp('6%'),
  },
  helpYouButton: {
    borderRadius: normalize(10),
    padding: normalize(8),
    color: color.black,
    backgroundColor: color.default
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: wp('80%'),
    backgroundColor: 'transparent',
    borderRadius: 20,
    marginLeft: wp('10%'),
    marginTop: hp('40%'),
  },
  backgroundVideo: {
      height: 250,
      width: '100%',
  },
  mediaControls: {
      height: '100%',
      flex: 1,
      alignSelf: 'center',
  },
});
