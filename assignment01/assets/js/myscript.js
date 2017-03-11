$( document ).ready(function() {
    console.log( "ready!" );

var c = 10;

isStart=false;

function timedCount() {
	isStart=true;
	t = setTimeout(function(){ timedCount() }, 1000);	
	if(c==0){
		c=10;
		}
	if(c>5)
	{
		console.log("value of C in IF"+c);
		 $("#txt").addClass( "divGreen" );
		 $("#txt").text( c );
	
	}
	else
	{
		console.log("else");
	     $("#txt").removeClass( "divGreen" );
	     $("#txt").addClass( "divRed" );
		 $("#txt").text( c );
	
	}
	console.log("before C"+c);
   
   console.log("after C"+c);
   if(c<=0 )
   {
	   console.log("inside if stop count");
	   clearTimeout(t);
	   //exit();    
   }
   c = c-1;
   
   console.log("time"+t);
}



$("#start").click(function startCount() {
	console.log("Again "+c);
	if(c<=0){
		c=10;
		 setTimeout('$("#start").removeAttr("disabled")', 0);
		 alert(piku1);
		 stopper();
		}
	if(c>0){
      timedCount();
	  $(this).attr("disabled", "disabled");
	}
	else{
	  stopper();
	  c=10;
	  console.log("Re initalize"+c);
	   setTimeout('$("#start").removeAttr("disabled")', 0);
	    alert(piku2);
	   stopper();
	}

});

$("#stop").click(function stopCount() {
	console.log("my name is khan"+t);
	clearTimeout(t);
});

function stopper(){
	clearTimeout(t);
	}

$("#resume").click(function resumeCount(){
	if(isStart)
	{
		c=10;
       startCount();
	}
	else
	{
          
	}
});

//jquery
function blink(selector){
$(selector).fadeOut('slow', function(){
    $(this).fadeIn('slow', function(){
        blink(this);
    });
});
}
blink('.blink');
});

