import axios from 'axios';
import React from 'react';
import {
    Alert,
    FlatList,
    View,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';

import {Loader} from "../componenst/loader";
import {User} from "../componenst/user";


export const HomeScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [items, setItems] = React.useState();

    const fetchPosts = () => {
        setIsLoading(true);
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => {
                setItems(data);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Error', 'Could not get users');

            })
        setIsLoading(false);

    };

    React.useEffect(fetchPosts, []);

    if (isLoading) {
        return (
            <Loader/>
        );
    }

    return (
        <View style={{alignItems:"center", flex:1, marginTop:5}}>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={items}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Posts', {id: item.id})}>
                        <User name={item.name}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};