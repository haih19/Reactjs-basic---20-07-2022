import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";


class Home extends React.Component {



    render() {
        return (
            <>
                Hello World from home
            </>
        )
    }
}

export default Color(Home);