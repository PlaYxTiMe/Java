
const getlot = (start, end) => Math.floor(Math.random() * (end - start + 1) + start);

function getlottonumber(start, end, numbers, special = false) {
    let lotto = [];
    let count = 0;
    do {
        num = getlot(start, end);
        if (!lotto.includes(num)) {
            lotto.push(num);
            count++;
        };
    } while (count < numbers);
    lotto.sort((a, b) => {
        return b - a;
    });
    if (special) {
        lotto.push(getlot(start, end));
    }
    return lotto;
};

const lott_num = document.querySelector('.lotto-numbers');
console.log(lott_num);
const title = document.querySelector('h1');
title.innerText = '大樂透號碼';
const subtitle = document.querySelector('h3');
subtitle.innerHTML = `<h2><i>${subtitle.innerText}  按下按鈕即開獎!</i></h2>`
const startbtn = document.querySelector('#start');
startbtn.addEventListener('click', () => {
    console.log('click!');
    lott_num.innerHTML = '<ul>';
    for (let t = 0; t < 5; t++) {
        lottonum = getlottonumber(1, 100, 6, special = true);
        //document.write(lottonum.join(','));
        //console.log(lottonum.join(','));
        lott_num.innerHTML += `<li>${lottonum}</li>`;
    };
    lott_num.innerHTML += '</ul>';
});


//const getbmi = (height, weight, point = 2) => (weight / (height / 100) ** 2).toFixed(point);

//console.log(getbmi(178, 178, 2));

//function get_bmi(height, weight, point = 2) {
//    const bmi = (weight / (height / 100) ** 2).toFixed(point);
//    return bmi;
//}
//console.log(get_bmi(178, 178, 2))


//let email = 'b0925366079@gmail.com'
//console.log(typeof (email));
//console.log(email[0]);
//console.log(email.length);
//console.log(email.indexOf('g'));
//console.log(email[email.length - 1]);
//console.log(email.toUpperCase());
//console.log(email.toLowerCase());
//console.log(email.substring(0, 6));
//console.log(email.replace('b', 'a'));
//console.log(email.includes('m'));

//for (let i = 0; i < email.length; i++) {
//    console.log(email[i])
//};

//let x = 10;
//let y = 2;
//let z = 5;

//console.log(++x, y++);
//console.log(x, y);

//console.log('A' > 'a');  //acsii碼
//console.log(25 == '25');  //會自動轉型，數值相同
//console.log(25 === '25'); //數值以及型態一起做比較判斷

//if (x > y && x > z) {    //and
//    console.log(true)
//}
//if (x < y || x > z) {    //or
//    console.log(true)
//}
//if (!(x < y) && x > z) { //not
//    console.log(true)
//}

//console.log(Math);
//x = -7.7;
//console.log(x);
//console.log(Math.abs(x));   //絕對值
//console.log(Math.ceil(x));  //大於等於最接近該數的整數
//console.log(Math.floor(x)); //小於等於最接近該數的整數
//console.log(Math.round(x)); //四捨五入

//console.log(Math.random());  //亂數0~1之間
//console.log(Math.random() * 10);  //亂數0~1之間的10倍
//console.log(Math.floor(Math.random() * 10)); //亂數0~9之間
//console.log(Math.floor(Math.random() * 10) + 1); //亂數1~10之間

//console.log(Math.floor(Math.random()*(end-start+1))+start)

//while (true) {
//    let number = Math.floor(Math.random() * (100 - 10 + 1) + 10);
//    console.log(number);
//    if (number >= 100) {
//        break;
//    }
//};

//let start = 1;
//let end = 49;
//let lott = '';
//let lotstr = '';
//let lotul = '<ul>'
//for (let k = 0; k < 10; k++) { //此為外迴圈10組
//    for (let j = 0; j < 6; j++) {
//        lotul = '<ul>';
//        let number = Math.floor(Math.random() * (end - start + 1) + start);
//        //console.log(number);
//        lott += number + ' ';
//        lotstr += `第${j + 1}個號碼:${number}` + ' ';
//        console.log(`第${j + 1}個號碼:${number}`); //此為format用法
//        //document.write(`<h2>第${j + 1}個號碼:${number}</h2>`);
//       lotul += `<li><h2>第${j + 1}個號碼:${number}</h2></li>`
//       lotul += '</ul>';
//        document.write(lotul);
//    };
//    document.write(lotstr);
//    lotstr = '';
//};
//lotul+='</ul>'

//console.log(lotto); //橫版顯示
//document.write('<br>');
//let students = [
//    ['jerry', 78, 67],
//    ['mary', 100, 99, 88, 100],
//    ['kevin', 77, 99, 77],
//];

//for (i = 0; i < students.length; i++) {
//    let scores = students[i].slice(1, students[i].length);
//    let score = 0;
//    let avg = 0;
    //console.log(scores);
    //console.log(scores[0], scores[1]);
    //console.log(scores.length);
//    for (s = 0; s < scores.length; s++) {
//        score += scores[s];
//    }
//    avg = score / scores.length;
//    students[i].push(score);
//    students[i].push(avg.toFixed(2));
//    for (j = 0; j < students[i].length; j++) {

//        document.write(students[i][j] + ',');

//    }
//    document.write('<br>');
//}

//let radius = prompt("請輸入半徑:");
//const PI = 3.1415926;
//area = radius * radius * PI;
//console.log(typeof (radius));
//console.log(Number(radius) + 10);
//console.log(radius + 10);
//console.log(area);
//document.write(typeof (radius), area)
//document.write("<h2>" + typeof (radius), area + "</h2>")

