import {UPDATE_SUBJECTS} from './constants'
export const updateSubjects = (data)=>{
    return {
        type: UPDATE_SUBJECTS,
        data
    }
}