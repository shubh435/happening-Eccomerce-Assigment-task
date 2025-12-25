import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS } from '../global/theme'
import { horizontalScale, moderateScale, verticalScale } from '../helper/Scale'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CommonButton from '../components/common/CommonButton'

interface SeatSelectionProps {
  navigation?: {
    navigate: (arg0: string) => void;
    goBack: () => void;
  }
}

interface SeatClass {
  id: number
  name: string
  price: number
  color: string
  count: number
  available: number
}

const SeatSelection: React.FC<SeatSelectionProps> = ({ navigation }) => {
  const [seatClasses, setSeatClasses] = useState<SeatClass[]>([
    { id: 1, name: 'Platinum Class', price: 1480, color: COLORS.purple, count: 1, available: 8 },
    { id: 2, name: 'Gold Class', price: 800, color: '#FFB380', count: 0, available: 8 },
    { id: 3, name: 'Silver Class', price: 480, color: '#C0C0C0', count: 0, available: 8 },
  ])

  const updateSeatCount = (id: number, increment: boolean) => {
    setSeatClasses(prev => prev.map(seatClass => {
      if (seatClass.id === id) {
        const newCount = increment
          ? Math.min(seatClass.count + 1, seatClass.available)
          : Math.max(seatClass.count - 1, 0)
        return { ...seatClass, count: newCount }
      }
      return seatClass
    }))
  }

  const getTotalPrice = () => {
    return seatClasses.reduce((total, seatClass) => {
      return total + (seatClass.price * seatClass.count)
    }, 0)
  }

  const getTotalSeats = () => {
    return seatClasses.reduce((total, seatClass) => total + seatClass.count, 0)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Ionicons name="arrow-back" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Select Seats</Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Stage Indicator */}
          <View style={styles.stageContainer}>
            <View style={styles.stage}>
              <Text style={styles.stageText}>Stage</Text>
            </View>
          </View>

          {/* Seat Layout Visual */}
          <View style={styles.seatLayoutVisual}>
            <View style={[styles.seatSection, { backgroundColor: seatClasses[0].color }]}>
              <Text style={styles.seatSectionText}>Platinum Class ₹1,480</Text>
            </View>
            <View style={[styles.seatSection, { backgroundColor: seatClasses[1].color }]}>
              <Text style={styles.seatSectionText}>Gold Class ₹ 800</Text>
            </View>
            <View style={[styles.seatSection, { backgroundColor: seatClasses[2].color }]}>
              <Text style={styles.seatSectionText}>Silver Class ₹ 480</Text>
            </View>
          </View>

          {/* Seats Layout Title */}
          <Text style={styles.sectionTitle}>Seats Layout</Text>

          {/* Seat Selection List */}
          <View style={styles.seatListContainer}>
            {seatClasses.map((seatClass) => (
              <View key={seatClass.id} style={styles.seatClassItem}>
                <View style={styles.seatClassInfo}>
                  <View style={[styles.colorIndicator, { backgroundColor: seatClass.color }]} />
                  <View style={styles.seatClassDetails}>
                    <Text style={styles.seatClassName}>{seatClass.name} ₹{seatClass.price}</Text>
                    <Text style={styles.seatsLeft}>{seatClass.available} seats left</Text>
                  </View>
                </View>

                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    style={styles.counterButton}
                    onPress={() => updateSeatCount(seatClass.id, false)}
                  >
                    <Text style={styles.counterButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterValue}>{seatClass.count}</Text>
                  <TouchableOpacity
                    style={styles.counterButton}
                    onPress={() => updateSeatCount(seatClass.id, true)}
                  >
                    <Text style={styles.counterButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

        </ScrollView>

        {/* Bottom Price and Pay Button */}
        <View style={styles.bottomContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>₹ {getTotalPrice()} for {getTotalSeats()} seat</Text>
            <Text style={styles.taxText}>109 tax & fees</Text>
          </View>
          <CommonButton
            title="Pay Now"
            onPress={() => navigation?.navigate('EndPrototype')}
            style={styles.payButton}
          />
        </View>

      </SafeAreaView>
    </View>
  )
}

export default SeatSelection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    borderBottomWidth: 1,
    borderBottomColor: COLORS['light-gray-2'],
  },
  headerTitle: {
    fontSize: moderateScale(18),
    fontFamily: FONTS.poppins.semiBold,
    color: COLORS.black,
  },
  stageContainer: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  stage: {
    backgroundColor: COLORS['light-gray-2'],
    paddingHorizontal: horizontalScale(60),
    paddingVertical: verticalScale(10),
    borderRadius: 5,
  },
  stageText: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.poppins.medium,
    color: COLORS['light-gray'],
  },
  seatLayoutVisual: {
    marginHorizontal: horizontalScale(15),
    gap: verticalScale(10),
  },
  seatSection: {
    paddingVertical: verticalScale(20),
    borderRadius: 8,
    alignItems: 'center',
  },
  seatSectionText: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.poppins.medium,
    color: COLORS.white,
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.poppins.semiBold,
    color: COLORS.black,
    marginHorizontal: horizontalScale(15),
    marginTop: verticalScale(25),
    marginBottom: verticalScale(15),
  },
  seatListContainer: {
    marginHorizontal: horizontalScale(15),
    gap: verticalScale(15),
    marginBottom: verticalScale(20),
  },
  seatClassItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: COLORS['light-gray-2'],
  },
  seatClassInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  colorIndicator: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
  seatClassDetails: {
    gap: verticalScale(3),
  },
  seatClassName: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.poppins.medium,
    color: COLORS.black,
  },
  seatsLeft: {
    fontSize: moderateScale(11),
    fontFamily: FONTS.poppins.regular,
    color: COLORS.purple,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(15),
  },
  counterButton: {
    width: 30,
    height: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonText: {
    fontSize: moderateScale(18),
    fontFamily: FONTS.poppins.medium,
    color: COLORS.purple,
  },
  counterValue: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.poppins.medium,
    color: COLORS.black,
    minWidth: 20,
    textAlign: 'center',
  },
  bottomContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    borderTopWidth: 1,
    borderTopColor: COLORS['light-gray-2'],
    gap: verticalScale(10),
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.poppins.semiBold,
    color: COLORS.black,
  },
  taxText: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.poppins.regular,
    color: COLORS['light-gray'],
  },
  payButton: {
    width: '100%',
  },
})
