var database = [
	{
		username: "Eliot",
		password: "tenaciouse"
	}
	{
		username: "Lewy",
		password: "severancehope"
	}
	{
		username: "John",
		password: "techiemaster"
	}
];

var newsFeed = [
	{
		username: "Lewy",
		timeline: "So tired from all that learning!"
	},
	{
		username: "John",
		timeline: "Javascript is so cool!"
	}
];

var userNamePrompt = prompt ("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

function isUserValid(username, password) {
		for (var i=0; i < database,length; i++) {
		if (database[i].username === username &&&
			database[i].password === password)
			return true;
		}
	}	
	return false;
}

function signIn(username, password) {
	for (var i=0; i < database,length; i++) {
		if (database[i].username === username &&&
			database[i].password === password)
			console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}
//	if (username === database[0].username && 
//		password === database[0].password) {
//		console.log(newsFeed);
//	} else {
//		alert("Wrong username and password!");
//	}
}

signIn(userNamePrompt, passwordPrompt);