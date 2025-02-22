import React from "react";
import { Text, View } from "react-native";

interface BookingPageProps {
    
}
 
interface BookingPageState {
    
}
 
class BookingPage extends React.Component<BookingPageProps, BookingPageState> {
    constructor(props: BookingPageProps) {
        super(props);
        this.state = {   };
    }
    render() { 
        return (<View>
            <Text>Booking Page</Text>
        </View>  );
    }
}
 
export default BookingPage;