import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MainBottomTab from '../Navigations/MainBottomTab';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import FeedBaseScreen from './FeedBaseScreen';
import ProfileBaseScreen from '../BaseScreens/ProfileBaseScreen';
import UploadBaseScreen from '../BaseScreens/UploadBaseScreen';
import { askPermission } from '../Lib/upload';
import { useNavigation } from '@react-navigation/native';


function MainBaseScreen(props) {

    const uploadMediaCallback = (res) => {
        let assets = res.assets;
        if (!assets) return;
        let media = assets[0];
        props.navigation.navigate("UploadBase", {
            screen: "Upload",
            params: {
                media
            }
        })
    }


    return (
        <MainBottomTab.Navigator
            activeColor={'dodgerblue'}
            inactiveColor="#3e2465"
            barStyle={{
                backgroundColor: 'transparent',
            }}
            labeled={false}
            initialRouteName="FeedBase">
            <MainBottomTab.Screen
                name="FeedBase"
                component={FeedBaseScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <Entypo
                                name={'home'}
                                color={color}
                                size={26}
                            />
                        );
                    },
                }}
            />
            <MainBottomTab.Screen
                name="UploadBase"
                component={UploadBaseScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Feather
                            name={'plus-circle'}
                            color={color}
                            size={25}
                        />
                    ),
                }}
                listeners={{
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();
                        askPermission(uploadMediaCallback);
                    },
                }}
            />
            <MainBottomTab.Screen
                name="ProfileBase"
                component={ProfileBaseScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicon
                            name={'person'}
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </MainBottomTab.Navigator>
    );
}

const styles = StyleSheet.create({

})

export default MainBaseScreen;