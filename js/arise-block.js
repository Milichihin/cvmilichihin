$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo(".mba", 1, {x: "550%"}, {x: "0%", ease:   Power3. easeOut})
			.fromTo(".human", 1, {x: "550%"}, {x: "0%", ease: Power3. easeOut})
			.fromTo(".develop", 1, {x: "550%"}, {x: "0%", ease: Power3. easeOut});

	var scene = new ScrollMagic.Scene({
					triggerElement: ".accomplishments",
					triggerHook: "onLeave",
					duration: "300%"
				})
				.setPin(".accomplishments")
				.setTween(wipeAnimation)
				// .addIndicators()
				.addTo(controller);
});