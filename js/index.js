//За допомогою "prompt" приймаємо текст та зберігаємо його у премінну
const text = prompt('Впишіть сюди будь який текст');
const arr = [];
console.log(arr);
const arr2 = [];
const arr3 = [];

/////////////////////////////////////////////////////////////////////////
//Функція котра завдяки регулярному виразу заповнює массив та відсортовує зайві символи, які не відносяться до абетки
// та речення котрі складаються з однієї літери
function newArr() {
    const smash = text.toLocaleLowerCase().split(' ');
    smash.map(el => {
        const ars = el.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', '); 
        if (ars && ars.length > 1) {
            arr.push(ars)
        }   
    });
}
newArr()
////////////////////////////////////////////////////////////
//Функція котра кожне речення обгортає массивом 
function sumArray() {
    arr.map((value, index) => {
        arr2.push(arr.slice(index,index+1));
    })
}
sumArray()
/////////////////////////////////////////////////////////////
//Завдяки цієї функції створюю об'єкт, з перших літер в слові,
// в якому літера - "key", а "value" - цифру яка відображує кількість повторюємості в слові.
function sumUniqSymbl() {
    arr2.map(el => {
        const split = el.toString().split('');
        let symbolsOccurenceMap = split.reduce((acc, symbol) => {
            acc[symbol] = acc[symbol] ? acc[symbol] + 1 : 1; 
            return acc
        }, {});
        
         const firstWord = Object.entries(symbolsOccurenceMap)[0]
         if (firstWord[1] === 1) {
                arr3.push( firstWord[0] );
            }
        // for (let [symbol, count] of Object.entries(symbolsOccurenceMap)) {}
    })
}
sumUniqSymbl()
///////////////////////////////////////////////////////////
//Функція в котрій рахується "value" та виводить "key" з мінімальним значенням "value"
function uniqSymbl() {
    const res = arr3.reduce((acc, i) => {
        if (acc.hasOwnProperty(i)) {
          acc[i] += 1;
        } else {
          acc[i] = 1;
        }
        return acc
      },{})
      const getMinKey = obj => {
        const minValue = Math.min.apply(null, Object.values(obj))
        return Object.keys(res).filter(k => res[k] === minValue)
      }
      console.log(getMinKey(res));
}
uniqSymbl()

