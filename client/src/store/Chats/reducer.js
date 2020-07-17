import {SET_CHATS, SET_FIND_CHATS, SET_OPEN_CHAT} from "./action";

const defaultState = {
    chats: [],
    findChats: [],
    openChat: null
};

export const chatsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CHATS:
            return {
                ...state,
                chats: action.payload
            };
        case SET_FIND_CHATS:
            return {
                ...state,
                findChats: state.chats.filter(chat => {
                    const titleChat = chat.title.toLowerCase();
                    if(action.payload === '') {
                        return state.chats;
                    }
                    if(titleChat.indexOf(action.payload.toLowerCase()) !== -1) {
                        return chat;
                    }
                    console.log(titleChat.indexOf(action.payload.toLowerCase()) !== -1)
                })
            };
        case SET_OPEN_CHAT:
            return {
                ...state,
                openChat: action.payload
            };
        default:
            return state;
    }
};