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
    const [stock, setStock] = React.useState('');
    const [stockError, setStockError] = React.useState({isValid: true,errorMessage: '',});
    const [price, setPrice] = React.useState('');
    const [priceError, setPriceError] = React.useState({isValid: true,errorMessage: '',});



    const handleEditPress = () =>{
        setEditEnabled(!editEnabled)
}

    return(
        <SafeAreaView style={styles.mainViewStyle}>
            <Toolbar navigation={navigation} showBackButton={true} updateData={route.params.updateData}/>
            <CardView style={styles.card}>
                <TextInput
                    label={ITEM_DETAILS_SCREEN_ICON.itemName.iconCaption}
                    mode={theme.textInput.outlined}
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
        justifyContent: 'center', //Centered vertically
        alignItems: 'center',
        margin:16,
         // Centered horizontally
    },
    textInputStyle:{
        marginBottom:16,
        width:windowWidth*.8,
    },
})
