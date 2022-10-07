import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { s } from "react-native-wind";

export default function FlatListToDo({list,setList}){
    return (
        <FlatList
            style={s`w-80 `}
            data={list}
            renderItem={({item}) => 
                <View style={s`justify-around flex-row items-center h-20 border-b border-t border-solid border-gray-100`}>
                    <Text style={s`font-medium`}>{item.todo}</Text>
                    <TouchableOpacity
                    onPress={() => {setList(list.filter( ite => ite!==item ));}}
                    style={s`bg-fuchsia-400 w-14 h-8 rounded-xl justify-center items-center`}><Text style={s`text-white`}>Delete</Text></TouchableOpacity>
                </View>}           
            />
    )
}