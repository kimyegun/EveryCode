const express = require('express');  //express라이브러리 첨부확인
const app = express(); //새로운객체 생성

app.listen(8080, function(){
    console.log('listening on 8080')
});

//서버에서 node.js를 띄우기 위한 기본문법

//누군가가 /pet 으로 방문을 하면 ..app pet관련된 안내문을 띄워주자.

app.get('/pet', function(req, res){
    res.send('펫용품 쇼핑할 수 있는 페이지 입니다.')

});

app.get('/beauty', function(req, res){
    res.send('뷰티용퓸 쇼핑페이지 입니다.')

});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html') //html 파일 보내기

});

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html') //html 파일 보내기

});