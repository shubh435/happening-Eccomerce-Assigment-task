import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../global/theme'
import { horizontalScale, moderateScale, verticalScale } from '../helper/Scale'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import CommonButton from '../components/common/CommonButton'
import { HOME } from '../Constants/Navigator'

interface BookingDetailsPageProps {
  navigation?: {
    navigate: (arg0: string) => void;
    goBack: () => void;
  }
  route?: {
    params?: {
      id?: number;
    }
  }
}

const BookingDetailsPage: React.FC<BookingDetailsPageProps> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Header with Back Button */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="share-outline" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>

          {/* Event Image */}
          <View style={styles.eventImageContainer}>
            <View style={styles.eventImagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>Event Image</Text>
            </View>
          </View>

          {/* Event Content */}
          <View style={styles.contentContainer}>

            {/* Tabs */}
            <View style={styles.tabsContainer}>
              <TouchableOpacity style={styles.tabActive}>
                <Text style={styles.tabTextActive}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab}>
                <Text style={styles.tabText}>Crew</Text>
              </TouchableOpacity>
            </View>

            {/* Event Title */}
            <Text style={styles.eventTitle}>The complete AR Rahman Show</Text>

            {/* Event Stats */}
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <FontAwesome name="heart" size={16} color={COLORS.purple} />
                <Text style={styles.statText}>107 interested</Text>
              </View>
              <View style={styles.statItem}>
                <Octicons name="dot-fill" size={16} color={COLORS.purple} />
                <Text style={styles.statText}>Fastest</Text>
              </View>
              <View style={styles.statItem}>
                <FontAwesome name="star" size={16} color="#FFA500" />
                <Text style={styles.statText}>5 star Rating</Text>
              </View>
            </View>

            {/* Event Details Grid */}
            <View style={styles.detailsGrid}>
              <View style={styles.detailItem}>
                <Ionicons name="time-outline" size={20} color={COLORS.black} />
                <Text style={styles.detailText}>2h 30m</Text>
              </View>
              <View style={styles.detailItem}>
                <MaterialCommunityIcons name="account-outline" size={20} color={COLORS.black} />
                <Text style={styles.detailText}>5 years+</Text>
              </View>
              <View style={styles.detailItem}>
                <Ionicons name="location-outline" size={20} color={COLORS.black} />
                <Text style={styles.detailText}>Bollywood Retro</Text>
              </View>
            </View>

            {/* Language */}
            <View style={styles.detailRow}>
              <Ionicons name="language-outline" size={20} color={COLORS.black} />
              <Text style={styles.detailText}>Hindi, Tamil</Text>
            </View>

            {/* Date */}
            <View style={styles.detailRow}>
              <Ionicons name="calendar-outline" size={20} color={COLORS.black} />
              <Text style={styles.detailText}>Sat 26 Oct 2024</Text>
            </View>

            {/* Price */}
            <View style={styles.detailRow}>
              <FontAwesome name="rupee" size={20} color={COLORS.black} />
              <Text style={styles.detailText}>Price: ₹480 - ₹1580</Text>
            </View>

            {/* Location */}
            <View style={styles.detailRow}>
              <Octicons name="location" size={20} color={COLORS.black} />
              <View style={{ flex: 1 }}>
                <Text style={styles.detailText}>North Avenue Grounds, Bangalore</Text>
                <Ionicons name="information-circle-outline" size={16} color={COLORS['light-gray']} />
              </View>
            </View>

            {/* Time */}
            <View style={styles.detailRow}>
              <Ionicons name="time-outline" size={20} color={COLORS.black} />
              <Text style={styles.detailText}>7:00 pm</Text>
              <Text style={styles.spotsLeft}>16 spots left</Text>
            </View>

            {/* Amenities */}
            <View style={styles.amenitiesContainer}>
              <View style={styles.amenityItem}>
                <Ionicons name="car-outline" size={24} color={COLORS.black} />
              </View>
              <View style={styles.amenityItem}>
                <Ionicons name="subway-outline" size={24} color={COLORS.black} />
              </View>
              <View style={styles.amenityItem}>
                <Ionicons name="pause-outline" size={24} color={COLORS.black} />
              </View>
              <View style={styles.amenityItem}>
                <Ionicons name="musical-notes-outline" size={24} color={COLORS.black} />
              </View>
              <View style={styles.amenityItem}>
                <MaterialCommunityIcons name="phone-outline" size={24} color={COLORS.black} />
              </View>
            </View>

            {/* Policies & Rules */}
            <Text style={styles.sectionTitle}>Policies & Rules</Text>
            <View style={styles.policiesContainer}>
              <Text style={styles.policyText}>• Follow organiser guidelines</Text>
              <Text style={styles.policyText}>• Drugs, smoke and alcohol consumption prohibited</Text>
              <Text style={styles.policyText}>• Kids below 5 years not recommended</Text>
            </View>

            {/* Offers */}
            <Text style={styles.sectionTitle}>Offers for you</Text>
            <View style={styles.offerContainer}>
              <Text style={styles.offerText}>• Paytm 5% off for min value of ₹ 1500</Text>
              <Text style={styles.offerText}>• Use code "XYZ" for 10% off on your first booking</Text>
            </View>

          </View>

        </ScrollView>

        {/* Bottom Proceed Button */}
        <View style={styles.bottomContainer}>
          <CommonButton
            title="Proceed"
            onPress={() => navigation?.navigate(HOME.SEATSELECTION)}
          />
        </View>

      </SafeAreaView>
    </View>
  )
}

