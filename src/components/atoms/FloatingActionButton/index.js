import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import theme from '../../../theme';

const FloatingActionButton = ({icon,label,handleFABPress,color}) => (
  <FAB
    style={styles.fab}
    icon={icon}
    label={label}
    color={theme.palette.PRIMARY}
    onPress={handleFABPress}
    uppercase={false}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:theme.palette.SECONDRY,
    flexDirection:'row'
  },
})

export default FloatingActionButton;