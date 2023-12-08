
import React, { useEffect, useState,useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
import CApi from '../../lib/CApi';
import { useDispatch } from 'react-redux';
function SelectTaskEdit({navigation}) {
  const [data, setData] = useState([]);
    useEffect(() => {
        // Set navigation options dynamically
        fetchData();
        navigation.setOptions({
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Select Account Type</Text>
            </View>
          ),
    
        });
      }, []);
    
      useFocusEffect(
        useCallback(() => {
          // Fetch data again when the screen is focused
          fetchData();
        }, [])
      );
    
      const fetchData = async () => {
        try {
          const body = {
            dataSource: 'Cluster0',
            database: 'puppet_uas',
            collection: 'account',
          };
    
          const { data } = await CApi.post('/action/find', body);
          if (data) {
            if (data.documents.length > 0) {
              setData(data.documents);
            } else {
              alert('No data found'); // Handle the case where no data is returned
            }
          }
        } catch (err) {
          console.error(err);
        }
      };
      const handleFacebookPress = () => {
        // Navigate to the target page ('TargetPage') and pass the value as a parameter
        navigation.navigate('Task', { selecttype: 'Facebook' });
      };
      const handleJobStreetPress = () => {
        // Navigate to the target page ('TargetPage') and pass the value as a parameter
        navigation.navigate('Task', { selecttype: 'Jobstreet' });
      };
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
               {/* Render the fetched data */}
              {data.map((item, index) => (
                
                <View key={index} style={[styles.row, { margin: 20, marginTop: 5, marginLeft: 38 }]}>
                <TouchableOpacity style={[ {flexDirection:'row', justifyContent: 'center' }]} onPress={() => navigation.navigate('EditTask', { id: item._id })}>
                  <MaterialCommunityIcons  name="domain" size={55} color="#7a7979" />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.maintext}>{item.account_name}</Text>
                    <Text style={styles.subtext}>{item.email}</Text>
                  </View>
                </TouchableOpacity>
              </View>
                 ))}
            </ScrollView>
        </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'white',
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth:1,
      borderBottomColor:'7a7979'
    },
    input: {
      width: 310,
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      paddingLeft: 15,
      borderColor: '#b2b8b4',
      backgroundColor: '#ffffff',
    },
    boxcontent: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d9d9d9',
      padding: 15,
      borderRadius: 10,
    },
    maintext: {
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 10,
      marginTop: 5,
    },
    subtext: {
      fontSize: 15,
      marginLeft: 10,
      color: '#7a7979',
    },
    iconsub: {
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
   
  })
export default SelectTaskEdit;