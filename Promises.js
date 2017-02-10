var getNumers = function() {
	return new Promise(function(resolve, reject) {
  	setTimeout(function() {
    	resolve([2, 4, 6, 8]);
    }, 1000)
  });
};

var doubleNumbersPromiseParam = function(promise) {
    // return promise().then(function(numbers) {
    //     return numbers.map(function(number) {
    //         return number * 2;
    //     });;
    // })

    return promise().then(doubleNumbers);
}

var doubleNumbers = function(numbers) {
	return new Promise(function(resolve, reject) {
  	numbers = numbers.map(function(number) {
    	return number * 2;
    });
    // reject('Algo errado em doubleNumbers');
    resolve(numbers);
  });
};

var addOne = function(numbers) {
	return new Promise(function(resolve, reject) {
  	numbers = numbers.map(function(numero) {
    	return numero + 1;
    })
    resolve(numbers);
  });
};

// getNumers().then(function(rawNumbers) {
// 	return doubleNumbers(rawNumeros);
// }).then(function(doubledNumeros) {
// 	return addOne(doubledNumeros);
// }).then(function(numbersAddedToOne) {
// 	console.log('resultado: ', numbersAddedToOne);
// });


// getNumers().then(doubleNumbers).then(addOne).then(function(numbersAddedToOne) {
// 	console.log('resultado: ', numbersAddedToOne);
// }).catch(function(err) {
//     console.log('Something went wrong: ', err);
// });

doubleNumbersPromiseParam(getNumers).then(addOne).then(function(numbersAddedToOne) {
	console.log('resultado: ', numbersAddedToOne);
}).catch(function(err) {
    console.log('Something went wrong: ', err);
});



// var sumNumbers = function() {
// 	return new Promise(function(resolve, reject) {
//   var a = 3;
//   var b = 2;
//   	resolve(a + b);
//   });
// };

// var subtraiNumeros = function() {
// 	return new Promise(function(resolve, reject) {
//   	reject('subtrai numbers rejected!');
//   });
// }

// sumNumbers().then(function() {
// 	return subtraiNumeros();
// 	console.log('Soma efetuada.');
// }).catch(function(err) {
// 	console.log('An error occurred: ', err);
//   y + 2;
// }).then(function() {
// 	console.log('keep going...')
// }).catch(function(err) {
// 	console.log('final error: ', err)
// });