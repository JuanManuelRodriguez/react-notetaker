var React= require('react'),
	Router= require('react-router'),
	UserProfile = require('./Github/UserProfile'),
	Repos = require('./Github/Repos'),
	Notes = require('./Notes/Notes');

var Profile = React.createClass({
	mixins:[Router.State],
	getInitialState: function(){
	  return{
		notes:['nota1', 'nota2'],
		bio:{name: 'Juan M R'},
		repos:[1,2,3]
	  }
	},
	render: function(){
	  var username = this.getParams().username;
	  return (
		<div className="row">
		  <div className="col-md-4">
			<UserProfile username={username} bio={this.state.bio}/>
		  </div>
		  <div className="col-md-4">
			<Repos username={username} repos={this.state.repos}/>
		  </div>
		  <div className="col-md-4">
			<Notes username={username} notes={this.state.notes}/>
		  </div>
		</div>
	  )
	}
});

module.exports = Profile;