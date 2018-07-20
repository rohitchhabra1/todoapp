
const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

const addtodo = (text,id) => {
    return {
        type:ADD_TODO,
        text,id
    }
}

const edittodo = (text,id) => {
    return{
        type:EDIT_TODO,
        text,id
    }
}

const toggletodo = (id) => {
    return{
        type:TOGGLE_TODO,
        id
    }
}