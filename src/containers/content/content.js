import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import {ContentCard} from '../../components/Card/card';
// Import utils
import {normalize, NavigateTo} from '../../utils/helper';
import {color, size} from '../../utils/common';
import arrowLeft from '../../../assets/icons/arrow_chevron_right.png';
import dotMenuIcon from '../../../assets/icons/dotMenu.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Import components
import {
  HeadText,
  SubHeadText,
  SectionTitle,
} from '../../components/Typography/typography';

const Content = () => {

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

  return (
    <SafeAreaView
      style={{
        backgroundColor: color.light,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        onPress={() => HandleNavigation('Home')}>
        <Image source={arrowLeft} style={{marginLeft: normalize(12), marginTop: normalize(20), width: 30, height: 30, transform: [    
          {rotateY: '180deg'} //vertically
        ]}} />
      </TouchableOpacity>
      <Image source={dotMenuIcon} style={{marginRight: normalize(12), marginTop: normalize(10), width: 40, height: 40, transform: [    
        {rotateY: '180deg'} //vertically
      ]}} />
      </View>
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View>
      <View style={{marginBottom: normalize(20)}}>
      <ContentCard
        content="Art therapy a complement to traditional mental health"
        contentType="VIDEO"
        postedBy={'Terry Rosser'}
        isTransparentBg={true}
        liked={true}
      />
      </View>
      <SectionTitle fontSize={wp('6%')} marginTop={wp('8%')}>
        Suggested Content
      </SectionTitle>
      <View style={{marginTop: normalize(20),marginBottom: normalize(80)}}>
        <ContentCard
          content="Deep 5 minute Stellar bliss yogic meditation with - Beyond Anand"
          contentType="IMAGE"
          postedBy={'Terry Rosser'}
          isTransparentBg={true}
          liked={true}
        />
      </View>
    </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(18),
    paddingVertical: normalize(18),
    height: '100%',
    backgroundColor: color.light,
  },
  sectionText: {
  },
});

export default Content;
