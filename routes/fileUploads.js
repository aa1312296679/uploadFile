//导入multer上传组件
var multer = require('multer');

var storage = multer.diskStorage({
    //设置上传文件的存储路径
    destination: function (req, file, cb) {
        //存储路径以当前的项目文件根路径为起始路径，不是以文件路径为准
        cb(null, './public/uploads');
    },
   //设置上传文件的文件名
    filename: function (req, file, cb) {
        //为避免上传文件的文件名重复，将所有的上传文件的文件名转化为时间格式
        var str = file.originalname.split('.')
        cb(null, Date.now() + '.' + str[1]);
    }
});

//将上传配置配置到multer组件
module.exports= multer({
    storage: storage,
});
