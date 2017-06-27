import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../components/user/LoginForm';
import * as userActions from '../actions/userActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const LoginScreen = ({ navigation, actions: { login } }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      LOGIN
    </Text>
    <LoginForm onSubmit={login}/>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Log in"
    />
  </View>
);

const { object } = PropTypes;

LoginScreen.propTypes = {
  navigation: object.isRequired
};

LoginScreen.navigationOptions = {
  title: 'Log In'
};

const mapDispatch = dispatch => ({
  actions: bindActionCreators(userActions, dispatch)
});

export default connect(null, mapDispatch)(LoginScreen);
