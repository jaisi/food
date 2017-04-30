console.log("i am here");
var catFood = {};
var dataRequest = new XMLHttpRequest();
console.log("dataRequest",dataRequest);

dataRequest.addEventListener("load", handleLoad);
dataRequest.addEventListener("error", handleError);

function handleLoad(event){
	console.log("yayyy we were able to get all the data");
	catFood = JSON.parse(event.target.responseText);
	displayCatFood(catFood);

}

function handleError(event){
	console.log("oh no there was an error retrieving data");

}

function displayCatFood(data){
	output = document.getElementById("output2");
	console.log("within displayCatFood function", data);

	for(i=0;i<data.cat_brands.length ; i++){
		for(l=0;l<data.cat_brands[i].breeds.length;l++){
			console.log(data.cat_brands[i].breeds);
			for(j=0;j<data.cat_brands[i].types.length; j++){

				for(k=0; k<data.cat_brands[i].types[j].volumes.length; k++){

					output.innerHTML += "<div class='row'><div class='col-sm-2'>" + data.cat_brands[i].name 
					+ "</div><div class='col-sm-2'>" 
					+data.cat_brands[i].breeds[l]
					+ "</div><div class='col-sm-2'>" 
					+ data.cat_brands[i].types[j].type + "</div><div class='col-sm-2'> "
					+ data.cat_brands[i].types[j].volumes[k].name 
					+ "</div><div class='col-sm-2'>" + data.cat_brands[i].types[j].volumes[k].price + "</div></div>";
					console.log(data.cat_brands[i].types[j].volumes[k]);
				}
				console.log(data.cat_brands[i].types[j]);
			}
			console.log(data.cat_brands[i]);
		}
	}
	header = "<div class='jumbotron'><h3>Cat Food</h3></div><div class='row'><div class='col-sm-2'>Name</div><div class='col-sm-2'>Breed</div><div class='col-sm-2'>Type</div><div class='col-sm-2'>Size</div><div class='col-sm-2'>Price</div></div>";
	output.innerHTML = header + output.innerHTML;
}
 
dataRequest.open("GET", "catfood.json");
dataRequest.send();