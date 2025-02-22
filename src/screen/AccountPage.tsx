import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS, COLORS } from "../global/theme";
import { moderateScale } from "../helper/Scale";

interface AccountPageProps {

}

interface AccountPageState {

}

class AccountPage extends React.Component<AccountPageProps, AccountPageState> {
    constructor(props: AccountPageProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Account Page</Text>
        </View>
        );
    }
}

export default AccountPage;
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