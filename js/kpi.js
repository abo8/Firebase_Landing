/////////////////////////////////////////////////
//            PARAMETRAGE TABLEAU              //
/////////////////////////////////////////////////

// CHAT BUTTON
function writeClick(num) {
    firebase.database().ref('c-chatButton/').set({
        click : num
    });
}

// HEADER LINKS
function writeClick2(num) {
    firebase.database().ref('c-headerLinks/').set({
        click : num
    });
}

// CTA "Qui sommes-nous ?"
function writeClick3(num) {
    firebase.database().ref('c-ctaMain/').set({
        click : num
    });
}

// CTA "Intéressé ?"
function writeClick4(num) {
    firebase.database().ref('c-ctaPres/').set({
        click : num
    });
}

// SHARE FACEBOOK
function writeClick5(num) {
    firebase.database().ref('c-shareFB/').set({
        click : num
    });
}

// SHARE TWITTER
function writeClick6(num) {
    firebase.database().ref('c-shareTT/').set({
        click : num
    });
}

// VISITES
function writeVisit(num) {
    firebase.database().ref('visites/').set({
        visites : num
    });
}

// TEMPS DE VISITE
function writeVisitTime(num) {
    firebase.database().ref('t-site/').set({
        temps : num
    });
}


/////////////////////////////////////////////////
//                   EVENTS                    //
/////////////////////////////////////////////////

// CHAT BUTTON CLICK
let init1 = 0;
let nombreClick1 = firebase.database().ref('c-chatButton/');
$("#msg-but.closed").on('click',function () {
    nombreClick1.once('value', function (snapchot) {
        if(init1 == 0) {
            init1++;
            let total = snapchot.val().click;
            parseInt(total);
            console.log(total);
            if (total === undefined) {
                writeClick(1);
            }
            else {
                writeClick(total + 1);
            }
        }
    });
});

// HEADER LINKS CLICK
let nombreClick2 = firebase.database().ref('c-headerLinks/');
$("header li").on('click',function () {
    nombreClick2.once('value', function (snapchot) {
            let total = snapchot.val().click;
            parseInt(total);
            console.log(total);
            if (total === undefined) {
                writeClick2(1);
            }
            else {
                writeClick2(total + 1);
            }
    });
});

// CTA "Qui sommes-nous ?" CLICK
let init3 = 0;
let nombreClick3 = firebase.database().ref('c-ctaMain/');
$("#mainCta").on('click',function () {
    nombreClick3.once('value', function (snapchot) {
        if(init3 == 0) {
            init3++;
            let total = snapchot.val().click;
            parseInt(total);
            console.log(total);
            if (total === undefined) {
                writeClick3(1);
            }
            else {
                writeClick3(total + 1);
            }
        }
    });
});

// CTA "Intéressé ?" CLICK
let init4 = 0;
let nombreClick4 = firebase.database().ref('c-ctaPres/');
$("#presCta").on('click',function () {
    nombreClick4.once('value', function (snapchot) {
        if(init4 == 0) {
            init4++;
            let total = snapchot.val().click;
            parseInt(total);
            console.log(total);
            if (total === undefined) {
                writeClick4(1);
            }
            else {
                writeClick4(total + 1);
            }
        }
    });
});

// SHARE FACEBOOK CLICK
let init5 = 0;
let nombreClick5 = firebase.database().ref('c-shareFB/');
$("#facebook").on('click',function () {
    nombreClick5.once('value', function (snapchot) {
        if(init5 == 0) {
            init5++;
            let total = snapchot.val().click;
            parseInt(total);
            console.log(total);
            if (total === undefined) {
                writeClick5(1);
            }
            else {
                writeClick5(total + 1);
            }
        }
    });
});

// SHARE TWITTER CLICK
let init6 = 0;
let nombreClick6 = firebase.database().ref('c-shareTT/');
$("#twitter").on('click',function () {
    nombreClick6.once('value', function (snapchot) {
        if(init6 == 0) {
            init6++;
            let total = snapchot.val().click;
            parseInt(total);
            console.log(total);
            if (total === undefined) {
                writeClick6(1);
            }
            else {
                writeClick6(total + 1);
            }
        }
    });
});


// VISITES
let init7 = 0;
let visitNum1 = firebase.database().ref('visites/');
$('#home').hover(function () {
    visitNum1.once('value', function (snapchot) {
        if(init7 == 0) {
            init7++;
            let total = snapchot.val().visites;
            parseInt(total);
            console.log(total);
            if (total === undefined) {
                writeVisit(1);
            }
            else {
                writeVisit(total + 1);
            }
        }
    });
});

// TEMPS DE VISITE
let visitTime1 = firebase.database().ref('t-site/');
setInterval(function () {
    visitTime1.once('value', function (snapchot) {
            let total = snapchot.val().temps;
            parseInt(total);
            console.log(total);
            if (total === undefined) {
                writeVisitTime(1);
            }
            else {
                writeVisitTime(total + 1);
            }
    });
}, 1000);


/////////////////////////////////////////////////
//               TABLEAU DONNEES               //
/////////////////////////////////////////////////

// CHAT BUTTON
nombreClick1.on('value',function (snap) {
    let res = snap.val().click;
    parseInt(res);
    $("#clickChat").html(res);
});

// HEADER LINKS
nombreClick2.on('value',function (snap) {
    let res = snap.val().click;
    parseInt(res);
    $("#clickOnglet").html(res);
});

// CTA "Qui sommes-nous ?"
nombreClick3.on('value',function (snap) {
    let res = snap.val().click;
    parseInt(res);
    $("#clickCtaMain").html(res);
});

// CTA "Intéressé ?"
nombreClick4.on('value',function (snap) {
    let res = snap.val().click;
    parseInt(res);
    $("#clickCtaPres").html(res);
});

// SHARE FACEBOOK
nombreClick5.on('value',function (snap) {
    let res = snap.val().click;
    parseInt(res);
    $("#clickFB").html(res);
});

// SHARE TWITTER
nombreClick6.on('value',function (snap) {
    let res = snap.val().click;
    parseInt(res);
    $("#clickTT").html(res);
});

// VISITES
visitNum1.on('value',function (snap) {
    let res = snap.val().visites;
    parseInt(res);
    $("#visites").html(res);
});

// TEMPS DE VISITE
function secondsTimeSpanToHMS(s) {
    //Heures
    var h = Math.floor(s/3600);
    s -= h*3600;
    //Minutes
    var m = Math.floor(s/60);
    s -= m*60;
    return h+" : "+(m < 10 ? '0'+m : m)+" : "+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}

visitTime1.on('value',function (snap) {
    let res = snap.val().temps;
    parseInt(res);
    $("#tps-visite").html(secondsTimeSpanToHMS(res));
});
