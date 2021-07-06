import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image, FlatList,LogBox} from 'react-native'
import Typography from '../components/atoms/Typography'
import {TextStyles} from '../components/atoms/Typography'
import FloatingActionButton from '../components/atoms/FloatingActionButton'
import theme from '../theme';
import { ITEM_LIST_SCREEN_ICON } from '../utils/IconGetter';
import Banner from '../components/organisms/Banner';
import {StackActions} from '@react-navigation/native';
import { SCREEN_ROUTE_MAPPING } from '../utils/strings';
import { DUMMY_DATA_ITEMS } from '../model/DummyData';
import uuid from 'react-native-uuid';
import StoreItem from '../components/organisms/StoreItem'
import Toolbar from '../components/organisms/Toolbar';
import { useEffect } from 'react';


LogBox.ignoreAllLogs();

const ItemListScreen = ({navigation}) =>{

    updateData = data => {
        console.log(data);
      };

      const handleAddItemPress = () =>{
        navigation.navigate(SCREEN_ROUTE_MAPPING.ItemDetailsScreen,{updateData:updateData})
    }

    const renderItem = ({ item }) => (
        <StoreItem item={item}/>
      );

    //   useEffect(() =>{
    //     onDataUpdate()
    //   },[isDataUpdated])

    //   const onDataUpdate = () =>{
    //       console.log(isDataUpdated)
    //   }

    return(
        <SafeAreaView style={styles.mainViewStyle}>
            <Toolbar/>
            <FlatList
                style={styles.listStyle}
                data={DUMMY_DATA_ITEMS}
                renderItem={renderItem}
                />
            <FloatingActionButton
                icon={ITEM_LIST_SCREEN_ICON.addItem.icon}
                handleFABPress={handleAddItemPress}/>
        </SafeAreaView>
    )
}

export default ItemListScreen;

const styles = StyleSheet.create({
    mainViewStyle:{
        flex:1,
        backgroundColor:theme.palette.SECONDRY,
        marginBottom:60,
        alignItems:'center'
    },
    listStyle:{
        marginTop:8
    }
})
