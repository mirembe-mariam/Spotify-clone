export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token:'BQA7a9xXfw9mcRbuJDlkz4BDlOOdozsFeQX0yNzJ_Nxz99fPJ6…-4VHkLL1CTOh0PjkBYXjeptkMI38Rc7LGQXVwZciold7JA4xw'
};
const reducer = (state, action) => {
console.log(action);

switch(action.type){
case "SET_USER":
    return{
        ...state,
        user: action.user,
    };
    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token,
        }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
    default:
        return state;
}
}
export default reducer;