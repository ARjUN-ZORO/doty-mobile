import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ScrollView,
} from 'react-native';

// Import Components
import {Span} from '../../components/Typography/typography';
import {TextArea, Checkbox} from '../../components/FormFields/formElements';

// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';

// Import Assets
import arrowLeft from '../../../assets/icons/arrow_chevron_right.png';

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const EmptyPossibility = ({navigation, route}) => {
  const [state, setState] = useState({
    mobile: '',
    otp: '',
  });

    return (
        <SafeAreaView>
            <ScrollView style={styles.container} nestedScrollEnabled={true}>
                <View style={{marginBottom:40}}>
      <KeyboardAvoidingView
        style={{height: '100%'}}>
            <TouchableOpacity
            onPress={() => HandleNavigation('NewApp')}>
                <Image source={arrowLeft} style={{width: 30, height: 30, transform: [    
                {rotateY: '180deg'} //vertically
                ]}} />
            </TouchableOpacity>
            <Span
            marginTop={normalize(10)}
            marginBottom={normalize(10)}
            textAlign="left"
            fontWeight="bold"
            fontSize={size.x18}
            color={color.black}>
                Everyone’s journey is different. Let’s get to know the protagonist of yours - you.
            </Span>

            <Span
                marginBottom={normalize(4)}
                textAlign="left"
                fontSize={size.x12}
                color={color.black}>
                Full Name
            </Span>
            <TextInput
                multiline={true}
                numberOfLines={1}
                marginBottom={normalize(20)}
                fontSize={size.x14}
                placeholder="James Bond"
                placeholderTextColor="grey"
                style={{
                    backgroundColor: color.default,
                    height: normalize(40),
                    borderRadius: normalize(8),
                    color: color.black,
                }}
            />

            <Span
                marginBottom={normalize(4)}
                textAlign="left"
                fontSize={size.x12}
                color={color.black}>
                Email ID
            </Span>
            <TextInput
                multiline={true}
                numberOfLines={1}
                marginBottom={normalize(20)}
                fontSize={size.x14}
                placeholder="James Bond007@bond.com"
                placeholderTextColor="grey"
                style={{
                    backgroundColor: color.default,
                    height: normalize(40),
                    borderRadius: normalize(8),
                    color: color.black,
                }}
            />

            <Span
                marginBottom={normalize(4)}
                textAlign="left"
                fontSize={size.x12}
                color={color.black}>
                Date of Birth
            </Span>
            <TextInput
                multiline={true}
                numberOfLines={1}
                marginBottom={normalize(20)}
                fontSize={size.x14}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="grey"
                style={{
                    backgroundColor: color.default,
                    height: normalize(40),
                    borderRadius: normalize(8),
                    color: color.black,
                }}
            />

            <Span
                marginBottom={normalize(4)}
                textAlign="left"
                fontSize={size.x12}
                color={color.black}>
                To which gender identity you identify
            </Span>
            <TextInput
                multiline={true}
                numberOfLines={1}
                marginBottom={normalize(20)}
                fontSize={size.x14}
                placeholder="Select"
                placeholderTextColor="grey"
                style={{
                    backgroundColor: color.default,
                    height: normalize(40),
                    borderRadius: normalize(8),
                    color: color.black,
                }}
            />

            <Span
                marginBottom={normalize(4)}
                textAlign="left"
                fontSize={size.x12}
                color={color.black}>
                City,Country
            </Span>
            <TextInput
                multiline={true}
                numberOfLines={1}
                marginBottom={normalize(20)}
                fontSize={size.x14}
                placeholder="Select"
                placeholderTextColor="grey"
                style={{
                    backgroundColor: color.default,
                    height: normalize(40),
                    borderRadius: normalize(8),
                    color: color.black,
                }}
            />

            <View style={{
                flexDirection: "row",
                marginBottom: 20,
            }}>
                <Checkbox
                    label="I am over 18 years of age, and agree to full policy."
                />
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => HandleNavigation('PrivacyPolicy')}
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
                    Done
                    </Span>
                </TouchableOpacity>
            </View>
                    </KeyboardAvoidingView>
                    </View>
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
});

export default EmptyPossibility;
