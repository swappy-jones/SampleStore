import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../../theme';
const CardView = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
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
    padding: 20,
    borderRadius: 10,
  }
});
export default CardView;