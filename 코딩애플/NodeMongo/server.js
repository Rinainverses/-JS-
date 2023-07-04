const express = require("express");
const app = express();


app.use(express.urlencoded({extended: true})) 
//bodyParser는 요청데이터(req) 해석을 쉽게 도와준다


app.listen(8080, function() {
  console.log('listening on 8080');
});

//8080 port로 웹서버를 열고 잘 열리면 listening on 8080을 출력
//node server.js를 터미널에 입력


/*
누군가가 /pet (url)으로 방문을하면 pet관련 안내문을 띄워준다. 
*/

app.get('/pet', function(요청, 응답){
  응답.send('펫용품 쇼핑 페이지입니다.');
});

//요청 (request), 응답(response)
app.get('/beauty', function (req, res) {
  res.send('뷰티용품 사세요');
})

//   /npm i -g nodemon 저장을 하면 js파일이 저장 될 때 마다 서버를 재실행 해준다.
//   여기서 -g는 모든 폴더에서 nodemon이 사용되게 설치해주세요.

app.get('/', function (req, res) {  // '/'하나는 홈페이지를 뜻한다.
  res.sendFile(__dirname + '/index.html') // get 요청 시 html 파일 보내준다.
})

app.get('/write', (req, res) => {
  res.sendFile(__dirname + '/write.html');
})

//어떤 사람이 /add 경로로 POST 요청을 하면...
//?? 를 해주세요~
app.post('/add', (req, res) => {
  res.send('전송완료');
  console.log(req.body);
  console.log(req.body.title);
  console.log(req.body.date);//각각의 결과값을 확인
  //input창에 data를 입력하면 어떤식으로 data가 나오는지 확인한다.

}) //write 페이지에서 sunmit 버튼을 누르면 /add의 페이지에 전송완료가 표시 된다.
//여기서 input값은 res(요청)에 저장되어있고 꺼내 쓰려면 라이브러리가 필요함
//npm i body-parser를 설치하면 된다.
//bodyparser는 express에 기본 포함이라 npm으로 설치 안해도 됨
//단 app.use를 사용하여 앱 실행은 해줘야한다.
