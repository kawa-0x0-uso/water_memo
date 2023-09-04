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
    STORAGE.setItem('waterLog',JSON.stringify(result));
}

// テキストエリアから入力された値を取得し、配列に格納する
let getInput = () =>{
    // 配列に入力された値を追加する
    result.push(input_water.value);
    console.log(result);

    // 入力された値の初期化（テキストフォームから値を消す）
    input_water.value = "";

    // ローカルストレ―ジに保存
    saveData(result);
}

// ボタン押下でイベント発火
submit.addEventListener('click',getInput);
clear.addEventListener('click',clearData);