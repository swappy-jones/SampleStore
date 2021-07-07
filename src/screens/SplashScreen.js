import React,{useState,useRef} from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image,Animated} from 'react-native'
import Typography from '../components/atoms/Typography'
import {TextStyles} from '../components/atoms/Typography'
import {StackActions} from '@react-navigation/native';
import {SCREEN_ROUTE_MAPPING, ASYNC_KEY_MAPPING} from '../utils/strings'
import { SPLASH_ICON } from '../utils/IconGetter';
import theme from '../theme';
import {generateItemsKey, generateStoreKey} from '../utils/Helper'
import { storeJSONData, getJSONData } from '../utils/StorageHelper';

const SplashScreen = ({navigation}) =>{

    const springValue = useRef(new Animated.Value(0.9)).current

    React.useEffect(() => {
        Animated.spring(
            springValue,
        {
            toValue: 1,
            friction: 0,
            useNativeDriver:true
        }
        ).start();


    }, [springValue])


    setTimeout(()=>{
        navigateAsRequired()
    },1000)

    const navigateAsRequired = async() =>{
        const creds = await getJSONData(ASYNC_KEY_MAPPING.CREDS)
        if(creds){
            const storeKey = generateStoreKey(creds);
            const store = await getJSONData(storeKey)
            if(store){
                navigation.dispatch(
                    StackActions.replace(SCREEN_ROUTE_MAPPING.HomeDashboardScreen)
                )
            }else{
                navigation.dispatch(
                    StackActions.replace(SCREEN_ROUTE_MAPPING.FirstTimeLoginScreen)
                )
            }
        }else{
            navigation.dispatch(
                StackActions.replace(SCREEN_ROUTE_MAPPING.LoginScreen)
            )
        }
    }

    return(
        <SafeAreaView style={styles.mainViewStyle}>
            <Animated.Image 
                source={SPLASH_ICON.icon} 
                style={{...styles.imageStyle, transform:[{scale: springValue}] }}/>
            <Typography text={SPLASH_ICON.iconCaption} textStyle={TextStyles.headerTextPurple}/>
        </SafeAreaView>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    imageStyle:{
        width:"75%",
        resizeMode:"contain",
        alignSelf:'center',
    },
    mainViewStyle:{
        flex:1,
        backgroundColor:theme.palette.SECONDRY
    }
})
