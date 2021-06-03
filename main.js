// Variables and arrays

const sentences =["are a group of NYUAD students.",
					"show people how to make films.",
					"hope you enjoy our first episode!"]

var cnt =0;
var idx = 0;
var text = "";
var letter ="";
var timeout;

let likebtn = document.querySelector(".like_btn");
let likeicon = document.querySelector("#icon") ;
let count = document.querySelector("#count");
let clicked = false;

let dislikebtn = document.querySelector(".dislike_btn");
let likeicon1 = document.querySelector("#icon1") ;
let count1 = document.querySelector("#count1");
let clicked1 = false;

const sections = document.querySelectorAll('section');
const nav_l = document.querySelectorAll('nav .menu li');


// Animate navbar
function animate(){
	var links = document.querySelector('.menu-lines');
	var iconSelect = document.querySelector('.icons');
	var allicons = document.querySelectorAll('.icons a')
	var nav = document.querySelector('.menu');
	var menulinks = document.querySelectorAll('.menu li');

	links.addEventListener("click",function(){
		nav.classList.toggle('menu-appear');
		iconSelect.classList.toggle('menu-appear');

		menulinks.forEach(appear);
		allicons.forEach(appear);

		function appear(link,index){
			if(link.style.animation){
				link.style.animation='';
			}
			else{
				link.style.animation = 'fadein linear 1s ';
			}
		}

		links.classList.toggle('close');

	});


	window.addEventListener('scroll',function(){
		var nav_change = document.querySelector('nav');

		nav_change.classList.toggle('scroll-active',window.scrollY>0);
	});

	
}



// Typewriting event
function typewriting(){

	if (cnt === sentences.length){
		cnt = 0;
	}

	text = sentences[cnt];
	letter = text.slice(0,++idx);

	document.querySelector(".typing").textContent = letter;

	if (letter.length === text.length){
		cnt++;
		idx =0;
	}

	setTimeout(typewriting,200);
}


// Like button event
function like(){
	likebtn.addEventListener("click", () => {
	  if (!clicked) {
	    clicked = true;
	    likeicon.innerHTML = '<i class="fas fa-thumbs-up"></i>';
	    if(clicked1=== true){
	    	clicked1=false;
	    	likeicon1.innerHTML = '<i class="far fa-thumbs-down"></i>';
	    	count1.textContent--;
	    }
	    count.textContent++;
	  } 
	  else {
	    clicked = false;
	    likeicon.innerHTML = '<i class="far fa-thumbs-up"></i>';
	    count.textContent--;
	  }
	});

}

// Dislike button event
function dislike(){
	dislikebtn.addEventListener("click", () => {
	  if (!clicked1) {
	    clicked1 = true;
	    likeicon1.innerHTML = '<i class="fas fa-thumbs-down"></i>';
	    if(clicked=== true){
	    	clicked=false;
	    	likeicon.innerHTML = '<i class="far fa-thumbs-up"></i>';
	    	count.textContent--;
	    }
	    count1.textContent++;
	  } 
	  else {
	    clicked1 = false;
	    likeicon1.innerHTML = '<i class="far fa-thumbs-down"></i>';
	    count1.textContent--;
	  }
	});


}

// Highlight nav menu on scroll
window.addEventListener('scroll',() =>{
		let curr = '';
		const num = 100;
		sections.forEach(section =>{
			const s_top = section.offsetTop - num;
			const s_height = section.clientHeight;
			if(pageYOffset>=s_top){
				curr = section.getAttribute('id');
			}
		})
		
		nav_l.forEach(li =>{
			li.classList.remove('is-active');
			if(li.classList.contains(curr)){
				li.classList.add('is-active');
			}
		})

	});

// Feedbacksent
document.getElementById('sub').addEventListener('click', function(e){

		e.preventDefault();

		if(document.getElementById('name').value.length === 0 || document.getElementById('msg').value.length === 0){
				document.getElementById("sent").innerHTML = "Input fields missing!";
				clearTimeout(timeout);
		  		timeout = setTimeout(function() {
		    		document.getElementById("sent").innerHTML = "";
			}, 1000);

		}

		else{
			document.getElementById('name').value = '';
			document.getElementById('msg').value = '';
		 	document.getElementById("sent").innerHTML = "Feedback Sent!";
			
		 	clearTimeout(timeout);
		  	timeout = setTimeout(function() {
		    	document.getElementById("sent").innerHTML = "";
			}, 1000);
		}

});



// Execute funtions
function runapp(){
	animate();
	like();
	dislike();
	typewriting();
}


runapp();