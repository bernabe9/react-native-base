import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Text } from 'react-native';

const Input = ({ input: { onChange, ...restInput }, label, meta: { touched, error } }) => (
  <View>
    {label && <Text>{label}</Text>}
    <View>
      <TextInput onChangeText={onChange} {...restInput} />
      {touched && error && <Text>{error}</Text>}
    </View>
  </View>
);

const { string, object } = PropTypes;

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object
};

export default Input;
