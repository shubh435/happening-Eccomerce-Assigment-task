import React from "react";
import { View, Text } from "react-native";

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
        return (<View>
            <Text>Account Page</Text>
        </View>);
    }
}

export default AccountPage;