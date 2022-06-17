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
import arrowLeft from '../../../assets/icons/arrow_chevron_right.png';
import dotyIconSmall from '../../../assets/icons/dotyIconSmall.png';

import MasonryList from '@react-native-seoul/masonry-list';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

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


const NoPossibilities = props => {
  return (
    <React.Fragment>
      <View
        style={{
          borderRadius: normalize(8),
          borderWidth: normalize(2),
          borderColor: color.gray[100],
          height: normalize(32),
          backgroundColor: color.default,
          marginTop: normalize(8),
          marginBottom: normalize(20),
          paddingHorizontal: normalize(8),
        }}>
        <TextInput
          style={{
            width: '100%',
            height: normalize(32),
            borderRadius: normalize(8),
            backgroundColor: color.transparent,
            color: color.black,
          }}
          placeholder="Search"
        />
      </View>
      <KeyboardAvoidingView>
        <Span color={color.black} fontSize={size.x20}>
          0{' '}
          <Span color={color.gray[500]} fontSize={size.x16}>
            Possibilities
          </Span>
        </Span>
        <View style={styles.noPossibility}>
          <Image source={charImg} />
          <Span color={color.gray[500]} fontSize={size.x14} textAlign="center">
            Looks like you havent added anything to your possibilities yet
          </Span>
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            height: normalize(40),
            backgroundColor: color.transparent,
            borderColor: color.primary[900],
            borderWidth: normalize(2),
            borderRadius: normalize(40),
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: normalize(28),
          }}
          onPress={() => HandleNavigation('AddPossibilityModal')}>
          <Span textAlign="center" color={color.primary[900]} >
            Add Possibilitiy
          </Span>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </React.Fragment>
  );
};

