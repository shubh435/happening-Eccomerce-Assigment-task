import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS } from '../global/theme'
import { happeningLogoPng } from '../assets/assets'
import AntdesignIcon from 'react-native-vector-icons/AntDesign'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
import { horizontalScale, moderateScale, verticalScale } from '../helper/Scale'
import { HOME } from '../Constants/Navigator'

interface DashboardProps {
  navigation?: {
    navigate: (arg0: string) => void;
  }
}

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Entertainment')

  const categories = ['Entertainment', 'Academic', 'Volunteering']

  const categoryCards = [
    { id: 1, name: 'Plays', icon: '🎭' },
    { id: 2, name: 'Pets Show', icon: '🐾' },
    { id: 3, name: 'Concert', icon: '🎧' },
    { id: 4, name: 'Magician', icon: '🎩' },
    { id: 5, name: 'Food Fest', icon: '🍔' },
    { id: 6, name: 'Dance', icon: '💃' },
    { id: 7, name: 'Premiere', icon: '🎬' },
    { id: 8, name: 'Sports', icon: '⚽' },
  ]

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header start here */}
          <View style={styles.imageContainer}>
            <Text></Text>
            <Image source={happeningLogoPng} style={styles.imageStyle} />
            <View>
              <AntdesignIcon name="bells" size={30} color={COLORS.purple} />
              <View style={styles.bellContainer}>
                <Text numberOfLines={1} style={styles.badgeTextStyle}>2</Text>
              </View>
            </View>
          </View>
          {/* Header End here */}

          {/* Location Section */}
          <View style={styles.locationContainer}>
            <OcticonsIcon name="location" size={30} color={COLORS["light-gray"]} />
            <View>
              <Text style={styles.cityTextStyle}>Bangalore</Text>
              <Text style={styles.adressTextStyle}>#2 KR Layout, Indiranagar</Text>
            </View>
          </View>

          {/* Category Tabs */}
          <View style={styles.categoryTabsContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryTab,
                  selectedCategory === category && styles.categoryTabActive
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[
                  styles.categoryTabText,
                  selectedCategory === category && styles.categoryTabTextActive
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Pick your category */}
          <Text style={styles.sectionTitle}>Pick your category</Text>

          {/* Category Cards Grid */}
          <View style={styles.categoryCardsContainer}>
            {categoryCards.map((card) => (
              <TouchableOpacity
                key={card.id}
                style={styles.categoryCard}
                onPress={() => navigation?.navigate(HOME.EVENTDETAIL)}
              >
                <Text style={styles.categoryCardIcon}>{card.icon}</Text>
                <Text style={styles.categoryCardName}>{card.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Most Popular Section */}
          <Text style={styles.sectionTitle}>Most Popular</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <TouchableOpacity
              style={styles.popularCard}
              onPress={() => navigation?.navigate(HOME.EVENTDETAIL)}
            >
              <View style={styles.popularCardImage}>
                <Text style={styles.popularCardPlaceholder}>Event Image</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.popularCard}
              onPress={() => navigation?.navigate(HOME.EVENTDETAIL)}
            >
              <View style={styles.popularCardImage}>
                <Text style={styles.popularCardPlaceholder}>Event Image</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.popularCard}
              onPress={() => navigation?.navigate(HOME.EVENTDETAIL)}
            >
              <View style={styles.popularCardImage}>
                <Text style={styles.popularCardPlaceholder}>Event Image</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

          {/* Resume your booking Section */}
          <Text style={styles.sectionTitle}>Resume your booking</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.bookingCard}>
              <View style={styles.bookingCardImage}>
                <Text style={styles.bookingCardPlaceholder}>Booking 1</Text>
              </View>
            </View>
            <View style={styles.bookingCard}>
              <View style={styles.bookingCardImage}>
                <Text style={styles.bookingCardPlaceholder}>Booking 2</Text>
              </View>
            </View>
          </ScrollView>

        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Dashboard
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: verticalScale(10),
  },
  imageStyle: {
    width: horizontalScale(100),
    height: verticalScale(50),
    resizeMode: 'contain',
  },
  bellContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.purple,
    borderRadius: 50,
    width: horizontalScale(15),
    height: horizontalScale(15),
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeTextStyle: {
    color: COLORS.white,
    fontSize: moderateScale(10),
    fontFamily: FONTS.inter['medium[500]']
  },

  locationContainer: {
    backgroundColor: COLORS['purple-light'],
    flexDirection: 'row',
    columnGap: 15,
    padding: verticalScale(10),
    margin: verticalScale(10),
    alignItems: 'center',
    borderRadius: 5
  },
  cityTextStyle: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.poppins.medium,
    color: COLORS.purple
  },
  adressTextStyle: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.poppins.regular,
    color: COLORS.black
  },

  // Category Tabs
  categoryTabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: verticalScale(10),
    marginTop: verticalScale(15),
    gap: horizontalScale(10),
  },
  categoryTab: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(8),
    borderRadius: 20,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.purple,
  },
  categoryTabActive: {
    backgroundColor: COLORS.purple,
  },
  categoryTabText: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.poppins.medium,
    color: COLORS.purple,
  },
  categoryTabTextActive: {
    color: COLORS.white,
  },

  // Section Titles
  sectionTitle: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.poppins.semiBold,
    color: COLORS.black,
    marginHorizontal: verticalScale(10),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },

  // Category Cards Grid
  categoryCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: verticalScale(10),
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '23%',
    aspectRatio: 1,
    backgroundColor: COLORS.purple,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  categoryCardIcon: {
    fontSize: moderateScale(30),
    marginBottom: verticalScale(5),
  },
  categoryCardName: {
    fontSize: moderateScale(10),
    fontFamily: FONTS.poppins.medium,
    color: COLORS.white,
    textAlign: 'center',
  },

  // Horizontal Scroll Sections
  horizontalScroll: {
    paddingHorizontal: verticalScale(10),
    marginBottom: verticalScale(15),
  },

  // Popular Cards
  popularCard: {
    marginRight: horizontalScale(15),
  },
  popularCardImage: {
    width: horizontalScale(200),
    height: verticalScale(120),
    backgroundColor: COLORS['light-gray-2'],
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularCardPlaceholder: {
    fontSize: moderateScale(14),
    color: COLORS['light-gray'],
    fontFamily: FONTS.poppins.regular,
  },

  // Booking Cards
  bookingCard: {
    marginRight: horizontalScale(15),
  },
  bookingCardImage: {
    width: horizontalScale(150),
    height: verticalScale(100),
    backgroundColor: COLORS['light-gray-2'],
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingCardPlaceholder: {
    fontSize: moderateScale(12),
    color: COLORS['light-gray'],
    fontFamily: FONTS.poppins.regular,
  },
})