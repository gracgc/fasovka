import React from "react";

const Good = (props) => {
    return (
        <div style={{padding: "50px"}}>
            <div style={{display: "inline-flex"}}>
                <div style={{width: "100px", height: "100px", border: "solid 2px black"}}>
                    <img style={{height: "100%", width: "100%"}} src={props.img} alt=""/>
                </div>
                <div style={{marginTop: "20px", marginLeft: "20px"}}>
                    <b>{props.name}</b> <br/>
                    Варианты веса: {props.weight.map(w => <div style={{display: "inline-flex", margin: "20px"}}>
                    {w} кг
                </div>)}
                </div>
            </div>
        </div>
    )
};

export default Good;
