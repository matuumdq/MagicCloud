import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const ImageGallery = () => {
	const images = [
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1686076778/wallpaperbetter.com_1920x1080_2_n7di0a.jpg",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1686076739/wallpaperbetter.com_1920x1080_kcwiip.jpg",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1686076734/wallpaperbetter.com_1920x1080_1_l3d2po.jpg",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1686015018/Colombiapsd_et7ssy.png",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685544877/casa1_answ0b.jpg",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685484906/hero_ocqjyx.png",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685373013/vista-lateral-cercana-especias-judias-verdes-tomates-junto-tazones-especias-coloridas-hojas-ramas-arboles-mesa-oscura_xninuw.jpg",
		"https://res.cloudinary.com/dnqmez68n/image/upload/v1685371901/vista-superior-diferentes-condimentos-aceite-limon-mesa-oscura-pimienta-color-especia_ccnt8w.jpg",
	];
	const [activeImage, setActiveImage] = useState(images[0]);

	const handleImageClick = (image) => {
		setActiveImage(image);
	};

	const mainImage = activeImage;
	const thumbnailImages = images;

	const carouselItems = thumbnailImages.map((image, index) => (
		<img
			key={index}
			src={image}
			alt={`Thumbnail ${index}`}
			className={`w-16 h-16 mx-2 cursor-pointer object-contain ${
				activeImage === image ? "border-2 border-blue-500" : ""
			}`}
			onClick={() => handleImageClick(image)}
		/>
	));

	const responsive = {
		0: { items: 3 },
		768: { items: 6 },
	};

	return (
		<div className="max-w-lg mx-auto">
			<div className="relative h-96 overflow-hidden">
				<TransitionGroup>
					<CSSTransition
						key={mainImage}
						timeout={300}
						classNames="fade"
					>
						<div className="absolute inset-0 flex items-center justify-center my-5">
							<img
								src={mainImage}
								alt="Main"
								className="w-full h-full object-contain"
							/>
						</div>
					</CSSTransition>
				</TransitionGroup>
			</div>
			<AliceCarousel
				items={carouselItems}
				responsive={responsive}
				infinite
				disableDotsControls
			/>
		</div>
	);
};

export default ImageGallery;
