// CONNEXION A LA DATABASE FIREBASE
var config = {
    apiKey: "AIzaSyAkP6syXQ6suKVX668ZJb1qA21DCKwGRfQ",
    authDomain: "landing-18e61.firebaseapp.com",
    databaseURL: "https://landing-18e61.firebaseio.com",
    storageBucket: "landing-18e61.appspot.com",
    messagingSenderId: "446781603893"
};
firebase.initializeApp(config);


// CONNEXION
var provider = new firebase.auth.GoogleAuthProvider();
var user, token;
$("#GGC").click(function () {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        token = result.credential.accessToken;
        // The signed-in user info.
        user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
});


// SI QQN EST CONNECTÉ, FAIRE APPARAITRE DOC ET DISPARAITRE BOUTON
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        writeUserData(user.uid, user.displayName, user.photoURL);
        $('#connectGG').addClass('nope');
        $('#formMsg').removeClass('nope');
        console.log("Vous êtes connecter "+user.displayName);
        console.log(user);
        $("#connectUserName").html("Connecté en tant que "+user.displayName);
        var listMsg = firebase.database().ref("msg").orderByChild("time").limitToLast(20);
        listMsg.on('value',function (snap) {
            $("#listMsg").html(" ");
            for( var m in snap.val()) {
                let res = snap.val()[m];
                let message = res.message;
                let qui = res.username;
                let date = new Date();
                // let photo = user.photoURL;
                // console.log(photo);
                // let avatar = '<i class="avatar " style="background-image:url('+ photo +')"></i>';
                let dialogue = "<li><b>" + qui + "</b> : " + message + "</li>";
                $("#listMsg").append(dialogue);
/*                console.log(res);
                console.log(message);
                console.log(dialogue);*/
            }
        });
    } else {
        $("#listMsg").html("");
        $("#connectUserName").html("");
        $('#connectGG').removeClass('nope');
        $('#formMsg').addClass('nope');
    }
});

// DÉCONNEXION
$("#GGDC").click(function () {
    firebase.auth().signOut().then(function() {
        console.log('Sign Out succeeds !');
    }, function(error) {
        console.log('Sign Out Error', error);
    });
});

/// PARAMETRAGE DES DIFFERENTS ELEMENTS DANS LE FUTURE TABLEAU
function writeMsgData(userId, user, msgId, msg, time) {
    firebase.database().ref('msg/').push({
        username: user,
        userId : userId,
        message : msg,
        messageId: msgId,
        time: time
    })
}

/// PARAMETRAGE DES DIFFERENTS ELEMENTS DANS LE FUTURE TABLEAU 2
function writeUserData(userId, user, userAvatar){
    firebase.database().ref('users/'+userId).set({
        userId: userId,
        username:user,
        photo: userAvatar
    })
}

/// EVENT SUBMIT DU FORMULAIRE AVEC RECUPERATION DES VALEURS DES INPUTS ET ID ALEATOIRE
$("#submit").on("click",function (e) {
    e.preventDefault();
    e.stopPropagation();
    let msg = $("#paragraphe").val();
    let userId = user.uid;
    let name = user.displayName;
    let msgId = Math.floor((Math.random() * 10000000) + 1);
    let time = Date.now();
    if (msg == "") {
        $('#paragraphe').addClass('ouch');
    } else {
        writeMsgData(userId,name,msgId,msg,time);
        $("#paragraphe").val("");
        $('#paragraphe').removeClass('ouch');
    }
});
