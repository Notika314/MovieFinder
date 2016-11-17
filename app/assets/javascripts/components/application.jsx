class Application extends React.Component {
	constructor(){
		super();
		this.state = {
			movie: {}
		}

	}
	componentDidMount() {
		console.log("component indeed did mount!");
		$.ajax({
			// url: "http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json",
			url: "http://www.omdbapi.com/?t=&y=2014&plot=short&r=json",
			method: "get"
		}).done(response => {
			console.log(response);
			this.setState({ movie: response } )
		})
	}
	render() {
		return (
			<section className="container">
			<p>There will be some awesome content here, wait and wait!</p>
			</section>
			)
	}
}