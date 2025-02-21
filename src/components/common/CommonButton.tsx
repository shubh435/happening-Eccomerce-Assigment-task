import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
  } from 'react-native';
  import React from 'react';
  import {
    horizontalScale,
    moderateScale,
    verticalScale,
    responsiveScreenWidth
  } from '../../helper/Scale';
  import {COLORS, FONTS} from '../../global/theme';
  interface ButtonProps {
    title: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    Icon?: React.JSX.Element;
    textStyle?: StyleProp<TextStyle>;
  }
  const CommonButton: React.FC<ButtonProps> = ({
    title,
    onPress,
    style,
    Icon,
    textStyle,
  }) => {
    return (
      <TouchableOpacity style={[styles.buttonView, style]} onPress={onPress}>
        {Icon && Icon}
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  export default CommonButton;
  const styles = StyleSheet.create({
    buttonView: {
      width: responsiveScreenWidth(100),
      height: verticalScale(54),
      flexDirection: 'row',
      paddingVertical: verticalScale(1),
      backgroundColor: COLORS.purple,
      borderRadius: moderateScale(12.39),
      justifyContent: 'center',
      paddingHorizontal: horizontalScale(10),
      alignItems: 'center',
    },
    buttonText: {
      color: COLORS.white,
    //   fontFamily: FONTS.rubik.light,
      fontSize: moderateScale(16),
      marginLeft: responsiveScreenWidth(5),
    },
  });