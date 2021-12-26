import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import FeedBaseScreenStack from '../Navigations/FeedBaseScreenStack';

import FeedScreen from '../Screens/FeedScreen';

function FeedBaseScreen(props) {
    return (
        <FeedBaseScreenStack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTitleAlign: 'center',
            }}>
            <FeedBaseScreenStack.Screen
                name="Feed"
                component={FeedScreen}
                options={{ headerShown: false }}
            />
        </FeedBaseScreenStack.Navigator>
    );
}

const styles = StyleSheet.create({

})

export default FeedBaseScreen;