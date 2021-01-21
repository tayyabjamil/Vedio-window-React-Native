import React from 'react';
import { ActionSheetIOS, View } from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

class VideoCall extends React.Component {
  constructor(props) {
    super(props);
    this.onConferenceTerminated = this.onConferenceTerminated.bind(this);
    this.onConferenceJoined = this.onConferenceJoined.bind(this);
    this.onConferenceWillJoin = this.onConferenceWillJoin.bind(this);
  }

  componentDidMount() {
  //   setTimeout(() => {
  //     const url = 'https://your.jitsi.server/roomName'; // can also be only room name and will connect to jitsi meet servers
  //     const userInfo = { displayName: 'User', email: 'user@example.com', avatar: 'https:/gravatar.com/avatar/abc123' };
  //     JitsiMeet.call(url, userInfo);
  //     /* You can also use JitsiMeet.audioCall(url) for audio only call */
  //     /* You can programmatically end the call with JitsiMeet.endCall() */
  //   }, 1000);
  // this.goToCallExperience()
  }
  goToCallExperience(){  
   
    JitsiMeet.endCall() 
   
    }
  onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
  }

  onConferenceJoined(nativeEvent) {
    /* Conference joined event */
  }

  onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <JitsiMeetView 
         onConferenceTerminated={this.onConferenceTerminated}
         onConferenceJoined={this.onConferenceJoined} 
         onConferenceWillJoin={this.onConferenceWillJoin} 
         style={{ flex: 1, height: '100%', width: '100%' }} />
      </View>
    );
  }
}

export default VideoCall;
