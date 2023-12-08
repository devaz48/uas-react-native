import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert ,Image, Button } from 'react-native';
import React, { useEffect } from 'react';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
import { useSelector } from 'react-redux';
function HomeScreen({ navigation }) {
  const user = useSelector((state) => state.user)

  const handleReportButtonPress = () => {
    Alert.alert('Fitur Tidak Tersedia', 'Fitur ini masih dalam pengembangan.');
  };

  useEffect(() => {
    // Set navigation options dynamically
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="account-circle-outline" size={23} color="#000000" />
          <Text style={{ fontSize: 18, marginLeft: 8 , fontWeight: 'bold' }}>Hi, {user.fullName}</Text>

        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginRight: 5 }}>
          <TouchableOpacity
            style={{ marginRight: 16 }}
          // onPress={() => console.log('Second Icon Pressed')}
          >
            <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),

    });
  }, []);
  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView>
        <View style={[style.container]} >
          <View style={[style.row, { backgroundColor: '#faa125', borderTopLeftRadius: 18, borderTopRightRadius: 18 }]}>
            <View style={[style.textContainer, { margin: 10, marginLeft: 30 }]}>
              <Text style={style.JudulText}>Scrapping Management</Text>
              <Text style={style.SubText}>Manage And Setiing Your Account To Scrap</Text>
            </View>
          </View>
          <View style={[style.row]}>
            <View style={{marginLeft:7,marginTop:7}}>
              <TouchableOpacity style={[style.containericon, { backgroundColor: '#47c477' }]} 
               onPress={() => navigation.navigate('Account')}>
                <MaterialCommunityIcons name="account-multiple-plus-outline" size={50} color="#ffffff" />
              </TouchableOpacity>
              <Text style={style.iconLabel}>Account</Text>
            </View>
          
            <View style={{marginTop:7}} >
              <TouchableOpacity style={[style.containericon, {  backgroundColor: '#eb1e1e' }]}
               onPress={() => navigation.navigate('Task')}>
                <MaterialCommunityIcons name="clipboard-text-outline" size={50} color="#ffffff" />
              </TouchableOpacity>
              <Text style={style.iconLabel}>Task</Text>
            </View>
            <View style={{ marginTop: 7 }}>
            <TouchableOpacity style={[style.containericon, { backgroundColor: '#bf13b4' }]} onPress={handleReportButtonPress}>
              <MaterialCommunityIcons name="poll" size={50} color="#ffffff" />
            </TouchableOpacity>
            <Text style={style.iconLabel}>Report</Text>
          </View>
        </View>
       
          <View style={[style.row]}>
            <View style={{marginLeft:7,marginTop:7,marginBottom:20}}>
              <TouchableOpacity style={[style.containericon, { backgroundColor: '#6761ff' }]}
               onPress={() => navigation.navigate('ListAcc')}>
                <MaterialCommunityIcons name="shield-check-outline" size={50} color="#ffffff" />
              </TouchableOpacity>
              <Text style={style.iconLabel}>List Of Account</Text>
            </View>
            <View style={{marginTop:7,marginBottom:20}}>
              <TouchableOpacity style={[style.containericon, { backgroundColor: '#e355ed' }]}
               onPress={() => navigation.navigate('Listtask')}>
                <MaterialCommunityIcons name="image-text" size={50} color="#ffffff" />
              </TouchableOpacity>
              <Text style={[style.iconLabel]}>List Of Task</Text>
            </View>
          </View>



        </View>
        <View style={[style.container]} >
          <View style={[style.row, { backgroundColor: '#38a1fc', borderTopLeftRadius: 18, borderTopRightRadius: 18 }]}>
            <View style={[style.textContainer, { margin: 10, marginLeft: 30 }]}>
              <Text style={style.JudulText}>Scrapping Activity</Text>
              <Text style={style.SubText}>Monitoring Your Activuty Progress</Text>
            </View>
          </View>
          <View style={[style.row,{justifyContent: 'space-between',}]}>
            <View style={[style.textContainer, { margin: 10}]}>
              <Text style={style.listtext}>Total Account</Text>
            </View>
            <View style={[style.Task,{ backgroundColor: '#34cf74'}]}>
              <Text style={style.numtext}>10</Text>
            </View>
          </View>
          <View style={[style.row,{borderTopWidth:1,borderTopColor:'#c7c7c7',justifyContent: 'space-between',}]}>
            <View style={[style.textContainer, { margin: 10}]}>
              <Text style={style.text}>Open Task</Text>
            </View>
            <View style={[style.Task,{ backgroundColor: '#38a1fc'}]}>
              <Text style={style.numtext}>5</Text>
            </View>
          </View>
          <View style={[style.row,{borderTopWidth:1,borderTopColor:'#c7c7c7',justifyContent: 'space-between',}]}>
            <View style={[style.textContainer, { margin: 10}]}>
              <Text style={style.listtext}>In Progress Task</Text>
            </View>
            <View style={[style.Task,{ backgroundColor: '#bf13b4'}]}>
              <Text style={style.numtext}>10</Text>
            </View>
          </View>
          <View style={[style.row,{borderTopWidth:1,borderTopColor:'#c7c7c7',justifyContent: 'space-between',}]}>
            <View style={[style.textContainer, { margin: 10}]}>
              <Text style={style.listtext}>Close Task</Text>
            </View>
            <View style={[style.Task,{ backgroundColor: '#6761ff'}]}>
              <Text style={style.numtext}>20</Text>
            </View>
          </View>
          <View style={[style.row,{borderTopWidth:1,borderTopColor:'#c7c7c7'}]}>
            <View style={[style.textContainer, { margin: 25}]}>
              
            </View>
          </View>
          



        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // Set the background color for the entire screen
  },
  container: {
    margin: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#c7c7c7'
  },
  containericon: {
    flexDirection: 'column',
    margin: 15,
    borderRadius: 18,
    padding: 15,
    marginBottom:5  
    // borderWidth:1
  },
  Task:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 8,
    width:100,
    borderRadius: 18,
    padding: 5,
   
  },
   iconLabel: {
    flexDirection: 'row',
    color: '#000000',
    textAlign: 'center',
  // Adjust the margin based on your design preference
  },
  row: {

    flexDirection: 'row',
    alignItems: 'center',
    
    
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',

  },
  JudulText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'

  },
 SubText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  listtext:{
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
  },
  numtext:{
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
  },

  doubleBorder: {
    borderRadius: 60, // Half of the total width (2 * borderWidth + width)
    borderWidth: 3,
    borderColor: 'orange', // Outer border color
    // Margin between the outer and inner borders
  },
  circularImage: {
    width: 90, // Set the width of the image
    height: 90, // Set the height of the image
    borderRadius: 50, // Half of the width and height to create a circular shape
    borderWidth: 4, // Border width
    borderColor: 'white',
    // Border color

  },

  button: {
    marginRight: 5,
    height: 30, // Set the height of the button
    backgroundColor: '#e6e6e6', // Example background color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }
})




export default HomeScreen;
