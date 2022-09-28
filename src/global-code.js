import anime from 'animejs/lib/anime.es.js'

// Copyright start
// © Code by T.RICKS, https://www.tricksdesign.com/
// You have the license to use this code in your projects but not redistribute it to others

// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName('tricks')
for (var i = 0; i < tricksWord.length; i++) {
  var wordWrap = tricksWord.item(i)
  wordWrap.innerHTML = wordWrap.innerHTML.replace(
    /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
    '$1<span class="tricksword">$2</span>'
  )
}

var tricksLetter = document.getElementsByClassName('tricksword')
// eslint-disable-next-line no-redeclare
for (var i = 0; i < tricksLetter.length; i++) {
  var letterWrap = tricksLetter.item(i)
  letterWrap.innerHTML = letterWrap.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  )
}
// Copyright end

// Slide Up Animation
var slideUp = anime.timeline({
  loop: false,
  autoplay: false,
})

slideUp.add({
  targets: '.slide-up .letter',
  translateY: ['1.1em', 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  delay: (el, i) => 50 * i,
})

// Fade Up Animation
var fadeUp = anime.timeline({
  loop: false,
  autoplay: false,
})

fadeUp.add({
  targets: '.fade-up',
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 1400,
  delay: (el, i) => 300 + 30 * i,
})

// Fade Up Animation
var fadeUpvideo = anime.timeline({
  loop: false,
  autoplay: false,
})

fadeUpvideo.add({
  targets: '.video_wrapper',
  translateY: [130, 0],
  translateZ: 0,
  opacity: [0, 1],
  scale: [0.8, 1],
  easing: 'easeOutExpo',
  duration: 1400,
  delay: 0.25,
})

// Play your animation with these

slideUp.play()
fadeUp.play()
fadeUpvideo.play()
