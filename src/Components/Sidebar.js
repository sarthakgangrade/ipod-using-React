import { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemInMenu: props.activeItemInMenu,
    };
  }

  componentDidMount() {
    this.updateactiveClass();
  }

  componentDidUpdate(prevprops) {
    if (prevprops.activeItemInMenu !== this.props.activeItemInMenu) {
      this.setState({ activeItemInMenu: this.props.activeItemInMenu }, () => {
        this.updateactiveClass();
      });
    }
  }

  updateactiveClass = () => {
    const { activeItemInMenu } = this.state.activeItemInMenu;
    const menuItems = document.querySelectorAll("#side-menu ul li");
    menuItems.forEach((item) => {
      // console.log(item);
      // console.log(activeItemInMenu);
      if (item.getAttribute("data-option") === activeItemInMenu) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  render() {
    // console.log(this.props);

    // const { handleCoverFlow } = this.props;

    return (
      <div className="sidebar-container" id="side-menu">
        <h3>iPod</h3>
        <ul>
          <li data-option="coverflow">
            <span>Cover Flow</span>
            <i className="fa-solid fa-angle-right"></i>
          </li>
          <li data-option="music">
            <span>Music</span>
            <i className="fa-solid fa-angle-right"></i>
          </li>
          <li data-option="games">
            <span>Games</span>
            <i className="fa-solid fa-angle-right"></i>
          </li>
          <li data-option="setting">
            <span>Settings</span>
            <i className="fa-solid fa-angle-right"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