const Possibilities = props => {

  const [activePossibilty, setActivePossibilty] = useState('thumbnail');
  const [tagsValue, setTagsValue] = useState([]);

  useEffect(() => {
    setTagsValue(props.tagData);
  }, []);

  return (
    <React.Fragment>
      <View style={styles.parent}>
          <TouchableOpacity
                style={styles.closeButtonParent}
              >
            <Image
              style={styles.closeButton}
              source={search}
              width={wp('5.5%')}
              height={wp('5.5%')}
            />
          </TouchableOpacity>
          <TextInput
            multiline={true}
            numberOfLines={10}
            fontSize={wp('3.5%')}
            placeholder="Search"
            marginTop={wp('1%')}
            placeholderTextColor="grey"
            marginRight={normalize(170)}
            style={{
              backgroundColor: color.default,
              height: normalize(40),
              borderRadius: normalize(8),
              color: color.black,
              textAlign: 'left'
            }}
          />
          <TouchableOpacity
            style={styles.closeButtonParent}
          >
            <Image
              style={styles.closeButton}
              source={filter}
              marginRight={normalize(10)}
              width={normalize(15)}
              height={normalize(15)}
            />
          </TouchableOpacity>
        </View>
      <KeyboardAvoidingView>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Span color={color.black} fontWeight="bold" fontSize={wp('5.8%')}>
          My Possibilities (12)
        </Span>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <TouchableOpacity
          onPress={() => {
            setActivePossibilty('thumbnail')
          }}
          >
            <Image source={activePossibilty == "thumbnail" ? activeGrid : grid} style={{height: normalize(20), width: normalize(20)}} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
            setActivePossibilty('list')
          }}
          >
            
        <Image source={activePossibilty == "thumbnail" ? list : activeList} style={{height: normalize(20), width: normalize(20), marginLeft: normalize(10)}} />
          </TouchableOpacity>
          </View>
        </View>
        {
          activePossibilty == "thumbnail" ? 
        //   <View
        //   style={{
        //     width: '100%',
        //     flexDirection: 'row',
        //     justifyContent: 'space-between',
        //     marginTop: normalize(18),
        //   }}>
        //   <TouchableOpacity
        //     onPress={() => HandleNavigation('AddPossibilityModal')}
        //     style={{
        //       flexDirection: 'column',
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //       marginHorizontal: normalize(12),
        //     }}>
        //     <Span color={color.primary[900]} fontSize={size.x26}>
        //       +
        //     </Span>
        //     <Span color={color.primary[900]} fontSize={size.x20}>Add Possibility</Span>
        //   </TouchableOpacity>
        //   <FlatList
        //     data={[0]}
        //     numColumns={2}
        //     // keyExtractor={item => item.id}
        //     renderItem={data => (
        //       <View
        //         style={{
        //           overflow: 'hidden',
        //           marginVertical: normalize(8),
        //         }}
        //         key={data.index}>
                
        //       </View>
              
        //     )}
        //   />
        // </View>
        
        <MasonryList
          data={homeData.possibilitiesListThumbnail}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          style={{
            marginTop: wp('3%')
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => 
              item.id == 1 ? <TouchableOpacity
                  onPress={() => HandleNavigation('AddPossibilityModal')}
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: normalize(12),
                    marginVertical: normalize(20),
                  }}>
                  <Span color={color.primary[900]} fontSize={wp('5%')}>
                    +
                  </Span>
                  <Span color={color.primary[900]} fontSize={wp('4.5%')} textAlign='center'>Add Possibility</Span>
                </TouchableOpacity>
              : <TouchableOpacity
              onPress={() => HandleNavigation('PossibilityDetailModal')}
              style={{
                width: '95%',
                borderWidth: wp('0.5%'),
                borderColor: color.gray[900],
                borderRadius: wp('1.2%'),
                paddingVertical: wp('1.2%'),
                paddingHorizontal: wp('2%'),
                marginVertical: wp('1%'),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>

                <Span marginLeft={wp('0.5%')} fontSize={wp('4.8%')} maxWidth={wp('60%')}>
                  <View
                    style={{
                      borderWidth: wp('0.8%'),
                      borderColor: item.iconColor,
                      borderRadius: wp('1%'),
                      height: wp('3.5%'),
                      width: wp('3.5%'),
                    }}
                  /> {item.name}
                </Span>
              </View>
              {
                item.data != "" &&  
                <View>
                    <Span color={color.gray[200]} maxWidth={wp('38%')} fontSize={wp('4.4%')} numberOfLines={7}>
                      {item.data}
                    </Span>
                </View>
              }
              {
                item.perspective != "" &&  
                <View>
                  <Span
                    fontSize={wp('3.5%')}
                    color={color.gray[200]}
                    maxWidth={normalize(120)}>
                    {item.perspective}
                  </Span>
                </View>
              }
              
              {
                (typeof item.tagData !== 'undefined' && item.tagData && item.tagData.length) && <View
                  style={{flexDirection: 'row', marginTop: normalize(12), overflow: 'hidden'}}>
                  <TagGroup
                    tagData={ (typeof item.tagData !== 'undefined' && item.tagData && item.tagData.length)  ? item.tagData : tags} 
                  />
                </View>
              }
            </TouchableOpacity>
          }
          // refreshing={isLoadingNext}
          onRefresh={() => refetch({first: ITEM_CNT})}
          onEndReachedThreshold={0.1}
          onEndReached={() => loadNext(ITEM_CNT)}
        />

        : 
        
        <View>
          <TouchableOpacity
            onPress={() => HandleNavigation('AddPossibilityModal')}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: normalize(20)
            }}>
            <Span color={color.primary[900]} fontSize={size.x20}>
              +
            </Span>
            <Span color={color.primary[900]} fontSize={size.x18} marginLeft={normalize(10)}>Add possibility</Span>
          </TouchableOpacity>
        <View style={{borderTopWidth: 1, borderColor: color.gray[100], marginTop: normalize(10)}}>
        <FlatList
        data={homeData.possibilitiesList}
        renderItem={({item}) => {
            
            return(
              <TouchableOpacity
              style={{borderColor: color.gray[800],borderBottomWidth:1, paddingVertical: normalize(10)}}
              onPress={() => HandleNavigation('PossibilityDetailModal')}
              key={item.id}>
              <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

              }}>
                <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <View
                    style={{
                    borderWidth: normalize(4),
                    borderColor: (item.iconColor),
                    borderRadius: normalize(5),
                    height: normalize(12),
                    width: normalize(12),
                    marginRight: normalize(20),
                    }}
                  />
                  <Span fontSize={size.x16}>
                    {item.key}
                  </Span>
                </View>
                <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={arrowLeft} style={{
                  marginLeft: normalize(90),
                  marginTop: normalize(10),
                  }}/>
                </View>
              </View>
            </TouchableOpacity>
            );
        }}
      />
        </View>
        </View>
        }
      </KeyboardAvoidingView>
    </React.Fragment>
  );
};

