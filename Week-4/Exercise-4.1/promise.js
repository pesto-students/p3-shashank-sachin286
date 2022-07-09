const getNumber = () => 
new Promise((resolve, reject) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    console.log("random num = ", randomNumber);
    setTimeout(() => {
        if (randomNumber % 5 === 0) {
            reject(`Rejected with num: ${randomNumber}`);
        }
        resolve(`Resolved with num: ${randomNumber}`);
    }, randomNumber * 10);
});

const result = (content) => {
    console.log(content);
}

const numberpromise = getNumber();
numberpromise.then(result).catch(result);