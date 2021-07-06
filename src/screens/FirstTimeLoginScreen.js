import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet} from 'react-native'
import Typography from '../components/atoms/Typography'
import {TextStyles} from '../components/atoms/Typography'
import FloatingActionButton from '../components/atoms/FloatingActionButton'
import Swiper from 'react-native-swiper'
import theme from '../theme';
import { FIRST_TIME_LOGIN_SCREEN_ICON } from '../utils/IconGetter';

const FirstTimeLoginScreen = () =>{
    return (
        <SafeAreaView style={styles.mainViewStyle}>
            <View style={styles.header}>
                <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
                    <View style={styles.slide1}>
                        
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
            <View style={styles.footer}>
                <FloatingActionButton 
                    icon={FIRST_TIME_LOGIN_SCREEN_ICON.continue.icon}
                    label={FIRST_TIME_LOGIN_SCREEN_ICON.continue.iconCaption}/>
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
        marginLeft:24,
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
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.SECONDRY,
      borderRadius:12,
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.SECONDRY,
      borderRadius:12,
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.SECONDRY,
      borderRadius:12,
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
