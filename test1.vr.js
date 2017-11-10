import React from 'react';
import {
  Animated
} from 'react-vr';
import { Easing } from 'react-native'

export default class FadeInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      slideValue: new Animated.Value(5) // init opacity 0
    };
  }
  componentDidMount() {

    Animated.sequence([
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.ease
        }
      ),
      Animated.timing(          // Uses easing functions
        this.state.slideValue,    // The value to drive
        {
          toValue: -0.5,
          duration: 1000,
          delay: 500,
          easing: Easing.bounce

        }            // Configuration
      )
    ])
      .start();                // Don't forget start!
  }
  render() {
    return (
      <Animated.View          // Special animatable View
        style={{
          opacity: this.state.fadeAnim, // Binds directly
          transform: [{
            translateY: this.state.slideValue
          }]
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