export default BookingDetailsPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    position: 'absolute',
    top: verticalScale(10),
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(15),
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventImageContainer: {
    width: '100%',
    height: verticalScale(250),
  },
  eventImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    color: COLORS.white,
    fontSize: moderateScale(18),
    fontFamily: FONTS.poppins.medium,
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingHorizontal: horizontalScale(15),
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(80),
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(15),
  },
  tab: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(8),
  },
  tabActive: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(8),
    borderBottomWidth: 2,
    borderBottomColor: COLORS.purple,
  },
  tabText: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.poppins.regular,
    color: COLORS['light-gray'],
  },
  tabTextActive: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.poppins.semiBold,
    color: COLORS.purple,
  },
  eventTitle: {
    fontSize: moderateScale(20),
    fontFamily: FONTS.poppins.bold,
    color: COLORS.black,
    marginBottom: verticalScale(10),
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(15),
    gap: horizontalScale(15),
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(5),
  },
  statText: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.poppins.regular,
    color: COLORS.black,
  },
  detailsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(5),
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
    marginBottom: verticalScale(10),
  },
  detailText: {
    fontSize: moderateScale(13),
    fontFamily: FONTS.poppins.regular,
    color: COLORS.black,
  },
  spotsLeft: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.poppins.regular,
    color: COLORS.purple,
    marginLeft: 'auto',
  },
  amenitiesContainer: {
    flexDirection: 'row',
    marginVertical: verticalScale(15),
    gap: horizontalScale(15),
  },
  amenityItem: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.poppins.semiBold,
    color: COLORS.black,
    marginTop: verticalScale(15),
    marginBottom: verticalScale(10),
  },
  policiesContainer: {
    marginBottom: verticalScale(10),
  },
  policyText: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.poppins.regular,
    color: COLORS['light-gray'],
    marginBottom: verticalScale(5),
    lineHeight: 20,
  },
  offerContainer: {
    marginBottom: verticalScale(10),
  },
  offerText: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.poppins.regular,
    color: COLORS.black,
    marginBottom: verticalScale(5),
    lineHeight: 20,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    borderTopWidth: 1,
    borderTopColor: COLORS['light-gray-2'],
    alignItems: 'center',
  },
})