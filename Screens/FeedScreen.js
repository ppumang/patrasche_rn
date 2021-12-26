import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, RefreshControl, Image, TouchableOpacity, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const renderItem = ({ item }) => {
    const window = Dimensions.get('window')
    return <TouchableOpacity style={{ flex: 1 }}>
        <Image source={{ uri: item }}
            style={{ flex: 1, height: window.width }}
            resizeMode='cover'
        />
    </TouchableOpacity>
};

function FeedScreen(props) {
    let feedData = [];
    for (let i = 1; i < 11; i++) {
        feedData.push(`https://patrasche.s3.ap-northeast-2.amazonaws.com/media/dog${i}.jpeg`)
    }
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => { setRefreshing(false) }, 3000)
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={feedData}
                renderItem={renderItem}
                keyExtractor={(item, idx) => idx}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            // onEndReachedThreshold={0.5}
            // onEndReached={onRefresh}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight()
    }
})

export default FeedScreen;