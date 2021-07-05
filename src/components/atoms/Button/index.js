import * as React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import PropTypes from 'prop-types'
import {View,StyleSheet} from 'react-native'
import theme from '../../../theme';

const Button = ({
    icon,variant,handleOnPress,color,labelStyle,buttonStyle,label,...restProps
}) => {
    return (
        <PaperButton icon = {icon}
                mode={variant} 
                onPress={() => {handleOnPress()}}
                color ={color} 
                labelStyle={labelStyle} 
                style={buttonStyle} {...restProps}
                contentStyle={ButtonStyles.contentStyle}>
                {label}
        </PaperButton>
)
    };
Button.propTypes = {
    variant:PropTypes.oneOf([theme.button.text, theme.button.contained, theme.button.outlined]),
    handleOnPress:PropTypes.func,
    color:PropTypes.string
}
Button.defaultProps = {
    handleOnPress: () => {},
    color : theme.palette.PRIMARY,
    upperCase:false,
    labelStyle:{color:theme.palette.WHITE}
}
export default Button;

export const ButtonStyles = StyleSheet.create({
    primaryContainedButtonStyle: {
        width: '100%',
        height: 50,
        justifyContent:'center',
        borderRadius: 10,
        marginTop:18
      },
      primaryButtonLabelStyle:{
          color:theme.palette.WHITE
      },
      contentStyle:{
        width:'100%',
        height:'100%'
    },
})
