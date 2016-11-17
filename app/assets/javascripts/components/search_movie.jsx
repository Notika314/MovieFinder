class SearchMovie extends React.Component {
	constructor(props){
		super(props);
	}
	handleSubmit(event) {
		event.preventDefault();
		let lookingFor = this.refs.SearchBar.value;
		$.ajax({
			url: `http://www.omdbapi.com/?t=${lookingFor}&y=&plot=full&r=json`, 
			method: "get"
		}).done(function(response) {
			console.log(response);
			this.props.onFindMovie(response);
			this.refs.SearchBar.value = "";
		}.bind(this))
	}
	render() {
		return (
			<form id ="movie-search" onSubmit={this.handleSubmit.bind(this)} >
				<input ref="SearchBar" type="text" name="search" placeholder="Search for movie" />
				<p></p>
				<input type="submit" value = "Search" />
			</form>
			)
	}
}