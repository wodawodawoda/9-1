function getTriangleArea(a, h) {
	return a > 0 && h > 0 ? a * h / 2 : 'Nieprawidłowe dane';
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(9, 1);
var triangle2Area = getTriangleArea(9, 2);
var triangle3Area = getTriangleArea(9, 3);
