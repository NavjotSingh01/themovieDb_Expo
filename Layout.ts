import {Dimensions, StyleSheet} from 'react-native';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    window: {
        deviceWidth,
        deviceHeight,
    },
    isSmallDevice: deviceWidth < 375,
    isLargeDevice: deviceHeight >= 900,
};