import React, {useEffect, useRef} from 'react';
import {Animated, Button, View} from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#2B63C6',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 2,
          marginBottom: 10,
          opacity,
        }}></Animated.View>
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeIn" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;
