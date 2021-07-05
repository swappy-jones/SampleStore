import * as React from 'react';
import {StyleSheet, Text as ReactNativeText} from 'react-native';
import theme from '../../../theme';

const Typography = ({text,textStyle}) => {
    return (
        <ReactNativeText
            style={textStyle}>{text}</ReactNativeText>
    );
};

export const TextStyles = StyleSheet.create({
    headerTextWhite:{
        fontSize:24,
        fontWeight:'bold',
        color:theme.palette.WHITE
    },
    bodyTextWhite:{
        fontSize:16,
        color:theme.palette.WHITE
    },
    headerTextPrimary:{
        fontSize:24,
        fontWeight:'bold',
        color:theme.palette.PRIMARY
    },
    bodyTextPrimary:{
        fontSize:16,
        color:theme.palette.PRIMARY
    },
    bodyTextGrey:{
        fontSize:14,
        color:theme.palette.GREY
    },
    bodyTextBlack:{
        fontSize:16,
        color:theme.palette.BLACK
    },
    headerTextPurple:{
        fontSize:36,
        fontWeight:'bold',
        color:theme.palette.PURPLE,
        textAlign:'center',
        marginBottom:16
    }
})

export default Typography;