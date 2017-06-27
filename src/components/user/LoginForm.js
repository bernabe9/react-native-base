// import React from 'react';
// import PropTypes from 'prop-types';
// import { Field, reduxForm } from 'redux-form';
// import { View, Text, Button } from 'react-native';

// import Input from '../common/Input';
// import * as constraints from '../../utils/constraints';

// const onSubmit = (values, dispatch) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(values)
//       resolve()
//     }, 1500)
//   })
// }

// const LoginForm = ({ handleSubmit, error }) => (
//   <View onSubmit={handleSubmit}>
//     {error && <Text>{error}</Text>}
//     <Field
//       name="email"
//       label="Email"
//       component={Input}
//     />
//     <Field
//       name="password"
//       label="Password"
//       component={Input}
//     />
//     <Button title="LOGIN" onPress={handleSubmit(onSubmit)} />
//   </View>
// );

// const { func, string } = PropTypes;

// LoginForm.propTypes = {
//   handleSubmit: func.isRequired,
//   error: string
// };

// export default reduxForm({
//   form: 'login',
//   validate: constraints.validations(constraints.login)
// })(LoginForm);
