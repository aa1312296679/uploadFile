var express = require('express');
var router = express.Router();
const controlIndex=require('./../controllers/index');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '文件上传' });
});

//导入上传组件
const upload = require('./fileUploads');

//注：不管是single还是array
//设置的filedName必须和上传信息中的键对值的键名同保持一致
//所有的上传文件都会被封装为键对值的形式以json格式被封装到request后上传到服务器

/**
 * 上传单个文件的文件处理
 */
router.post('/fileUpload',upload.single('myfile'),function (req, res) {
    controlIndex.fileUpload(req,res);
});

/**
 * 处理多个上传文件
 */
router.post('/filesUpload',upload.array('myFiles',4),function (req, res) {
    controlIndex.filesUpload(req,res);
});


module.exports = router;
