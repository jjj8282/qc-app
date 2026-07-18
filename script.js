//-----パスワード認証-----//
//変数にパスワードを設定//
const CORRECT_PASSWORD = "jjj";

//「送信ボタン」が押された際の処理//
document.getElementById("password-btn").addEventListener("click",function(){
    //入力されたパスワードを取得//
    const   input = document.getElementById("password-input").value;
    //パスワード判定//
    if(input===CORRECT_PASSWORD){
        //パスワード画面を非表示にする//
        document.getElementById("password-screen").style.display = "none";
        //メイン画面を表示//
        document.getElementById("main-screen").style.display = "block";
    }else{
        //エラーメッセージを表示//
        document.getElementById("password-error").style.display = "block";
    }
});