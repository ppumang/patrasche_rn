import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, Image, Dimensions, TouchableOpacity } from 'react-native'

import { askPermission } from "../Lib/upload";
import Ionicon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { API_SERVER } from '../env';

const uploadPhoto = (media) => {
    let photo = {
        name: 'test',
        type: media.type,
        uri:
            Platform.OS === 'android'
                ? media.uri
                : media.uri.replace('file://', ''),
    };
    let formData = new FormData();
    formData.append('photo', photo);
    axios
        .post(
            `${API_SERVER}/api/post/upload_media`,
            formData,
            {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            },
        )
        .then((response) => {
            console.log(response);
        })
        .catch((e) => {
            console.log(e);
        });
}

function UploadScreen(props) {
    const [uri, setUri] = useState("");

    useEffect(() => {
        let media = props.route.params?.media;
        const goBack = () => {
            if (props.navigation.canGoBack()) {
                props.navigation.goBack();
            } else {
                props.navigation.navigate("Feed")
            }
        }
        if (!media?.uri) {
            goBack();
        } else {
            setUri(media.uri);
            props.navigation.setOptions({
                headerLeft: (_props) => (
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={goBack}>
                        <Ionicon name={'arrow-back'} size={25} color={'black'} />
                    </TouchableOpacity>
                ),
                headerRight: (_props) => (
                    <TouchableOpacity
                        style={{ marginRight: 10 }}
                        onPress={
                            () => {
                                uploadPhoto(media)
                            }
                        }>
                        <Ionicon name={'arrow-forward'} size={25} color={'dodgerblue'} />
                    </TouchableOpacity>
                )
            });
        }
    }, [props.route.params])

    return (
        <View>
            {
                uri !== undefined && (
                    <Image source={{ uri }} style={{ height: Dimensions.get("window").width }} />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({

})

export default UploadScreen;