import { Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState, useRef, useLayoutEffect } from 'react'
// import {Animated} from "react-animated-css";
import {Div, Wrapper} from "./HomeStyle"; 
import ScrollAnimation from 'react-animate-on-scroll';


export default function HomeComponent() {
	const [showHome, doShowHome] = useState(false);
	const [showBody, doShowBody] = useState(false)


	const [percentShown, setPercentShow] = useState(0);
	const [percentShownBody, setPercentShowBody] = useState(0); 

	const bodyRef = useRef(null);
    // const anotherRef = useRef(null); 
	const refHome = useRef(null);
	
	const animateFunction = (reference , setPercent, doShow )=>{
		//const topPos = (element) => element.getBoundingClientRect().top;
		const topPos = (element) => element.offsetTop;
		// const bottomPos = (element) => element.offsetBottom;
		const getHeight = (element) => element.offsetHeight;
		const elementPosition = topPos(reference.current); 
		const elementHeight = getHeight(reference.current);
		//const homeEnd = bottomPos(refHome.current);
		const elementEnd = elementPosition+elementHeight;
		// const div2Pos = topPos(anotherRef.current); 
		// const div3Pos = topPos(refThree.current);
		const onScroll = () => {
		  var scrollPosY = (window.scrollY + window.innerHeight);
  		 	    //Element scrolled away (up)*/
				// I add 120 px in order to see the element translateX and not hide it without seeing it 
				if ( (elementEnd < scrollPosY  -( window.innerHeight-120)) || elementPosition>scrollPosY-150  ) {
					doShow(false); // 
				}else if (elementPosition <= scrollPosY-150) {
					doShow(true);
					let elementPercent = ((scrollPosY - elementPosition) * 100) / elementHeight;
					elementPercent = elementPercent > 100? 100: elementPercent<0? 0: elementPercent;
					setPercent(elementPercent);
	  			}
		};
	
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}
	
	useEffect(() => {

		animateFunction(refHome, setPercentShow, doShowHome);
		animateFunction(bodyRef, setPercentShowBody, doShowBody); 
		
		// //const topPos = (element) => element.getBoundingClientRect().top;
		// const topPos = (element) => element.offsetTop;
		// // const bottomPos = (element) => element.offsetBottom;
		// const getHeight = (element) => element.offsetHeight;
		// const homePos = topPos(refHome.current); 
		// const homeHeight = getHeight(refHome.current);
		// //const homeEnd = bottomPos(refHome.current);
		// const homeEnd = homePos+homeHeight;
		// // const div2Pos = topPos(anotherRef.current); 
		// // const div3Pos = topPos(refThree.current);
		// const onScroll = () => {
		//   var scrollPosY = (window.scrollY + window.innerHeight);
  		//  	    //Element scrolled away (up)*/
		// 		// I add 120 px in order to see the element translateX and not hide it without seeing it 
		// 		if ( (homeEnd < scrollPosY  -( window.innerHeight-120)) || homePos>scrollPosY-150  ) {
		// 			doShow(false); // 
		// 		}else if (homePos <= scrollPosY-150) {
		// 			doShow(true);
		// 			let homePercent = ((scrollPosY - homePos) * 100) / homeHeight;
		// 			homePercent = homePercent > 100? 100: homePercent<0? 0: homePercent;
		// 			setPercentShow(homePercent);
	  	// 		}
		// };
	
		// window.addEventListener("scroll", onScroll);
		// return () => window.removeEventListener("scroll", onScroll);

	  });

    return (<>				
	<Wrapper>
        
		{/* <ScrollAnimation animateIn="bounceInRight"> */}
		<Div
			id="Home"
          animate={showHome}
          animatePercent={percentShown}
		  direction={"left"}
          ref={refHome}
		  //color={"red"}
        >
					<h2 className="myH2 pt-28" >What is this ?</h2>
					<p className="myP">This is a responsive fixed navbar animated on scroll</p>
					<p className="myP">Portfolio web site of ramsey bch </p>
					<p className="myP">I HOPE YOU FIND THIS USEFULL</p>
					<p className="myP">Albi</p>
					<p className="myP">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
					</p>
					<p className="myP">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione facere animi impedit rem labore sint repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi labore officiis minus laboriosam
					</p>
		</Div>


		<Div
			id="Home"
          animate={showBody}
          animatePercent={percentShownBody}
		  direction={"left"}
          ref={bodyRef}
		  //color={"red"}
        >




    


		</Div>
{/* 		</ScrollAnimation> */}
		{/* <ScrollAnimation animateIn="bounceInRight">
			<div className="p-10">  
				<div className="max-w-sm rounded overflow-hidden shadow-lg">
					<img className="w-full" src="/mountain.jpg" alt="Mountain"/>
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">Mountain</div>
						<p className="text-gray-700 text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
						</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
					</div>
				</div>
			</div>
		</ScrollAnimation> */}
	</Wrapper>
	

	 </>
    )
}
