console.log("i am here");
var dogFood = {};
var dataRequest = new XMLHttpRequest();
console.log("dataRequest",dataRequest);

dataRequest.addEventListener("load", handleLoad);
dataRequest.addEventListener("error", handleError);

function handleLoad(event){
	console.log("yayyy we were able to get all the data");
	dogFood = JSON.parse(event.target.responseText);
	displayDogFood(dogFood);

}

function handleError(event){
	console.log("oh no there was an error retrieving data");

}

function displayDogFood(data){
	output = document.getElementById("output");
	console.log("within displayDogFood function", data);

	for(i=0;i<data.dog_brands.length ; i++){
		for(j=0;j<data.dog_brands[i].types.length; j++){

			for(k=0; k<data.dog_brands[i].types[j].volumes.length; k++){

				output.innerHTML += "<div class='row'><div class='col-md-3'>" + data.dog_brands[i].name 
				+ "</div><div class='col-md-3'>" 
				+ data.dog_brands[i].types[j].type + "</div><div class='col-md-3'> "
				+ data.dog_brands[i].types[j].volumes[k].name 
				+ "</div><div class='col-md-3'>" + data.dog_brands[i].types[j].volumes[k].price + "</div></div>";
				console.log(data.dog_brands[i].types[j].volumes[k]);
			}
			console.log(data.dog_brands[i].types[j]);
		}
		console.log(data.dog_brands[i]);
	}
	header = "<div class='jumbotron'><h3>Dog Food</h3></div><div class='row'><div class='col-md-3'>Name</div><div class='col-md-3'>Type</div><div class='col-md-3'>Size</div><div class='col-md-3'>Price</div></div>";
	output.innerHTML = header + output.innerHTML;
}
 
dataRequest.open("GET", "food.json");
dataRequest.send();