import React, { useReducer } from 'react';
import { View, Button, Text } from 'react-native';

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterApp = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <View style={{ alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 24 }}>Count: {state.count}</Text>
      <Button title="Inc" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button title="Dec" onPress={() => dispatch({ type: 'DECREMENT' })} />
    </View>
  );
};

export default CounterApp;
