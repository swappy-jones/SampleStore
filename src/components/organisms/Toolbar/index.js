import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native'
import Typography from '../../atoms/Typography'
import {TextStyles} from '../../atoms/Typography'
import theme from '../../../theme';
import { HEADER_ICON } from '../../../utils/IconGetter';
import {StackActions} from '@react-navigation/native';
import { SCREEN_ROUTE_MAPPING } from '../../../utils/strings';
import CardView from '../CardView';

const Toolbar = ({showBackButton,navigation}) =>{

    const handleBackButtonPress = () =>{
        navigation.goBack();
    }

    return(
        <View style={styles.mainViewStyle} >
            {
                showBackButton && <TouchableOpacity onPress={handleBackButtonPress}>
                    <Image style={styles.backButtonStyle} source={HEADER_ICON.backButton.icon}/>
                </TouchableOpacity>
            }
            <Image style={styles.logoStyle} source={HEADER_ICON.app.icon}/>
            <Typography text={HEADER_ICON.app.iconCaption} textStyle={{...TextStyles.headerTextPrimary,...styles.appNameTextStyle}}/>
        </View>
    );
}

export default Toolbar;

const styles=StyleSheet.create({
    mainViewStyle:{
        height:48,
        width:'100%',
        backgroundColor:theme.palette.SECONDRY,
        shadowColor: theme.palette.PRIMARY,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        top:4,
        borderRadius:8,
        alignItems:'center',
        paddingVertical:6,
        paddingHorizontal:12,
        flexDirection:'row'
    },
    backButtonStyle:{
        height:32,
        width:32,
        tintColor:theme.palette.PRIMARY,
        resizeMode:'contain'
    },
    logoStyle:{
        height:40,
        width:40,
        resizeMode:'contain',
        marginLeft:16
    },
    appNameTextStyle:{
        marginLeft:8
    }
})