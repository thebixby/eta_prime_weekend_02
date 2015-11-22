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

function retrieveCurrentStudent(studentsArray, currentIndex) {

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



var cohort = [];
var index = 0;
function back() {
    index = ( cohort.length + index - 1) % cohort.length;
    console.log("backwards ", index);
}

function forward() {
    index = (index + 1) % cohort.length;
    console.log("forward ", index);

}
$(document).ready(function() {

    $('.left-arrow').on('click', function() {
        back();
        console.log("Working just fine");
        var currentStudent = retrieveCurrentStudent(cohort, index);

        //get the html for the template
        var theTemplateScript = $('#student-list').html();

        //get the template function from Handlebars.compile(the html)
        var theTemplateFunction = Handlebars.compile (theTemplateScript);


        //get the HTML for our current student
        $('.who-dis').html (theTemplateFunction(currentStudent));


    });

    $('.right-arrow').on('click', function() {
        forward();
        var currentStudent = retrieveCurrentStudent(cohort, index);

        //get the html for the template
        var theTemplateScript = $('#student-list').html();

        //get the template function from Handlebars.compile(the html)
        var theTemplateFunction = Handlebars.compile (theTemplateScript);


        //get the HTML for our current student
        $('.who-dis').html (theTemplateFunction(currentStudent));

    });






	$.ajax({
			url: 'data/eta.json'
		})
		.done(function(json) {


			cohort = makeStudentArrayFromJSON(json);

			var currentStudent = retrieveCurrentStudent(cohort, index);

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