$(function () {

	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
			.fromTo("#b2", 1, {x: "200%"}, {x:   "0%", delay: 0, ease:   Power3. easeOut})
			.fromTo("#b3", 1, {x: "200%"}, {x: "100%", ease:    Power3. easeOut})
			.fromTo("#b4", 1, {x: "200%"}, {x: "200%", ease: Power3. easeOut});

	var scene = new ScrollMagic.Scene({
					triggerElement: "#blockContainer",
					triggerHook: "onLeave",
					duration: "300%"
				})
				.setPin("#blockContainer")
				.setTween(wipeAnimation)
				.addIndicators()
				.addTo(controller);
});