const Patterns = props => {



  const [activePattern, setActivePattern] = useState('yes');

  const IS_IOS = Platform.OS === 'ios';
  const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

  function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  }

  const slideHeight = viewportHeight * 0.36;
  const slideWidth = wp(75);
  const itemHorizontalMargin = wp(2);

  const sliderWidth = viewportWidth;
  const itemWidth = slideWidth + itemHorizontalMargin * 4;

  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValueTwo, setSliderValueTwo] = useState(0);

  if(activePattern == "yes"){
    return (
      <View>
        <Span fontSize={size.x16}>
          Help doty help you by answering a few questions.
        </Span>
        <View style={{paddingBottom: normalize(62)}}>
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
              width={normalize(140)}
              height={normalize(160)}
              image={ayurveda}
              progressFill={50}
              marginLeft={wp('-2%')}
              progressText="10 more to go"
              onPress={() => {
                setActivePattern('no');
              }}
            />
  
            <PatternShapedCard
              title="Body"
              backgroundColor={color.success[100]}
              color={color.success[900]}
              width={normalize(140)}
              height={normalize(160)}
              progressFill={20}
              progressText="23 more to go"
              image={body}
            />
          </View>
  
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <PatternShapedCard
              title="Purpose"
              backgroundColor={color.warning[100]}
              color={color.warning[900]}
              width={normalize(140)}
              height={normalize(160)}
              image={relaxation}
              progressFill={80}
              progressText="2 more to go"
            />
  
            <PatternShapedCard
              title="Relationships"
              backgroundColor={color.danger[100]}
              color={color.danger[900]}
              width={normalize(140)}
              height={normalize(160)}
              image={dancing}
              progressFill={50}
              progressText="10 more to go"
            />
          </View>
  
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <PatternShapedCard
              title="Wealth"
              backgroundColor={color.purple[200]}
              color={color.purple[500]}
              width={normalize(140)}
              height={normalize(160)}
              image={exchange}
              progressFill={50}
              progressText="10 more to go"
            />
  
            <PatternShapedCard
              title="Flowwork"
              backgroundColor={color.gray[50]}
              color={color.gray[500]}
              width={normalize(140)}
              height={normalize(160)}
              image={sun}
              progressFill={50}
              progressText="10 more to go"
            />
          </View>
        </View>
      </View>
    );
  }else{
    return (
      <View>
        <FlatList
          data={homeData.patternCategories}
          horizontal={true}
          renderItem={(data) => {
            if(data.item.id == 1){
              return (
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginRight: normalize(10),
                  borderRadius: normalize(80),
                  borderWidth: normalize(4),
                  borderColor: color.light,
                  backgroundColor: color.skyBlue[100],
                  width: normalize(100),
                  height: normalize(50),
                  paddingVertical: normalize(8),
                }}>
                  {/* <View
                    style={{
                      height: normalize(35),
                      width: normalize(35),
                      borderRadius: normalize(80),
                      borderWidth: normalize(4),
                      borderColor: data.item.image,
                      backgroundColor: color.default,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    
                    <Image source={data.item.image} style={{height: normalize(22)}} />
                  </View> */}
                  <AnimatedCircularProgress
                    rotation={0}
                    size={normalize(35)}
                    width={3}
                    fill={data.item.progressFill}
                    tintColor={data.item.tintColor}
                    backgroundColor={data.item.borderColor}>
                    {
                      (fill) => (
                        <Image source={data.item.image} style={{height: normalize(15), width: normalize(15)}} />
                      )
                    }
                  </AnimatedCircularProgress>
                  <View style={{
                    marginTop: normalize(4),
                    marginLeft: normalize(10)
                  }}>
                    <Span color={data.item.tintColor} fontSize={size.x18}>Mind</Span>
                  </View>
                </View>
              );
            }else{
              return (
                <AnimatedCircularProgress
                  style={{
                    marginRight: normalize(10),
                    marginTop: normalize(10),
                  }}
                  rotation={0}
                  size={normalize(35)}
                  width={3}
                  fill={data.item.progressFill}
                  tintColor={data.item.tintColor}
                  backgroundColor={data.item.borderColor}>
                  {
                    (fill) => (
                      <Image source={data.item.image} style={{height: normalize(15), width: normalize(15)}} />
                    )
                  }
                </AnimatedCircularProgress>
              );
            }
          }}
          keyExtractor={item => item.id}
        />
        <Carousel
          data={homeData.patternData}
          renderItem={(data)=>{
            return(
              <View style={styles.itemContainer}>
                <View style={{
                  flexDirection: 'row', 
                  justifyContent: 'space-between',
                  paddingHorizontal: normalize(20),
                  paddingVertical: normalize(30)
                  }}>
                   <Span color={color.primary[900]} fontSize={size.x14} fontWeight={'bold'}>
                      {data.item.title}
                    </Span>
                    <Span color={color.gray[500]} fontSize={size.x14}>
                      {data.item.titleNumber}
                    </Span>
                </View>
                <View style={{
                  flexDirection: 'row', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  alignContent: 'center',
                  paddingHorizontal: normalize(30),
                  paddingVertical: normalize(30),
                  textAlign: 'center',
                  marginBottom: normalize(20),
                  }}>
                   <Span color={color.gray[500]} fontSize={size.x30} textAlign={'center'}>
                      {data.item.content}
                    </Span>
                </View>
                {/* <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={100}
                value={sliderValue}
                onValueChange={value => setSliderValue(value)}
                step={1}
                minimumTrackTintColor="#BDBDBD"
                maximumTrackTintColor="#BDBDBD"
                thumbImage={sliderthumb}
                /> */}

              <View style={{width: '100%'}}>
                  <Slider
                    style={{width: '100%', height: 40}}
                    minimumValue={0}
                    maximumValue={100}
                    value={sliderValue}
                    onValueChange={value => setSliderValue(value)}
                    step={1}
                    minimumTrackTintColor="#BDBDBD"
                    maximumTrackTintColor="#BDBDBD"
                    thumbImage={sliderthumb}
                  />
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Span color={color.gray[900]} fontSize={size.x14} marginLeft={normalize(14)}>
                      Yes
                    </Span>
                    <Span color={color.gray[900]} fontSize={size.x14} marginRight={normalize(14)}>
                      No
                    </Span>
                  </View>
                </View>

                <View
              style={{
                marginTop: normalize(20),
                marginBottom: normalize(20),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: normalize(2),
                  borderColor: color.primary[900],
                  borderRadius: normalize(99),
                  paddingHorizontal: normalize(12),
                  paddingVertical: normalize(8),
                  width: '90%'
                }}>
                <Span color={color.primary[900]} textAlign="center">
                  Next
                </Span>
              </TouchableOpacity>
              </View>
              </View>
            );
          }}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={1}
          useScrollView={true}          
        />
      </View>
    );
  }

  
};

