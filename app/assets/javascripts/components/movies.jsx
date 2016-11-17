class Movies extends React.Component {
	render() {
		return (
			<section id="movie-container">
			<h3>Movies:</h3>
			<ul>
				{
					this.props.data.map((movie,i) => {
					return <Movie data={movie} key ={i} />;
				})
				}
			</ul>
			</section>
			);
	}
}