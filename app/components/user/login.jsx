'use strict';

var React = require('react');
var Link = require('react-router').Link;
var NavBar = require('../shared/navbar');

module.exports = React.createClass({
	displayName: 'LoginPage',

	render: function render() {
		return (
		 	<div className="uk-text-center">
		 		
		 		<NavBar currentmenu="login" />

				<div className="uk-container uk-container-center uk-animation-fade uk-margin-large-top">

					<div className="uk-greed uk-margin-large-top">

						<div className="uk-width-medium-3-10 uk-container-center">

							{ this.props.loginerrors ? 
								<div className="uk-alert uk-alert-danger" data-uk-alert>
									<a href="javascript:void(0)" className="uk-alert-close uk-close"></a>
									{
										this.props.loginerrors.map(function(err, i) {
											return <p key={i}> {err.msg} </p>
										})
									}
								</div> : ''
							}

							{
								this.props.notverified ? 
								<div className="uk-alert uk-alert-danger" data-uk-alert>
									Email is not verified.
								</div> : ''
							}

							{
								this.props.inactive ? 
								<div className="uk-alert uk-alert-danger" data-uk-alert>
									Account is not active.
								</div> : ''
							}

							<img className="uk-margin-bottom" width="140" height="120" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTQwcHgiIGhlaWdodD0iMTIwcHgiIHZpZXdCb3g9Ii0yOS41IDI3NS41IDE0MCAxMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTI5LjUgMjc1LjUgMTQwIDEyMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBvcGFjaXR5PSIwLjciPg0KCTxwYXRoIGZpbGw9IiNEOEQ4RDgiIGQ9Ik0tNi4zMzMsMjk4LjY1NHY3My42OTFoOTMuNjY3di03My42OTFILTYuMzMzeiBNNzkuNzg4LDM2NC4zNTVIMS42NTZ2LTU3LjcwOWg3OC4xMzJWMzY0LjM1NXoiLz4NCgk8cG9seWdvbiBmaWxsPSIjRDhEOEQ4IiBwb2ludHM9IjUuODYsMzU4LjE0MSAyMS45NjIsMzQxLjIxNiAyNy45OTUsMzQzLjgyNyA0Ny4wMzIsMzIzLjU2MSA1NC41MjQsMzMyLjUyMyA1Ny45MDUsMzMwLjQ4IA0KCQk3Ni4yMDMsMzU4LjE0MSAJIi8+DQoJPGNpcmNsZSBmaWxsPSIjRDhEOEQ4IiBjeD0iMjQuNDYyIiBjeT0iMzIxLjMyMSIgcj0iNy4wMzQiLz4NCjwvZz4NCjwvc3ZnPg0K" alt="" />

							<form className="uk-panel uk-panel-box uk-form" action="/login" method="post" >
								<div className="uk-form-row">
									<input autoFocus className="uk-width-1-1 uk-form-large" type="email" placeholder="Email/Username" name="email" required />
								</div>
								<div className="uk-form-row">
									<input className="uk-width-1-1 uk-form-large" type="password" placeholder="Password" name="password" required />
								</div>
								<div className="uk-form-row">
									<button type="submit" className="uk-width-1-1 uk-button uk-button-primary uk-button-large">Login</button>
								</div>
								<div className="uk-form-row uk-text-small uk-vertical-align-middle">
									<Link className="uk-float-right uk-link uk-link-muted" to="/resetpassword">Forgot Password?</Link>
									{/* Or 
									<Link className="uk-float-right uk-link uk-link-muted" to="/signup">Create An Account</Link> */}
								</div>
							</form>

						</div>

					</div>

				</div>

			</div>
		)
	}
});