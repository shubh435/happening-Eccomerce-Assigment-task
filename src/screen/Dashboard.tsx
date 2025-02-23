import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../global/theme'
import { happeningLogoPng } from '../assets/assets'
import AntdesignIcon from 'react-native-vector-icons/AntDesign'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
import { horizontalScale, moderateScale, verticalScale } from '../helper/Scale'
interface ButtonProps {
  title: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>;
  isActive?: boolean;
}
const Button: React.FC<ButtonProps> = ({ title, onPress, buttonStyle, textStyle, isActive = false }) => {
  return (
    <TouchableOpacity style={[styles.buttonStyles, buttonStyle, isActive && styles.buttonActiveStyle]} onPress={onPress}>
      <Text numberOfLines={1} style={[styles.textStyle, textStyle, isActive && styles.textActiveStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}
const Dashboard = () => {

  return (
    <View style={styles.container}>

      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />

        <View style={{ flex: 1 }}>
          {/* Header start here */}
          <View style={styles.imageContainer}>
            <Text></Text>
            <Image source={happeningLogoPng} style={styles.imageStyle} />
            <View>
              <AntdesignIcon name="bells" size={30} color={COLORS.purple} />
              <View style={styles.bellContainer}>
                <Text numberOfLines={1} style={styles.badgeTextStyle}>2</Text>
              </View>
            </View>
          </View>
          {/* Header End here */}

          <View style={styles.locationContainer}>
            <OcticonsIcon name="location" size={30} color={COLORS["light-gray"]} />
            <View>
              <Text style={styles.cityTextStyle}>Bangalore</Text>
              <Text style={styles.adressTextStyle}>#2 KR Layout, Indiranagar</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button title='Entertainment' isActive buttonStyle={styles.button1Style} />
            <Button title='Academic' />
            <Button title='Volunteering' buttonStyle={styles.buttonEndStyle} />
          </View>




          <Text>Dashboard</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Dashboard
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: verticalScale(10),
  },
  imageStyle: {
    width: horizontalScale(100),
    height: verticalScale(50),
    resizeMode: 'contain',
  },
  bellContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.purple,
    borderRadius: 50,
    width: horizontalScale(15),
    height: horizontalScale(15),
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeTextStyle: {
    color: COLORS.white,
    fontSize: moderateScale(10),
    fontFamily: FONTS.inter['medium[500]']
  },

  locationContainer: {
    backgroundColor: COLORS['purple-light'],
    flexDirection: 'row',
    columnGap: 15,
    padding: verticalScale(10),
    margin: verticalScale(10),
    alignItems: 'center',
    borderRadius: 5
  },
  cityTextStyle: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.poppins.medium,
    color: COLORS.purple
  },
  adressTextStyle: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.poppins.regular,
    color: COLORS.black
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: verticalScale(10),
    alignItems: 'center',
    borderRadius: moderateScale(10),
    justifyContent: "space-between"
  },
  buttonStyles: {
    paddingVertical: verticalScale(10),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS['purple-light-2'],
    borderWidth: 1,
    width: "30%"
  },
  buttonActiveStyle:{
    backgroundColor: COLORS['purple-light'],
    borderColor: COLORS.purple
  },
  button1Style: {
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
  },
  buttonEndStyle: {
    borderTopRightRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
  },

  textStyle: {
    fontFamily: FONTS.poppins.medium,
    fontSize: moderateScale(14),
    color: COLORS["gray-2"]
  },
  textActiveStyle: {
    color: COLORS.purple
  },
})