import {Text, View} from "react-native";
import React from "react";

export const Post = ({title, text}) => {
    return (
        <View style={{marginVertical: 5, flex: 1,  borderBottomColor:'black', borderBottomWidth:5}}>
            <Text style={{paddingHorizontal:5,fontSize:22, color:'#000',textAlign:"center"}}>{title}</Text>
            <Text style={{padding:5,fontSize:18, color:'grey', textAlign:"center"}}>{text}</Text>
        </View>
    );
};
