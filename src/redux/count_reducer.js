const INIT_STATE = 0
/**
 *
 * 创建为 count 服务的reducer，本质是一个函数
 * @param preState 之前的状态
 * @param action 操作对象
 */
export default function countReducer(preState = INIT_STATE, action) {
    const {type, data} = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}