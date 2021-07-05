import * as React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import theme from '../../../theme';

const TextInput = ({label,text,leftIcon,rightIcon,placeholder,onChangeText,error,mode,disabled,theme,outlineColor,style,errorMessage,important,multiline,...restProps}) => {
  return (
    <View>
      <PaperTextInput
      style={style}
      label={<Text>{label} {important && <Text style={styles.important} >*</Text>}</Text>}
      value={text}
      disabled={disabled}
      mode={mode}
      onChangeText={onChangeText}
      placeholder={placeholder}
      left={leftIcon}
      right={rightIcon}
      theme={theme}
      outlineColor={error===true?theme.palette.SECONDRY:outlineColor}
      multiline={multiline}
      {...restProps}
    />
    {
      error && (<Text style={styles.errorStyle}>{errorMessage}</Text>)
    }
    </View>
  );
};

TextInput.prototypes = {
    mode:PropTypes.oneOf([theme.textInput.flat, theme.textInput.outlined]),
}

TextInput.defaultProps ={
  outlineColor:theme.palette.GREY,
  disabled:false,
  style:styles.spacingStyle
}


export default TextInput;

const styles = StyleSheet.create({
  errorStyle:{
    color:theme.palette.SECONDRY
  },
  important:{
    color:theme.palette.RED
  },
  spacingStyle:{
      marginBottom:10
  }
})