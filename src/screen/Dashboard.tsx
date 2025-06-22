import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ScrollView,
  FlatList,
  ImageSourcePropType,
  Modal,
  Switch,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS } from '../global/theme';
import { happeningLogoPng, radioPng, radioSelectedPng } from '../assets/assets';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import {
  horizontalScale,
  moderateScale,
  responsiveHeight,
  responsiveWidth,
  verticalScale,
} from '../helper/Scale';
import {
  CategoryData,
  categoryData,
  dashboardButtonData,
  LocationData,
  MostPopularData,
  mostPopularData,
  ResumeBookingData,
  resumeBookingData,
} from '../global/staticData';
import CommonButton from '../components/common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { HOME } from '../Constants/Navigator';
interface ButtonProps {
  title: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isActive?: boolean;
}

interface DashboardProps {
  navigation?: {
    navigate: (arg0: string,obj:any) => void;
    replace: (arg0: string) => void;
  }
}
interface Places {
  id: string,
  city: string;
  address: string;
  selected: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  isActive = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyles,
        buttonStyle,
        isActive && styles.buttonActiveStyle,
      ]}
      onPress={onPress}>
      <Text
        numberOfLines={1}
        style={[
          styles.textStyle,
          textStyle,
          isActive && styles.textActiveStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};


const Dashboard:React.FC<DashboardProps> = (props) => {
  const [activeButton, setActiveButton] = React.useState(dashboardButtonData);
  const [category, setCategory] = React.useState<CategoryData[]>(categoryData);
  const [mostPopular, setMostPopular] =
    React.useState<MostPopularData[]>(mostPopularData);
  const [resumeBooking, setResumeBooking] =
    React.useState<ResumeBookingData[]>(resumeBookingData);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isOpenLocModal, setIsOpenLocModal] = useState(false);
  const [locations, setLocations] = useState<Record<string, Places[]>>(LocationData);
  const navigate = useNavigation()
  const handlePress = (buttonId: number) => {
    const newButton = activeButton.map(item => {
      if (item.id === buttonId) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });
    setActiveButton(newButton);
  };

    const handleNavigate = (productId:number)=> {
    props.navigation?.navigate(HOME.BOOKINGDetails,{
      id: productId
    })
  }

  const toggleLocModal = () => {
    setIsOpenLocModal(!isOpenLocModal)
  }
  const renderCatList = (item: CategoryData) => {
    return (
      <TouchableOpacity style={styles.cardContainer}>
        <Image source={item.image} style={styles.imageStyleCard} />
        <View style={styles.cardTitleViewStyle}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMostPopularList = (item: MostPopularData) => {
    return (
      <TouchableOpacity onPress={()=>handleNavigate(item.id)}>
        <Image
          source={item.image as ImageSourcePropType}
          style={styles.imageCardStye}
        />
      </TouchableOpacity>
    );
  };
  const renderBookingList = (item: ResumeBookingData) => {
    return (
      <TouchableOpacity style={{ position: 'relative' }} onPress={()=>handleNavigate(item.id)}>
        <View style={styles.closeIconContainer}>
          <AntdesignIcon
            name="closecircleo"
            size={14}
            color={COLORS['light-gray']}
          />
        </View>
        <Image
          source={item.image as ImageSourcePropType}
          style={styles.imageCardStye1}
        />
      </TouchableOpacity>
    );
  };

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  const handleSelectLocation = (selectedPlace: Places) => {
    setLocations(prevLocations => {
      const updatedLocations = Object.entries(prevLocations).reduce(
        (acc: Record<string, Places[]>, [category, places]) => {
          acc[category] = places.map(place => ({
            ...place,
            selected: place.city === selectedPlace.city,
          }));
          return acc;
        },
        {},
      );

      return updatedLocations;
    });
  };
  const renderLocation = () => {
    return (
      <Modal transparent visible={isOpenLocModal}>
        <StatusBar
          backgroundColor={COLORS['transparent-light']}
          hidden={false}
        />
        <TouchableWithoutFeedback style={{flex:1}} onPress={toggleLocModal}>
        <View style={styles.locationContainerMain}>
          <View style={[styles.viewLocation]}>
            <Text style={styles.modalHeading}>Select your location</Text>
            <View style={styles.switchStyle}>
              <Text style={styles.titleModal}>Phone location permission</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          <ScrollView>
            {Object.entries(locations).map(([category, places]) => (
              <View key={category} style={styles.locationView}>
                <Text style={[styles.modalHeading, styles.modalHeadingView]}>
                  {category}
                </Text>

                <FlatList
                  data={places}
                  showsVerticalScrollIndicator
                  keyExtractor={(item) => item.id}
                  renderItem={({ item: place, index }) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => handleSelectLocation(place)}
                        style={[
                          styles.locationContainer,
                          {
                            margin: verticalScale(0),
                          },
                          !place.selected && { backgroundColor: COLORS.white },
                        ]}>
                        <OcticonsIcon
                          name="location"
                          size={30}
                          color={COLORS['light-gray']}
                        />
                        <View style={{ flex: 1 }}>
                          <Text style={styles.cityTextStyle}>{place.city}</Text>
                          <Text style={styles.adressTextStyle}>
                            {place.address}
                          </Text>
                        </View>
                        <View>
                          <Image
                            source={
                              place.selected ? radioSelectedPng : radioPng
                            }
                            style={styles.image}
                          />
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            ))}
          </ScrollView>
          <CommonButton title='Confirm' onPress={() => toggleLocModal()} />
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };


  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />
        {renderLocation()}
        <View style={{ flex: 1 }}>
          {/* Header start here */}
          <View style={styles.imageContainer}>
            <Text></Text>
            <Image source={happeningLogoPng} style={styles.imageStyle} />
            <View>
              <AntdesignIcon name="bells" size={30} color={COLORS.purple} />
              <View style={styles.bellContainer}>
                <Text numberOfLines={1} style={styles.badgeTextStyle}>
                  2
                </Text>
              </View>
            </View>
          </View>
          {/* Header End here */}
          {/* Location start here */}
          <TouchableOpacity onPress={() => toggleLocModal()} style={styles.locationContainer}>
            <OcticonsIcon
              name="location"
              size={30}
              color={COLORS['light-gray']}
            />
            <View>
              <Text style={styles.cityTextStyle}>Bangalore</Text>
              <Text style={styles.adressTextStyle}>
                #2 KR Layout, Indiranagar
              </Text>
            </View>
          </TouchableOpacity>
          {/* Location end here */}
          <View style={styles.buttonContainer}>
            {activeButton.map((item, index) => (
              <Button
                key={item.id}
                title={item.name}
                isActive={item.isActive}
                buttonStyle={[
                  index === 0 && styles.button1Style,
                  index === activeButton.length - 1 && styles.buttonEndStyle,
                ]}
                onPress={() => handlePress(item.id)}
              />
            ))}
          </View>

          <ScrollView style={styles.mainContainer}>
            <View>
              <Text style={styles.titleTextStyle}>Pick your category</Text>
              <FlatList
                data={category}
                horizontal
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => renderCatList(item)}
              // numColumns={4}
              // columnWrapperStyle={{flexWrap: 'wrap'}}
              />
            </View>

            <View>
              <Text style={styles.titleTextStyle}>Most popular</Text>
              <FlatList
                data={mostPopular}
                horizontal
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => renderMostPopularList(item)}
              />
            </View>

            <View>
              <Text style={styles.titleTextStyle}>Resume your booking</Text>
              <FlatList
                data={resumeBooking}
                horizontal
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => renderBookingList(item)}
              />
            </View>

            <View>
              <Text style={styles.titleTextStyle}>Recomended</Text>
              <FlatList
                data={mostPopular}
                horizontal
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => renderMostPopularList(item)}
                contentContainerStyle={{ paddingBottom: responsiveHeight(15) }}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  image: {
    width: horizontalScale(24),
    height: horizontalScale(24),
  },
  locationView: {
    marginTop: verticalScale(10),
  },
  modalHeadingView: {
    fontSize: moderateScale(16),
    color: COLORS['gray-2'],
  },
  switchStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 15,
  },
  titleModal: {
    fontFamily: FONTS.inter['regular[400]'],
    fontSize: moderateScale(14),
    color: COLORS['gray-2'],
    flex: 1,
  },
  modalHeading: {
    fontFamily: FONTS.poppins.medium,
    fontSize: moderateScale(18),
    color: COLORS.black,
  },
  viewLocation: {
    backgroundColor: COLORS.white,
    height: responsiveHeight(50),
    width: responsiveWidth(100),
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  locationContainerMain: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
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
    alignItems: 'center',
  },
  badgeTextStyle: {
    color: COLORS.white,
    fontSize: moderateScale(10),
    fontFamily: FONTS.inter['medium[500]'],
  },

  locationContainer: {
    backgroundColor: COLORS['purple-light'],
    flexDirection: 'row',
    columnGap: 15,
    padding: verticalScale(10),
    margin: verticalScale(10),
    alignItems: 'center',
    borderRadius: 5,
  },
  cityTextStyle: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.poppins.medium,
    color: COLORS.purple,
  },
  adressTextStyle: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.poppins.regular,
    color: COLORS.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: verticalScale(10),
    alignItems: 'center',
    borderRadius: moderateScale(10),
    justifyContent: 'space-between',
  },
  buttonStyles: {
    paddingVertical: verticalScale(10),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS['purple-light-2'],
    borderWidth: 1,
    width: '30%',
  },
  buttonActiveStyle: {
    backgroundColor: COLORS['purple-light'],
    borderColor: COLORS.purple,
  },
  button1Style: {
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
  },
  buttonEndStyle: {
    borderTopRightRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
  },

  textStyle: {
    fontFamily: FONTS.poppins.medium,
    fontSize: moderateScale(14),
    color: COLORS['gray-2'],
  },
  textActiveStyle: {
    color: COLORS.purple,
  },
  cardContainer: {
    borderRadius: moderateScale(10),
    marginRight: moderateScale(10),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    position: 'relative',
  },
  imageStyleCard: {
    width: horizontalScale(100),
    height: verticalScale(100),
    borderRadius: moderateScale(10),
    resizeMode: 'cover',
  },
  cardTitleViewStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS['white-gray-2'],
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    paddingVertical: moderateScale(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextStyle: {
    fontSize: moderateScale(18),
    fontFamily: FONTS.poppins.medium,
    color: COLORS['gray-2'],
    margin: moderateScale(10),
  },
  imageCardStye: {
    width: responsiveWidth(70),
    height: verticalScale(125),
    borderRadius: moderateScale(10),
    resizeMode: 'cover',
    margin: moderateScale(10),
  },
  imageCardStye1: {
    width: responsiveWidth(30),
    height: verticalScale(70),
    borderRadius: moderateScale(10),
    resizeMode: 'cover',
    margin: moderateScale(10),
  },
  mainContainer: {
    flex: 1,
    paddingBottom: responsiveHeight(30),
    flexGrow: 1,
    paddingLeft: moderateScale(10),
  },
  closeIconContainer: {
    position: 'absolute',
    top: verticalScale(14),
    right: horizontalScale(14),
    backgroundColor: COLORS.white,
    borderRadius: 50,
    padding: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
