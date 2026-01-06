import api from "../api/api"
export const SET_USERS = "SET_USERS"
export const SELECT_USER = "SELECT_USER"
export const SET_SEARCH = "SET_SEARCH"

export const fetchUsers = () => {
    return async (dispatch) => {
        const res = await api.get("/users")
        console.log("api data:", res.data) 
        dispatch({
            type:  SET_USERS ,
            payload: res.data,
        })

    }
}
export const selectedUser = (user) => ({
    type: SELECT_USER,
    payload: user,
})

export const setSearch = (text) => ({
    type: SET_SEARCH,
    payload: text,
});