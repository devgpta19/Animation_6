gsap.from("#circle",{
    rotation: -360, 
    scrub:2,
    duration : 2,
    delay:1,
    x:-100,
})

gsap.to("#circle", {
    rotation: 360, 
    scrub:2,
    delay:2.9,
    duration : 30,
    ease:'inOut',
});

gsap.to("#photo",{
    delay:3.5,
    opacity:1,
    x:100,
})

gsap.to("#part2",{
    opacity:1,
    x:100,
    delay:3,
})

gsap.to("#text",{
    delay:3.5,
    opacity:1,
    duration:3,
    x:100,
    width:365,
})

