import React from "react";
import c from './Goods.module.css'
import Good from "./Good/Good";

const Goods = (props) => {
    return (
        <div className={c.goods}>
            {props.goods.map(g => <Good key={g.id} name={g.name} type={g.type} cost={g.cost} img={g.img}/>)}
        </div>
    )
};

export default Goods;
