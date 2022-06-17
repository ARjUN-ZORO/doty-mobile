import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {size, color} from '../../utils/common';
import {normalize} from '../../utils/helper';

export const Tag = props => {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={{
        ...styles.tagBox,
        backgroundColor: selected ? props.color + '2e' : 'transparent',
        borderColor: selected ? 'transparent' : props.color,
        marginRight: props.marginRight && props.marginRight,
        marginBottom: props.marginBottom && props.marginBottom,
        height: (props.calledFrom === 'profileAbout' ? normalize(30) : props.calledFrom === 'postNew' ? normalize(30) : normalize(22)),
      }}
      onPress={() => {
        setSelected(!selected);
      }}>
      <Text
        style={{
          ...styles.text,
          color: props.color && props.color,
          fontSize: (props.calledFrom === 'profileAbout' ? size.x18 : props.calledFrom === 'postNew' ? size.x16 : size.x12),
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export const TagGroup = props => {
  return props.tagData.map((d, i) => {
    return (
      <Tag
        key={i}
        text={d.text}
        color={d.color}
        selected={d.selected}
        marginRight={props.marginRight ? props.marginRight : normalize(12)}
        marginBottom={props.marginBottom ? props.marginBottom : normalize(12)}
        {...props}
      />
    );
  });
};

const styles = StyleSheet.create({
  tagBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalize(10),
    minWidth: normalize(64),
    borderWidth: normalize(3),
    borderStyle: 'solid',
    borderRadius: normalize(50),
    // marginRight: 12,
  },
  text: {
    fontFamily: 'Inter',
    textAlign: 'center',
    margin: 0,
  },
});
