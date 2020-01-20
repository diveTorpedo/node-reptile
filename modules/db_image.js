const connect = require('../config')


let sqllist = {

    select_img: `SELECT * FROM img_link WHERE name = ?`,
    add_img: `INSERT INTO  img_link (name,link) VALUES ?`
}

module.exports = {

    GetImage (name) {
        return new Promise((resolve, reject) => {

            connect(sqllist.select_img, name, (err, resoult) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                resolve(resoult, resolve, reject)
                // console.log('[db_image---]', resoult)
            })
        });
    },
    AddImage (data) {

        return new Promise((resolve, reject) => {

            connect(sqllist.add_img, [data], (err, resoult) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                resolve(resoult)
                // console.log('[db_image---]', resoult)
            })
        });
    }



}




