import React from "react";

const Good = (props) => {
    return (
        <div style={{padding: "50px"}}>
            <div style={{display: "inline-flex"}}>
                <div style={{width: "100px", height: "100px", border: "solid 2px black"}}>
                    <img style={{height: "100%", width: "100%"}} src={props.img} alt=""/>
                </div>
                <div style={{marginTop: "20px", marginLeft: "20px"}}>
                    Название: {props.name} <br/>
                    Тип: {props.type} <br/>
                    Цена: {props.cost} рублей
                </div>
            </div>
        </div>
    )
};

export default Good;
