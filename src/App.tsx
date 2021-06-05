import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./app/store";
import Search from "./app/components/search";
import SearchResults from "./app/components/searchResults";
import View from "./app/components/view";

function App() {

    return (
        <Provider store={store}>
            <Search/>
            <SearchResults/>
            <View/>
        </Provider>
    );
}

export default App;
