function download(state = [], action) {
  switch(action.type) {

  	case 'DOWNLOAD_CSV' :

		//let data = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];
		let data = action.saved;

		let csvContent = "data:text/csv;charset=utf-8,";
		data.forEach(function(keyword, index){
			csvContent += index < data.length ? keyword+ "\n" : keyword;
		});

		let encodedUri = encodeURI(csvContent);
		window.open(encodedUri);

	default:
	  return state;
  }
}

export default download;