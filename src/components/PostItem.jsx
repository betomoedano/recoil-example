import { useRecoilState } from "recoil";
import { postListState } from "../atoms/postListState";

export function PostItem({ post }) {
    const [postList, setPostList] = useRecoilState(postListState);

    return (
        <ol className="postItem">
            {post.title}
            <button onClick={() => setPostList(prev => prev.filter(p => p !== post))}>
                Delete
            </button>
        </ol>
    )

}