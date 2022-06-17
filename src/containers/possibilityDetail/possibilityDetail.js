import React, {useState, createRef} from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  FlatList,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import Slider from '@react-native-community/slider';

// Import Components
import {SectionTitle, Span} from '../../components/Typography/typography';
import {TagGroup} from '../../components/Tags/tags';
import {TextArea} from '../../components/FormFields/formElements';

// Import Utils
import {size, color} from '../../utils/common';
import {normalize, NavigateTo, windowHeight} from '../../utils/helper';

// Import mock data
import {homeData} from '../../utils/data';

// Import Assets
import crossIcon from '../../../assets/icons/cross.png';
import sliderthumb from '../../../assets/icons/sliderthumb.png';
import dotMenuIcon from '../../../assets/icons/dotMenu.png';
import copyicon from '../../../assets/icons/copy-icon.png';

import mockUser from '../../../assets/images/user.png';
import gallary from '../../../assets/icons/gallary.png';
import video from '../../../assets/icons/video.png';
import mic from '../../../assets/icons/mic.png';
import dotMenu from '../../../assets/icons/dotMenu.png';
import eye from '../../../assets/icons/eye.png';
import idea from '../../../assets/icons/idea.png';

const tags = [
  {
    text: 'Control my anger',
    color: color.gray[500],
  },
  {
    text: 'Find love',
    color: color.gray[500],
  },
  {
    text: 'Meditate',
    color: color.gray[500],
  },
];

const tags2 = [
  {
    text: 'Mind',
    color: color.primary[500],
    selected: true,
  },
  {
    text: 'Purpose',
    color: color.success[500],
    selected: false,
  },
];

