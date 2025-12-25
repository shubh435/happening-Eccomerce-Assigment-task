import { View, Text, StyleSheet, SafeAreaView, Image, StatusBar } from 'react-native'
import React from 'react'
import { happeningLogoPng } from '../assets/assets'
import { horizontalScale, responsiveHeight, responsiveWidth, verticalScale } from '../helper/Scale'
import CommonButton from '../components/common/CommonButton'
import CommonInput from '../components/common/CommonInput'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../global/theme'
import { MAINSTACK } from '../Constants/Navigator'

interface SigninProps {
  navigation?: {
    navigate: (arg0: string) => void;
    replace: (arg0: string) => void;
  }
}

interface SigninState {

}

class Signin extends React.Component<SigninProps, SigninState> {
  constructor(props: SigninProps) {
    super(props);
    this.state = {};
  }

  goToHome = () => {
    this.props.navigation?.replace(MAINSTACK.HOMENAVIGATION);
  }
  render() {
    return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar hidden />
        <Image source={happeningLogoPng} style={styles.imageStyle} />
        <Text style={styles.title}>Login now to find what's {"\n"} happening around you</Text>
        <CommonInput placeholder='Email address or mobile number' style={styles.input} />
        <Text style={styles.sendOtpText}>Send OTP</Text>
        <CommonInput placeholder='Click on Send OTP' style={styles.input} />
        <CommonButton title='Login' style={styles.button} onPress={this.goToHome} />
        <Text style={styles.orText}>or</Text>
        <Text style={styles.signinText}>Sign in with other accounts</Text>
        <View style={styles.iconContainer}>
          <AntDesign name='instagram' size={30} color='#E4405F' />
          <AntDesign name='facebook-square' size={30} color='#1877F2' />
          <AntDesign name='twitter' size={30} color='#1DA1F2' />
        </View>
      </SafeAreaView>
    </View>
  )
}
}

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
  },
  imageStyle: {
    height: responsiveHeight(10),
    resizeMode: 'contain',
    marginBottom: verticalScale(20),
  },
  title: {
    fontSize: horizontalScale(18),
    fontWeight: '400',
    textAlign: 'center',
    color: COLORS.black,
    marginVertical: verticalScale(20),
  },
  input: {
    // marginVertical: verticalScale(7),
  },
  sendOtpText: {
    alignSelf: 'flex-end',
    color: COLORS.purple,
    fontSize: 14,
    fontWeight: '500',
    marginTop: verticalScale(5),
    marginRight: horizontalScale(20),
  },
  button: {
    marginVertical: verticalScale(20),
  },
  orText: {
    fontSize: 16,
    marginVertical: verticalScale(10),
  },
  signinText: {
    fontSize: 16,
    marginVertical: verticalScale(10),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: responsiveWidth(60),
    marginVertical: verticalScale(20),
    gap: horizontalScale(20)
  },
})