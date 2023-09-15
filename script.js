let details1 = document.getElementById('details1');
let details2 = document.getElementById('details2');
let details3 = document.getElementById('details3');

function showAll() {
    if (details1.style.display  === 'none') {
        details1.style.display = 'block';
        // details1.style.transition = 'all 2s';  
    }
    else {
        details1.style.display = 'none';
    }
};

function showAll2() {
    if (details2.style.display === 'none') {
        details2.style.display = 'block';
    }
    else {
        details2.style.display = 'none';
    }
};

function showAll3() {
    if(details3.style.display === 'none') {
        details3.style.display = 'block';
    }
    else {
            details3.style.display = 'none';
    }
};


// let detail = document.getElementsByClassName('detail');
// console.log(detail);

// // let detailArray = [`${details1}`, `${details2}`, `${details3}`]
// // console.log(detailArray[0]);
// function showAll () {
// for ( var i = 0; i < detail.length; i++) { 
//     if (detail[0].style.display = 'none' ) {
//         detail[0].style.display = 'block'
//         // console.log(detail[i]);
//     }
//     else if (detail[0].style.display === 'block') {
//         detail[0].style.display = 'none'
//         console.log(detail[i]);
//     }
// }
// }
