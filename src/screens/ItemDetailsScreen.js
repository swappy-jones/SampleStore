import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,LogBox} from 'react-native'
import Typography from '../components/atoms/Typography'
import {TextStyles} from '../components/atoms/Typography'
import Toolbar from '../components/organisms/Toolbar';
import theme from '../theme';

LogBox.ignoreAllLogs();

const ItemDetailsScreen = ({route,navigation}) =>{
    return(
        <SafeAreaView style={styles.mainViewStyle}>
            <Toolbar navigation={navigation} showBackButton={true} updateData={route.params.updateData}/>
        </SafeAreaView>
    )
}

export default ItemDetailsScreen;


const styles = StyleSheet.create({
    mainViewStyle:{
        flex:1,
        backgroundColor:theme.palette.SECONDRY
    }
})
