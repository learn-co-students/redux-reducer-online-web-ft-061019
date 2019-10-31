
export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            const {name, hometown, id} = action.friend

            const newFriend = {
               name: name,
               hometown: hometown,
               id: id
            }
   
            const newFriendsArr = [...state.friends, newFriend]
            return {friends: newFriendsArr}
            break
        case 'REMOVE_FRIEND':
          const idToFind = action.id 
          const updatedFriendsArr = [...state.friends]
          const indexToDelete = updatedFriendsArr.findIndex(friend => friend.id === idToFind)
          updatedFriendsArr.splice(indexToDelete, 1)
          return {friends: updatedFriendsArr }
          break;
        default:
          return state;
    }
}
