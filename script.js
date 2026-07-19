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

//-----問題データ（画像パスだけ入れる）-----//
const questions = [
    {
        //問題画像
        questionImg: "images_graph/問題1.png",
        //選択肢画像
        choices: [
            "images_graph/折れ線ボタン.png",
            "images_graph/棒ボタン.png",
            "images_graph/円ボタン.png",
            "images_graph/ヒストグラムボタン.png"
        ],
        //正解画像
        correct: "images_graph/折れ線ボタン.png",
        //不正解
        wrongPages:{
            "images_graph/棒ボタン.png":{
                img:"images_graph/問1棒グラフ.png",
                Comment:"（解説）<br>惜しい！<br>比較はできますが時間による変化が<br>分かりにくくなります。"
            },
            "images_graph/円ボタン.png":{
                img:"images_graph/問1円グラフ.png",
                Comment:"（解説）<br>円グラフは割合を表すグラフなので、<br>時間の変化を表すには適しません。"
            },
            "images_graph/ヒストグラムボタン.png":{
                img:"images_graph/問1ヒストグラム.png",
                Comment:"（解説）<br>データのバラツキを見るグラフです。<br>時間の変化を見ることはできません。"
            }
        }
    }
    //★ここに問題を追加
];

//-----ランダムに10問選ぶ-----//
const shuffleQuestion = questions.sort(()=>Math.random()-0.5).slice(0,10);
//現在の問題番号
let currentIndex = 0;
let shuffledChoices = [];
//-----第何問かを表示しつつ問題をセット-----//
function showQuestion(){
    //第○問の表示（1から数える）
    document.getElementById("question-count").textContent =
        `第 ${currentIndex + 1}問`;

    //問題画像の表示
    document.getElementById("question-image").src =
        shuffleQuestion[currentIndex].questionImg;
    
    //選択肢をランダムに並び替える
    shuffledChoices = [...shuffleQuestion[currentIndex].choices].sort(() => Math.random()-0.5);
    //選択肢画像の表示
    const choiceButtons = 
        document.querySelectorAll(".choice-btn img");
    shuffledChoices.forEach((imgpath,i) => {
        choiceButtons[i].src = imgpath;
    
    });

}

//-----グラフクイズが押された場合の処理-----//
document.getElementById("quiz-btn").addEventListener("click",function(){
    //メインメニューを非表示
    document.getElementById("main-screen").style.display = "none";
    //クイズ画面を表示
    document.getElementById("quiz-screen").style.display = "block";
    //最初の問題を表示
    showQuestion();
});


//-----選択肢を押したときの判定処理-----//
function checkAnswer(choiceIndex){
    //今の問題を取得
    const q = shuffleQuestion[currentIndex];
    //押された選択肢の画像パス
    const selectedImg = shuffledChoices[choiceIndex];
    //正解判定
    if (selectedImg === q.correct){
        showCorrectScreen();
    }else{
        showWrongScreen(selectedImg);
    }
}

//-----正解ページを表示-----//
function showCorrectScreen(){
    //クイズ画面を非表示
    document.getElementById("quiz-screen").style.display = "none";
    //回答画面表示
    document.getElementById("answer-screen").style.display = "block";
    //タイトル変更
    document.getElementById("answer-title").textContent = "○正解○";
    document.getElementById("answer-graph").src = 
        shuffleQuestion[currentIndex].correct;
    document.getElementById("answer-comment").innerHTML=
        "（解説）<br>時間による変化を表すデータなので折れ線グラブが最適！<br>増減や傾向が一目でわかりやすいですね。";
}

//-----不正解ページ表示-----//
function showWrongScreen(selectedImg){
    const q = shuffleQuestion[currentIndex];
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("answer-screen").style.display = "block";
    document.getElementById("answer-title").textContent ="×残念×"
    const wrongData = q.wrongPages[selectedImg];
    document.getElementById("answer-graph").src = wrongData.img;
    document.getElementById("answer-comment").innerHTML = wrongData.Comment;
}


//-----ボタンにイベント設定-----//
//選択肢ボタン
document.querySelectorAll(".choice-btn").forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        checkAnswer(index);
    });
});

//次へボタン
document.getElementById("next-btn").addEventListener("click",gotoNextQuestion);
