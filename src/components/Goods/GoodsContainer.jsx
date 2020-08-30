import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Goods from "./Goods";

class GoodsComponent extends React.Component {

    render() {
        return <>
            <Goods {...this.props} goods={this.props.goods}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goodsPage.goods
    }
};

export default compose(
    connect(mapStateToProps))
(GoodsComponent);
