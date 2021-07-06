import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,Dimensions,Image} from 'react-native'
import Typography from '../components/atoms/Typography'
import {TextStyles} from '../components/atoms/Typography'
import theme from '../theme';
import FloatingActionButton from '../components/atoms/FloatingActionButton'
import { STORE_DETAILS_ICON } from '../utils/IconGetter';
import CardView from '../components/organisms/CardView';
import TextInput from '../components/atoms/TextInput';
import { TextInput as PaperTextInput } from 'react-native-paper';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const StoreDetailsScreen = () =>{
    const [editEnabled, setEditEnabled] = React.useState(false);
    const [storeName, setStoreName] = React.useState('');
    const [storeNameError, setStoreNameError] = React.useState({isValid: true,errorMessage: '',});
    const [storeBio, setStoreBio] = React.useState('');
    const [storeBioError, setStoreBioError] = React.useState({isValid: true,errorMessage: '',});

    const handleEditPress = () =>{
            setEditEnabled(!editEnabled)
    }

    return(
        <SafeAreaView style={styles.mainViewStyle}>
            <Image source={STORE_DETAILS_ICON.logo.icon} style={styles.imageStyle} resizeMethod='auto'/>
            <CardView style={styles.card}>
                <TextInput
                    label={STORE_DETAILS_ICON.storeName.iconCaption}
                    mode={theme.textInput.outlined}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={storeName}
                    error={!storeNameError.isValid}
                    errorMessage={storeNameError.errorMessage}
                    onChangeText={setStoreName}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={STORE_DETAILS_ICON.storeName.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>
                <TextInput
                    label={STORE_DETAILS_ICON.storeBio.iconCaption}
                    mode={theme.textInput.outlined}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={storeBio}
                    error={!storeBioError.isValid}
                    errorMessage={storeBioError.errorMessage}
                    onChangeText={setStoreBio}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={STORE_DETAILS_ICON.storeBio.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>
            </CardView>
            <FloatingActionButton 
                icon={editEnabled?STORE_DETAILS_ICON.save.icon:STORE_DETAILS_ICON.edit.icon}
                handleFABPress={handleEditPress}/>
        </SafeAreaView>
    )
}

export default StoreDetailsScreen;


const styles = StyleSheet.create({
    mainViewStyle:{
        backgroundColor:theme.palette.SECONDRY,
        flex:1,
        marginBottom:60,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        width:"50%",
        height:"30%",
        resizeMode:"contain",
        alignSelf:'center',
    },
    card:{
        width: '95%',
        flexDirection:'column',
        backgroundColor: theme.palette.SECONDRY,
        justifyContent: 'center',
        alignItems: 'center',
        margin:24
    },
    textInputStyle:{
        marginBottom:16,
        width:windowWidth*.85
    },
})