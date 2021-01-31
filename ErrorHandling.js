const coba = cobaPromise()

function cobapromise() {
    return new Promise((resolve,reject) => {
        const waktu = 3000;
        if (waktu <5000 ){
            setTimeout(() => {
                resolve('selesai');
            }, 2000);
            } else {
                reject('Request Time Out');
        }
    })
}

const coba = cobaPromise()
coba

.then(() => console.log(coba))
.catch(err => console.error(err));


