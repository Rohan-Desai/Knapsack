var costArray = [10, 2, 3, 4, 5, 4, 3, 34, 32, 2, 3, 4, 5, 1, 35, 3, 3, 4, 5, 432, 434, 34]
var weightArray = [1, 2, 4, 5, 6, 3, 5, 6, 7, 8, 9, 4, 3, 2, 4, 6, 6, 6, 6, 6, 6, 3]

function Knapsack(capacity, currentItem) {
	var result;
	if (capacity == 0 || currentItem == 0) {
		result = 0;
	} else if (weightArray[currentItem] > capacity) {
		result = Knapsack(capacity, currentItem - 1);
	} else {
		routeOne = Knapsack(capacity, currentItem - 1);
		routeTwo = costArray[currentItem] + Knapsack(capacity - weightArray[currentItem], currentItem - 1);
		result = Math.max(routeOne, routeTwo);
	}
	return result;
}



console.log(Knapsack(15, weightArray.length - 1));

function Array(dimensions) {
	var array = [];

	for (var i = 0; i < dimensions[0]; ++i) {
		array.push(dimensions.length == 1 ? undefined : Array(dimensions.slice(1)));
	}

	return array;
}
var cache = Array([15, weightArray.length]);

function dynamicKnapsack(capacity, currentItem) {
	var result;
	if (capacity == 0 || currentItem == 0) {
		return 0;
	}
	if (cache[capacity - 1][currentItem] != undefined) {
		return cache[capacity - 1][currentItem];
	} else if (weightArray[currentItem] > capacity) {
		result = dynamicKnapsack(capacity, currentItem - 1);
	} else {
		routeOne = dynamicKnapsack(capacity, currentItem - 1);
		routeTwo = costArray[currentItem] + dynamicKnapsack(capacity - weightArray[currentItem], currentItem - 1);
		result = Math.max(routeOne, routeTwo);
	}
	cache[capacity - 1][currentItem] = result;
	return result;
}
console.log(dynamicKnapsack(15, weightArray.length - 1));