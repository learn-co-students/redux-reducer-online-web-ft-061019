// write a function called manageFriends, 
// initial state should be an object with a key friends, set to an empty array
export function manageFriends(state = {friends: []}, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return (
                { friends: [...state.friends, action.friend]
                }
            )

        case 'REMOVE_FRIEND':
            const pluckIndex = state.friends.findIndex(friend =>
                friend.id === action.id)
            return (
                {...state, friends: [...state.friends.slice(0, pluckIndex), ...state.friends.slice(pluckIndex + 1)] }
            )

        default:
            return (
                state
            )
    }
}
