import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image,Dimensions} from 'react-native'
import Typography from '../../atoms/Typography'
import {TextStyles} from '../../atoms/Typography'
import FloatingActionButton from '../../atoms/FloatingActionButton'
import theme from '../../../theme';
import { ITEM_LIST_SCREEN_ICON } from '../../../utils/IconGetter';
import {StackActions} from '@react-navigation/native';
import { SCREEN_ROUTE_MAPPING } from '../../../utils/strings';
import CardView from '../CardView';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StoreItem = ({item}) =>{
    return(
        <CardView style={styles.mainBodyStyle} key={item.id}>
            <View style={styles.namePriceStyle}>
                <View style={styles.nameViewStyle}>
                    <Typography text={item.name} textStyle={TextStyles.bodyTextPrimary}/>
                </View>
                <View style={styles.priceViewStyle}>
                    <Typography text={"$"+item.price+"/"+item.unit} textStyle={{...TextStyles.smallFocusTextPrimary,...styles.alignRightTextStyle}}/>
                </View>
            </View>
            <Typography text={item.description} textStyle={{...TextStyles.smallTextPrimary,...styles.typographySpacingStyle}}/>
            <Typography text={item.tags} textStyle={{...TextStyles.smallFocusTextPrimary,...styles.typographySpacingStyle}}/>
            <Typography text={"Left in stock: "+item.availableStock+item.unit} textStyle={{...TextStyles.smallFocusTextPrimary,...styles.typographySpacingStyle}}/>
        </CardView>
    );
}

export default StoreItem;

const styles = StyleSheet.create({
    mainBodyStyle:{
        width:windowWidth*.95,
        backgroundColor:theme.palette.LIGHT_GREY,
        flexDirection:'column',
        marginHorizontal:6,
        marginVertical:2,
    },
    namePriceStyle:{
        flexDirection:'row',
        padding:2,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    nameViewStyle:{
        flex:7,
    },
    priceViewStyle:{
        flex:3
    },
    typographySpacingStyle:{
        paddingVertical:2,
    },
    alignRightTextStyle:{
        textAlign:'right'
    }
})