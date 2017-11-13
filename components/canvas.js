import React from 'react';
import {
  asset,
  Pano,
  View,
  Text
} from 'react-vr';
import FadeInView from './textAnimation'

class Canvas extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      src: this.props.src,
      text: this.props.text
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ src: newProps.src, text: newProps.text });
  }

  render() {
    return (
      <View>
        <Pano source={asset(this.state.src)} />
        <FadeInView>
          <Text
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              fontSize: 0.2,
              fontWeight: '200',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 0, -3] }]
            }}
          >
            {this.state.text}
          </Text>
        </FadeInView>
      </View>
    );
  }
}

export default Canvas;
