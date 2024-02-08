import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import PeopleTable from "./Features/PeopleTable ";

function App() {
  return (
    <Provider store={store}>
      <div style={{ margin: "20px" }}>
        <PeopleTable />
      </div>
    </Provider>
  );
}

export default App;
