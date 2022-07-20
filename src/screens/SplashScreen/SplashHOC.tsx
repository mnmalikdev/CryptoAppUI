import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions} from 'react-native';

interface Props {
  movingAnimation: Animated.Value;
  fadeAnimation: Animated.Value;
}

// make screenNavigationProps optional

const SplashHOC = (WrappedComponent: React.FC<Props>) => {
  return () => {
    //HOC
    const movingAnimation = useRef(new Animated.Value(0)).current;
    const fadeAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.sequence([
        Animated.timing(movingAnimation, {
          duration: 2000,
          toValue: Dimensions.get('window').width / 3.6,
          delay: 0,
          useNativeDriver: false,
        }),
        Animated.timing(movingAnimation, {
          duration: 2000,
          toValue: 0,
          delay: 0,
          useNativeDriver: false,
        }),
      ]).start();
      Animated.timing(fadeAnimation, {
        duration: 2000,
        toValue: 1,
        delay: 100,
        useNativeDriver: false,
      }).start();
    }, [movingAnimation, fadeAnimation]);

    return (
      <WrappedComponent
        movingAnimation={movingAnimation}
        fadeAnimation={fadeAnimation}
      />
    );
  };
};

export default SplashHOC;
