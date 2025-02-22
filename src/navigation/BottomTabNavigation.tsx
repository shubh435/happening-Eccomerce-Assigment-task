import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useCallback } from 'react';
import { HOME } from '../Constants/Navigator';
import {
    ImageStyle,
    StyleProp,
    StyleSheet,
    Text,
} from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../global/theme';
import {
    responsiveHeight,
    responsiveWidth,
} from '../helper/Scale';
import Dashboard from '../screen/Dashboard';
import BookingPage from '../screen/BookingPage';
import WishList from '../screen/WishlistPage';
import AccountPage from '../screen/AccountPage';
import SearchPage from '../screen/SearchPage';
const BottomTab = createBottomTabNavigator();

const BottomTabStackNavigator = () => {
    const callback = (props: {
        color?: string;
        size?: number;
        IconType?: StyleProp<ImageStyle>;
        image?: string;
        focused?: boolean;
    }) => {
        return (
            <>
                {/* <Image
          source={image as ImageSourcePropType}
          tintColor={color}
          style={styles.icon}
        /> */}
                <Text></Text>
            </>
        );
    };
    const BottomTabIcon = useCallback(callback, []);

    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: styles.container,
                // tabBarActiveTintColor: "blue",
                // tabBarInactiveTintColor: "grey",
                tabBarIconStyle: styles.tabBarIconStyle,
                
                tabBarLabelStyle: styles.tabBarLableStyle,
                tabBarHideOnKeyboard: true,
            }}>
            <BottomTab.Screen
                name={HOME.DASHBOARD}
                component={Dashboard}
                options={{
                    tabBarLabel: HOME.DASHBOARD,
                    tabBarIcon: ({ color, size, focused }) =>
                        <FoundationIcon name="home" size={size} color={color} />,
                }}
            />
            <BottomTab.Screen
                name={HOME.BOOKING}
                component={BookingPage}
                options={{
                    tabBarLabel: HOME.BOOKING,
                    tabBarIcon: ({ color, size, focused }) =>
                        <MaterialCommunityIcons name="calendar-check-outline" size={size} color={color} />,
                }}
            />
            <BottomTab.Screen
                name={HOME.SEARCH}
                component={SearchPage}
                options={{
                    tabBarLabel: HOME.SEARCH,
                    tabBarIcon: ({ color, size, focused }) =>
                        <AntDesignIcons name="search1" size={size} color={color} />,
                }}
            />
            <BottomTab.Screen
                name={HOME.WISHLIST}
                component={WishList}
                options={{
                    tabBarLabel: HOME.WISHLIST,
                    tabBarIcon: ({ color, size, focused }) =>
                        <AntDesignIcons name="hearto" size={size} color={color} />,
                }}
            />

            <BottomTab.Screen
                name={HOME.ACCOUNT}
                component={AccountPage}
                options={{
                    tabBarLabel: HOME.ACCOUNT,
                    tabBarIcon: ({ color, size, focused }) =>
                        <AntDesignIcons name="user" size={size} color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabStackNavigator;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        alignItems: 'center',
        height: responsiveHeight(10),
    },
    tabBarIconStyle: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
        resizeMode: 'cover',
    },
    icon: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
        resizeMode: 'contain',
    },
    tabBarLableStyle: {
        fontSize: 12,
        color: COLORS.black,
    },
    gradient: {
        flex: 1,
        width: '90%',
        height: responsiveHeight(0.5),
        position: 'absolute',
        alignSelf: 'center',
        top: responsiveHeight(-0.2),
    },
});