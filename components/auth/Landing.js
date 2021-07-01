import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {Button} from '../../components';
import {NavigationContainer} from '@react-navigation/native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Landing = ({navigation}) => {
  const [showRender, setShowRender] = useState(false);

  function renderOverlayDetails() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.transparentBlack,
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            flex: 1,
          }}
          onPress={() => setShowRender(false)}
        />
        <View
          style={{
            position: 'absolute',
            width: '75%',
            height: '48%',
            backgroundColor: 'white',
            borderRadius: SIZES.padding,
            overflow: 'hidden',
          }}>
          <View
            style={{
              height: '40%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.primary,
            }}>
            <Icon name="contacts" size={50} color="white" />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 16,
              paddingTop: 40,
            }}>
            <Text
              style={{
                lineHeight: 22,
              }}>
              Signal need access to your contacts in order to conncet with
              friends, exchange messages, and make secure calls
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text
                  style={{
                    ...FONTS.Medium,
                    textTransform: 'uppercase',
                    fontSize: 14,
                    paddingRight: SIZES.padding,
                  }}>
                  Not Now
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text
                  style={{
                    ...FONTS.Medium,
                    textTransform: 'uppercase',
                    fontSize: 14,
                  }}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}>
      <Image
        source={images.landingImage}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 350,
        }}
      />
      <Text
        style={{
          ...FONTS.Medium,
          fontSize: 28,
          textAlign: 'center',
          paddingHorizontal: SIZES.padding,
        }}>
        Take privacy with you. Be Yourself in every message.
      </Text>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.grey,
              fontSize: 16,
              marginVertical: SIZES.radius,
            }}>
            Terms & Privacy Policy
          </Text>
        </TouchableOpacity>
        <Button
          isPrimary={true}
          label="Continue"
          labelStyles={{
            ...FONTS.Medium,
            fontSize: 16,
            textTransform: 'uppercase',
          }}
          onPress={() => setShowRender(true)}
        />
        <Button isSecondary={true} label="Transfer or restore account" />
      </View>
      {showRender ? renderOverlayDetails() : null}
    </View>
  );
};
export default Landing;
