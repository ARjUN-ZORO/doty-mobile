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

import google from '../../../assets/icons/google.png';
import { ScrollView } from 'react-native-gesture-handler';

// Import Assets
import dotyWorks from '../../../assets/icons/doty-works.png';

const HandleNavigation = (routeName, param) => {
  NavigateTo(routeName, param);
};

const TopLayout = props => {
    return(
        <View style={{backgroundColor: color.skyBlue,paddingHorizontal: normalize(18), height: normalize(200)}}>
            <Span
            marginTop={normalize(24)}
            marginBottom={normalize(24)}
            textAlign="center"
            fontSize={size.x16}
            color={color.black}>
            How Doty Works
          </Span>
          <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
              <Span
            marginBottom={normalize(24)}
            fontWeight="bold"
            fontSize={size.x20}
            color={color.black}>
            Doty loves getting to {"\n"}know you. Here, you {"\n"}can earn about Doty {"\n"}too.
          </Span>
          <Image
                  style={{
                    height: normalize(100),
                    width: normalize(100),
                  }}
                  source={dotyWorks}
                />
        </View>
        </View>
    );
}

const HowDotyWorks = ({navigation, route}) => {

  return (
    <SafeAreaView style={styles.container}>
      <TopLayout></TopLayout>
      <ScrollView>
      <TouchableOpacity
        
        style={{
          ...styles.memberContainer,
          backgroundColor: color.light,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            marginLeft: normalize(16),
          }}>
          <Span
            color={color.black}
            fontSize={size.x16}
            numberOfLines={2}
            fontWeight="bold"
            maxWidth={normalize(225)}>
            Possibilities
          </Span>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        
        style={{
          ...styles.memberContainer,
          backgroundColor: color.light,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            marginLeft: normalize(16),
          }}>
          <Span
            color={color.black}
            fontSize={size.x16}
            numberOfLines={2}
            fontWeight="bold"
            maxWidth={normalize(225)}>
            Design
          </Span>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        
        style={{
          ...styles.memberContainer,
          backgroundColor: color.light,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            marginLeft: normalize(16),
          }}>
          <Span
            color={color.black}
            fontSize={size.x16}
            numberOfLines={2}
            fontWeight="bold"
            maxWidth={normalize(225)}>
            Help Doty Help You
          </Span>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        
        style={{
          ...styles.memberContainer,
          backgroundColor: color.light,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            marginLeft: normalize(16),
          }}>
          <Span
            color={color.black}
            fontSize={size.x16}
            numberOfLines={2}
            fontWeight="bold"
            maxWidth={normalize(225)}>
            Content
          </Span>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        
        style={{
          ...styles.memberContainer,
          backgroundColor: color.light,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            marginLeft: normalize(16),
          }}>
          <Span
            color={color.black}
            fontSize={size.x16}
            numberOfLines={2}
            fontWeight="bold"
            maxWidth={normalize(225)}>
            Perspectives
          </Span>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        
        style={{
          ...styles.memberContainer,
          backgroundColor: color.light,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            marginLeft: normalize(16),
          }}>
          <Span
            color={color.black}
            fontSize={size.x16}
            numberOfLines={2}
            fontWeight="bold"
            maxWidth={normalize(225)}>
            Posts
          </Span>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        
        style={{
          ...styles.memberContainer,
          backgroundColor: color.light,
        }}>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            marginLeft: normalize(16),
          }}>
          <Span
            color={color.black}
            fontSize={size.x16}
            numberOfLines={2}
            fontWeight="bold"
            maxWidth={normalize(225)}>
            Privacy Policy
          </Span>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: color.light,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(20),
    paddingLeft: normalize(6),
    marginRight: normalize(10),
    marginLeft: normalize(10),
    borderRadius: normalize(8),
    marginBottom: normalize(8),
    marginTop: normalize(8),
    borderColor: color.gray[50],
    borderWidth: normalize(2),
  },
});

export default HowDotyWorks;
