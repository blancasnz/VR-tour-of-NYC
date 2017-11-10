import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import FadeInView from './test1.vr.js';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        {<Pano source={asset('water-lillies.jpg')} />}
        <FadeInView>
          <Text
            style={{
              backgroundColor: '#b7a7c6',
              fontSize: 0.3,
              fontWeight: '200',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 0, -3] }],
            }}>
            Monet's Water Lillies
        </Text>
        </FadeInView>

      </View>
    );
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

// import React from 'react';
// import {
//   AppRegistry,
//   View
// } from 'react-vr';
// import Canvas from '../components/canvas';

// export default class WelcomeToVr extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       src: 'water-lillies.jpg',
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Canvas
//           src={this.state.src}
//         />
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('WelcomeToVr', () => WelcomeToVr);
