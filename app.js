

function myFunction(words) {
    const arrWord = {};

    words.forEach(word => {
        const sortWord = word.split('').sort().join('');
        if (arrWord[sortWord]) {
            arrWord[sortWord].push(word);
        } else {
            arrWord[sortWord] = [word];
        }
    });

    return Object.values(arrWord);
}

const a = ["bat", "tap", "cat", "tab", "pat"];
const b = myFunction(a);
console.log(b);
