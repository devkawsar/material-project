import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
	card: {
		display: "flex",
	},
	cardDetails: {
		flex: 1,
	},
});

export default function FeaturedPost(props) {
	const classes = useStyles();
	const { blogPost } = props;
	const { title, description, id } = blogPost;

	return (
		<Grid item xs={12} md={6}>
			<Card style={{ margin: "20px" }} className={classes.card}>
				<div className={classes.cardDetails}>
					<CardContent>
						<Typography component="h2" variant="h5">
							{title}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							{/* {post.date} */}
						</Typography>
						<br />
						<Link to={`/posts/${id}`}>
							<Button variant="contained" color="primary">
								See more
							</Button>
						</Link>
					</CardContent>
				</div>
			</Card>
		</Grid>
	);
}

FeaturedPost.propTypes = {
	post: PropTypes.object,
};
