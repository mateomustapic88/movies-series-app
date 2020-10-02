import React from 'react';

function Footer() {
	return (
		<div className='app-footer'>
			<div className='row'>
				<div className='col-md-12'>
					<div className='footer p-3 mt-4 text-center bg-dark text-light'>
						Developed By:&nbsp;
						<span className='text-warning font-weight-normal'>
							Mateo Mustapic
						</span>
						, using <i className='fab fa-react' /> React JS &amp; Redux JS
						integrated with external movies data API
						<a
							href='https://www.themoviedb.org/'
							target='_blank'
							rel='noopener noreferrer'
						>
							&nbsp;TMDB
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
