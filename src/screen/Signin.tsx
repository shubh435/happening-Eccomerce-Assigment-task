import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { happeningLogoPng } from '../assets/assets'
import { horizontalScale, responsiveFontSize, responsiveHeight, responsiveWidth, verticalScale } from '../helper/Scale'
import CommonButton from '../components/common/CommonButton'
import CommonInput from '../components/common/CommonInput'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../global/theme'

const Signin = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Image source={happeningLogoPng} style={styles.imageStyle} />
        <Text style={styles.title}>Login now to find what's {"\n"} happening around you</Text>
        <CommonInput placeholder='Email address & mobile number' style={styles.input} />
        <CommonInput placeholder='Password' style={styles.input} />
        <CommonButton title='Login' style={styles.button} />
        <Text style={styles.orText}>Or</Text>
        <Text style={styles.signinText}>Signin with other accounts</Text>
        <View style={styles.iconContainer}>
          <AntDesign name='instagram' size={20} color={COLORS.black} />
          <AntDesign name='facebook-square' size={20} color={COLORS.black} />
          <AntDesign name='twitter' size={20} color={COLORS.black} />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Signin

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