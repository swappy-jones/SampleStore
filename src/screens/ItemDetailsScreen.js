import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,LogBox,Dimensions} from 'react-native'
import Typography from '../components/atoms/Typography'
import {TextStyles} from '../components/atoms/Typography'
import CardView from '../components/organisms/CardView';
import Toolbar from '../components/organisms/Toolbar';
import theme from '../theme';
import { ITEM_DETAILS_SCREEN_ICON } from '../utils/IconGetter';
import TextInput from '../components/atoms/TextInput'
import { TextInput as PaperTextInput } from 'react-native-paper';
import FloatingActionButton from '../components/atoms/FloatingActionButton'
import { ASYNC_KEY_MAPPING, CREATE_STORE_SCREEN_TEXTS, ITEM_DETAILS_SCREEN_TEXTS } from '../utils/strings';
import Item from '../model/Item'
import uuid from 'react-native-uuid';
import { storeJSONData, getJSONData } from '../utils/StorageHelper';
import {generateItemsKey, generateStoreKey, getRandomString} from '../utils/Helper'
import Button,{ButtonStyles} from '../components/atoms/Button'

LogBox.ignoreAllLogs();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ItemDetailsScreen = ({route,navigation}) =>{

    const [editEnabled, setEditEnabled] = React.useState(false);
    const [name, setName] = React.useState('');
    const [nameError, setNameError] = React.useState({isValid: true,errorMessage: '',});
    const [description, setDescription] = React.useState('');
    const [descriptionError, setDescriptionError] = React.useState({isValid: true,errorMessage: '',});
    const [tags, setTags] = React.useState('');
    const [tagsError, setTagsError] = React.useState({isValid: true,errorMessage: '',});
    const [stock, setStock] = React.useState('0');
    const [stockError, setStockError] = React.useState({isValid: true,errorMessage: '',});
    const [price, setPrice] = React.useState('0');
    const [priceError, setPriceError] = React.useState({isValid: true,errorMessage: '',});
    const [unit, setUnit] = React.useState('');
    const [unitError, setUnitError] = React.useState({isValid: true,errorMessage: '',});

    React.useEffect(() => {
        setCreateOrEdit()
      }, []);

    setCreateOrEdit = () => {
        if(!route.params.item){
            setEditEnabled(true)
        }else{
            const item = route.params.item;
            setName(item.name)
            setDescription(item.description)
            setTags(item.tags)
            setStock(item.availableStock)
            setPrice(item.price)
            setUnit(item.unit)
        }
    }

    const createItem = async () =>{
        const item = Item
        item.name=name
        item.description=description
        item.availableStock=stock
        item.price=price
        item.tags=tags
        item.unit=unit
        const randomId = getRandomString()
        item.id=randomId

        const creds = await getJSONData(ASYNC_KEY_MAPPING.CREDS)
        const storeKey = generateStoreKey(creds);
        const store = await getJSONData(storeKey)
        const itemKey = generateItemsKey(creds,store.name);
        const items = await getJSONData(itemKey)
        items.push(item)
        await storeJSONData(itemKey,items)
        const updatedItemList = await getJSONData(itemKey)
        route.params.updateData(updatedItemList)
    }

    const updateItem = async (item) =>{
        const creds = await getJSONData(ASYNC_KEY_MAPPING.CREDS)
        const storeKey = generateStoreKey(creds);
        const store = await getJSONData(storeKey)
        const itemKey = generateItemsKey(creds,store.name);
        let items = await getJSONData(itemKey)

        item.name=name
        item.description=description
        item.availableStock=stock
        item.price=price
        item.tags=tags
        item.unit=unit

        for(let i=0;i<items.length;i++){
            if(items[i].id===item.id){
                items[i].name=name
                items[i].description=description
                items[i].availableStock=stock
                items[i].price=price
                items[i].tags=tags
                items[i].unit=unit
                break;
            }
        }
        await storeJSONData(itemKey,items)
        route.params.updateData(items)
    }

    const handleDeleteItemPress = async () =>{
        const creds = await getJSONData(ASYNC_KEY_MAPPING.CREDS)
        const storeKey = generateStoreKey(creds);
        const store = await getJSONData(storeKey)
        const itemKey = generateItemsKey(creds,store.name);
        let items = await getJSONData(itemKey)

        const item = route.params.item;

        for(let i=0;i<items.length;i++){
            if(items[i].id===item.id){
                items.splice(i,1)
                break;
            }
        }
        await storeJSONData(itemKey,items)
        route.params.updateData(items)
        navigation.goBack()
    }

    const createOrUpdateData = () =>{
            if(route.params.item){
                updateItem(route.params.item)
            }else{
                createItem()
            }
    }

    const validateUnit = unit => {
        const result = {
          isValid: true,
          errorMessage: '',
        };
        if (unit == '') {
          result.errorMessage = 'Unit cannot be empty';
          result.isValid = false;
        }
        return result;
      };

    const validateName = name => {
        const result = {
          isValid: true,
          errorMessage: '',
        };
        if (name == '') {
          result.errorMessage = 'Name cannot be empty';
          result.isValid = false;
        }
        return result;
      };

      const validateDescription = description => {
        const result = {
          isValid: true,
          errorMessage: '',
        };
        if (description == '') {
          result.errorMessage = 'Description cannot be empty';
          result.isValid = false;
        }
        return result;
      };

      const validateTags = tags => {
        const result = {
          isValid: true,
          errorMessage: '',
        };
        if (tags == '') {
          result.errorMessage = 'Tags cannot be empty';
          result.isValid = false;
        }
        return result;
      };

      const validateStock = stock => {
        const result = {
          isValid: true,
          errorMessage: '',
        };
        if (stock == '') {
          result.errorMessage = 'Stock cannot be empty';
          result.isValid = false;
        }
        return result;
      };

      const validatePrice = price => {
        const result = {
          isValid: true,
          errorMessage: '',
        };
        if (price == '') {
          result.errorMessage = 'Price cannot be empty';
          result.isValid = false;
        }
        return result;
      };

    const validateFields = () => {
        const nameValidationResult = validateName(name);
        setNameError(nameValidationResult);

        const descriptionValidationResult = validateDescription(description);
        setDescriptionError(descriptionValidationResult);

        const stockValidationResult = validateStock(stock);
        setStockError(stockValidationResult);
        
        const priceValidationError = validatePrice(price);
        setPriceError(priceValidationError);

        const tagsValidationResult = validateTags(tags);
        setTagsError(tagsValidationResult);

        const unitValidationResult = validateUnit(unit);
        setUnitError(unitValidationResult);
        if (
            nameValidationResult.isValid == true &&
            descriptionValidationResult.isValid == true &&
            stockValidationResult.isValid == true &&
            priceValidationError.isValid == true &&
            tagsValidationResult.isValid == true &&
            unitValidationResult.isValid == true
        )
          return true;
        else return false;
      };

    const handleEditPress = () =>{
        if(!editEnabled){
            setEditEnabled(!editEnabled)
        }else{
            if(validateFields()){
                createOrUpdateData()
                navigation.goBack()
            }
        }
}

    return(
        <SafeAreaView style={styles.mainViewStyle}>
            <Toolbar navigation={navigation} showBackButton={true}/>
            <CardView style={styles.card}>
                {
                                !route.params.item &&<Typography text={ITEM_DETAILS_SCREEN_TEXTS.createNew} textStyle={TextStyles.bodyTextPrimary}/>
                }
                <TextInput
                    label={ITEM_DETAILS_SCREEN_ICON.itemName.iconCaption}
                    disabled={!editEnabled}
                    mode={theme.textInput.outlined}
                    important={true}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={name}
                    error={!nameError.isValid}
                    errorMessage={nameError.errorMessage}
                    onChangeText={setName}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={ITEM_DETAILS_SCREEN_ICON.itemName.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>
                <TextInput
                    label={ITEM_DETAILS_SCREEN_ICON.itemDescription.iconCaption}
                    disabled={!editEnabled}
                    mode={theme.textInput.outlined}
                    important={true}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={description}
                    error={!descriptionError.isValid}
                    errorMessage={descriptionError.errorMessage}
                    onChangeText={setDescription}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={ITEM_DETAILS_SCREEN_ICON.itemDescription.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>
                <TextInput
                    label={ITEM_DETAILS_SCREEN_ICON.itemPrice.iconCaption}
                    disabled={!editEnabled}
                    keyboardType = {theme.textInput.numberPad}
                    mode={theme.textInput.outlined}
                    important={true}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={price}
                    error={!priceError.isValid}
                    errorMessage={priceError.errorMessage}
                    onChangeText={setPrice}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={ITEM_DETAILS_SCREEN_ICON.itemPrice.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>
                <TextInput
                    label={ITEM_DETAILS_SCREEN_ICON.itemTag.iconCaption}
                    disabled={!editEnabled}
                    mode={theme.textInput.outlined}
                    important={true}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={tags}
                    error={!tagsError.isValid}
                    errorMessage={tagsError.errorMessage}
                    onChangeText={setTags}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={ITEM_DETAILS_SCREEN_ICON.itemTag.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>
                <TextInput
                    label={ITEM_DETAILS_SCREEN_ICON.itemStock.iconCaption}
                    disabled={!editEnabled}
                    keyboardType = {theme.textInput.numberPad}
                    mode={theme.textInput.outlined}
                    important={true}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={stock}
                    error={!stockError.isValid}
                    errorMessage={stockError.errorMessage}
                    onChangeText={setStock}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={ITEM_DETAILS_SCREEN_ICON.itemStock.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>
                <TextInput
                    label={ITEM_DETAILS_SCREEN_ICON.itemUnit.iconCaption}
                    disabled={!editEnabled}
                    mode={theme.textInput.outlined}
                    important={true}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={unit}
                    error={!unitError.isValid}
                    errorMessage={unitError.errorMessage}
                    onChangeText={setUnit}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={ITEM_DETAILS_SCREEN_ICON.itemUnit.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>
                    {
                         route.params.item && <Button
                         icon={ITEM_DETAILS_SCREEN_ICON.delete.icon}
                         variant={theme.button.contained}
                         handleOnPress={handleDeleteItemPress}
                         style={ButtonStyles.primaryContainedButtonStyle}
                         label={ITEM_DETAILS_SCREEN_ICON.delete.iconCaption}
                         labelStyle={ButtonStyles.primaryButtonLabelStyle}/>
                    }
            </CardView>
            <FloatingActionButton 
                icon={editEnabled?ITEM_DETAILS_SCREEN_ICON.save.icon:ITEM_DETAILS_SCREEN_ICON.edit.icon}
                handleFABPress={handleEditPress}
                label={editEnabled?ITEM_DETAILS_SCREEN_ICON.save.iconCaption:ITEM_DETAILS_SCREEN_ICON.edit.iconCaption}/>
        </SafeAreaView>
    )
}

export default ItemDetailsScreen;


const styles = StyleSheet.create({
    mainViewStyle:{
        flex:1,
        backgroundColor:theme.palette.SECONDRY,
        alignItems:'center'
    },
    card:{
        width: '95%',
        flexDirection:'column',
        backgroundColor: theme.palette.SECONDRY,
        justifyContent: 'center', 
        alignItems: 'center',
        margin:16,
    },
    textInputStyle:{
        marginBottom:16,
        width:windowWidth*.8,
    },
})
