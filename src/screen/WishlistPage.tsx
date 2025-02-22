import React from "react";
import { Text, View } from "react-native";

interface WishListProps {
    
}
 
interface WishListState {
    
}
 
class WishList extends React.Component<WishListProps, WishListState> {
    constructor(props: WishListProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( <View>
            <Text>Wishlist page</Text>
        </View> );
    }
}
 
export default WishList;