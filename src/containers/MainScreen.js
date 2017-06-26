import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text>You're logged in!</Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Logout' })}
      title="Logout"
    />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;
