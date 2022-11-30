import React from 'react'

function Header_pc_middle_section() {
	return (
		<div className='header_pc_middle_section_container'>
			<div className="logo">
				<p>Enon</p>
			</div>
			<div className="search_bar">
				<input
					type="text"
					placeholder='Enter your product name...'
				/>
				<i class="fa-solid fa-magnifying-glass"></i>
			</div>
			<div className="user_icons">
				<div className="user">
					<i class="fa-regular fa-user"></i>
				</div>
				<div className='heart'>
					<i className="fa-regular fa-heart"></i>
					<div className='count'>
						<p>0</p>
					</div>
				</div>
				<div className="bag">
					<i className="fa-solid fa-bag-shopping"></i>
					<div className='count'>
						<p>0</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header_pc_middle_section