// presentational component. Will contain no state. only UI part.
import React from 'react';
import {Animated, SafeAreaView} from 'react-native';
import SplashHOC from './SplashHOC';
import styles from './styles';

type Props = {
  movingAnimation: Animated.Value;
  fadeAnimation: Animated.Value;
};

const SplashUI: React.FC<Props> = ({movingAnimation, fadeAnimation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        style={[
          styles.logo,
          {opacity: fadeAnimation},
          {transform: [{translateY: movingAnimation}]},
        ]}
        source={require('../../assets/images/logo.png')}
      />
    </SafeAreaView>
  );
};

const SplashComponent = SplashHOC(SplashUI);

export default SplashComponent;
