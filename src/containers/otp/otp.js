import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
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

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const OTP = ({navigation, route}) => {
  const [state, setState] = useState({
    mobile: '',
    otp: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{height: '100%', justifyContent: 'space-between'}}>
        <View style={{alignItems: 'center'}}>
          <Span
            marginBottom={normalize(24)}
            textAlign="center"
            fontWeight="bold"
            fontSize={size.x20}
            color={color.black}>
            Enter OTP
          </Span>
          <TextInput
            placeholder="* * * *"
            keyboardType="phone-pad"
            numberOfLines={1}
            maxLength={10}
            style={{
              backgroundColor: color.default,
              height: normalize(42),
              borderRadius: normalize(8),
              elevation: 1,
              paddingHorizontal: normalize(12),
              textAlign: 'center',
              width: normalize(200),
              color: color.black,
            }}
          />
        </View>
        <View>
          <View
            style={{
              width: '100%',
              marginBottom: normalize(8),
              alignItems: 'center',
            }}>
            <Span
              textAlign="center"
              color={color.primary[900]}
              marginBottom={normalize(16)}>
              Resend OTP
            </Span>
          </View>
          <TouchableOpacity
            onPress={() => HandleNavigation('EmptyPossibility')}
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
              Verify
            </Span>
          </TouchableOpacity>
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
});

export default OTP;
