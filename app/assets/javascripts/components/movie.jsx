class Movie extends React.Component {
	render() {
		return (
			<section className = "movie">
			<li className="movie-content">
			<img className="poster" src={this.props.data.Poster} alt="" />
			<h3>{this.props.data.Title}</h3>
			<p className="plot">{this.props.data.Plot}</p>
			</li>
			</section>
			)
	}
}