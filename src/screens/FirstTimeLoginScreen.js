import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image} from 'react-native'
import Typography from '../components/atoms/Typography'
import {TextStyles} from '../components/atoms/Typography'
import FloatingActionButton from '../components/atoms/FloatingActionButton'
import theme from '../theme';
import { FIRST_TIME_LOGIN_SCREEN_ICON } from '../utils/IconGetter';
import Banner from '../components/organisms/Banner';
import {StackActions} from '@react-navigation/native';
import { SCREEN_ROUTE_MAPPING } from '../utils/strings';

const FirstTimeLoginScreen = ({navigation}) =>{

    const handleContinueButtonPress=()=>{
        navigation.dispatch(
            StackActions.replace(SCREEN_ROUTE_MAPPING.CreateStoreScreen)
        )
    }

    return (
        <SafeAreaView style={styles.mainViewStyle}>
            <View style={styles.header}>
                <Banner 
                    slideStyle={styles.slideStyle} 
                    imageStyle={styles.bannerImgeStyle} 
                    textStyle={TextStyles.headerTextPurple}
                    slides={FIRST_TIME_LOGIN_SCREEN_ICON.slides}/>
            </View>
            <View style={styles.footer}>
                <FloatingActionButton 
                    icon={FIRST_TIME_LOGIN_SCREEN_ICON.continue.icon}
                    label={FIRST_TIME_LOGIN_SCREEN_ICON.continue.iconCaption}
                    handleFABPress={handleContinueButtonPress}/>
            </View>
        </SafeAreaView>
      )
}

export default FirstTimeLoginScreen;

const styles = StyleSheet.create({
    mainViewStyle:{
        flex:1,
        backgroundColor:theme.palette.SECONDRY
    },
    header:{
        flex:9,
        elevation:8,
        marginLeft:8,
        marginRight:8,
        marginTop:12,
        marginBottom:12,
        shadowColor: theme.palette.PRIMARY,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        borderRadius:12,
    },
    footer:{
        flex:1
    },
    slideStyle:{
      flex: 1,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.SECONDRY,
      borderRadius:12,
    },
    bannerImgeStyle:{
        width:"80%",
        height:"60%",
        resizeMode:"contain",
        alignSelf:'center',
    }
  })
