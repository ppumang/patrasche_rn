import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, RefreshControl, Image, TouchableOpacity, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Video from 'react-native-video'
import { useIsFocused } from '@react-navigation/native';

function FeedScreen(props) {
    const screenIsFocused = useIsFocused();
    let feedData = [];
    for (let i = 1; i < 3; i++) {
        feedData.push(`https://patrasche.s3.ap-northeast-2.amazonaws.com/media/videos/dog${i}.mp4`)
    }
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => { setRefreshing(false) }, 3000)
    }
    const window = Dimensions.get('window')

    const renderItem = ({ item }) => {
        return <TouchableOpacity style={{ flex: 1 }}>
            <Video source={{ uri: item }}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError}               // Callback when video cannot be loaded
                style={{ height: window.height - getStatusBarHeight() }}
                repeat={true}
                playInBackground={false}
                paused={!screenIsFocused}
                muted={true}
                resizeMode='cover'
            />
        </TouchableOpacity>
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={feedData}
                renderItem={renderItem}
                keyExtractor={(item, idx) => idx}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                showsVerticalScrollIndicator={false}
                snapToInterval={window.height}
                snapToAlignment='start'
                decelerationRate={'fast'}
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