import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Goods from "./Goods";
import {setFilteredGoods} from "../../redux/goods_reducer";

class GoodsComponent extends React.Component {

    render() {
        return <>
            <Goods {...this.props} goods={this.props.goods}
                   filteredGoods={this.props.filteredGoods} setFilteredGoods={this.props.setFilteredGoods}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goodsPage.goods,
        filteredGoods: state.goodsPage.filteredGoods
    }
};

export default compose(
    connect(mapStateToProps, {setFilteredGoods}))
(GoodsComponent);
