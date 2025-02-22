import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "../helper/Scale";
import { FONTS, COLORS } from "../global/theme";

interface SearchPageProps {

}

interface SearchPageState {

}

class SearchPage extends React.Component<SearchPageProps, SearchPageState> {
    constructor(props: SearchPageProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>Search Page</Text>
            </View>
        );
    }
}

export default SearchPage;
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