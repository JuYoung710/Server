import MongoDB from "mongodb"
import { getUsers } from "../db/database.mjs"

const ObjectId = MongoDB.ObjectId


// 중복체크시 호출할 함수
export async function findByUserid(userid) {
    return getUsers().find({ userid }).next().then(mapOptionalUser)
}
// next함수를 호출하면 다음 함수랑 연결시켜줌
// userid를 찾아서 성공했다면 userid를 mapOptionalUser에 넣으라는 의미


// 회원가입시 호출할 함수
export async function createUser(user) {
    // 제대로 MongoDB에 삽입되었는지 확인
    return getUsers().insertOne(user).then((result) => result.insertedId.toString())
}

function mapOptionalUser(user) {
    return user ? { ...user, id: user._id.toString() } : user
}
// _id 는 Object의 id를 의미
