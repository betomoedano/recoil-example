import { atom } from "recoil";

// Atoms contain the source of truth for our application state. 
// In our todo-list, the source of truth will be an array of objects, 
// with each object representing a todo item.

export const postListState = atom({
    key: "postList",
    default: [],
});