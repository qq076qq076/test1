import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import MainLayout from "./layout/logIned/MainLayout";

class App extends React.Component {
    public render() {
        if (this.checkLogin()) {
            return (
                <BrowserRouter>
                    <MainLayout />
                </BrowserRouter>
            );
        } else {
            return (
                <BrowserRouter>
                    <MainLayout />
                </BrowserRouter>
            );
        }
    }

    private checkLogin() {
        return true;
    }
}

export default App;
