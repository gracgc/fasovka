const SET_FILTERED_GOODS = 'SET_FILTERED_GOODS';


let initialState = {
    goods: [
        {
            id: 1,
            name: "гречка",
            type: "гречка",
            img: "https://icdn.lenta.ru/images/2020/03/18/16/20200318162106789/square_320_d8951e04c7f84ede9bc0de650bffc3ea.png"
        },
        {
            id: 2,
            name: "рис",
            type: "рис",
            img: "https://eda.ru/img/eda/1200x-i/s1.eda.ru/StaticContent/Photos/120214140918/130320124922/p_O.jpg"
        },
        {
            id: 3,
            name: "перловка",
            type: "перловка",
            img: "https://zdorovsko.ru/wp-content/uploads/2009/01/perlovka_.jpg"
        },
        {
            id: 4,
            name: "сахар",
            type: "сахар",
            img: "https://kubnews.ru/upload/iblock/e6b/e6b619b36524e0f4dde0d355eac5907e.jpg"
        },
        {
            id: 5,
            name: "гречка2",
            type: "гречка",
            img: "https://icdn.lenta.ru/images/2020/03/18/16/20200318162106789/square_320_d8951e04c7f84ede9bc0de650bffc3ea.png"
        },
        {
            id: 6,
            name: "рис2",
            type: "рис",
            img: "https://eda.ru/img/eda/1200x-i/s1.eda.ru/StaticContent/Photos/120214140918/130320124922/p_O.jpg"
        },
        {
            id: 7,
            name: "перловка2",
            type: "перловка",
            img: "https://zdorovsko.ru/wp-content/uploads/2009/01/perlovka_.jpg"
        },
        {
            id: 8,
            name: "сахар2",
            type: "сахар",
            img: "https://kubnews.ru/upload/iblock/e6b/e6b619b36524e0f4dde0d355eac5907e.jpg"
        }
    ],
    filteredGoods: null
};

const goodsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FILTERED_GOODS:
            if (action.filterName) {
                return {
                    ...state,
                    filteredGoods: state.goods.filter(g => (g.type == action.filterName))
                };
            } else {
                return {
                    ...state,
                    filteredGoods: null
                }
            }

        default:
            return state;
    }
};

export const setFilteredGoods = (filterName) => ({type: SET_FILTERED_GOODS, filterName});

export default goodsReducer;

