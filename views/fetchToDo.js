import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { s } from "react-native-wind";
import InputToDo from './input';
import FlatListToDo from './flatlist';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FetchInputToDo from './fetchInputToDo';
import FetchFlatListToDo from './fetFlatListToDo';
export default function FetchToDo() {

    useEffect(() => {
        fetch('https://633f93fb0dbc3309f3cce759.mockapi.io/api/todo')
        .then(data=>data.json())
        .then(data =>setList(data))
    },[])
      const [list, setList] = useState([])
      const [text, setText] = useState("");

    return (

        <SafeAreaView style={s`items-center justify-center`} >
            
            <FetchInputToDo text={text} setText={setText} setList={setList}/>

            <FetchFlatListToDo setList={setList} list={list}/>
        

        </SafeAreaView>
    )



}