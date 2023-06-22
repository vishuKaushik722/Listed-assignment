import React from "react";
import { useLocation } from "react-router-dom";

const MainScreen = () => {

    const {state} = useLocation();
    console.log(state);

    return  (
        <>
            {!state ? <h2>You have to login first</h2> : 
            <div>
                <div>Main Page</div>
            </div>
            }
        </>
    )
}

export default MainScreen;