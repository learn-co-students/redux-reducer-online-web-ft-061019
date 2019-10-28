export function manageFriends(state = {friends: []}, action) {
    switch(action.type) {
        case "ADD_FRIEND":
        return (
          {...state, friends: [...state.friends, action.friend ]
          }
      )
      case "REMOVE_FRIEND":
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        return (
          {...state, friends: [...state.friends.slice(0, removalIndex),...state.friends.slice(removalIndex + 1)]
          }
        )
        default:
        return state;
    }
  };
/*

1) manageFriends
returns the existing state if the action's type doesn't match a type in the reducer:


2) adds the friend when type is 'ADD_FRIEND' and the action has a friend property with a name, hometown and id

3) removes the friend when action type is 'REMOVE_FRIEND' and the action has a property of the friends id to be removed:
*/
