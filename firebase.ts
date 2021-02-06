import admin from 'firebase-admin';

if (admin.apps.length === 0) admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.SERVICE_ACCOUNT_KEY!)),
    storageBucket: 'james-simon-s-website.appspot.com'
});

export default admin;
