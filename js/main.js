$(document).ready(function(){
	mixpanel.track("Visited Site");
	
	var ws = new cloudmine.WebService({
		  appid: '1f51304af64941d1a9f40490979e23ed',
		  apikey: '68538441ae164a8ab159f31e1f3efeb6'
	});
	$("#user").overlay({
	    mask: {
		    color: '#000',
		    loadSpeed: 200,
		    opacity: 0.7
	    },
	    closeOnClick: false,
	    close: 'button',
	    load: true
	});
	
	$("#user #y").click(function () {
		mixpanel.register({'Past Agencies': 'Yes'});
		mixpanel.track("Answered Agency Experience");
	});
	$("#user #n").click(function () {
		mixpanel.register({'Past Agencies': 'No'});
		mixpanel.track("Answered Agency Experience");
	});
	$("#user #d").click(function () {
		mixpanel.register({'Past Agencies': 'Dunno'});
		mixpanel.track("Answered Agency Experience");
	});
	
	
    	$("a[rel]").overlay({mask: '#000', effect: 'apple'});
    	$("button[rel]").overlay({mask: '#000', effect: 'apple'});
  	
  	$("form button#mail").click(function(){
  		user_input = document.signin.email.value;
  		ws.set(null, {email: user_input}); 
  		return false;
  	});
  	$("form button#list").click(function () {
  		return false;
  	});
  	$("form button#submit").click(function(){
  		user_input = document.review.input.value;
  		ws.set(null, {review: user_input}); 
  		mixpanel.track("Submitted Review");
  //		alert('Need a second state for this 1) Your’re awesome, & 2) “keep me informed” email lead-gen.')
  		return false;
  	});
  	$("#submit").overlay({
  		mask: '#000', 
  		effect: 'apple',
  		close: 'button'
  	});
  		  		
  		//	
  	
  	
  	  	
  	mixpanel.track_links('a.read', 'Clicked Action Button', {'Button': 'Read Reviews'});
  	mixpanel.track_links('a.write', 'Clicked Action Button', {'Button': 'Write Review'});
  	mixpanel.track_links('a.claim', 'Clicked Action Button', {'Button': 'Claim Listing'});
  		
  	
});