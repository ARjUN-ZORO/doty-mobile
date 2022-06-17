import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

// Import Components
import {Span} from '../../components/Typography/typography';

// Import utils
import {normalize} from '../../utils/helper';
import {color, size} from '../../utils/common';
import arrowLeft from '../../../assets/icons/arrow_chevron_right.png';

class PersonalCard extends Component {
  render(props) {
    return (
        <>
            <Image
              style={{
                  height: normalize(48),
                  width: normalize(48),
                  borderRadius: normalize(8),
              }}
              source={this.props.person_image}
            />
            <View
              style={{
                  flexDirection: 'row',
                  width: '100%',
                  marginLeft: normalize(12),
                  flex: 1
              }}>
              <View style={{flexDirection: 'column', flex: 4}}>
                <Span
                    color={color.black}
                    fontSize={size.x16}
                    numberOfLines={2}
                    maxWidth={normalize(210)}>{this.props.person_name}
                </Span>               
                <Span
                    color={color.gray[100]}
                    fontSize={size.x12}
                    marginLeft={normalize(2)}>
                    {this.props.person_danda}
                </Span>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
                <Image source={arrowLeft} style={{
                    marginLeft: normalize(90),
                    marginTop: normalize(14)
                }}/>
              </View>
            </View>
        </>

    );
  }
}

export default PersonalCard;