const actionSheetRef = createRef();

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const PossibilityDetailModal = ({navigation}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValueTwo, setSliderValueTwo] = useState(0);

  const toggleActionSheet = () => {
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{height: '100%'}}>
        <ScrollView>
        <View style={styles.modalHeader}>
          <TouchableOpacity
            style={{height: normalize(12), width: normalize(12)}}
            onPress={() => navigation.navigate('Design')}>
            <Image source={crossIcon} />
          </TouchableOpacity>
          <View />
        </View>

        <View>
          <View style={{height: '62%', paddingTop: normalize(8)}}>
            <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderWidth: normalize(4),
                    borderColor: color.primary[900],
                    borderRadius: normalize(4),
                    height: normalize(12),
                    width: normalize(12),
                  }}
                />
                <Span
                  fontSize={size.x20}
                  marginLeft={normalize(8)}
                  fontWeight={'bold'}>
                  Own a villa
                </Span>
              </View>
            <View>
              <Span color={color.gray[500]}>
                I want to own a villa before I turn 40
              </Span>
            </View>
            <View style={{marginTop: normalize(18)}}>
              <Span fontSize={size.x14} color={color.black} fontWeight="bold">
                Select areas of life that it belongs to{' '}
              </Span>
              <View
                style={{
                  marginTop: normalize(8),
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <TagGroup
                  tagData={tags}
                  marginRight={normalize(8)}
                  marginBottom={normalize(8)}
                />
              </View>
            </View>

            <View style={{width: '100%', marginTop: normalize(18)}}>
              <View>
                <Span color={color.black} fontWeight="bold" fontSize={size.x12}>
                  Priority
                </Span>
              </View>
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
                <Span color={color.gray[500]} fontSize={size.x10}>
                  Low
                </Span>
                <Span color={color.gray[500]} fontSize={size.x10}>
                  High
                </Span>
              </View>
            </View>
            
            <View style={{width: '100%', marginTop: normalize(18)}}>
              <View>
                <Span color={color.black} fontWeight="bold" fontSize={size.x12}>
                  How it's going?
                </Span>
              </View>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={100}
                value={sliderValueTwo}
                onValueChange={value => setSliderValueTwo(value)}
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
                <Span color={color.gray[500]} fontSize={size.x10}>
                  Not as expected
                </Span>
                <Span color={color.gray[500]} fontSize={size.x10}>
                  As expected
                </Span>
              </View>
            </View>

            <View
              style={{
                marginTop: normalize(48),
                marginBottom: normalize(20),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: normalize(2),
                  borderColor: color.primary[900],
                  borderRadius: normalize(99),
                  paddingHorizontal: normalize(12),
                  paddingVertical: normalize(8),
                }}>
                <Span color={color.primary[900]} textAlign="center">
                  Request Perspective
                </Span>
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: normalize(40),
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity>
                  <Image source={copyicon} style={{height: normalize(14)}} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={dotMenuIcon} style={{height: normalize(14)}} />
                </TouchableOpacity>
              </View>
            </View>

            <SectionTitle>Response to request perspective</SectionTitle>

            <View style={{marginTop: normalize(20), marginBottom: normalize(10)}}>
              <FlatList
                data={homeData.responsePerspective}
                horizontal={true}
                renderItem={data => {
                  return (
                    <View style={styles.item}>
                      <Image
                        source={{
                          uri: data.item.uri,
                        }}
                        style={styles.itemPhoto}
                        resizeMode="cover"
                      />
                      <Text style={styles.itemText}>{data.item.text}</Text>
                    </View>
                  );
                }}
                keyExtractor={item => item.id}
              />
            </View>

            <SectionTitle>Saved perspective</SectionTitle>

            <View style={{marginTop: normalize(20), marginBottom: normalize(10)}}>
              <FlatList
                data={homeData.responsePerspective}
                horizontal={true}
                renderItem={data => {
                  return (
                    <View style={styles.item}>
                      <Image
                        source={{
                          uri: data.item.uri,
                        }}
                        style={styles.itemPhoto}
                        resizeMode="cover"
                      />
                      <Text style={styles.itemText}>{data.item.text}</Text>
                    </View>
                  );
                }}
                keyExtractor={item => item.id}
              />
            </View>

            <SectionTitle>Recommended By Doty</SectionTitle>

            <View style={{marginTop: normalize(20), marginBottom: normalize(40)}}>
              <FlatList
                data={homeData.responsePerspective}
                horizontal={true}
                renderItem={data => {
                  return (
                    <View style={styles.item}>
                      <Image
                        source={{
                          uri: data.item.uri,
                        }}
                        style={styles.itemPhoto}
                        resizeMode="cover"
                      />
                      <Text style={styles.itemText}>{data.item.text}</Text>
                    </View>
                  );
                }}
                keyExtractor={item => item.id}
              />
            </View>

          </View>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Action Sheet */}
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          height: '100%',
          maxHeight: normalize(480),
          backgroundColor: color.light,
        }}
        headerAlwaysVisible={true}
        gestureEnabled={true}
        closeOnPressBack={false}
        drawUnderStatusBar={true}
        closeOnTouchBackdrop={true}
        elevation={1}
        closable={true}
        // overlayColor={color.transparent}
        keyboardDismissMode="interactive"
        backgroundColor={color.light}
        indicatorColor={color.gray[100]}>
        <View style={{...styles.actionSheetContainer}}>
          <Span color={color.black} fontSize={size.x20} fontWeight="500">
            I want to
          </Span>

          <View
            style={{
              maxHeight: normalize(32),
              borderRadius: normalize(8),
              backgroundColor: color.default,
              borderWidth: normalize(2),
              borderColor: color.gray[50],
              marginTop: normalize(16),
            }}>
            <TextInput
              style={{
                width: '100%',
                maxHeight: normalize(32),
                height: normalize(32),
                borderRadius: normalize(8),
                color: color.black,
                fontSize: size.x14,
                paddingHorizontal: normalize(8),
              }}
              placeholder="Possibility Title"
            />
          </View>

          <View
            style={{
              width: '100%',
              height: normalize(96),
              borderWidth: normalize(2),
              borderRadius: normalize(8),
              borderColor: color.gray[50],
              backgroundColor: color.default,
              color: color.black,
              marginTop: normalize(8),
            }}>
            <TextArea
              fontSize={size.x14}
              placeholder="Possibility Description"
            />
          </View>

          <View style={{marginTop: normalize(28)}}>
            <Span fontSize={size.x14} color={color.black}>
              Select areas of life that it belongs to{' '}
            </Span>
            <View
              style={{
                marginTop: normalize(8),
                flexDirection: 'row',
              }}>
              <TagGroup
                tagData={tags2}
                marginRight={normalize(8)}
                marginBottom={normalize(8)}
              />
            </View>

            <View style={{width: '100%', marginTop: normalize(18)}}>
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
                <Span color={color.gray[500]} fontSize={size.x10}>
                  Doty recommends
                </Span>
                <Span color={color.gray[500]} fontSize={size.x10}>
                  Explore
                </Span>
              </View>
            </View>

            <View style={{width: '100%', marginTop: normalize(18)}}>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={100}
                value={sliderValueTwo}
                onValueChange={value => setSliderValueTwo(value)}
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
                <Span color={color.gray[500]} fontSize={size.x10}>
                  Doty recommends
                </Span>
                <Span color={color.gray[500]} fontSize={size.x10}>
                  Explore
                </Span>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                width: '30%',
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
              onPress={() => HandleNavigation('Design')}>
              <Span textAlign="center" color={color.primary[900]}>
                Done
              </Span>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '65%',
                height: normalize(40),
                backgroundColor: color.primary[900],
                borderRadius: normalize(40),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: normalize(28),
              }}
              onPress={() => HandleNavigation('Design')}>
              <Span textAlign="center" color={color.default}>
                Save & Add other
              </Span>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalHeader: {
    // paddingHorizontal: normalize(18),
    paddingVertical: normalize(8),
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.light,
  },
  container: {
    backgroundColor: color.light,
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(8),
    width: '100%',
    // height: '92%',
  },
  actionContainer: {
    height: '100%',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    marginHorizontal: normalize(8),
  },
  actionSheetContainer: {
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(40),
    flexDirection: 'column',
    height: '100%',
  },
  actionSheetActionIcon: {
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: color.black,
    marginTop: normalize(10),
  },
});

export default PossibilityDetailModal;
