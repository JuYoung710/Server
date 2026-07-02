import express from "express"
import { config } from "./config.mjs"  // config파일에서 export config를 가져옴
import { connectDB } from "./db/database.mjs"
import authRouter from "./router/auth.mjs"
import postsRouter from "./router/posts.mjs"

const app = express()

app.use(express.json())
app.use("/auth", authRouter )
app.use("/posts", postsRouter)

app.use((req, res) => {
    res.sendStatus(404)
})
connectDB().then(() => {
    app.listen(config.host.port, () => {
        console.log("DB/웹 서버 실행 중...")
    })
}).catch(console.error)  // 약식