const Design = ({navigation, route}) => {
  const [selectedTab, setSelectedTab] = useState('Possibilities');

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
          <Image source={arrowLeft} style={{marginLeft: normalize(6), width: 30, height: 30, transform: [    
            {rotateY: '180deg'} //vertically
          ]}} />
        </TouchableOpacity>
        <Span
          fontSize={wp('5%')}
          color={color.darkBlack}
          fontWeight="200"
          >
          Design
        </Span>
        <Image source={dotyIconSmall} style={{marginRight: wp('2%'), width: wp('6%'), height: wp('6%')}} />
      </View>
      <View style={{height: '8%', backgroundColor: color.light, marginBottom: normalize(20),}}>
        <Tabs
          selected={selectedTab}
          style={{
            color: color.black,
            width: '100%',
            textAlign: 'center',
            marginTop:wp('2%')
          }}
          selectedStyle={{
            padding: normalize(8),
            color: color.black,
            width: '100%',
            textAlign: 'center',
            borderBottomWidth: normalize(5),
            borderBottomColor: color.primary[900],
            fontSize: wp('5%'),
          }}
          onSelect={el => setSelectedTab(el.props.name)}>
          <Span name="Possibilities" fontSize={wp('5%')}>Possibilities</Span>
          <Span name="Patterns" fontSize={wp('5%')}>Patterns</Span>
        </Tabs>
      </View>
      <ScrollView style={styles.bodyContainer}>
        {selectedTab === 'Possibilities' ? (
          <Possibilities />
        ) : selectedTab === 'Patterns' ? (
          <Patterns />
        ) : null}
      </ScrollView>
      <BottomNavigation pathname={"Design"} />
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

export default Design;
