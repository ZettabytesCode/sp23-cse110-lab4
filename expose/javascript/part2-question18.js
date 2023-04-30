function timeFunc(){
	let d = new Date();
	console.log(d.toLocaleTimeString());
}

setInterval(timeFunc, 1000);
