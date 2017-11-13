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
    imageSrc: 'GrandCentral1.JPG',
    buttonImageSrc: 'GC.JPG',
    text: 'Grand Central'
  },
  {
    key: 1,
    imageSrc: 'CentralPark1.JPG',
    buttonImageSrc: 'LN.JPG',
    text: 'Central Park'
  },
  {
    key: 2,
    imageSrc: 'TimesSquare2.JPG',
    buttonImageSrc: 'TS.JPG',
    text: 'Times Square'
  },
  {
    key: 3,
    imageSrc: 'CentralPark2.JPG',
    buttonImageSrc: 'GreatLawn.JPG',
    text: 'Great Lawn'
  }

];

export default class WelcomeToVR extends React.Component {

  constructor() {
    super();

    this.state = {
      src: 'CentralPark1.JPG',
      text: 'Central Park'
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

