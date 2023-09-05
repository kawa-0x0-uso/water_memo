// ローカルストレージオブジェクトを代入
const STORAGE = localStorage;
// ローカルストレージに保存されている値をロードする
// 関数化で分離できるようならしたい。
// 現在、戻り値などの設定が上手くいっていないので読み込み時にロードするように設定中
let result = JSON.parse(STORAGE.getItem('waterLog'));

// 入力された値を取得するためのIDを取得
let input = document.getElementById('input_water');
// イベント発火用のボタンのIDを取得
let submit = document.getElementById('submit');
// ローカルストレージのクリアボタンのIDを取得
let clear = document.getElementById('clear_btn');
// 入力されたログを出力するためのエリアのIDを取得
let log = document.getElementById('log-area_list');


// 目標値 その内自己設定できるようにしたい
// テキスト入力可出来るようにしたい
const target = "2000" ;

// 入力された値を出力する
// 配列resultがnullではない場合、保持している配列の値を本日の履歴に表示する
if(result != null){
    for(let i= 0;i<result.length;i++){
        let todayLog = document.createElement('li');
        todayLog.textContent = result[i]+"ml";
        log.appendChild(todayLog);
    }
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
    // 配列resultの中身がnullだった場合、push出来るようにresultの初期化を行う
    if(result == null){
        result = [];
        return ;
    }

    // 配列resultに入力された値を追加する
    result.push(input_water.value);

    // 本日の履歴に新たに入力された数値を追加表示する
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