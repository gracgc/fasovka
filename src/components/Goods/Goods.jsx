import React from "react";
import c from './Goods.module.css'
import Good from "./Good/Good";
import GoodsMenu from "./GoodsMenu/GoodsMenu";

const Goods = (props) => {


    return (
        <div className={c.goods}>
            <div>
                {(props.filteredGoods || props.goods).map(g => <Good key={g.id} name={g.name} type={g.type} weight={g.weight} img={g.img}/>)}
            </div>

            <div>
                <GoodsMenu setFilteredGoods={props.setFilteredGoods} goods={props.goods}/>
            </div>
        </div>

    )
};

export default Goods;
