import { useRecoilValue } from "recoil";
import { PostItem } from "./PostItem";
import { postListState } from "../atoms/postListState";

export function PostList() {
    const postList = useRecoilValue(postListState);
    return (
        <ul>
            {postList.map((post, index) => <PostItem key={index} post={post} />)}
        </ul>
    );
}