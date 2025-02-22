import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
     
     <View>
      <Text>Dashboard</Text>
     </View>
    </SafeAreaView>
  )
}

export default Dashboard