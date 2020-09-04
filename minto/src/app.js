let slider = {
	slides: ['img/slider_img.png','img/s2.jpg'],
	frame: 0,
	set: function(image){
		document.getElementById('slider')
		.style.backgroundImage = "url("+image+"), no-repeat";
		document.getElementById('slider')
		.style.translition = ".3s";
		document.getElementById('slider')
		.style.backgroundsize = "cover"
	},
	init: function(){
		this.set(this.slides[this.frame]);
	},
	left: function(){
		this.frame--;
		if (this.frame < 0) {
			this.frame = this.slides.length-1;
		}
		this.set(this.slides[this.frame]);
	},
	right: function(){
		this.frame++;
		if (this.frame > this.slides.length-1) {
			this.frame = 0;
		}
		this.set(this.slides[this.frame]);
	}
};
window.onload = function(){
	slider.init();
	setInterval(function(){
		slider.right();
	}, 5000);
};