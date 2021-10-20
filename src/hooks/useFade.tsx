import React, {useRef} from 'react';
import {Animated} from 'react-native';

const useFade = () => {
  //Cuando se crea el fadeScreen
  const opacity = useRef(new Animated.Value(0.6)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return {
    fadeIn,
    fadeOut,
    opacity,
  };
};

export default useFade;
