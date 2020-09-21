const SET_FILTERED_GOODS = 'SET_FILTERED_GOODS';


let initialState = {
    goods: [
        {
            id: 1,
            name: "Геркулес Алтай",
            type: "геркулес",
            weight: [0.4, 0.8, 5, 6, 10, 30],
            img: ""
        },
        {
            id: 2,
            name: "Горох",
            type: "горох",
            weight: [0.8, 10.5],
            img: ""
        },
        {
            id: 3,
            name: "Гречка",
            type: "гречка",
            weight: [0.8, 10.5],
            img: ""
        },
        {
            id: 4,
            name: "Гречневый продел",
            type: "гречка",
            weight: [0.7, 45],
            img: ""
        },
        {
            id: 5,
            name: "Манка",
            type: "манка",
            weight: [0.7, 8.5],
            img: ""
        },
        {
            id: 6,
            name: "Перловка",
            type: "перловка",
            weight: [0.8, 10.5],
            img: ""
        },
        {
            id: 7,
            name: "Пшеничка",
            type: "пшеничка",
            weight: [0.7, 8.5],
            img: ""
        },
        {
            id: 8,
            name: "Ячка",
            type: "ячка",
            weight: [0.7, 8, 40, 50],
            img: ""
        },
        {
            id: 9,
            name: "Пшено",
            type: "пшено",
            weight: [0.8, 10.5],
            img: ""
        },
        {
            id: 10,
            name: "Кукуруза",
            type: "кукуруза",
            weight: [0.7, 50],
            img: ""
        },
        {
            id: 11,
            name: "Рис круглый",
            type: "рис",
            weight: [0.8, 10, 25, 50],
            img: ""
        },
        {
            id: 12,
            name: "Рис длинный",
            type: "рис",
            weight: [0.8, 10, 25, 50],
            img: ""
        },
        {
            id: 13,
            name: "Рис пропаренный",
            type: "рис",
            weight: [0.8, 10, 25, 50],
            img: ""
        },
        {
            id: 14,
            name: "Рис дробленый",
            type: "рис",
            weight: [50],
            img: ""
        },
        {
            id: 15,
            name: "Фасоль белая",
            type: "фасоль",
            weight: [0.8],
            img: ""
        },
        {
            id: 16,
            name: "Фасоль красная",
            type: "фасоль",
            weight: [0.8],
            img: ""
        },
        {
            id: 17,
            name: "Чечевица",
            type: "чечевица",
            weight: [0.7],
            img: ""
        },
        {
            id: 18,
            name: "Крахмал картофельный",
            type: "крахмал",
            weight: [0.5, 25],
            img: ""
        },
        {
            id: 19,
            name: "Мука Алтай",
            type: "мука",
            weight: [1, 2, 5, 10, 50],
            img: ""
        },
        {
            id: 20,
            name: "Мука Елецкая",
            type: "мука",
            weight: [2.5],
            img: ""
        },
        {
            id: 21,
            name: "Мука Макфа",
            type: "мука",
            weight: [1.2],
            img: ""
        },
        {
            id: 22,
            name: "Сахар песок",
            type: "сахар",
            weight: [0.8, 3.5, 10, 50],
            img: ""
        },
        {
            id: 23,
            name: "Сахар Рафинад",
            type: "сахар",
            weight: [0.5, 1],
            img: ""
        },
        {
            id: 24,
            name: "Сахар твердый",
            type: "сахар",
            weight: [0.8, 25],
            img: ""
        },
        {
            id: 25,
            name: "Соль Илецкая",
            type: "соль",
            weight: [1],
            img: ""
        },
        {
            id: 26,
            name: "Сода",
            type: "сода",
            weight: [0.5],
            img: ""
        },
        {
            id: 27,
            name: "Ролтон отходы",
            type: "прочее",
            weight: [],
            img: ""
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

