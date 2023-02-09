import React from 'react';
import {Text, View} from "react-native";

export const User = ({name}) => {
    return (
        <View style={{
            marginVertical: 5,
            flex: 1,
            alignItems: "center",
            height: "auto"
        }}>
            <Text style={{padding: 5, fontSize: 20, color: '#8c7f7f'}}>{name}</Text>
        </View>
    );
};

