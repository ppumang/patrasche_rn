import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import UploadBaseScreenStack from '../Navigations/UploadBaseScreenStack';
import UploadScreen from '../Screens/UploadScreen';

function UploadBaseScreen(props) {
    return (
        <UploadBaseScreenStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <UploadBaseScreenStack.Screen
                name="Upload"
                component={UploadScreen}
                options={{
                    title: '업로드',
                }}
                title={''}
            />
        </UploadBaseScreenStack.Navigator>
    );
}

const styles = StyleSheet.create({

})

export default UploadBaseScreen;