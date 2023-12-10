module.exports = {
    // 成功提示
    APISuccess(msg = 'success', data = '', code = 200) {
        this.body = {
        msg,
        data
    }
        this.status = code
     },
    // 失败提示
    APIError(msg = 'error', data = '', code = 400) {
        this.body = {
        msg,
        data
        }
        this.status = code
     }
   }
   
