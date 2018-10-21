import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat(
                    {
                        name: action.placeName,
                        key: Math.random().toString(),
                        image: action.placeImage
                    })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== action.placeKey;
                })
            };
        default:
            return state;
    }
};

export default reducer;