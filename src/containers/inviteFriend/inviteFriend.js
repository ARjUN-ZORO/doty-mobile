import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Text,
} from 'react-native';

// Import Components
import {Span} from '../../components/Typography/typography';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import Assets
import google from '../../../assets/icons/google.png';
import facebook from '../../../assets/icons/facebook.png';
import twitter from '../../../assets/icons/twitter.png';
import linkedin from '../../../assets/icons/linkedin.png';
import instagram from '../../../assets/icons/instagram.png';
import crossIcon from '../../../assets/icons/cross.png';
import copyClipboard from '../../../assets/icons/copy-clipboard.png';

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const InviteFriend = ({navigation, route}) => {

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{height: '100%', justifyContent: 'space-between'}}>
        <View>
            <TouchableOpacity
                style={{height: normalize(12), width: normalize(12)}}
                onPress={() => navigation.navigate('Home')}>
                <Image source={crossIcon} />
            </TouchableOpacity> 
          <Span
            marginTop={normalize(24)}
            marginBottom={normalize(24)}
            textAlign="left"
            fontWeight="bold"
            fontSize={size.x20}
            color={color.black}>
            Invite a friend
          </Span>
          <Span
            marginBottom={normalize(4)}
            textAlign="left"
            fontSize={size.x12}
            color={color.black}>
            Message
          </Span>
          <TextInput
            multiline={true}
            numberOfLines={10}
            fontSize={size.x14}
            placeholder="Hey! I'm inviting you to use Doty. Doty is about you. You design your life. We provide a growing set of tools and community."
            placeholderTextColor="grey"
            style={{
              backgroundColor: color.default,
              height: normalize(80),
              borderRadius: normalize(8),
              color: color.black,
            }}
          />
          <Span
            marginBottom={normalize(4)}
            textAlign="left"
            fontSize={size.x12}
            color={color.black}>
            Copy URL
          </Span>
        <View style={styles.parent}>
          <TextInput
            numberOfLines={1}
            fontSize={size.x14}
            placeholder="https;//doty.ai/design/aphdgl/"
            placeholderTextColor="blue"
            style={{
              backgroundColor: color.default,
              height: normalize(50),
              borderRadius: normalize(8),
              color: color.black,
            }}
          />
          <TouchableOpacity
            style={styles.closeButtonParent}
          >
            <Image
              style={styles.closeButton}
              source={copyClipboard}
            />
          </TouchableOpacity>
        </View>
        <Span
            marginBottom={normalize(20)}
            textAlign="left"
            fontSize={size.x12}
            color={color.black}>
            Share
          </Span>
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Image
                  style={{
                    height: normalize(22),
                    width: normalize(22),
                    marginHorizontal: normalize(20),
                  }}
                  source={google}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{
                    height: normalize(22),
                    width: normalize(22),
                    marginHorizontal: normalize(20),
                  }}
                  source={facebook}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{
                    height: normalize(22),
                    width: normalize(22),
                    marginHorizontal: normalize(20),
                  }}
                  source={twitter}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{
                    height: normalize(22),
                    width: normalize(22),
                    marginHorizontal: normalize(20),
                  }}
                  source={linkedin}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{
                    height: normalize(22),
                    width: normalize(22),
                    marginHorizontal: normalize(20),
                  }}
                  source={instagram}
                />
              </TouchableOpacity>
            </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(28),
    height: '100%',
    backgroundColor: color.light,
  },
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: color.white,
    marginBottom: normalize(20)
  },
  textInput: {
    height: 40,
    width: "90%",
  },
  closeButton: {
    height: 22,
    width: 20,
    marginRight: normalize(10)
  },
  closeButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});

export default InviteFriend;
