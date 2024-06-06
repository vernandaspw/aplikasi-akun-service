const cron = require('node-cron');

cron.schedule('*/5 * * * * *', () => {
    console.log('This will run every 5 second');
    
    // cek count tb users
    // cek count tb users simpeg
    
    // jika terdapat data baru dari simpeg
    // foreach user simpeg
    // cek = userAuth wehere username simpeg
    // if userSimpeg.username != userAuth
    // create userAuth dari userSimpege         

    // jika terdapat data baru dari app akun
    // buat data user di dbsimpeg

    // jika ubah password pada api auth
    // ubah pada kedua db users

    // jika terdapat perubahan password pada pada simpeg
    // foreach tb users simpeg
    // if usersimpeg.pass != user
});
