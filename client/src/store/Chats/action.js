
export const SET_CHATS = 'SET_CHATS';
export const SET_FIND_CHATS = 'SET_FIND_CHATS';
export const SET_OPEN_CHAT = 'SET_OPEN_CHAT';

const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats
});

const setFindChats = (findChats) => ({
   type: SET_FIND_CHATS,
    payload: findChats
});

const setOpenChat = (openChat) => ({
   type: SET_OPEN_CHAT,
   payload: openChat
});



export const getChats = (chats) => (dispatch) => {
    dispatch(setChats(chats));
};

export const getFindChats = (searchWord) => (dispatch) => {
    dispatch(setFindChats(searchWord));
};

export const getOpenChat = (openChat) => (dispatch) => {
  dispatch(setOpenChat(openChat))
};