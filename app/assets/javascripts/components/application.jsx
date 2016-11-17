class Application extends React.Component {
	constructor(){
		super();
		this.state = {
			movies: []
		}
		this.displayMovieInfo = this.displayMovieInfo.bind(this);
	}
	componentDidMount() {
		// $.ajax({
		// 	url: "http://www.omdbapi.com/?t=frozen&y=2014&plot=short&r=json",
		// 	method: "get"
		// }).done(response => {
		// 	this.setState({ movie: response } )
		// })
	}

	displayMovieInfo(info) {
		this.setState({
			movies: [info].concat(this.state.movies)
		})
	}

	render() {
		return (
			<section className="container">
			<p>There will be some awesome content here, wait and wait!</p>
			<SearchMovie onFindMovie={this.displayMovieInfo} />
			<Movies data={this.state.movies} />
			</section>
			)
	}
}