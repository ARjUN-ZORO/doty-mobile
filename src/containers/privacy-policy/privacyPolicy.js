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
  ScrollView,
} from 'react-native';

// Import Components
import {Span} from '../../components/Typography/typography';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import Assets
import crossIcon from '../../../assets/icons/cross.png';
import logoWrapper from '../../../assets/images/logo-bg.png';

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const InviteFriend = ({navigation, route}) => {

  return (
    <SafeAreaView>
      <ScrollView  style={styles.container}>
      <KeyboardAvoidingView
        style={{height: '100%', justifyContent: 'space-between'}}>
        <View style={{marginBottom:50}}>
            <TouchableOpacity
                style={{height: normalize(12), width: normalize(12)}}
                onPress={() => navigation.navigate('NewApp')}>
                <Image source={crossIcon} style={{ height: normalize(15), width: normalize(15)}} />
            </TouchableOpacity> 
            <View style={{
                flexDirection: 'row',
                marginTop: normalize(40),
                marginBottom: normalize(10),
                alignItems: 'center',
            }}>
                <Image source={logoWrapper} style={{ height: normalize(40), width: normalize(40), marginRight: normalize(10)}}/>
                <Span
                    textAlign="center"
                    fontWeight="bold"
                    fontSize={size.x20}
                    color={color.black}>
                    Privacy Policy
                </Span>
            </View>
            <Span
            marginTop={normalize(20)}
            textAlign="left"
            fontSize={size.x16}
            color={color.black}>
                At doty, privacy is about transparency, you decide what you want to share and not.
            </Span>
            <Span
            marginTop={normalize(20)}
            textAlign="left"
            fontSize={size.x16}
            color={color.black}>
                The business model is subsciption based, that eliminates the nees to sell or be answerable to advertisers.
            </Span>
            <Span
            marginTop={normalize(20)}
            textAlign="left"
            fontSize={size.x16}
            color={color.black}>
                You are responsible for all the content you post of any coprighted material posted by you.
            </Span>
            <Span
            marginTop={normalize(20)}
            textAlign="left"
            fontSize={size.x16}
            color={color.black}>
                At doty, privacy is about transparency, you decide what you want to share and not.
            </Span>
            <Span
            marginTop={normalize(20)}
            textAlign="left"
            fontSize={size.x16}
            color={color.black}>
                The business model is subsciption based, that eliminates the nees to sell or be answerable to advertisers.
            </Span>
            <Span
            marginTop={normalize(20)}
            textAlign="left"
            fontSize={size.x16}
            color={color.black}>
                You are responsible for all the content you post of any coprighted material posted by you.
            </Span>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
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
