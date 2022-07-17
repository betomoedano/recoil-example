import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { postListState } from "../atoms/postListState";

export function PostCreator() {
    const [title, setTitle] = useState("");
    const setPostListState = useSetRecoilState(postListState);

    function handleSubmit(e) {
        e.preventDefault();
        setPostListState(prev => [...prev, { title }]);
        setTitle("");
    }

    function onChange({ target: { value } }) {
        setTitle(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={onChange}
                className="input"
            />
            <button type="submit">Create Post</button>
        </form>
    );
}
