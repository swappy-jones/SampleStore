import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image,Dimensions} from 'react-native'
import { Card } from 'react-native-paper';
import Typography from '../components/atoms/Typography'
import Button,{ButtonStyles} from '../components/atoms/Button'
import {TextStyles} from '../components/atoms/Typography'
import CardView from '../components/organisms/CardView';
import theme, { textInputTheme } from '../theme';
import { LOGIN_SCREEN_ICON } from '../utils/IconGetter';
import { LOGIN_SCREEN_TEXTS, SCREEN_ROUTE_MAPPING, ASYNC_KEY_MAPPING } from '../utils/strings';
import TextInput from '../components/atoms/TextInput'
import { TextInput as PaperTextInput } from 'react-native-paper';
import {StackActions} from '@react-navigation/native';
import { storeJSONData, getJSONData } from '../utils/StorageHelper';
import Credentail from '../model/Credential'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation}) =>{

    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [usernameError, setUsernameError] = React.useState({isValid: true,errorMessage: '',});
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState({isValid: true,errorMessage: '',});

    const handleSignInPress = async () =>{
        if(validateFields()){
            const creds = Credentail;
            creds.username=username;
            creds.password=password;
            await storeJSONData(ASYNC_KEY_MAPPING.CREDS,creds)
            console.log(await getJSONData(ASYNC_KEY_MAPPING.CREDS))
            navigation.dispatch(
                StackActions.replace(SCREEN_ROUTE_MAPPING.FirstTimeLoginScreen)
            )
          }
        
    }

    const validateUsername = username => {
        const result = {
          isValid: true,
          errorMessage: '',
        };
        if (username == '') {
          result.errorMessage = 'Username cannot be empty';
          result.isValid = false;
        }
        return result;
      };
    
      const validatePassword = password => {
        const result = {
          isValid: true,
          errorMessage: '',
        };
        if (password == '') {
          result.errorMessage = 'Password cannot be empty';
          result.isValid = false;
        }
        return result;
      };
    
      const validateFields = () => {
        const userNameValidationResult = validateUsername(username);
        setUsernameError(userNameValidationResult);
        const passwordValidationResult = validatePassword(password);
        setPasswordError(passwordValidationResult);
        if (
          userNameValidationResult.isValid == true &&
          passwordValidationResult.isValid == true
        )
          return true;
        else return false;
      };




    return(
        <SafeAreaView style={styles.mainViewStyle}>
            <Image 
                source={LOGIN_SCREEN_ICON.appLogo.icon} 
                style={styles.imageStyle}/>
            <Typography 
                text={LOGIN_SCREEN_TEXTS.iconCaption} 
                textStyle={TextStyles.headerTextPurple}/>
            <View style={styles.wrapperViewStyle}>
            <CardView style={styles.card}>
                <TextInput
                    label={LOGIN_SCREEN_TEXTS.usernameHint}
                    mode={theme.textInput.outlined}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={username}
                    error={!usernameError.isValid}
                    errorMessage={usernameError.errorMessage}
                    onChangeText={setUsername}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={LOGIN_SCREEN_ICON.user.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }/>

                <TextInput
                    label={LOGIN_SCREEN_TEXTS.passwordHint}
                    mode={theme.textInput.outlined}
                    theme={theme.textInputTheme}
                    style={styles.textInputStyle}
                    text={password}
                    error={!passwordError.isValid}
                    errorMessage={passwordError.errorMessage}
                    onChangeText={setPassword}
                    leftIcon={
                        <PaperTextInput.Icon
                        name={LOGIN_SCREEN_ICON.password.icon}
                        color={theme.palette.PRIMARY}
                        />
                    }
                    rightIcon={
                        <PaperTextInput.Icon
                            name={
                            passwordVisible
                                ?LOGIN_SCREEN_ICON.passwordVisible.icon
                                : LOGIN_SCREEN_ICON.passwordHidden.icon
                            }
                            color={theme.palette.PRIMARY}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                        }
                    secureTextEntry={!passwordVisible}/>
                <Button
                    icon={LOGIN_SCREEN_ICON.login.icon}
                    variant={theme.button.contained}
                    handleOnPress={handleSignInPress}
                    style={ButtonStyles.primaryContainedButtonStyle}
                    label={LOGIN_SCREEN_TEXTS.loginButton}
                    labelStyle={ButtonStyles.primaryButtonLabelStyle}/>

            </CardView>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    mainViewStyle:{
        paddingHorizontal:16,
        paddingVertical:40,
        backgroundColor:theme.palette.SECONDRY,
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    imageStyle:{
        width:"40%",
        height:"15%",
        resizeMode:"contain",
        alignSelf:'center',
    },
    card:{
        width: '100%',
        height:300,
        flexDirection:'column',
        backgroundColor: theme.palette.SECONDRY,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center',
         // Centered horizontally
    },
    textInputStyle:{
        marginBottom:4,
        marginTop:12,
        width:windowWidth*.8,
    },
    wrapperViewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:48
    }
})
