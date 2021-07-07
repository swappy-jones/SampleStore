import React from 'react';
import { View, StyleSheet,KeyboardAvoidingView ,ScrollView} from 'react-native';
import theme from '../../../theme';
const CardView = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      <ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
             style={{flex:1}}>
          {props.children}
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: theme.palette.PRIMARY,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: theme.palette.SECONDRY,
    padding: 16,
    borderRadius: 12,
    
  }
});
export default CardView;