const ___DESIGN___ = "Artplay Korea";

/*

Made && Designed By Padengli

SourceCode Written in Javascript

Whole SourceCode Licensed [ GPL v3 ]

Module Made by : Storycraft => node-kakao@3.1.8

ONLY FOR PAID USERS || FREE USE NOT ALLOWED

SCNAME : Node-Kakao v3 (Top Version in v3)

Find more examples at Github - Storycraft

*/





const [email, pw] = ["이메일", "비밀번호"];

const admin = ["375060751"];

/// [ "" 안에 아이디를 넣어서 관리자 기능을 사용할 수 있어요 ]

/// [ 아이디 넣는 개수는 제한 없음 ]





// 이 밑은 수정하지 말것!

const node_kakao = require("node-kakao"); // 모듈 불러오기 [ node-kakao ]

const moveClientVersion = { version: "3.2.6", appVersion: "3.2.6.2748", xvcSeedList: ["KEPHA", "HALEY"] };

const client = new node_kakao.TalkClient("AAC", "RP8glOE++C101joUpgz9qVmo/62DJTuruRMRXDWH/lkp53UCb9aPfuNBNDjDCeT8f7yoxN9tDWXvCXMq+Vv2Sw==", moveClientVersion);

const u200b = "\u200b".repeat(500);



let messages = {};

let Hider = {};

let Detect = {};

let readMessage = {};



client.login(email, pw, true).then(function () {

console.log("로그인 성공!");

}).catch(function (error) {

if (error.status === -100) {

const readLine = require("readline");

const rl = readLine.createInterface({

input: process.stdin, output: process.stdout

});

client.Auth.requestPasscode(email, pw);

rl.question("PASSCODE: ", function (answer) {

client.Auth.registerDevice(answer, email, pw, true).then(function (res) {

console.log(res);

console.log("스크립트를 재 시작 해주세요.");

process.exit();

});

});

} else console.log(JSON.stringify(error, null, 2));

});
