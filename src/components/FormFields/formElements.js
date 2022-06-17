import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Span} from '../Typography/typography';
import {normalize} from '../../utils/helper';
import {size, color} from '../../utils/common';

export const Checkbox = props => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        containerStyle={{
          backgroundColor: color.transparent,
          borderColor: color.black,
          borderRadius: normalize(2),
        }}
        tintColors={{true: color.black}}
      />
      <Span color={color.black} fontSize={size.x14} marginLeft={normalize(8)}>
        {props.label}
      </Span>
    </View>
  );
};

export const TextArea = props => {
  return (
    <TextInput
      multiline={props.multiline ? props.multiline : true}
      numberOfLines={props.numberOfLines ? props.numberOfLines : 5}
      onChange={props.onChange}
      placeholderTextColor={
        props.placeholderTextColor ? props.placeholderTextColor : color.gray
      }
      style={{
        fontSize: props.fontSize ? props.fontSize : size.x20,
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        color: props.color ? props.color : color.black,
        paddingHorizontal: normalize(8),
      }}
      textAlignVertical={'top'}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  // Checkbox

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
