import { SET_PARTNER, CLEAR_PARTNER, JOIN_ROOM } from '../actions/actionTypes';

const INITIAL_STATE = { id: null, name: '', language: '', skillLevel: '', github_handle: null, profile_url: null, roomID: '' }

export default function(state = INITIAL_STATE, action) {
	switch(action.type){
		case SET_PARTNER:
			return {...state, id: action.payload.id, name: action.payload.name, language: action.payload.language, skillLevel: action.payload.skillLevel, profile_url: action.payload.profile_url };

		case CLEAR_PARTNER:
			return {...state, id: null, name: '', language: '', skillLevel: '', github_handle: null, profile_url: null, roomID: '' };

		case JOIN_ROOM:
			return {...state, roomID: action.payload.roomID };

		default:
			return state;
	}
}