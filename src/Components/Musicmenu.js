import React, { Component } from "react";

class Musicmenu extends Component {
  componentDidMount() {
    this.updateActiveMenuItem();
  }

  componentDidUpdate(prevProps) {
    // If the activeItemInMenu prop has changed, update the active menu item
    console.log(prevProps);
    if (prevProps.activeItemInMusicMenu !== this.props.activeItemInMusicMenu) {
      this.updateActiveMenuItem();
    }
  }

  updateActiveMenuItem() {
    const { activeItemInMusicMenu } = this.props;

    // Remove active class from all items
    const menuItems = document.querySelectorAll("#music-menu ul li");
    // console.log(menuItems);
    menuItems.forEach((item) => item.classList.remove("active"));

    // Add active class to the current active item
    menuItems.forEach((item) => {
      if (item.getAttribute("data-option") === activeItemInMusicMenu) {
        item.classList.add("active");
      }
    });
  }

  render() {
    return (
      <div className="sidebar-container" id="music-menu">
        <h3>Music</h3>
        <ul>
          <li data-option="allSongs">
            <span>All Songs</span>
            <i className="fa-solid fa-angle-right"></i>
          </li>
          <li data-option="artists">
            <span>Artist</span>
            <i className="fa-solid fa-angle-right"></i>
          </li>
          <li data-option="albums">
            <span>Albums</span>
            <i className="fa-solid fa-angle-right"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default Musicmenu;
