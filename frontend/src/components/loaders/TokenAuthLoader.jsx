import React from "react";
import { useSelector } from "react-redux";
import "../../styles/loaderStyles/tokenAuthLoader.css";

export default function TokenAuthLoader() {
    const display = useSelector(state=>state.loaders.authorization.tokenLoader.displayLoader);
    if(display){
        return (
            <div className="full-page absolute not-blank">
            <div className="absolute mid">
                <div className="lds-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        )
    }
    return null
}
