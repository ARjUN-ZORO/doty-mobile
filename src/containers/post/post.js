import React, {useEffect, createRef} from 'react';
import {
  TouchableOpacity,
  View,
  PermissionsAndroid,
  SafeAreaView,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import ActionSheet from 'react-native-actions-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// Import Components
import {Span} from '../../components/Typography/typography';
import {TagGroup} from '../../components/Tags/tags';
import {TextArea} from '../../components/FormFields/formElements';

// Import Utils
import {size, color} from '../../utils/common';
import {normalize} from '../../utils/helper';

// Import Assets
import crossIcon from '../../../assets/icons/cross.png';
import mockUser from '../../../assets/images/user.png';

import gallary from '../../../assets/icons/gallary.png';
import video from '../../../assets/icons/video.png';
import mic from '../../../assets/icons/mic.png';
import dotMenu from '../../../assets/icons/dotMenu.png';
import eye from '../../../assets/icons/eye.png';
import idea from '../../../assets/icons/idea.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Import mock data
import {homeData} from '../../utils/data';

const tags = [
  {
    text: 'Mind',
    color: color.primary[500],
  },
  {
    text: 'Body',
    color: color.success[500],
  },
  {
    text: 'Purpose',
    color: color.warning[500],
  },
  {
    text: 'Relationship',
    color: color.danger[500],
  },
];

const actionSheetRef = createRef();

const PostModal = ({navigation}) => {
  useEffect(() => {
    actionSheetRef.current?.setModalVisible();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Doty',
          message: 'Doty App needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        launchCamera({mediaType: 'video'}, e => {
          console.log(e);
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestGalleryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Doty',
          message: 'Doty App needs access to your storage',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Storage');
        launchImageLibrary({mediaType: 'photo'}, e => {
          console.log(e);
        });
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <KeyboardAvoidingView>
        <View style={styles.modalHeader}>
          <View />
          <Span fontSize={wp('4.5%')}>Post</Span>
          <TouchableOpacity
            style={{height: normalize(12), width: normalize(12)}}
            onPress={() => navigation.navigate('Home')}>
            <Image source={crossIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.container} marginTop={wp('-5%')}>
          <View style={styles.userDetails}>

            <Image
              style={{
                  height: wp('18%'),
                  width: wp('18%'),
                  borderRadius: wp('6%'),
              }}
              source={mockUser}
            />
            <View
              style={{
                  flexDirection: 'row',
                  width: '100%',
                  marginLeft: wp('3%'),
                  flex: 1
              }}>
              <View style={{flexDirection: 'column'}}>
                <Span
                    color={color.black}
                    fontSize={wp('5%')}
                    marginTop={wp('-7%')}
                    numberOfLines={1}>Arya Kane
                </Span>
                <Picker
                mode="dropdown"
                numberOfLines={1}
                selectedValue={'everyone'}
                onValueChange={(itemValue, itemIndex) =>
                  console.log(itemValue, itemIndex)
                }
                dropdownIconRippleColor={color.gray}
                dropdownIconColor={color.gray}
                style={{
                  width: wp('50%'),
                  height: wp('2%'),
                  fontSize: wp('1%'),
                  color: color.gray[100],
                  borderBottomWidth: normalize(2),
                  borderBottomColor: color.gray,
                  marginLeft: wp('-4.5%'),
                  marginTop: wp('-3%'),
                }}>
                <Picker.Item label="with&nbsp;everyone" value="everyone" />
                <Picker.Item label="my friends" value="friends" />
                <Picker.Item label="private" value="private" />
              </Picker>               

              </View>

            </View>



            
          </View>
          <View
            style={{
              marginTop: normalize(24),
              flexDirection: 'column',
              height: '82%',
            }}>
            <View>
              <Span fontSize={wp('5%')} color={color.black}>
                Which areas of life does it affect?
              </Span>
              <View style={{marginTop: normalize(8), flexDirection: 'row'}}>
                <FlatList
                  data={homeData.suggestedMembers}
                  horizontal={true}
                  renderItem={data => {
                    return (
                      <TagGroup tagData={tags} calledFrom={'postNew'} />
                    );
                  }}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
            <View
              style={{
                height: '90%',
              }}>
              <TextArea 
              fontSize={wp('6%')}
              placeholderTextColor="grey"
              placeholder="Share your perspective" />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.actionContainer}>
            <View style={styles.actionWrapper}>
              <TouchableOpacity
                style={styles.actionIcon}
                onPress={requestGalleryPermission}>
                <Image source={gallary} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionIcon}
                onPress={requestCameraPermission}>
                <Image source={video} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionIcon}>
                <Image style={styles.actionIcon} source={mic} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionIcon}
                onPress={() => actionSheetRef.current?.setModalVisible()}>
                <Image style={styles.actionIcon} source={dotMenu} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }}>
              <Span>Post as</Span><Span fontWeight={'bold'}> anonymous</Span>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
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
              Post
            </Span>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <ActionSheet
        ref={actionSheetRef}
        headerAlwaysVisible={true}
        gestureEnabled={true}
        closeOnPressBack={false}
        drawUnderStatusBar={true}
        closeOnTouchBackdrop={true}
        elevation={1}
        closable={true}
        overlayColor={color.transparent}
        keyboardDismissMode="interactive"
        size="large"
        indicatorColor={color.gray[100]}>
        <View style={{...styles.actionSheetContainer, position: 'relative'}}>
          <TouchableOpacity
            style={styles.actionSheetActionIcon}
            onPress={requestGalleryPermission}>
            <Image source={gallary} />
            <Span marginLeft={normalize(16)} fontSize={wp('4.5%')}>Add photo</Span>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionSheetActionIcon}
            onPress={requestCameraPermission}>
            <Image source={video} />
            <Span marginLeft={normalize(16)} fontSize={wp('4.5%')}>Add video</Span>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionSheetActionIcon}>
            <Image source={mic} />
            <Span marginLeft={normalize(16)} fontSize={wp('4.5%')}>Add audio</Span>
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              height: wp('0.5%'),
              backgroundColor: color.gray[50],
              marginVertical: normalize(24),
            }}
          />

          <TouchableOpacity style={styles.actionSheetActionIcon}>
            <Image source={eye} />
            <Span marginLeft={normalize(16)} fontSize={wp('4.5%')}>Request perspective</Span>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionSheetActionIcon}>
            <Image source={idea} />
            <Span marginLeft={normalize(16)} fontSize={wp('4.5%')}>Share your thought</Span>
          </TouchableOpacity>
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
    height: '72%',
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '18%',
  },
  userImage: {
    height: normalize(62),
    width: normalize(62),
    borderRadius: normalize(8),
    marginRight: normalize(16),
  },
  footer: {
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(12),
    width: '100%',
    height: '20%',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    paddingVertical: normalize(8),
    flexDirection: 'column',
  },
  actionSheetActionIcon: {
    paddingHorizontal: normalize(18),
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default PostModal;
