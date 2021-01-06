import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Keyboard,
  BackHandler,
} from 'react-native';
import Image from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {COLORS_LIGHT, FONTS, URLS, BASE_URL} from '../Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import LView from 'react-native-linear-gradient';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {loginAction, checkLogin} from './action';

const COLOR1 = '#48b1bf';
const COLOR2 = '#06beb6';
const COLOR_MID = '#48B1BF';

class Login extends Component {
  state = {
    isRegister: false,
    isLogin: false,
    isKeyboardOpen: false,
    registerData: {email: '', password: ''},
    loginData: {email: '', password: ''},
  };

  componentDidMount() {
    this.props.checkLogin();
    console.disableYellowBox = true;
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.setState({isRegister: false, isLogin: false});
    });
  }

  renderRegisterBox() {
    return (
      <KeyboardAwareScrollView>
        {/* Body */}
        <View style={{height: 50}} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '80%',
          }}>
          <View
            style={{
              height: 45,
              width: '90%',
              marginVertical: 12,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS_LIGHT.LIGHT,
              borderRadius: 10,
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONTS.PRODUCT_SANS,
                marginHorizontal: 10,
                color: COLOR1,
              }}>
              EMAIL
            </Text>
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor={COLORS_LIGHT.LESSER_LIGHT}
              style={{
                fontFamily: FONTS.HELVETICA_NEUE,
                flex: 1,
                borderLeftWidth: 1.5,
                paddingHorizontal: 10,
                fontSize: 16,
                borderColor: COLORS_LIGHT.LIGHT,
                color: COLORS_LIGHT.LESSER_DARK,
              }}
              onChangeText={text => {
                this.setState({
                  registerData: {...this.state.registerData, email: text},
                });
              }}
              multiline={false}
              keyboardType="default"
            />
          </View>

          <View
            style={{
              height: 45,
              width: '90%',
              marginVertical: 12,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS_LIGHT.LIGHT,
              borderRadius: 10,
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONTS.PRODUCT_SANS,
                marginHorizontal: 10,
                color: COLOR1,
              }}>
              PASSWORD
            </Text>
            <TextInput
              placeholder="Enter Your password"
              placeholderTextColor={COLORS_LIGHT.LESSER_LIGHT}
              style={{
                fontFamily: FONTS.HELVETICA_NEUE,
                flex: 1,
                borderLeftWidth: 1.5,
                paddingHorizontal: 10,
                fontSize: 16,
                borderColor: COLORS_LIGHT.LIGHT,
                color: COLORS_LIGHT.LESSER_DARK,
              }}
              onChangeText={text => {
                this.setState({
                  registerData: {...this.state.registerData, password: text},
                });
              }}
              multiline={false}
              keyboardType="default"
            />
          </View>

          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              borderColor: COLORS_LIGHT.LIGHT,
              borderWidth: 2,
              backgroundColor: COLOR_MID,
              elevation: 7,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              margin: 5,
            }}
            activeOpacity={0.8}
            onPress={() => {
              this.props.loginAction('register', this.state.registerData);
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: FONTS.HELVETICA_NEUE,
                color: COLORS_LIGHT.LIGHT,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 50}} />
      </KeyboardAwareScrollView>
    );
  }

  renderLoginBox() {
    if (this.state.isRegister) {
      return this.renderRegisterBox();
    } else {
      return (
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex: 1,
            marginTop: 30,
          }}>
          <View
            style={{
              height: 45,
              width: '90%',
              marginVertical: 12,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS_LIGHT.LIGHT,
              borderRadius: 10,
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONTS.PRODUCT_SANS,
                marginHorizontal: 10,
                color: COLOR1,
              }}>
              EMAIL
            </Text>
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor={COLORS_LIGHT.LESSER_LIGHT}
              style={{
                fontFamily: FONTS.HELVETICA_NEUE,
                flex: 1,
                borderLeftWidth: 1.5,
                paddingHorizontal: 10,
                fontSize: 16,
                borderColor: COLORS_LIGHT.LIGHT,
                color: COLORS_LIGHT.LESSER_DARK,
              }}
              onChangeText={text => {
                this.setState({
                  registerData: {...this.state.loginData, email: text},
                });
              }}
              multiline={false}
              keyboardType="default"
            />
          </View>

          <View
            style={{
              height: 45,
              width: '90%',
              marginVertical: 12,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS_LIGHT.LIGHT,
              borderRadius: 10,
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONTS.PRODUCT_SANS,
                marginHorizontal: 10,
                color: COLOR1,
              }}>
              PASSWORD
            </Text>
            <TextInput
              placeholder="Enter Your password"
              placeholderTextColor={COLORS_LIGHT.LESSER_LIGHT}
              style={{
                fontFamily: FONTS.HELVETICA_NEUE,
                flex: 1,
                borderLeftWidth: 1.5,
                paddingHorizontal: 10,
                fontSize: 16,
                borderColor: COLORS_LIGHT.LIGHT,
                color: COLORS_LIGHT.LESSER_DARK,
              }}
              onChangeText={text => {
                this.setState({
                  registerData: {...this.state.loginData, password: text},
                });
              }}
              multiline={false}
              keyboardType="default"
            />
          </View>

          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              borderColor: COLORS_LIGHT.LIGHT,
              borderWidth: 2,
              backgroundColor: COLOR_MID,
              elevation: 7,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              margin: 5,
            }}
            activeOpacity={0.8}
            onPress={() => {
              this.props.loginAction('login', this.state.loginData);
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: FONTS.HELVETICA_NEUE,
                color: COLORS_LIGHT.LIGHT,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  renderButtons() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 60,
            backgroundColor: COLORS_LIGHT.LIGHT,
            elevation: 7,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            margin: 10,
          }}
          activeOpacity={0.8}
          onPress={() => {
            this.setState({isLogin: true});
          }}>
          <Text
            style={{
              fontSize: 32,
              fontFamily: FONTS.RALEWAY_LIGHT,
              color: COLOR1,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            height: 60,
            backgroundColor: COLORS_LIGHT.LIGHT,
            elevation: 7,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            margin: 5,
          }}
          activeOpacity={0.8}
          onPress={() => {
            this.setState({isRegister: true});
          }}>
          <Text
            style={{
              fontSize: 32,
              fontFamily: FONTS.RALEWAY_LIGHT,
              color: COLOR2,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderLoginHeader() {
    if (!this.state.isLogin && !this.state.isRegister) {
      return <View />;
    } else {
      return (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
            alignItems: 'center',
          }}>
          {!this.props.OTPLoading ? (
            <TouchableOpacity
              onPress={() => {
                this.setState({isRegister: false, isLogin: false});
              }}
              style={{
                backgroundColor: COLOR1,
                padding: 8,
                borderRadius: 100,
                borderColor: COLORS_LIGHT.LIGHT,
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 12,
                borderWidth: 0.8,
                marginHorizontal: 20,
              }}>
              <Icon name="arrow-left" size={22} color={COLORS_LIGHT.LIGHT} />
            </TouchableOpacity>
          ) : (
            <View style={{height: 40, width: 40, marginHorizontal: 20}} />
          )}
          <Text
            style={{
              fontSize: 38,
              fontFamily: FONTS.RALEWAY_LIGHT,
              color: COLORS_LIGHT.LIGHT,
            }}>
            {this.state.isRegister ? 'Register' : 'Login'}
          </Text>
        </View>
      );
    }
  }

  renderFullLogin() {
    return (
      <LView
        colors={[COLOR1, COLOR2]}
        style={{
          flex: 1,
          backgroundColor: COLORS_LIGHT.LIGHT,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar backgroundColor={COLOR1} barStyle="light-content" />
        {changeNavigationBarColor(COLOR2)}
        {this.renderLoginHeader()}
        {this.state.isRegister || this.state.isLogin ? (
          <View />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: FONTS.LATO_BLACK,
                fontSize: 32,
                color: COLORS_LIGHT.LIGHT,
              }}>
              Welcome To Pokemon
            </Text>
          </View>
        )}
        <View style={{flex: 1, width: '100%'}}>
          {!this.state.isLogin && !this.state.isRegister
            ? this.renderButtons()
            : this.renderLoginBox()}
        </View>
      </LView>
    );
  }
  renderLoadingSplash() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS_LIGHT.LIGHT,
        }}>
        <StatusBar
          backgroundColor={COLORS_LIGHT.LIGHT}
          barStyle="dark-content"
        />
        {changeNavigationBarColor(COLORS_LIGHT.LIGHT)}
      </View>
    );
  }

  render() {
    if (this.props.login_loading) {
      return this.renderLoadingSplash();
    } else {
      return this.renderFullLogin();
    }
  }
}

const mapStateToProps = state => {
  return {
    error: state.login.error,
    login_loading: state.login.login_loading,
  };
};

export default connect(
  mapStateToProps,
  {loginAction, checkLogin},
)(Login);
