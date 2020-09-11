import React from "react";
import c from '../Goods.module.css'

const GoodsMenu = (props) => {


    return (
        <div style={{paddingTop: "50px"}}>
            <div className={c.goodsMenuItem} onClick={(e) => props.setFilteredGoods(null)}>
                Все товары
            </div>
            <div className={c.goodsMenuItem} onClick={(e) => props.setFilteredGoods('рис')}>
                Рис
            </div>
            <div className={c.goodsMenuItem} onClick={(e) => props.setFilteredGoods('гречка')}>
                Гречка
            </div>
            <div className={c.goodsMenuItem} onClick={(e) => props.setFilteredGoods('сахар')}>
                Сахар
            </div>
            <div className={c.goodsMenuItem} onClick={(e) => props.setFilteredGoods('перловка')}>
                Перловка
            </div>
        </div>
    )
};

export default GoodsMenu;
