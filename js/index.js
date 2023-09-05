// ローカルストレージオブジェクトを代入
const STORAGE = localStorage;

// 入力された値を取得するためのIDを取得
let input = document.getElementById('input_water');
// イベント発火用のボタンのIDを取得
let submit = document.getElementById('submit');
// ローカルストレージのクリアボタンのIDを取得
let clear = document.getElementById('clear_btn');
// 入力されたログを出力するためのエリアのIDを取得
let log = document.getElementById('log-area_list');

// 目標値
const target = "2000" ;

let result = [];
// ローカルストレージの値をロードする
result = JSON.parse(STORAGE.getItem('waterLog'));

// 今まで入力された値を出力する
for(let i= 0;i<result.length;i++){
    let todayLog = document.createElement('li');
    todayLog.textContent = result[i]+"ml";
    log.appendChild(todayLog);
}

// ローカルストレージに値を保存する
let saveData = (result) =>{
    STORAGE.setItem('waterLog',JSON.stringify(result));
}

// ローカルストレージの値をクリアする
let clearData = () =>{
    // リサルトの値を初期化
    result = [];
    // 初期化したデータを上書き保存
    saveData(result);
}

// テキストエリアから入力された値を取得し、配列に格納する
let getInput = () =>{
    result.push(input_water.value);

    // 本日の履歴に数値を追加表示する
    let log_list = document.createElement('li');
        log_list.textContent = input_water.value+"ml";
        log.appendChild(log_list);

    // 入力された値の初期化（テキストフォームから値を消す）
    input_water.value = "";

    // ローカルストレ―ジに保存する
    saveData(result);
}

// ボタン押下でイベント発火
submit.addEventListener('click',getInput);
clear.addEventListener('click',clearData);