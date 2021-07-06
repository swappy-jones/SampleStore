import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image,Dimensions} from 'react-native'
import Typography from '../components/atoms/Typography'
import {TextStyles} from '../components/atoms/Typography'
import FloatingActionButton from '../components/atoms/FloatingActionButton'
import theme from '../theme';
import {StackActions} from '@react-navigation/native';
import { CREATE_STORE_SCREEN_TEXTS, SCREEN_ROUTE_MAPPING } from '../utils/strings';
import { CREATE_STORE_SCREEN_ICON } from '../utils/IconGetter';
import CardView from '../components/organisms/CardView'
import TextInput from '../components/atoms/TextInput'
import { TextInput as PaperTextInput } from 'react-native-paper';
import Button,{ButtonStyles} from '../components/atoms/Button'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreateStoreScreen = ({navigation}) =>{

    const [storeName, setStoreName] = React.useState('');
    const [storeNameError, setStoreNameError] = React.useState({isValid: true,errorMessage: '',});
    const [storeBio, setStoreBio] = React.useState('');
    const [storeBioError, setStoreBioError] = React.useState({isValid: true,errorMessage: '',});

    const handleCreateStorePress = () =>{
        navigation.dispatch(
            StackActions.replace(SCREEN_ROUTE_MAPPING.HomeDashboardScreen)
        )
    }


    return(
        <SafeAreaView style={styles.mainViewStyle}>
            <Image source={CREATE_STORE_SCREEN_ICON.screenLogo.icon} style={styles.imageStyle} resizeMethod='auto'/>
            <Typography text={CREATE_STORE_SCREEN_TEXTS.createScreenHeader} textStyle={TextStyles.headerTextPurple}/>
            <CardView style={styles.card}>
                <TextInput
                    label={CREATE_STORE_SCREEN_ICON.storeName.iconCaption}
                    mode={theme.textInput.outlined}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={storeName}
                    error={!storeNameError.isValid}
                    errorMessage={storeNameError.errorMessage}
                    onChangeText={setStoreName}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={CREATE_STORE_SCREEN_ICON.storeName.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>
                <TextInput
                    label={CREATE_STORE_SCREEN_ICON.storeBio.iconCaption}
                    mode={theme.textInput.outlined}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={storeBio}
                    error={!storeBioError.isValid}
                    errorMessage={storeBioError.errorMessage}
                    onChangeText={setStoreBio}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={CREATE_STORE_SCREEN_ICON.storeBio.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>
                <Button
                    icon={CREATE_STORE_SCREEN_ICON.createButton.icon}
                    variant={theme.button.contained}
                    handleOnPress={handleCreateStorePress}
                    style={ButtonStyles.primaryContainedButtonStyle}
                    label={CREATE_STORE_SCREEN_ICON.createButton.iconCaption}
                    labelStyle={ButtonStyles.primaryButtonLabelStyle}/>
            </CardView>
        </SafeAreaView>
    )
}

export default CreateStoreScreen;

const styles = StyleSheet.create({
    imageStyle:{
        width:"80%",
        resizeMode:"contain",
        alignSelf:'center',
        flex:1
    },
    mainViewStyle:{
        flex:1,
        backgroundColor:theme.palette.SECONDRY,
        alignItems:'center'
    },
    card:{
        width: '95%',
        flex:1,
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
