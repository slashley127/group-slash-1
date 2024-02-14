import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const goNavigate = (Component) => {
    return (props) => {
        const navigation = useNavigate();

        return <Component navigation={navigation} {...props} />
    }
}

export default goNavigate;