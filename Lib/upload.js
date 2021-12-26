import {
    PERMISSIONS,
    RESULTS,
    request,
    openLimitedPhotoLibraryPicker,
} from 'react-native-permissions';
import {
    launchCamera,
    launchImageLibrary,
    showImagePicker,
} from 'react-native-image-picker';

export const askPermission = async (callback) => {
    try {
        console.log('askPermission');
        const result =
            Platform.OS === 'ios'
                ? await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
                : RESULTS.LIMITED;
        /* PERMISSION 종류 = UNAVAILABLE, BLOCKED, LIMITED, GRANTED, DENIED */
        /* 나중에 PERMISSION에 대해 구분해줘야 함! 지금은 일단 대충 LIMITED로 만들어놓고 테스트중 */
        console.log('result:', result);
        if (result === RESULTS.LIMITED || result === RESULTS.GRANTED) {
            const options = {
                title: 'Load Photo',
                customButtons: [
                    { name: 'button_id_1', title: 'CustomButton 1' },
                    { name: 'button_id_2', title: 'CustomButton 2' },
                ],
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
                maxWidth: 500,
                maxHeight: 500,
                quality: 0.5,
            };
            launchImageLibrary(options, (res) => {
                callback(res);
            });
        } else {
            alert(
                '갤러리에 접근 권한이 없습니다. Setting에서 pingnpong에 갤러리 접근을 승인해주세요',
            );
        }
    } catch (error) {
        console.log('askPermission', error);
    }
};