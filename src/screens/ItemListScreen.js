import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image, FlatList,LogBox} from 'react-native'
import Typography from '../components/atoms/Typography'
import {TextStyles} from '../components/atoms/Typography'
import FloatingActionButton from '../components/atoms/FloatingActionButton'
import theme from '../theme';
import { ITEM_LIST_SCREEN_ICON } from '../utils/IconGetter';
import Banner from '../components/organisms/Banner';
import {StackActions} from '@react-navigation/native';
import { ASYNC_KEY_MAPPING, SCREEN_ROUTE_MAPPING } from '../utils/strings';
import { DUMMY_DATA_ITEMS } from '../model/DummyData';
import uuid from 'react-native-uuid';
import StoreItem from '../components/organisms/StoreItem'
import Toolbar from '../components/organisms/Toolbar';
import { useEffect } from 'react';
import {getJSONData,storeJSONData} from '../utils/StorageHelper'
import {generateItemsKey, generateStoreKey} from '../utils/Helper'


LogBox.ignoreAllLogs();

const ItemListScreen = ({navigation}) =>{

    const[items,setItems] = useState([])

    const updateItemList = async () =>{
        const creds = await getJSONData(ASYNC_KEY_MAPPING.CREDS)
        const storeKey = generateStoreKey(creds);
        const store = await getJSONData(storeKey)
        const itemKey = generateItemsKey(creds,store.name);
        const items = await getJSONData(itemKey)
        setItems(items)
    }

    React.useEffect(() => {
        updateItemList()
      }, []);

    updateData = data => {
        updateItemList()
      };

      const handleAddItemPress = () =>{
        navigation.navigate(SCREEN_ROUTE_MAPPING.ItemDetailsScreen,{updateData:updateData})
    }

    const renderItem = ({ item }) => (
        <StoreItem item={item}/>
      );

    return(
        <SafeAreaView style={styles.mainViewStyle}>
            <Toolbar navigation={navigation}/>
            <FlatList
                style={styles.listStyle}
                data={items}
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
