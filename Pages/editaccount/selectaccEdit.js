import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import React, { useEffect } from 'react';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
function SelectEdit({navigation}) {
    useEffect(() => {
        // Set navigation options dynamically
        navigation.setOptions({
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Select Account Type</Text>
            </View>
          ),
    
        });
      }, []);
      const handleFacebookPress = () => {
        // Navigate to the target page ('TargetPage') and pass the value as a parameter
        navigation.navigate('EditAccount', { selecttype: 'Facebook' });
      };
      const handleJobStreetPress = () => {
        // Navigate to the target page ('TargetPage') and pass the value as a parameter
        navigation.navigate('EditAccount', { selecttype: 'Jobstreet' });
      };
    return (
        <SafeAreaView style={style.safeArea}>
            <ScrollView>
                <View style={[style.row,{ margin: 20}]} >
                <TouchableOpacity style={[{flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:20}]}
                onPress={handleJobStreetPress}>
                <MaterialCommunityIcons name="domain" size={45} color="#959e98" />
                <Text style={{fontWeight:'bold',marginLeft:10,fontSize:20,color:"#959e98"}}>JobStreet</Text>
                </TouchableOpacity>
               
                </View>
                <View style={[style.row,{ margin: 20,marginTop:5}]} >
                <TouchableOpacity style={[{flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:20}]}
                onPress={handleFacebookPress}>
                <MaterialCommunityIcons name="thumb-up-outline" size={45} color="#959e98" />
                <Text style={{fontWeight:'bold',marginLeft:10,fontSize:20,color:"#959e98"}}>Facebook</Text>
                </TouchableOpacity>
               
                </View>
            </ScrollView>
        </SafeAreaView>
    );
  }
  const style = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'white',
       // Set the background color for the entire screen
    },
    row:{
        flexDirection:'row',
        borderBottomColor:'black',
        borderBottomWidth:1,
    }
   
  })
export default SelectEdit;