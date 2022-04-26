import React from "react";


export default function Zar (props){
const styles = {
    backgroundColor: props.zarSalvat ? "green" : "white"
}

    return (
        <div className="fata-zar" style={styles}
        onClick={props.zarRetinut}
        >
            <h2 className="numar-zar">{props.value}</h2>
        </div>
    )
}