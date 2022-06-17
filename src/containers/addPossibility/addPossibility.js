import React, {useState, createRef} from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import Slider from '@react-native-community/slider';

// Import Components
import {Span} from '../../components/Typography/typography';
import {TagGroup} from '../../components/Tags/tags';
import {TextArea} from '../../components/FormFields/formElements';

// Import Utils
import {size, color} from '../../utils/common';
import {normalize, NavigateTo} from '../../utils/helper';

// Import Assets
import crossIcon from '../../../assets/icons/cross.png';
import sliderthumb from '../../../assets/icons/sliderthumb.png';

import mockUser from '../../../assets/images/user.png';
import gallary from '../../../assets/icons/gallary.png';
import video from '../../../assets/icons/video.png';
import mic from '../../../assets/icons/mic.png';
import dotMenu from '../../../assets/icons/dotMenu.png';
import eye from '../../../assets/icons/eye.png';
import idea from '../../../assets/icons/idea.png';
import filter from '../../../assets/icons/filter.png';
import search from '../../../assets/icons/search.png';

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
  {
    text: 'Retire by 40',
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

const AddPossibilityModal = ({navigation}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderValueTwo, setSliderValueTwo] = useState(0);

  const toggleActionSheet = () => {
    actionSheetRef.current?.setModalVisible();
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <KeyboardAvoidingView style={{height: '100%'}}>
        <View style={styles.modalHeader}>
          <TouchableOpacity
            style={{height: normalize(12), width: normalize(12)}}
            onPress={() => navigation.navigate('Design')}>
            <Image source={crossIcon} />
          </TouchableOpacity>
          <Span fontSize={size.x16}>Add possibility</Span>
          <View />
        </View>

        <View style={styles.container}>
          <View
            style={{
              height: '18%',
              backgroundColor: color.light,
              marginTop: normalize(8),
              paddingHorizontal: normalize(8),
            }}>
            <View style={styles.parent}>
          <TouchableOpacity
                style={styles.closeButtonParent}
              >
            <Image
              style={styles.closeButton}
              source={search}
              width={normalize(15)}
              height={normalize(15)}
            />
          </TouchableOpacity>
          <TextInput
            multiline={true}
            numberOfLines={10}
            fontSize={size.x16}
            placeholder="Search"
            placeholderTextColor="grey"
            marginRight={normalize(160)}
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: normalize(14),
              }}>
              <Span color={color.black} fontSize={size.x20}>
                I want to
              </Span>
              <TouchableOpacity
                style={{
                  paddingHorizontal: normalize(4),
                }}
                onPress={() => toggleActionSheet()}>
                <Span color={color.primary[900]} fontSize={size.x16}>
                  Add my own
                </Span>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{height: '62%'}}>
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <TagGroup
                  tagData={tags}
                  marginRight={normalize(8)}
                  marginBottom={normalize(8)}
                />
              </View>
            </ScrollView>
          </View>

          <View style={{height: '22%'}}>
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
              <Span textAlign="center" color={color.primary[900]}>
                Add
              </Span>
            </TouchableOpacity>
          </View>
        </View>
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
    paddingHorizontal: normalize(18),
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
    height: '92%',
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
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.white,
  },
  textInput: {
    height: 30,
    width: "100%",
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

export default AddPossibilityModal;
