import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { s } from "react-native-wind";

export default function FetchFlatListToDo({list,setList}){
    return (
        <FlatList
            style={s`w-80 `}
            data={list}
            renderItem={({item}) => 
                <View style={s`justify-around flex-row items-center h-20 border-b border-t border-solid border-gray-100`}>
                    <Text style={s`font-medium`}>{item.todo}</Text>
                    <TouchableOpacity
                    onPress={() => {

                        fetch('https://633f93fb0dbc3309f3cce759.mockapi.io/api/todo/'+item.id, {
                        method: 'DELETE',
                        headers: {'Content-Type': 'application/json'},
                        
                }).then(data=>{
                    fetch('https://633f93fb0dbc3309f3cce759.mockapi.io/api/todo')
                                .then(data=>data.json())
                                .then(data =>setList(data))
                })

                    }}
                    style={s`bg-fuchsia-400 w-14 h-8 rounded-xl justify-center items-center`}><Text style={s`text-white`}>Delete</Text></TouchableOpacity>
                </View>}           
            />
    )
}