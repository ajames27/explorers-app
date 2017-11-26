import React from "react";
import { Font } from "expo";

import MainScreen from "./src/mainScreen";

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
            BaskervilleFreeBold: require("./assets/BaskervilleBold.otf"),
            BaskervilleFree: require("./assets/Baskerville.otf"),
        });

        this.setState({ fontLoaded: true });
    }
    render() {
        return this.state.fontLoaded ? <MainScreen /> : null;
    }
}
