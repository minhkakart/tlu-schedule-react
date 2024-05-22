
import {UPDATE_SUBJECTS} from './constants'

const initState = {
    subjects: []
}
const reducer = (state, action)=>{
    switch (action.type){
        case UPDATE_SUBJECTS:
            return {
                subjects: action.data
            }
        default:
            throw new Error('Invalid action')
    }
}
export {initState};
export default reducer;