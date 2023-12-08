import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { MaterialCommunityIcons, Ionicons } from 'react-native-vector-icons';
import { useSelector } from 'react-redux';
import { PrimaryButton } from '../../components';
import CApi from '../../lib/CApi';
import {  useDispatch } from 'react-redux'

import { setAccountId,setAccountType,setAccountEmail,setCounter,setInitialId,setInittialPage,clearTask } from '../../store/reducer/taskSlice';
function TaskScreen({ navigation, route }) {
    const task = useSelector((state) => state.task)
    // const { id } = route.params;
    useEffect(() => {
      if (route.params && route.params.id) {
        dispatch(setAccountId(route.params.id));
        finddata();
      }
        // Set account_type value when 'selecttype' changes in route.params
        // if (route.params && route.params.selecttype) {
        //   dispatch(setAccountType(route.params.selecttype));
        // }
        navigation.setOptions({
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 5,marginRight:10 }}
                onPress={() => {
                  // Custom logic when the back button is pressed
                  // For example, you can navigate to a different screen
                  navigation.navigate('Home');
                  dispatch(clearTask());
                }}
              >
                <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
              </TouchableOpacity>
            ),
          
          });
  
      },[navigation,route.params, dispatch]);
    const [isLoading, setLoading]= React.useState(false)
    const dispatch = useDispatch()
    const finddata = async () => {
      try {
        const body = {
          dataSource: 'Cluster0',
          database: 'puppet_uas',
          collection: 'account',
          filter: {
            "_id": { "$oid": route.params.id }
        }

        };
  
        const { data } = await CApi.post('/action/find', body);
        if (data) {
          if (data.documents.length > 0) {
            dispatch(setAccountEmail(data.documents[0].email));
            dispatch(setAccountType(data.documents[0].account_type));
          } else {
            alert('No data found'); // Handle the case where no data is returned
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    const submitAccount = async () => {
    if (task.account_type == ''|| task.email == '' || task.initial_id == '' || task.initial_page == '' || task.counter == '') {
        alert('Pastikan Semua Form Telah Terisi');
         return;
        }
    if(!/\S+@\S+\.\S+/.test(task.email)){
        alert('Email is in valid.');
        return;
        }
      try{
        setLoading(true)
        const body= {
          "dataSource": "Cluster0",
          "database": "puppet_uas",
          "collection": "task",
          "document": task
        }
        const respose = await CApi.post('/action/insertOne',body)
        setLoading(false)
        if(respose) {
          alert('Data Tugas (Task) berhasil ditambahkan')
          dispatch(clearTask());
        }
      }catch(error){
        setLoading(false)
        console.error('error',error)
        alert(error.message)
      }
      
    }
  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView>
        <View style={[style.container]} >
          <View style={[style.row]}>
            <View>
            <Text style={style.JudulText}>Account Type</Text>
            </View>    
          </View>
          <View style={[style.row]}>
            <TextInput
            style={[style.input, {marginTop:10,width:200,backgroundColor:'#e8e8e8'}]}
            value={task.account_id}
            onChangeText={(val)=>dispatch(setAccountId(val))}
            placeholder="Select Type" 
            editable={false}
           />
            <PrimaryButton 
              style={{marginLeft:10,marginTop:10,backgroundColor: '#fca503',width:100}}
              onPress={() => navigation.navigate('SelectTask')}
             title="Select"
             />
          </View>
          <View style={[style.row,{marginTop:15}]}>
            <View>
            <Text style={style.JudulText}>Account Type</Text>
            <TextInput
            style={[style.input, {marginTop:10,backgroundColor:'#e8e8e8'}]}
            value={task.account_type}
            onChangeText={(val)=>dispatch(setAccountType(val))}
            placeholder="Input Account type"
            editable={false}/>
            </View>
          </View>
          <View style={[style.row,{marginTop:15}]}>
            <View>
            <Text style={style.JudulText}>Email</Text>
            <TextInput
            style={[style.input, {marginTop:10,backgroundColor:'#e8e8e8'}]}
            value={task.email}
            onChangeText={(val)=>dispatch(setAccountEmail(val))}
            placeholder="Input Email"
            editable={false}/>
            </View>
          </View>
          <View style={[style.row,{marginTop:15}]}>
            <View>
            <Text style={style.JudulText}>Initial Id</Text>
            <TextInput
            style={[style.input, {marginTop:10}]}
            value={task.initial_id}
            onChangeText={(val)=>dispatch(setInitialId(val))}
            placeholder="Input initial id"/>
            </View>
          </View>
          <View style={[style.row,{marginTop:15}]}>
            <View>
            <Text style={style.JudulText}>Initial Page</Text>
            <TextInput
            style={[style.input, {marginTop:10}]}
            value={task.initial_page}
            onChangeText={(val)=>dispatch(setInittialPage(val))}
            placeholder="Input Initial Page"/>
            </View>
          </View>
          <View style={[style.row,{marginTop:15}]}>
            <View>
            <Text style={style.JudulText}>counter</Text>
            <TextInput
            style={[style.input, {marginTop:10}]}
            value={task.counter}
            onChangeText={(val)=>dispatch(setCounter(val))}
            placeholder="Input counter"/>
            </View>
          </View>
          {(
            <PrimaryButton 
            style={{marginTop:40,backgroundColor: '#fca503'}}
             title="Save Data"
          onPress={submitAccount}
          />
        )}
           
      
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
    margin: 35,
 
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  JudulText: {
    flexDirection:'column',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:5,
    color: '#000000'

  },
  input:{
    flexDirection:'column',
    width:310,
    height: 40,
    borderWidth: 1,
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    paddingLeft:15,
    borderColor: '#b2b8b4',
    backgroundColor:'#ffffff'
  }
})




export default TaskScreen;
