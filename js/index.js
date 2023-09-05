// ローカルストレージオブジェクトを代入
const STORAGE = localStorage;
// ローカルストレージに保存されている値をロードする。
let result = JSON.parse(STORAGE.getItem('waterLog'));

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

// 今まで入力された値を出力する
let loadLog = () => {
    if(result.length == 0){
    // 配列resultがない場合はスキップする
        return;
    }else{
    // 本日の履歴に数値を表示する
    for(let i= 0;i<result.length;i++){
        let todayLog = document.createElement('li');
        todayLog.textContent = result[i]+"ml";
        log.appendChild(todayLog);
    }
    }
}

// テキストエリアから入力された値を取得し、配列に格納する
let getInput = () =>{
    if(result.length == 0){
        // 配列resultがない時は空の配列を用意
        let result = [];
    }else{
        // 保存用の列に入力された値を追加する
        result.push(input_water.value);
    }

    // 本日の履歴に数値を追加表示する
    let log_list = document.createElement('li');
        log_list.textContent = input_water.value+"ml";
        log.appendChild(log_list);

    // 入力された値の初期化（テキストフォームから値を消す）
    input_water.value = "";

    // ローカルストレ―ジに保存する
    saveData(result);
}

// 画面を読み込んだら本日の履歴を表示する
window.addEventListener('DOMContentLoaded',loadLog);

// ボタン押下でイベント発火
submit.addEventListener('click',getInput);
clear.addEventListener('click',clearData);