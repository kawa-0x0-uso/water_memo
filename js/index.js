let in_water = document.getElementById('input_water');
let submit = document.getElementById('submit');
let log_area = document.getElementById('log-area_list'); 

let total_score = 0;

const target = "2000" ;

function input(){
    console.log("入力された値：" + in_water.value);

    // 履歴を入力
    let log_list = document.createElement('li');
    log_list.textContent = in_water.value + "ml" ;
    log_area.appendChild(log_list);

    // 合計値を計算して表示
    total_score = total_score + parseInt(in_water.value);
    console.log("合計値：" + total_score);

    // 進捗率を計算して表示

    // 前回の入力をクリアする
    in_water.value = "";
}

// ボタン押下でイベント発火
submit.addEventListener('click',input);