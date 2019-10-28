export function managePresents(state, action){
    switch (action.type){
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1 }
            default:
                return state;
    }
}



/*
1) managePresents
       returns the existing state if the action's type doesn't match a type in the reducer:

       2.managePresents
       increases the number of presents if there the action's type is 'INCREASE'
*/