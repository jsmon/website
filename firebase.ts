import admin from 'firebase-admin';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: '.env.development.local' });
}

if (admin.apps.length === 0) admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.SERVICE_ACCOUNT_KEY!)),
    storageBucket: 'james-simon-s-website.appspot.com'
});

export default admin;
