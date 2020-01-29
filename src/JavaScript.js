import React from 'react';


const zebraIll = document.querySelector('#zebra-ill')
const zebraIllImg = document.querySelectorAll('.zebraimg')
const rate = 0.05
const motioncheck = document.getElementById('motiona11y')
let isChecked = false

motioncheck.addEventListener('change', e => {
  isChecked = e.target.checked;
})


zebraIll.addEventListener('mousemove', e => {
  if (isChecked) return
    let x = e.clientX;
  let y = e.clientY;
  
  zebraIllImg.forEach((el, index) => {
    let speed = index += 1
    let xPos = speed + rate * x
    let yPos = speed + rate * y
    
    el.style.transform = 
      `rotateX(${xPos - 20}deg) rotateY(${yPos - 20}deg) translateZ(${index * 10}px)`
  })
})

//* -- Entrance animations --*//

//register the plugin
gsap.registerPlugin(DrawSVGPlugin);

const drawLines = () => {
  gsap.set('.cls-15, #yellowunderline, .cls-13', {
    visibility: 'visible'
  })
  
  const timeline = gsap.timeline({ 
    defaults: {
      delay: 1,
      ease: "circ",
      duration: 2
    }         
  })
  .add('start')
  .fromTo(".cls-15 path", {
    drawSVG: '0%'
  }, {
    drawSVG: '100%',
    immediateRender: true
  }, 'start')
  .fromTo("#yellowunderline path", {
    drawSVG: '50% 50%'
  }, {
    drawSVG: '100%',
    immediateRender: true
  }, 'start+=1')
  .fromTo(".cls-13", {
    drawSVG: '50% 50%'
  }, {
    drawSVG: '100%',
    immediateRender: true
  }, 'start+=1')
}

window.onload = () => {
    drawLines()
};