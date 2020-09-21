import React from "react";
import c from '../Goods.module.css'

const GoodsMenu = (props) => {

    let menuName = [... new Set(props.goods.map(g => g.type))];

    return (
        <div style={{paddingTop: "50px"}}>

            <div className={c.goodsMenuItem} activeClassName={c.activeMenu} onClick={(e) => props.setFilteredGoods(null)}>
                <b>Все товары</b>
            </div>

            {menuName.map(mn => <div className={c.goodsMenuItem} onClick={(e) => props.setFilteredGoods(mn)}>
                {mn.toUpperCase()}
            </div>)}

        </div>
    )
};

export default GoodsMenu;
