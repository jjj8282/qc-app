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
        document.getElementById("quiz-screen").style.display = "block";
        //最初の問題を表示
        showQuestion();
    }else{
        //エラーメッセージを表示//
        document.getElementById("password-error").style.display = "block";
    }
});

//-----問題データ（画像パスだけ入れる）-----//
const questions = [
    {
        questionImg: "images_graph/問題1.png",
        choices: [
            "images_graph/折れ線ボタン.png",
            "images_graph/棒ボタン.png",
            "images_graph/円ボタン.png",
            "images_graph/ヒストグラムボタン.png"
        ]
    },
];

//-----ランダムに10問選ぶ-----//
const shuffleQuestion = questions.sort(()=>Math.random()-0.5).slice(0,10);
//現在の問題番号
let currentIndex = 0;

//-----第何問かを表示しつつ問題をセット-----//
function showQuestion(){
    //第○問の表示（1から数える）
    document.getElementById("question-count").textContent =
        `第 ${currentIndex + 1}問`;

    //問題画像の表示
    document.getElementById("question-image").src =
        shuffleQuestion[currentIndex].questionImg;
    
    //選択肢画像の表示
    const choiceButtons = 
        document.querySelectorAll(".choice-btn img");
    shuffleQuestion[currentIndex].choices.forEach((imgpath,i) => {
        choiceButtons[i].src = imgpath;
    });

}