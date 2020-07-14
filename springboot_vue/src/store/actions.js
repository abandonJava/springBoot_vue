import {RECEIVE_USER_INFO} from "./mutation-types";

export default {
    recordUserInfo({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    }
}