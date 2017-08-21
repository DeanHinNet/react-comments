class Comment extends React.Component {
	//css classes have same name as component
	render() {
		return(
			<div className='comment'>
				<p className='comment-header'>{this.props.author}</p>
				<p className='comment-body'>
					{this.props.body}
				</p>
				<div className='comment-footer'>
					<a href='#' className='comment-footer-delete'>
						Delete Comment
					</a>
				</div>
			</div>
		);
	}
}

class CommentBox extends React.Component {
	constructor(){
		//initializing state of 'showComments'
		super();

		this.state = {
			showComments: false
		};
	}
	
	render(){
		const comments = this._getComments();
		let buttonText = 'Show Comments';
		let commentNodes;

		if(this.state.showComments){
			buttonText = 'Hide Comments';
			commentNodes = <div className='comment-list'>{comments}</div>;
		}

		return(
			
			<div className='comment-box'>
				<button onClick={this._handleClick.bind(this)}>{buttonText}</button>
				<h3>Comments</h3>
				<h4 className='comment-count'>{this._getCommentsTitle(comments.length)}</h4>
					{commentNodes}
			</div>
		)
	}
	_handleClick(){
		this.setState({
			showComments: !this.state.showComments
		});
	}

	_getComments(){
		const commentList = [
			{id: 1, author: 'Drogon McCircuit', body: 'Great Picture'},
			{id: 2, author: 'Bending Bender', body: 'Excellent Stuff'}
		];

		return commentList.map((comment) => {
			return (
				<Comment
					author={comment.author} body={comment.body} key={comment.id} />
			);
		})
	}

	_getCommentsTitle(commentCount){
		if(commentCount === 0){
			return 'No comments yet';
		} else if(commentCount === 1){
			return '1 comment';
		} else {
			return commentCount + ' comments';
		}
	}
}

ReactDOM.render(
	<CommentBox/>, document.getElementById('comment-app')
);