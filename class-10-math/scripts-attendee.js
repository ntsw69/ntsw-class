import uitoolkit from 'https://class-noteswift.netlify.app/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var attendeeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiTnhEWWdyTVNSMUdSOHVqdDBTekppZyIsInRwYyI6IkNsYXNzIDEwIE1hdGgiLCJyb2xlX3R5cGUiOjAsInVzZXJfaWRlbnRpdHkiOiIiLCJzZXNzaW9uX2tleSI6InVuaXF1ZV9zZXNzaW9uX2lkZW50aWZpZXIiLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3MzQ3NDIzODYsImV4cCI6MTczNDkxNTE4Nn0.Vzig2bUQW3cWzY4Fsk872KT0IHaeq_Ps5Z_QLd2arHc';  // This will be replaced by the updateTokens.js script


function joinSession() {
    var userName = document.getElementById('username').value || 'Student'; // Default to 'Student' if no username is entered
    var config = {
        videoSDKJWT: attendeeToken,
        sessionName: 'Class 10 Math',
        userName: userName,
        sessionPasscode: 'NTSW@#1216',
        features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
    };

    uitoolkit.joinSession(sessionContainer, config);

    uitoolkit.onSessionClosed(sessionClosed);
}

var sessionClosed = (() => {
    console.log('session closed');
    uitoolkit.closeSession(sessionContainer);

    document.getElementById('join-flow').style.display = 'block';
});

// Add event listener to button
document.getElementById('join-button').addEventListener('click', () => {
    document.getElementById('join-flow').style.display = 'none';
    joinSession();
});
