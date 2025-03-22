import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HOME } from '../Constants/Navigator';
import {
    StyleSheet,
    Text,
} from 'react-native';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { COLORS, FONTS } from '../global/theme';
import {
    moderateScale,
    responsiveHeight,
    responsiveWidth,
    verticalScale,
} from '../helper/Scale';
import Dashboard from '../screen/Dashboard';
import BookingPage from '../screen/BookingPage';
import WishList from '../screen/WishlistPage';
import AccountPage from '../screen/AccountPage';
import SearchPage from '../screen/SearchPage';
const BottomTab = createBottomTabNavigator();

const BottomTabStackNavigator = () => {

    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: styles.container,
                tabBarItemStyle: styles.itemContainer,
                tabBarActiveTintColor: COLORS.purple,
                tabBarInactiveTintColor: COLORS["light-gray"],
                tabBarIconStyle: styles.tabBarIconStyle,
                tabBarLabelStyle: styles.tabBarLableStyle,
                tabBarHideOnKeyboard: true,
            }}>
            <BottomTab.Screen
                name={HOME.DASHBOARD}
                component={Dashboard}
                options={{
                    tabBarLabel: ({ color }) => <Text numberOfLines={1} style={[{ color: color }]}>{HOME.DASHBOARD}</Text>,
                    tabBarIcon: ({ color }) =>
                        <FoundationIcon name="home" size={20} color={color} />,
                }}
            />
            <BottomTab.Screen
                name={HOME.BOOKING}
                component={BookingPage}
                options={{
                    tabBarLabel: ({ color }) => <Text numberOfLines={1} style={{ color: color }}>{HOME.BOOKING}</Text>,
                    tabBarIcon: ({ color }) =>
                        <MaterialCommunityIcons name="calendar-check-outline" size={20} color={color} />,
                }}
            />
            <BottomTab.Screen
                name={HOME.SEARCH}
                component={SearchPage}
                options={{
                    tabBarLabel: ({ color }) => <Text numberOfLines={1} style={{ color: color }}>{HOME.SEARCH}</Text>,
                    tabBarIcon: ({ color }) =>
                        <AntDesignIcons name="search1" size={20} color={color} />,
                }}
            />
            <BottomTab.Screen
                name={HOME.WISHLIST}
                component={WishList}
                options={{
                    tabBarLabel: ({ color }) => <Text numberOfLines={1} style={{ color: color }}>{HOME.WISHLIST}</Text>,
                    tabBarIcon: ({ color }) =>
                        <AntDesignIcons name="hearto" size={20} color={color} />,
                }}
            />

            <BottomTab.Screen
                name={HOME.ACCOUNT}
                component={AccountPage}
                options={{
                    tabBarLabel: ({ color }) => <Text numberOfLines={1} style={{ color: color }}>{HOME.ACCOUNT}</Text>,
                    tabBarIcon: ({ color }) =>
                        <AntDesignIcons name="user" size={20} color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabStackNavigator;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderTopColor: COLORS["light-gray-2"],
        borderTopWidth: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: responsiveWidth(100),
        height: verticalScale(100),

    },
    itemContainer: {
        paddingTop: verticalScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIconStyle: {
    },
    icon: {
        width: responsiveWidth(7),
        height: responsiveWidth(7),
        resizeMode: 'contain',
    },
    tabBarLableStyle: {
        fontSize: moderateScale(14),
        color: COLORS.gray,
        fontFamily: FONTS.inter['regular[400]'],

    },
    gradient: {
        flex: 1,
        width: '90%',
        height: responsiveHeight(0.5),
        position: 'absolute',
        top: responsiveHeight(-0.2),
    },
});