import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { happeningLogoPng } from '../assets/assets'
import { horizontalScale, responsiveHeight, responsiveWidth, verticalScale } from '../helper/Scale'
import CommonButton from '../components/common/CommonButton'
import CommonInput from '../components/common/CommonInput'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Signin = () => {
  return (
    <View style={styles.container} >
      <SafeAreaView style={styles.flex1}>
  <Image source={happeningLogoPng} style={styles.imageStyle} />
      
      <Text>Login now to find whats happening around you </Text>
      <CommonInput placeholder='Email address & mobile number' />
      <CommonInput placeholder='Password' />
      <CommonButton title='Login' />

      <Text>Or</Text>
      <Text>Signin with other accounts</Text>
      <View style={styles.iconContainer}>
      <AntDesign name='instagram' size={20} />
      <AntDesign name='facebook-square' size={20} />
      <AntDesign name='twitter' size={20} />

      </View>
      </SafeAreaView>
    </View>
  )
}

export default Signin

const styles =  StyleSheet.create({
  iconContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
gap:10
  },

  imageStyle:{
 aspectRatio: 0.5,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#FFFFFF',
     backgroundColor:'red'
  },
  flex1:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})