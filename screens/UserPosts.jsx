import React from 'react';
import {Alert, FlatList, RefreshControl, View} from "react-native";
import axios from "axios";

import {Loader} from "../componenst/loader";
import {Post} from "../componenst/post";

export const UserPosts = ({route, navigation}) => {
    const {id} = route.params;
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState();

    const fetchPosts = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => {
                const arr = data.filter((item) => item.userId === id)
                setData(arr);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Error', 'Could not get user post');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }


    React.useEffect(() => {
        fetchPosts()
    }, [])

    if (isLoading) {
        return (
            <Loader/>
        );
    }
    return (
        <View style={{padding:5}}>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={data}
                renderItem={({item}) => (
                    <Post title={item.title} text={item.body}/>
                )}
            />
        </View>
    );
};

