import express from "express"
import { isAuth } from "../middleware/auth.mjs"
import * as postController from "../controller/posts.mjs"

const router = express.Router()

// 전체 포스트 가져오기
// http://127.0.0.1:8080/post (GET)
// http://127.0.0.1:8080/post?userid=apple (GET)
router.get("/", isAuth, postController.getPosts)

// 글번호에 대한 포스트 가져오기

// 포스트 작성
// http://127.0.0.1:8080/post
router.post("/", isAuth, postController.createPost)

// 포스트 수정

// 포스트 삭제


export default router