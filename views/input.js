import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { s } from "react-native-wind";

export default function InputToDo({text,setText,setList}){
    return(
    <View style={s`flex-row justify-center items-center`}>
                <TextInput
                onChangeText={setText}
                value={text}
                style={s`border-black rounded-2xl border-solid border h-10 w-52 text-xl`} />
                <TouchableOpacity style={s`m-5 bg-fuchsia-400 w-20 h-10 rounded-2xl items-center justify-center`}
                onPress={() => {setList((pre)=>[...pre,{id:Math.random(),todo: text}])
                setText('')}}
                ><Text style={s`font-black text-white`}>Add</Text></TouchableOpacity>
            </View>
)}