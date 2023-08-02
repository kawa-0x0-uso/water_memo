let in_water = document.getElementById('input_water');
let submit = document.getElementById('submit');
let log_area = document.getElementById('log-area_list');

let input_water = new Array();

// ローカルストレージオブジェクトを代入
const storage = localStorage;

let log = [];

// 目標値
const target = "2000" ;

function input(){
    // const json = storage.water_log;
    // if(json == undefined){
    //     return;
    // }

    // log = JSON.parse(json);
    // console.log("ロード後：" + log);

    console.log("入力された値：" + in_water.value);

    // 入力された値を配列に格納
    input_water.push(parseInt(in_water.value));
    console.log("今まで入力された値：" + input_water);

    // 履歴を入力
    let log_list = document.createElement('li');
    log_list.textContent = in_water.value + "ml" ;
    log_area.appendChild(log_list);

    // 合計値を計算して表示する
    let total_score = input_water.reduce(function(sum,element){
        return sum + element;
    },0);

    console.log("合計値：" + total_score);

    // 進捗率を計算して表示する
    let progress = total_score / target * 100;
    console.log("進捗率：" + progress +"％");

    // 入力された値をクリアする
    in_water.value = "";

    // ローカルストレージへ保存
    const log = [];
    log.push(input_water);
    storage.water_log = JSON.stringify(log);
    console.log("保存後：" + log);
}

// ボタン押下でイベント発火
submit.addEventListener('click',input);