module.exports = {
    lintOnSave:false, //关闭ESLint的规则检查
    //lintOnSave:'warning',//输出提示错误,但项目继续运行
    devServer: { //只用于开发幻境
        proxy: {
            '/api': {     //这里最好有一个 /
                target: 'http://39.99.186.36',  // 后台接口域名
                changeOrigin: true,  //是否跨域
                pathRewrite:{
                    '^/api':''
                }
            }
        }
      }
}