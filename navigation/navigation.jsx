import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/Home';
import {UserPosts} from "../screens/UserPosts";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#1784c0',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Users'}}/>
                <Stack.Screen name="Posts" component={UserPosts} options={{title: 'All user posts'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};