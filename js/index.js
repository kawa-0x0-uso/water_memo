let in_water = document.getElementById('input_water');
let submit = document.getElementById('submit');
let log_area = document.getElementById('log-area_list');

let result_water = [];
let result_log = [];

let total_score = 0;

// 目標値
const target = "2000" ;

function input(){
    console.log("入力された値：" + in_water.value);

    // 入力された値を配列に格納
    result_water.push(parseInt(in_water.value));
    result_log.push(parseInt(in_water.value));
    console.log("今まで入力された値：" + result_water);

    // 履歴を入力
    let log_list = document.createElement('li');
    log_list.textContent = in_water.value + "ml" ;
    log_area.appendChild(log_list);

    // 合計値を計算して表示する
    total_score = result_water.reduce(function(sum,element){
        return sum + element;
    },0);

    console.log("合計値：" + total_score);

    // 進捗率を計算して表示する
    let progress = total_score / target * 100;
    console.log("進捗率：" + progress +"％");

    // 前回の入力値をクリアする
    in_water.value = "";

    // ローカルストレージに配列を保存する
}

// ボタン押下でイベント発火
submit.addEventListener('click',input);