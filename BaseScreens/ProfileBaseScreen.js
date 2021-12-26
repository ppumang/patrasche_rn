import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ProfileBaseScreenStack from '../Navigations/ProfileBaseScreenStack';
import MyProfileScreen from '../Screens/MyProfileScreen';

function ProfileBaseScreen(props) {
    return (
        <ProfileBaseScreenStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <ProfileBaseScreenStack.Screen
                name="MyProfile"
                component={MyProfileScreen}
                options={{
                    title: '프로필',
                }}
                title={''}
            />
        </ProfileBaseScreenStack.Navigator>
    );
}

const styles = StyleSheet.create({

})

export default ProfileBaseScreen;