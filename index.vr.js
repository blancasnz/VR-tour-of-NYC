import React from 'react';
import {
  AppRegistry,
  View
} from 'react-vr';
import Canvas from './components/canvas';
import UI from './components/ui'

const Config = [
  {
    key: 0,
    imageSrc: 'sunset.jpg',
    buttonImageSrc: 'freedom-tower.jpg',
    text: 'sunset'
  },
  {
    key: 1,
    imageSrc: 'water-lillies.jpg',
    buttonImageSrc: 'water-lillies.jpg',
    text: 'water-lillies'
  },
  {
    key: 2,
    imageSrc: 'green-img.png',
    buttonImageSrc: 'green-img.png',
    text: 'green'
  },
  {
    key: 3,
    imageSrc: 'nyc.jpg',
    buttonImageSrc: 'freedom-tower.jpg',
    text: 'nyc'
  }
];

export default class WelcomeToVR extends React.Component {

  constructor() {
    super();

    this.state = {
      src: 'water-lillies.jpg',
      text: 'water-lillies'
    };
  }

  render() {
    return (
      <View>
        <Canvas
          src={this.state.src}
          text={this.state.text}
        />
        <UI
          buttonConfig={Config}
          onClick={key => { this.setState({ src: Config[key].imageSrc, text: Config[key].text }); }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

