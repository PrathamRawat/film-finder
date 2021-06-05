import React from 'react';
import {Provider} from "react-redux";
import store from "./app/store";
import Search from "./app/components/search/search";
import SearchResults from "./app/components/search/searchResults";
import View from "./app/components/view/view";
import Header from "./app/components/ui/header";

function App() {

    return (
        <Provider store={store}>
            <Header/>
            <Search/>
            <SearchResults/>
            <View/>
        </Provider>
    );
}

export default App;
