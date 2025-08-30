import { Component } from "react";
import ZingTouch from "zingtouch";
import Wheel from "./Components/Wheel";
import Screen from "./Components/Screen";
import "./Css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: {
        sidemenu: true,
        coverflow: false,
        music: false,
        games: false,
        setting: false,
      },
      activeItemInMenu: "coverflow",
      toShowInMusicMenu: "musicMenu",
      activeItemInMusicMenu: "allSongs",
    };
  }

  rotateEvent = () => {
    const myRegion = new ZingTouch.Region(document.getElementById("controls"));
    const rotateArea = document.getElementById("wheel");
    myRegion.bind(rotateArea, "rotate", (event) => {
      const menuList = document.querySelectorAll("li");
      const distanceFromLast = event.detail.distanceFromLast;

      if (distanceFromLast > 1) {
        for (let i = 0; i < menuList.length; i++) {
          if (menuList[i].classList.contains("active")) {
            menuList[i].classList.remove("active");

            if (i === menuList.length - 1) {
              menuList[0].classList.add("active");
            } else {
              menuList[i + 1].classList.add("active");
            }
            break;
          }
        }
      } else if (distanceFromLast < 1) {
        for (let i = menuList.length - 1; i >= 0; i--) {
          if (menuList[i].classList.contains("active")) {
            menuList[i].classList.remove("active");

            if (i === 0) {
              menuList[menuList.length - 1].classList.add("active");
            } else {
              menuList[i - 1].classList.add("active");
            }
            break;
          }
        }
      }
    });
  };

  handleOk = () => {
    // console.log("hello");
    const activeMenu = document.querySelector("#side-menu .active");
    const activeMusicMenu = document.querySelector("#music-menu .active");

    if (activeMenu) {
      const optionSelected = activeMenu.getAttribute("data-option");
      const updatedDisplay = { ...this.state.display };

      for (let key in updatedDisplay) {
        // console.log(updatedDisplay[key]);

        updatedDisplay[key] = false;
      }

      // console.log(display[optionSelected]);
      updatedDisplay[optionSelected] = true;

      this.setState({
        display: updatedDisplay,
        activeItemInMenu: optionSelected,
      });
    } else if (activeMusicMenu) {
      const optionSelected = activeMusicMenu.getAttribute("data-option");
      this.setState({
        toShowInMusicMenu: optionSelected,
        activeMusicMenu: optionSelected,
      });
    }
  };

  handleMenu = () => {
    if (this.state.toShowInMusicMenu == "musicMenu") {
      const display = this.state.display;
      for (let key in display) {
        display[key] = false;
      }
      display.sidemenu = true;

      this.setState({
        display: display,
        activeItemInMusicMenu: "allSongs",
      });
    } else {
      const optionSelected = this.state.toShowInMusicMenu;
      this.setState({
        toShowInMusicMenu: "musicMenu",
        activeItemInMusicMenu: optionSelected,
      });
    }
  };

  render() {
    const {
      display,
      activeItemInMenu,
      activeItemInMusicMenu,
      toShowInMusicMenu,
    } = this.state;
    return (
      <div className="App">
        <Screen
          display={display}
          activeItemInMenu={activeItemInMenu}
          activeItemInMusicMenu={activeItemInMusicMenu}
          toShowInMusicMenu={toShowInMusicMenu}
        />
        <Wheel
          rotateEvent={this.rotateEvent}
          handleOk={this.handleOk}
          handleMenu={this.handleMenu}
        />
      </div>
    );
  }
}

export default App;
