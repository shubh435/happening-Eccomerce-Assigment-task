import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../global/theme'
import { horizontalScale, moderateScale, verticalScale } from '../helper/Scale'
import { MAINSTACK } from '../Constants/Navigator'

interface EndPrototypeProps {
  navigation?: {
    navigate: (arg0: string) => void;
    goBack: () => void;
    reset: (arg0: any) => void;
  }
}

const EndPrototype: React.FC<EndPrototypeProps> = ({ navigation }) => {

  const goBack = () => {
    navigation?.goBack()
  }

  const goToFirstScreen = () => {
    navigation?.reset({
      index: 0,
      routes: [{ name: MAINSTACK.AUTHNAVIGATION }],
    })
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar hidden />

        <Text style={styles.title}>End of Prototype</Text>

        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToFirstScreen}>
          <Text style={styles.buttonText}>Go to first screen</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  )
}

export default EndPrototype

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
  },
  title: {
    fontSize: moderateScale(24),
    fontFamily: FONTS.poppins.semiBold,
    color: COLORS.black,
    marginBottom: verticalScale(40),
  },
  button: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(30),
    marginVertical: verticalScale(10),
  },
  buttonText: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.poppins.regular,
    color: COLORS.black,
  },
})
