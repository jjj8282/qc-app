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
        correct:"images_graph/折れ線ボタン.png",
        correctPage:{
            img:"images_graph/問1正解.png",
            Comment:"（解説）<br>時間による変化を表すデータなので<br>折れ線グラブが最適！<br>増減や傾向が一目でわかりやすいですね。"
        },
        //不正解
        wrongPages:{
            "images_graph/棒ボタン.png":{
                img:"images_graph/問1棒グラフ.png",
                Comment:"（解説）<br>惜しい！<br>正解は折れ線グラフ！<br>棒グラフは比較はできますが<br>時間による変化が分かりにくくなります。"
            },
            "images_graph/円ボタン.png":{
                img:"images_graph/問1円グラフ.png",
                Comment:"（解説）<br>正解は折れ線グラフ！<br>円グラフは割合を表すグラフなので、<br>時間の変化を表すには適しません。"
            },
            "images_graph/ヒストグラムボタン.png":{
                img:"images_graph/問1ヒストグラム.png",
                Comment:"（解説）<br>正解は折れ線グラフ！<br>ヒストグラムは<br>データのバラツキを見るグラフです。<br>時間の変化を見ることはできません。"
            }
        }
    },
    {
        //問題画像
        questionImg: "images_graph/問題2.png",
        //選択肢画像
        choices: [
            "images_graph/円ボタン.png",
            "images_graph/パレート図ボタン.png",
            "images_graph/折れ線ボタン.png",
            "images_graph/散布図ボタン.png"
        ],
        //正解画像
        correct:"images_graph/円ボタン.png",
        correctPage:{
            img:"images_graph/問2正解.png",
            Comment:"（解説）<br>全体に対する割合を表すデータのため<br>円グラフが最適！<br>それぞれの割合が一目でわかりますね！"
        },
        //不正解
        wrongPages:{
            "images_graph/パレート図ボタン.png":{
                img:"images_graph/問2パレート図.png",
                Comment:"（解説）<br>惜しい！<br>正解は円グラフ！<br>パレート図は件数と割合を<br>優先順位をつけて表すグラフです。<br>割合だけでは使えません。"
            },
            "images_graph/折れ線ボタン.png":{
                img:"images_graph/問2折れ線グラフ.png",
                Comment:"（解説）<br>正解は円グラフ！<br>折れ線グラフは時間による変化を表すので<br>割合を見るのに適していません。"
            },
            "images_graph/散布図ボタン.png":{
                img:"images_graph/問2散布図.png",
                Comment:"（解説）<br>正解は円グラフ！<br>散布図は2つデータの関係を見るグラフです。<br>今回のデータでは使えません。"
            }
        }
    },
    {
        //問題画像
        questionImg: "images_graph/問題3.png",
        //選択肢画像
        choices: [
            "images_graph/棒ボタン.png",
            "images_graph/円ボタン.png",
            "images_graph/折れ線ボタン.png",
            "images_graph/ヒストグラムボタン.png"
        ],
        //正解画像
        correct:"images_graph/棒ボタン.png",
        correctPage:{
            img:"images_graph/問3正解.png",
            Comment:"（解説）<br>項目ごとの数量を比較するので<br>棒グラフが最適！<br>どれが多くてどれが少ないか分かりやすいですね！"
        },
        //不正解
        wrongPages:{
            "images_graph/円ボタン.png":{
                img:"images_graph/問3円グラフ.png",
                Comment:"（解説）<br>正解は棒グラフ！<br>円グラフは全体における割合を<br>表すグラフです。<br>数量の差は比較し辛いです。"
            },
            "images_graph/折れ線ボタン.png":{
                img:"images_graph/問3折れ線グラフ.png",
                Comment:"（解説）<br>正解は棒グラフ！<br>折れ線グラフは時間による変化を表すので<br>個別の数量を比較するのに適していません。"
            },
            "images_graph/ヒストグラムボタン.png":{
                img:"images_graph/問3ヒストグラム.png",
                Comment:"（解説）<br>正解は棒グラフ！<br>ヒストグラムは<br>データのバラツキを見るグラフです。<br>項目ごとの比較には適していません。"
            }
        }
    },
    {
        //問題画像
        questionImg: "images_graph/問題4.png",
        //選択肢画像
        choices: [
            "images_graph/散布図ボタン.png",
            "images_graph/折れ線ボタン.png",
            "images_graph/円ボタン.png",
            "images_graph/ヒストグラムボタン.png"
        ],
        //正解画像
        correct:"images_graph/散布図ボタン.png",
        correctPage:{
            img:"images_graph/問4正解.png",
            Comment:"（解説）<br>縦軸と横軸で2つのデータの関係（相関）が<br>一目で確認できるので<br>散布図が最適ですね！"
        },
        //不正解
        wrongPages:{
            "images_graph/折れ線ボタン.png":{
                img:"images_graph/問4折れ線グラフ.png",
                Comment:"（解説）<br>惜しい！<br>正解は散布図！<br>折れ線グラフでも表せますが<br>2つのデータの関係は<br>わかりづらいです。"
            },
            "images_graph/円ボタン.png":{
                img:"images_graph/問4円グラフ.png",
                Comment:"（解説）<br>正解は散布図！<br>円グラフは全体に対する割合を表すので<br>2つのデータの関係を表すのに適していません。"
            },
            "images_graph/ヒストグラムボタン.png":{
                img:"images_graph/問4ヒストグラム.png",
                Comment:"（解説）<br>正解は散布図！<br>ヒストグラムは1つのデータの<br>バラツキを表すグラフです。<br>2つのデータの分布や関係を表すことは<br>できません。"
            }
        }
    },
    {
        //問題画像
        questionImg: "images_graph/問題5.png",
        //選択肢画像
        choices: [
            "images_graph/ヒストグラムボタン.png",
            "images_graph/円ボタン.png",
            "images_graph/散布図ボタン.png",
            "images_graph/棒ボタン.png"
        ],
        //正解画像
        correct:"images_graph/ヒストグラムボタン.png",
        correctPage:{
            img:"images_graph/問5正解.png",
            Comment:"（解説）<br>ヒストグラムは、<br>データがどこに集中し、<br>どれくらいばらついているのか<br>視覚的にわかりやすいですね！"
        },
        //不正解
        wrongPages:{
            "images_graph/円ボタン.png":{
                img:"images_graph/問5円グラフ.png",
                Comment:"（解説）<br>惜しい！<br>正解はヒストグラム！<br>円グラフではどこに数値が<br>集中しているのかはわかりますが、<br>バラツキまでは分かりません。"
            },
            "images_graph/散布図ボタン.png":{
                img:"images_graph/問5散布図.png",
                Comment:"（解説）<br>正解はヒストグラム！<br>散布図は2つのデータの関係を表すので<br>データのバラツキを表すのに適していません。"
            },
            "images_graph/棒ボタン.png":{
                img:"images_graph/問5棒グラフ.png",
                Comment:"（解説）<br>正解はヒストグラム！<br>棒グラフではデータ数分棒が並ぶので<br>バラツキが読み取りにくくなります。"
            }
        }
    },
    {
        //問題画像
        questionImg: "images_graph/問題6.png",
        //選択肢画像
        choices: [
            "images_graph/パレート図ボタン.png",
            "images_graph/棒ボタン.png",
            "images_graph/円ボタン.png",
            "images_graph/散布図ボタン.png"
        ],
        //正解画像
        correct:"images_graph/パレート図ボタン.png",
        correctPage:{
            img:"images_graph/問6正解.png",
            Comment:"（解説）<br>パレート図は、<br>件数の多さと累積比率を、<br>一目で確認できます。<br>優先順位が付けやすいですね！"
        },
        //不正解
        wrongPages:{
            "images_graph/棒ボタン.png":{
                img:"images_graph/問6棒グラフ.png",
                Comment:"（解説）<br>惜しい！<br>正解はパレート図！<br>棒グラフでは件数は比較できますが<br>割合や累積比率は<br>確認ができません。"
            },
            "images_graph/円ボタン.png":{
                img:"images_graph/問6円グラフ.png",
                Comment:"（解説）<br>惜しい！<br>正解はパレート図！<br>円グラフは割合は比較できますが<br>件数や累積比率を表すのに適していません。"
            },
            "images_graph/散布図ボタン.png":{
                img:"images_graph/問6散布図.png",
                Comment:"（解説）<br>正解はパレート図！<br>散布図は2つのデータの関係を見るグラフなので<br>件数や割合を比較するのに適していません。"
            }
        }
    },
    {
        //問題画像
        questionImg: "images_graph/問題7.png",
        //選択肢画像
        choices: [
            "images_graph/棒ボタン.png",
            "images_graph/パレート図ボタン.png",
            "images_graph/円ボタン.png",
            "images_graph/散布図ボタン.png"
        ],
        //正解画像
        correct:"images_graph/棒ボタン.png",
        correctPage:{
            img:"images_graph/問7正解.png",
            Comment:"（解説）<br>棒グラフは数値の比較に最適！<br>どこが多いのか一目でわかりますね！"
        },
        //不正解
        wrongPages:{
            "images_graph/パレート図ボタン.png":{
                img:"images_graph/問7パレート図.png",
                Comment:"（解説）<br>惜しい！<br>正解は棒グラフ！<br>パレート図は金額の比較と割合の比較、<br>2つを表すグラフです。<br>今回は金額だけなので使えません。"
            },
            "images_graph/円ボタン.png":{
                img:"images_graph/問7円グラフ.png",
                Comment:"（解説）<br>正解は棒グラフ！<br>円グラフは全体に対する割合を表します。<br>今回の金額を比較するには適していません。"
            },
            "images_graph/散布図ボタン.png":{
                img:"images_graph/問7散布図.png",
                Comment:"（解説）<br>正解は棒グラフ！<br>散布図は2つのデータの関係を見るグラフなので<br>金額のみを比較するのに適していません。"
            }
        }
    },
    {
        //問題画像
        questionImg: "images_graph/問題8.png",
        //選択肢画像
        choices: [
            "images_graph/折れ線ボタン.png",
            "images_graph/棒ボタン.png",
            "images_graph/円ボタン.png",
            "images_graph/散布図ボタン.png"
        ],
        //正解画像
        correct:"images_graph/折れ線ボタン.png",
        correctPage:{
            img:"images_graph/問8正解.png",
            Comment:"（解説）<br>折れ線グラフは時間による推移を<br>表すのに最適！<br>どう変化してきたか一目でわかりますね！"
        },
        //不正解
        wrongPages:{
            "images_graph/棒ボタン.png":{
                img:"images_graph/問8棒グラフ.png",
                Comment:"（解説）<br>惜しい！<br>正解は折れ線グラフ！<br>棒グラフでも表せますが<br>数値の比較に適しています。<br>時間の変化には適していません。"
            },
            "images_graph/円ボタン.png":{
                img:"images_graph/問8円グラフ.png",
                Comment:"（解説）<br>正解は折れ線グラフ！<br>円グラフは全体に対する割合を表します。<br>時間による変化を表す際には使いません。"
            },
            "images_graph/散布図ボタン.png":{
                img:"images_graph/問8散布図.png",
                Comment:"（解説）<br>正解は折れ線グラフ！<br>散布図は2つのデータの関係を見るグラフなので<br>時間による変化を確認するのに適していません。"
            }
        }
    },
    {
        //問題画像
        questionImg: "images_graph/問題9.png",
        //選択肢画像
        choices: [
            "images_graph/円ボタン.png",
            "images_graph/ヒストグラムボタン.png",
            "images_graph/折れ線ボタン.png",
            "images_graph/散布図ボタン.png"
        ],
        //正解画像
        correct:"images_graph/円ボタン.png",
        correctPage:{
            img:"images_graph/問9正解.png",
            Comment:"（解説）<br>円グラフは全体に対する<br>割合を表すのに最適！<br>全体に対してどれが多いのかわかりやすいですね！"
        },
        //不正解
        wrongPages:{
            "images_graph/ヒストグラムボタン.png":{
                img:"images_graph/問9ヒストグラム.png",
                Comment:"（解説）<br>正解は円グラフ！<br>ヒストグラムは<br>データのバラツキを表すに適しています。<br>割合を比較するには適していません。"
            },
            "images_graph/折れ線ボタン.png":{
                img:"images_graph/問9折れ線グラフ.png",
                Comment:"（解説）<br>正解は円グラフ！<br>折れ線グラフは時間による変化を表すグラフです。<br>割合を比較するには適していません。"
            },
            "images_graph/散布図ボタン.png":{
                img:"images_graph/問9散布図.png",
                Comment:"（解説）<br>正解は円グラフ！<br>散布図は2つのデータの関係を見るグラフなので<br>割合を表すのに適していません。"
            }
        }
    },
    {
        //問題画像
        questionImg: "images_graph/問題10.png",
        //選択肢画像
        choices: [
            "images_graph/ヒストグラムボタン.png",
            "images_graph/円ボタン.png",
            "images_graph/折れ線ボタン.png",
            "images_graph/散布図ボタン.png"
        ],
        //正解画像
        correct:"images_graph/ヒストグラムボタン.png",
        correctPage:{
            img:"images_graph/問10正解.png",
            Comment:"（解説）<br>ヒストグラムは<br>データのバラツキやどこに集中しているか<br>表すのに最適です！"
        },
        //不正解
        wrongPages:{
            "images_graph/円ボタン.png":{
                img:"images_graph/問10円グラフ.png",
                Comment:"（解説）<br>正解はヒストグラム！<br>円グラフは全体に対する割合を<br>表すのに適しているので<br>データのバラツキを表すに適していません。"
            },
            "images_graph/折れ線ボタン.png":{
                img:"images_graph/問10折れ線グラフ.png",
                Comment:"（解説）<br>正解はヒストグラム！<br>折れ線グラフは時間による変化を表すグラフです。<br>データのバラツキの確認には適していません。"
            },
            "images_graph/散布図ボタン.png":{
                img:"images_graph/問10散布図.png",
                Comment:"（解説）<br>正解はヒストグラム！<br>散布図は2つのデータの関係を見るグラフなので<br>データのバラツキを確認するのには適していません。"
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
let correctCount = 0;
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
        correctCount++;
        showCorrectScreen();
    }else{
        showWrongScreen(selectedImg);
    }
}

//-----正解ページを表示-----//
function showCorrectScreen(){
    const q = shuffleQuestion[currentIndex];
    //クイズ画面を非表示
    document.getElementById("quiz-screen").style.display = "none";
    //回答画面表示
    document.getElementById("answer-screen").style.display = "block";
    //タイトル変更
    document.getElementById("answer-title").textContent = "○正解○";
    document.getElementById("answer-graph").src = q.correctPage.img;
    document.getElementById("answer-comment").innerHTML= q.correctPage.Comment;
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

//-----結果ページ表示-----//
function showResultScreen(){
    document.getElementById("answer-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("result-text").textContent =
        `10問中 ${correctCount}問正解`;
}
//-----次へボタンの処理-----//
function goToNextQuestion(){
    currentIndex++;
    //次の問題へ
    if (currentIndex >= shuffleQuestion.length){
        showResultScreen();
        return;
    }
    document.getElementById("answer-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    showQuestion();
}

//-----ボタンにイベント設定-----//
//選択肢ボタン
document.querySelectorAll(".choice-btn").forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        checkAnswer(index);
    });
});

//次へボタン
document.getElementById("next-btn").addEventListener("click",goToNextQuestion);

//戻るボタン
document.getElementById("return-btn").addEventListener("click",function(){
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("main-screen").style.display = "block";
    currentIndex = 0;
    correctCount = 0;
});