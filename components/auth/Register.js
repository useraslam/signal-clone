import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {COLORS, FONTS, SIZES, PhoneData} from '../../constants';
import Button from '../Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
const countries = PhoneData.countries.map((item, index) => {
  return {
    key: index,
    code: item.code,
    country: item.name,
  };
});

const Register = ({navigation}) => {
  const [showList, setShowList] = useState(false);
  const [showConform, setShowConform] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showVerificationScreen, setShowVerficationScreen] = useState(false);

  function renderCountryList() {
    return (
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          width: '100%',
          paddingHorizontal: SIZES.radius,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <Search name="search1" size={24} color={COLORS.grey} />
          <TextInput
            style={{
              flex: 1,
              ...FONTS.body3,
            }}
            placeholder="Search"
            value={phoneNumber}
            placeholderTextColor={COLORS.gray}
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>
        <FlatList
          data={countries}
          keyExtractor={item => item.key}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 40,
                    borderColor: COLORS.lightGray,
                    borderBottomWidth: 1,
                  }}
                  onPress={() => setShowList(false)}>
                  <Text
                    style={{
                      ...FONTS.body3,
                    }}>
                    {item.country}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body3,
                    }}>
                    {item.code}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }

  function renderPhoneNumberConfrom() {
    return (
      <View
        style={{
          position: 'absolute',
          flex: 1,
          width: '100%',
          height: '100%',
          zIndex: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            flex: 1,
            backgroundColor: COLORS.transparentBlack,
            width: '100%',
            height: '100%',
            zIndex: 4,
          }}
          onPress={() => setShowConform(false)}
        />
        <View
          style={{
            width: '86%',
            height: 200,
            backgroundColor: 'white',
            zIndex: 400,
            padding: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...FONTS.body4,
            }}>
            A verification code will be sent to:
          </Text>
          <Text
            style={{
              ...FONTS.h3,
              fontSize: 16,
            }}>
            +1 9898 594398
          </Text>
          <Text
            style={{
              ...FONTS.body4,
            }}>
            Is your phone number above correct ?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: SIZES.radius,
            }}>
            <TouchableOpacity onPress={() => setShowConform(false)}>
              <Text
                style={{
                  ...FONTS.Medium,
                  textTransform: 'uppercase',
                  fontSize: 14,
                  color: COLORS.primary,
                  paddingRight: SIZES.padding,
                }}>
                Edit Number
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowVerficationScreen(true)}>
              <Text
                style={{
                  ...FONTS.Medium,
                  textTransform: 'uppercase',
                  fontSize: 14,
                  color: COLORS.primary,
                }}>
                Ok
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  function renderVerification() {
    return (
      <View
        style={{
          position: 'absolute',
          flex: 1,
          width: '100%',
          height: '100%',
          zIndex: 1000,
          backgroundColor: 'white',
          paddingTop: 100,
          paddingHorizontal: SIZES.padding,
        }}>
        <Text
          style={{
            ...FONTS.Medium,
            fontSize: 24,
            lineHeight: 32,
          }}>
          A conformation code has been send to phone number:
        </Text>
        <Text
          style={{
            ...FONTS.Medium,
            fontSize: 24,
          }}>
          {' '}
          +1 9898 594398
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: SIZES.padding,
            justifyContent: 'space-between',
            width: '70%',
            paddingBottom: SIZES.radius,
          }}>
          <TextInput
            keyboardType="number-pad"
            placeholderTextColor="black"
            borderColor={COLORS.lightGray1}
            borderWidth={1}
            borderRadius={5}
            width={50}
            style={{
              ...FONTS.body3,
              marginRight: SIZES.radius,
              paddingLeft: SIZES.radius,
            }}
          />
          <TextInput
            keyboardType="number-pad"
            placeholderTextColor="black"
            borderColor={COLORS.lightGray1}
            borderWidth={1}
            borderRadius={5}
            width={50}
            style={{
              ...FONTS.body3,
              marginRight: SIZES.radius,
              paddingLeft: SIZES.radius,
            }}
          />
          <TextInput
            keyboardType="number-pad"
            placeholderTextColor="black"
            borderColor={COLORS.lightGray1}
            borderWidth={1}
            borderRadius={5}
            width={50}
            style={{
              ...FONTS.body3,
              marginRight: SIZES.radius,
              paddingLeft: SIZES.radius,
            }}
          />
          <TextInput
            keyboardType="number-pad"
            placeholderTextColor="black"
            borderColor={COLORS.lightGray1}
            borderWidth={1}
            borderRadius={5}
            width={50}
            style={{
              ...FONTS.body3,
              marginRight: SIZES.radius,
              paddingLeft: SIZES.radius,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => setShowConform(false)}>
            <Text
              style={{
                ...FONTS.Medium,
                textTransform: 'uppercase',
                fontSize: 14,
                color: COLORS.primary,
                paddingRight: SIZES.padding,
              }}>
              call instead
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowConform(false)}>
            <Text
              style={{
                ...FONTS.Medium,
                textTransform: 'uppercase',
                fontSize: 14,
                color: COLORS.primary,
              }}>
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          isPrimary
          label="Login"
          labelStyles={{
            textAlign: 'left',
            ...FONTS.Medium,
            fontSize: 14,
            textTransform: 'uppercase',
          }}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <StatusBar barStyle="dark-content" translucent={true} />
      {showList ? renderCountryList() : null}
      {showConform ? renderPhoneNumberConfrom() : null}
      {showVerificationScreen ? renderVerification() : null}
      <View
        style={{
          width: '100%',
          paddingHorizontal: SIZES.padding,
        }}>
        <TouchableOpacity
          onPress={() => console.log('pressed')}
          style={{
            position: showList ? null : 'absolute',
            top: 50,
            right: SIZES.radius,
            alignItems: 'flex-end',
          }}>
          <Icon name="dots-vertical" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            ...FONTS.Medium,
            fontSize: 28,
            textAlign: 'center',
            marginTop: 100,
            marginBottom: 16,
            lineHeight: 38,
          }}>
          Enter your phone number to get started
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            fontSize: 16,
            textAlign: 'center',
            paddingHorizontal: SIZES.padding,
            lineHeight: 24,
            color: 'black',
          }}>
          You will recieve a verification code . Carrier rates may apply
        </Text>
        <View
          style={{
            width: '100%',
            marginTop: SIZES.padding,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: COLORS.lightGray1,
              borderRadius: 5,
              borderWidth: 1,
              height: 50,
              alignItems: 'center',
              paddingLeft: SIZES.padding,
              paddingRight: SIZES.radius,
              marginBottom: SIZES.padding,
            }}
            onPress={() => setShowList(true)}>
            <Text>USA</Text>
            <Icon name="menu-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginBottom: SIZES.radius,
          }}>
          <TextInput
            placeholder="+1"
            keyboardType="number-pad"
            placeholderTextColor="black"
            borderColor={COLORS.lightGray1}
            borderWidth={1}
            borderRadius={5}
            width={75}
            style={{
              ...FONTS.body3,
              marginRight: SIZES.radius,
              paddingLeft: SIZES.radius,
            }}
          />
          <Text
            style={{
              position: 'absolute',
              top: -8,
              left: '32%',
              color: COLORS.primary,
              backgroundColor: 'white',
              zIndex: 1,
              paddingHorizontal: 4,
            }}>
            Phone Number
          </Text>
          <TextInput
            placeholder="Phone Number"
            keyboardType="number-pad"
            placeholderTextColor={COLORS.lightGray1}
            borderColor={COLORS.lightGray1}
            borderWidth={1}
            borderRadius={5}
            width={75}
            style={{
              ...FONTS.body3,
              flex: 1,
              paddingLeft: SIZES.radius,
            }}
          />
        </View>
        <Button
          isPrimary
          label="Next"
          labelStyles={{
            textAlign: 'left',
            ...FONTS.Medium,
            fontSize: 14,
            textTransform: 'uppercase',
          }}
          onPress={() => setShowConform(true)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
