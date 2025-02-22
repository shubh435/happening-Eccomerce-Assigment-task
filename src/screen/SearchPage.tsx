import React from "react";
import { Text, View } from "react-native";

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
        return (<View>
            <Text>Search Page</Text>
        </View>);
    }
}

export default SearchPage;