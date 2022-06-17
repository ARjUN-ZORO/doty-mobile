import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {color, size} from '../../utils/common';
import {normalize} from '../../utils/helper';

export const HeadText = props => {
  return (
    <Text
      style={
        {
          fontFamily: props.fontFamily ? props.fontFamily : 'Lato',
          fontSize: props.fontSize ? props.fontSize : size.x22,
          fontWeight: props.fontWeight ? props.fontWeight : 'bold',
          color: color.black,
        }
      }>
      {props.children}
    </Text>
  );
};

export const SubHeadText = props => {
  return (
    <Text
      style={
        {
          fontFamily: props.fontFamily ? props.fontFamily : 'Lato',
          fontSize: props.fontSize ? props.fontSize : size.x16,
          fontWeight: props.fontWeight ? props.fontWeight : 'normal',
          color: color.gray[100],
          marginTop: props.marginTop && props.marginTop,
        }
      }
      {...props}>
      {props.children}
    </Text>
  );
};

export const CardTitle = props => {
  return (
    <Text
      style={
        {
          fontFamily: props.fontFamily ? props.fontFamily : 'Lato',
          fontSize: props.fontSize ? props.fontSize : size.x20,
          fontWeight: props.fontWeight ? props.fontWeight : 'normal',
          color: color.black,
          marginTop: props.marginTop && props.marginTop,
        }
      }
      {...props}>
      {props.children}
    </Text>
  );
};

export const SectionTitle = props => {
  return (
    <Text
      style={{
        fontFamily: props.fontFamily ? props.fontFamily : 'Inter',
        fontSize: props.fontSize ? props.fontSize : size.x20,
        fontWeight: props.fontWeight ? props.fontWeight : 'bold',
        color: color.black,
        marginTop: props.marginTop && props.marginTop,
      }}
      {...props}>
      {props.children}
    </Text>
  );
};

export const Span = props => {
  return (
    <Text
      style={{
        fontFamily: props.fontFamily ? props.fontFamily : 'Inter',
        fontSize: props.fontSize ? props.fontSize : size.x12,
        fontWeight: props.fontWeight ? props.fontWeight : 'normal',
        color: props.color ? props.color : color.gray,
        marginTop: props.marginTop && props.marginTop,
        marginRight: props.marginRight && props.marginRight,
        marginBottom: props.marginBottom && props.marginBottom,
        marginLeft: props.marginLeft && props.marginLeft,
        textAlign: props.textAlign && props.textAlign,
        borderBottomWidth: props.borderBottomWidth && props.borderBottomWidth,
        borderBottomColor: props.borderBottomColor && props.borderBottomColor,
        padding: props.padding && props.padding,
        textAlign: props.textAlign && props.textAlign,
        width: props.width && props.width,
        lineHeight: props.lineHeight
          ? props.lineHeight
          : props.fontSize
          ? props.fontSize + normalize(10)
          : normalize(24),
        maxWidth: props.maxWidth && props.maxWidth,
      }}
      numberOfLines={props.numberOfLines}
      {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({

});
