import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";

const App = (props) => (
  <Grid columns="equal" className="app" style={{ background: "#eee" }}>
    <ColorPanel />
    <SidePanel 
    key={props.currentUser && props.currentUser.uid}
    currentUser={props.currentUser}/>

    <Grid.Column style={{ marginLeft: 320 }}>

      <Messages 
      key={props.currentChannel && props.currentChannel.id}
      currentChannel={props.currentChannel}
      currentUser={props.currentUser} />
    </Grid.Column>

    <Grid.Column width={4}>
      <MetaPanel />
    </Grid.Column>
  </Grid>
);

const mapStateToProps= state=>{
  return{
    currentUser: state.user.currentUser,
    currentChannel: state.channel.currentChannel
  }
}

export default connect(mapStateToProps)(App);
