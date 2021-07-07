import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemListScreen from '../screens/ItemListScreen'
import StoreDetailsScreen from '../screens/StoreDetailsScreen'
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity,Platform} from 'react-native'
import theme from '../theme';
import { BOTTOM_TABS } from '../utils/IconGetter';
import { SCREEN_ROUTE_MAPPING } from '../utils/strings';


const Tab = createBottomTabNavigator();


const Tabs = () => {

    return(
        <Tab.Navigator  
            tabBarOptions={{
                showLabel:false,
                style: styles.bottomNavigationStyle
                }}>
            <Tab.Screen name = {SCREEN_ROUTE_MAPPING.ItemListScreen} component={ItemListScreen}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={styles.bottomNavigationTabViewStyle}>
                            <Image source={BOTTOM_TABS.itemList.icon}
                                resizeMethod='scale'
                                style={focused? styles.bottomNavigationTabIconFocusedStyle:styles.bottomNavigationTabIconNonFocusedStyle}
                            />
                            <Text style={focused?styles.bottomNavigationTextFocusedStyle:styles.bottomNavigationTextNonFocusedStyle}>{BOTTOM_TABS.itemList.iconCaption}</Text>
                        </View>
                    )
                }} 
            />
            <Tab.Screen name = {SCREEN_ROUTE_MAPPING.StoreDetailsScreen} component={StoreDetailsScreen}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={styles.bottomNavigationTabViewStyle}>
                            <Image source={BOTTOM_TABS.store.icon}
                                resizeMethod='scale'
                                style={focused? styles.bottomNavigationTabIconFocusedStyle:styles.bottomNavigationTabIconNonFocusedStyle}
                            />
                            <Text style={focused?styles.bottomNavigationTextFocusedStyle:styles.bottomNavigationTextNonFocusedStyle}>{BOTTOM_TABS.store.iconCaption}</Text>
                        </View>
                    )
                }} 
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create(
    {
       bottomNavigationStyle:{
            position:'absolute',
            bottom:0,
            left:0,
            right:0,
            elevation:8,
            paddingBottom:8,
            backgroundColor:theme.palette.SECONDRY,
            borderRadius:8,
            height:60,
        },
       bottomNavigationTabIconFocusedStyle:{
            height:24,
            width:24,
            tintColor:theme.palette.PRIMARY
        },
       bottomNavigationTabIconNonFocusedStyle:{
            height:18,
            width:18,
            tintColor:theme.palette.GREY
        },
       bottomNavigationTextFocusedStyle:{
            color:theme.palette.PRIMARY,
            fontSize:14
        },
       bottomNavigationTextNonFocusedStyle:{
            color:theme.palette.GREY,
            fontSize:12
        },
       bottomNavigationTabViewStyle:{
            alignItems:'center',
            justifyContent:'center',
        },
    }
)

export default Tabs;
