let details1 = document.getElementById('details1');
let details2 = document.getElementById('details2');
let details3 = document.getElementById('details3');

function showAll () {
    if (details1.style.display  === 'none') {
        details1.style.display = 'block';
        details1.style.transition = 'all 2s';  
    }
    else {
        details1.style.display = 'none';
    }
};

function showAll2 () {
    if (details2.style.display === 'none') {
        details2.style.display = 'block';
    }
    else {
        details2.style.display = 'none';
    }
};

function showAll3 () {
        if(details3.style.display === 'none') {
        details3.style.display = 'block';
        }
        else {
            details3.style.display = 'none';
        }
};