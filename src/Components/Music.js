import Albums from "./Albums";
import AllSongs from "./AllSongs";
import Artists from "./Artists";
import Musicmenu from "./Musicmenu";
import React, { Component } from "react";

class Music extends Component {
  render() {
    const { musicMenu, albums, allSongs, artists } = this.props.display;
    const { activeItemInMusicMenu } = this.props;
    // console.log(this.props);

    return (
      <>
        {musicMenu && (
          <Musicmenu activeItemInMusicMenu={activeItemInMusicMenu} />
        )}

        {allSongs && <AllSongs />}
        {albums && <Albums />}
        {artists && <Artists />}
      </>
    );
  }
}

export default Music;
