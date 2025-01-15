function increment() {
	score_element = document.getElementById("score");
	score_element.innerHTML = parseInt(score_element.innerHTML) + 1;
}

const myHeaders = new Headers();
myHeaders.append("x-api-key", "Q7HGv8RQMhaZFW4uOrrpxQ==0Q9InbESImG4HidA");

const requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow"
};

fetch("https://api.api-ninjas.com/v1/marketcap?ticker=TSLA", requestOptions)
.then((response) => response.json())
.then((result) => {
	teslaMC = document.getElementById("teslaMC")
	teslaMC.innerHTML = result["market_cap"]
	console.log(result)
})
.catch((error) => console.error(error));