import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "../helper/Scale";
import { COLORS, FONTS } from "../global/theme";

interface WishListProps {

}

interface WishListState {

}

class WishList extends React.Component<WishListProps, WishListState> {
    constructor(props: WishListProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>Wishlist page</Text>
            </View>
        );
    }
}

export default WishList;
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