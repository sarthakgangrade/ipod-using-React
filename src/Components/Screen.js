import React, { Component } from "react";
import "../Css/Screen.css";
import Sidebar from "./Sidebar";
import Coverflow from "./Coverflow";
import Games from "./Games";
import Settings from "./Settings";
import Music from "./Music";

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: {
        musicMenu: false,
        allSongs: false,
        artists: false,
        albums: false,
      },
      activeItemInMenu: this.props.activeItemInMusicMenu,
    };
    // console.log("inside constructor", this.props.activeItemInMusicMenu);
  }

  render() {
    const { sidemenu, coverflow, music, games, setting } = this.props.display;

    const activeItemInMenu = this.props;
    const { activeItemInMusicMenu } = this.props;

    // console.log(activeItemInMusicMenu);

    const currentScreenDisplay = this.state.display;

    for (let key in currentScreenDisplay) {
      currentScreenDisplay[key] = false;
    }

    currentScreenDisplay[this.props.toShowInMusicMenu] = true;

    return (
      <div className="main-screen">
        {sidemenu && <Sidebar activeItemInMenu={activeItemInMenu} />}
        {coverflow && <Coverflow />}
        {music && (
          <Music
            display={currentScreenDisplay}
            activeItemInMusicMenu={activeItemInMusicMenu}
          />
        )}
        {games && <Games />}
        {setting && <Settings />}
      </div>
    );
  }
}

export default Screen;
