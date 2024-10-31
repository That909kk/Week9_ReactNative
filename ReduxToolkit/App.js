import React from 'react';
import { View, Button, Text } from 'react-native';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  },
});

const { increment, decrement } = counterSlice.actions;

const store = configureStore({ reducer: counterSlice.reducer });

const CounterApp = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <View style={{ alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button title="Inc" onPress={() => dispatch(increment())} />
      <Button title="Dec" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default () => (
  <Provider store={store}>
    <CounterApp />
  </Provider>
);
