let slider1 = {
	imagesUrls: ['img/pngwing.com.png', 'img/pngwing.com (1).png', 'img/pngwing.com (2).png', 'img/pngwing.com (3).png', 'img/pngwing.com (4).png'],
	showPrevBtn: document.getElementById('show-prev'),
	showNextBtn: document.getElementById('show-next'),
	slideImage: document.getElementById('slide-img'),
	currentImage: 0,
	start: function () {
		let that = this;
		this.showPrevBtn.addEventListener('click', function () { that.onShowPrevClick() }),
			this.showNextBtn.addEventListener('click', function () { that.onShowNextClick() }),
			this.slideImage.src = this.imagesUrls[this.currentImage];
	},
	onShowPrevClick: function () {
		this.currentImage--;
		if (this.currentImage === -1) {
			this.currentImage = (this.imagesUrls.length - 1);
		}
		this.slideImage.src = this.imagesUrls[this.currentImage];
	},
	onShowNextClick: function () {
		this.currentImage++;
		if (this.currentImage === this.imagesUrls.length) {
			this.currentImage = 0;
		};
		this.slideImage.src = this.imagesUrls[this.currentImage];
	},
};
slider1.start();


/*

//connetcting to DOM
let showPrevBtn = document.getElementById('show-prev');
let showNextBtn = document.getElementById('show-next');
let slideImage = document.getElementById('slide-img');
//getting events
showPrevBtn.addEventListener('click', onShowPrevClick);
showNextBtn.addEventListener('click', onShowNextClick);
// images array
let imagesUrls = ['img/pngwing.com.png', 'img/pngwing.com (1).png', 'img/pngwing.com (2).png', 'img/pngwing.com (3).png', 'img/pngwing.com (4).png']
let currentImage = 0;
slideImage.src = imagesUrls[currentImage];

//functions
function onShowPrevClick(event) {
	currentImage--;
	if (currentImage === -1) {
		currentImage = (imagesUrls.length - 1);
	}
	slideImage.src = imagesUrls[currentImage];
}

function onShowNextClick(event) {
	currentImage++;
	if (currentImage === imagesUrls.length) {
		currentImage = 0;
	};
	slideImage.src = imagesUrls[currentImage];
} */