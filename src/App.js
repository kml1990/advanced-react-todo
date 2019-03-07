import React, { Component } from "react";
import { Provider } from "react-redux";

import TodoContainer from "./components/TodoContainer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faCheck,
  faTrashAlt,
  faList,
  faCalendarAlt,
  faPlus,
  faArchive,
  faTh,
  faHome,
  faClipboardList,
  faAddressBook,
  faClipboard,
  faBookmark,
  faSuitcase,
  faHandshake,
  faUserCircle,
  faInfoCircle,
  faTags,
  faFilter,
  faSitemap
} from "@fortawesome/free-solid-svg-icons";
import store from "./store";

import AppNavbar from "./components/AppNavbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppNavbar />
          <TodoContainer />
        </Provider>
      </div>
    );
  }
}

library.add(
  faEdit,
  faCheck,
  faTrashAlt,
  faList,
  faCalendarAlt,
  faPlus,
  faArchive,
  faTh,
  faHome,
  faClipboardList,
  faAddressBook,
  faClipboard,
  faBookmark,
  faSuitcase,
  faHandshake,
  faUserCircle,
  faInfoCircle,
  faTags,
  faFilter,
  faSitemap
);

export default App;
