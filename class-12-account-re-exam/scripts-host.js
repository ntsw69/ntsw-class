import uitoolkit from 'https://class-noteswift.netlify.app/main/videosdk-ui-toolkit/index.js';

var sessionContainer = document.getElementById('sessionContainer');
var config = {
    videoSDKJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiTnA2VTFFdXNUX0djaTFNU3J1QWF2USIsInRwYyI6IkNsYXNzIDEyIEFjY291bnQgUmVleGFtIiwicm9sZV90eXBlIjoxLCJ1c2VyX2lkZW50aXR5IjoiVGVhY2hlciIsInNlc3Npb25fa2V5IjoidW5pcXVlX3Nlc3Npb25faWRlbnRpZmllciIsInZlcnNpb24iOjEsImlhdCI6MTcyODM0ODc4NCwiZXhwIjoxNzI4NTIxNTg0fQ.EwR_HLf0clsnlnfPi3-ah4dz3XJU4cHEFCRJ0Q91O9E',  // This will be replaced by the updateTokens.js script
    sessionName: 'Class 12 Account Reexam',
    userName: 'Teacher',
    sessionPasscode: 'NTSW@#1216',
    features: ['video', 'audio', 'settings', 'users', 'chat', 'share']
};


function joinSession() {
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
