/**
 * 处理单个上传文件
 * @param req
 * @param res
 */
module.exports.fileUpload=function (req, res) {
    //获取单个上传文件的文件信息通过file获取
    console.log(req.file);
}

/**
  处理多个上传文件
 @param req
 @param res
 **/
module.exports.filesUpload=function (req, res) {
    //获取多个上传文件
    console.log(req.files);
}