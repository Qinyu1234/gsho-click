//这个函数是让用户获取唯一标识
//第一步:现冲localStorage去获取,如果没有
//第二部:在调用uuid创建新的,并且春触到localStorage中
import { v4 as uuidv4 } from 'uuid';


function getUserTempId(){
    let uuidTempId = localStorage.getItem('USERTEMPID_KEY')
    if(!uuidTempId){
        uuidTempId = uuidv4(); 
        localStorage.setItem('USERTEMPID_KEY',uuidTempId) 
    }
    return uuidTempId
}

export {
    getUserTempId
}