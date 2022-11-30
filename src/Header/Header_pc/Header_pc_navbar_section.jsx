import React from 'react';
import './Header_pc_navbar_style.css';
import electronics_banner from '../../assets/electronics-banner-1.jpg';
import mens_banner from '../../assets/mens-banner.jpg';
import womens_banner from '../../assets/womens-banner.jpg';
import tech_banner from '../../assets/electronics-banner-2.jpg';

function Header_pc_navbar_section() {
	return (
		<div className='header_pc_navbar_section_container'>
			<ul>
				<li>
					<a href="#">HOME</a>
				</li>

				<li className='nav_section categories'>
					<a href="#">CATEGORIES </a>
					<div className="categories_sub_container">
						<ul>
							<li className='categories_sub_menu_header'><a href="#">Electronics</a></li>
							<li className='categories_sub_menu_firs_link'><a href="#">Desktop</a></li>
							<li><a href="#">Laptop</a></li>
							<li><a href="#">Camera</a></li>
							<li><a href="#">Tablet</a></li>
							<li><a href="#">Headphone</a></li>
							<li className='image_container'>
								<a href="#">
									<img src={electronics_banner} alt="" />
								</a>
							</li>
						</ul>
						<ul>
							<li className='categories_sub_menu_header'><a href="#">Men's</a></li>
							<li className='categories_sub_menu_firs_link'><a href="#">Formal</a></li>
							<li><a href="#">Casual</a></li>
							<li><a href="#">Sports</a></li>
							<li><a href="#">Jacket</a></li>
							<li><a href="#">Sunglasses</a></li>
							<li className='image_container'>
								<a href="#">
									<img src={mens_banner} alt="" />
								</a>
							</li>
						</ul>
						<ul>
							<li className='categories_sub_menu_header'><a href="#">Women's</a></li>
							<li className='categories_sub_menu_firs_link'><a href="#">Formal</a></li>
							<li><a href="#">Casual</a></li>
							<li><a href="#">Perfume</a></li>
							<li><a href="#">Cosmetics</a></li>
							<li><a href="#">Bags</a></li>
							<li className='image_container'>
								<a href="#">
									<img src={womens_banner} alt="" />
								</a>
							</li>
						</ul>
						<ul>
							<li className='categories_sub_menu_header'><a href="#">Tech</a></li>
							<li className='categories_sub_menu_firs_link'><a href="#">Smart Watch</a></li>
							<li><a href="#">Smart TV</a></li>
							<li><a href="#">Keyboard</a></li>
							<li><a href="#">Mouse</a></li>
							<li><a href="#">Microphone</a></li>
							<li className='image_container'>
								<a href="#">
									<img src={tech_banner} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</li>

				<li className='nav_section'>
					<a href="#">MEN'S</a>
					<div className="sub_section mens">
						<ul>
							<li><a>Shirt</a></li>
							<li><a>Shorts & Jeans</a></li>
							<li><a>Safety Shoes</a></li>
							<li><a>Wallet</a></li>
						</ul>
					</div>
				</li>

				<li className='nav_section'>
					<a href="#">WOMEN'S</a>
					<div className="sub_section women">
						<ul>
							<li><a>Dress & Frock</a></li>
							<li><a>Earrings</a></li>
							<li><a>Necklace</a></li>
							<li><a>Makeup kit</a></li>
						</ul>
					</div>
				</li>

				<li className='nav_section'>
					<a href="#">JEWELRY</a>
					<div className="sub_section jewelry">
						<ul>
							<li><a>Earrings</a></li>
							<li><a>Couple Rings</a></li>
							<li><a>Necklace</a></li>
							<li><a>Braclets</a></li>
						</ul>
					</div>
				</li>

				<li className='nav_section'>
					<a href="#">PERFUME</a>
					<div className="sub_section perfume">
						<ul>
							<li><a>Clothes Perfume</a></li>
							<li><a>Deodorant</a></li>
							<li><a>Flower Fragrance</a></li>
							<li><a>Air Freshener</a></li>
						</ul>
					</div>
				</li>

				<li>
					<a href="#">BLOG</a>
				</li>

				<li>
					<a href="#">HOT OFFERS</a>
				</li>
			</ul>
		</div>
	)
}

export default Header_pc_navbar_section;