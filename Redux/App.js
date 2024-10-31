import React from 'react';
import { View, Button, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const CounterApp = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <View style={{ alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="Inc" onPress={() => dispatch({ type: INCREMENT })} />
      <Button title="Dec" onPress={() => dispatch({ type: DECREMENT })} />
    </View>
  );
};

export default () => (
  <Provider store={store}>
    <CounterApp />
  </Provider>
);
