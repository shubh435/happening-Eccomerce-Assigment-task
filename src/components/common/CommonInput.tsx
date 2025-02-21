import {
    StyleSheet,
    TextInput,
    StyleProp,
    TextStyle,
    View,
    Text,
} from 'react-native';
import React from 'react';
import {
    moderateScale, responsiveScreenHeight,
    responsiveScreenWidth,
} from '../../helper/Scale';
import { COLORS } from '../../global/theme';
interface TextInputProps {
    style?: StyleProp<TextStyle>;
    placeholder?: string;
    value?: string;
    placeholderTextColor?: string;
    onChangeText?: (value: string) => void;
    secureTextEntry?: boolean;
    errMessage?: string;
}
const CommonInput: React.FC<TextInputProps> = ({
    style,
    placeholder,
    value,
    placeholderTextColor,
    onChangeText,
    secureTextEntry,
    errMessage,
}) => {
    return (
        <View style={styles.view}>
            <TextInput
                placeholder={placeholder}
                value={value}
                style={[styles.textInput, style]}
                placeholderTextColor={
                    placeholderTextColor ? placeholderTextColor : COLORS.gray
                }
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
            {errMessage && <Text style={styles.errMessage}>{errMessage}</Text>}
        </View>
    );
};

export default CommonInput;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: COLORS['white-gray'],
        width: responsiveScreenWidth(90),
        borderRadius: moderateScale(12.39),
        paddingHorizontal: responsiveScreenWidth(8),
        paddingVertical: responsiveScreenHeight(2),
        // fontFamily: FONTS.rubik.light,
        fontSize: moderateScale(16),
        color: COLORS.black,
        borderColor: COLORS.gray,
        borderWidth: 1,
    },
    errMessage: {
        position: 'absolute',
        bottom: responsiveScreenHeight(0),
        // color: COLORS.red,
        // fontFamily: FONTS.rubik.light,
        fontSize: moderateScale(12),
    },
    view: {
        position: 'relative',
        height: responsiveScreenHeight(9.5),
        marginBottom: responsiveScreenHeight(0.5),
    },
});