import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FONTS, COLORS } from "../global/theme";
import { moderateScale } from "../helper/Scale";

interface BookingPageProps {

}

interface BookingPageState {

}

class BookingPage extends React.Component<BookingPageProps, BookingPageState> {
    constructor(props: BookingPageProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>Booking Page</Text>
            </View>
        );
    }
}

export default BookingPage;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: moderateScale(20),
        fontFamily: FONTS.inter["bold[700]"],
        color: COLORS.purple
    }
})