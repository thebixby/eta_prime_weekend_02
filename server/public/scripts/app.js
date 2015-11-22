// define Student Class
function Student(firstName, lastName, favoriteFoods, hotLineBling, favoriteMovies) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteFoods = favoriteFoods;
	this.hotLineBling = hotLineBling;
	this.favoriteMovies = favoriteMovies;
}

function makeStudentArrayFromJSON(json) {
	var studentsJSON = json.eta;

	// Array.map example:

	// var cohort = studentsJSON.map(function(studentJSON) {
	// 	var classmate = new Student(studentJSON.firstName, studentJSON.lastName, studentJSON.favoriteFoods,
	// 		studentJSON.hotLineBling, studentJSON.favoriteMovies);

	// 	return classmate;
	// });

	// return cohort;

	// Boring for loop example
	var cohort = [];
	for (var i = 0; i < studentsJSON.length; i++) {
		var studentJSON = studentsJSON[i];

		var studentInstance = new Student(studentJSON.firstName,
			studentJSON.lastName,
			studentJSON.favoriteFoods,
			studentJSON.hotLineBling,
			studentJSON.favoriteMovies);

		cohort.push(studentInstance);
	}

	return cohort;
}

function retreiveCurrentStudent(studentsArray, currentIndex) {

	return studentsArray[currentIndex];
}

function getStudentTemplate(student) {


}


function displayStudent($element) {

	// var firstName = $element[0].value;
	// var lastName = $element[1].value;
	// var favoriteFoods = [$element[2].value;];
	// var hotLineBling = $element[3].value;
	// var favoriteMovies = [$element[4].value];

	// var aStudent = new Student(firstName, lastName, favoriteFoods, hotLineBling, favoriteMovies);

	// return aStudent;

}



$(document).ready(function() {
	$.ajax({
			url: 'data/eta.json'
		})
		.done(function(json) {


			var cohort = makeStudentArrayFromJSON(json);
			var currentStudent = retreiveCurrentStudent(cohort, 6);

debugger;
			//get the html for the template
			var theTemplateScript = $('#student-list').html();

			//get the template function from Handlebars.compile(the html)
			var theTemplateFunction = Handlebars.compile (theTemplateScript);


			//get the HTML for our current student
			$('.who-dis').html (theTemplateFunction(currentStudent));

			console.log(makeStudentArrayFromJSON(json));
		});
	// body...
});