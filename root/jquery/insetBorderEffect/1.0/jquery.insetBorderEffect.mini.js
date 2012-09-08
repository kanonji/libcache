/*
	Author: Robin Thrift
	You are free to use this plug in in any way you want non-commercially and commercially. 
	However if you redistribute (even when altered by you) you have to give credit to me. 
	How you give me credit is up to you. Here are two links you could link off to:
	
	http://www.twitter.com/r0bs3n
	http://rob-thrift.com

	And now have FUN!
	
	Alerations by: Chris Coyier
*/// allows for use of $ without conflict worries
(function(e){e.fn.insetBorder=function(t){return t!=undefined&&t.inset!=undefined&&(t.insetleft==undefined&&(t.insetleft=t.inset),t.insetright==undefined&&(t.insetright=t.inset),t.insettop==undefined&&(t.insettop=t.inset),t.insetbottom==undefined&&(t.insetbottom=t.inset)),t=e.extend({speed:250,insetleft:10,insetright:10,insettop:10,insetbottom:10,borderColor:"#ffffff",borderType:"solid",outerClass:"ibe_outer",innerClass:"ibe_inner"},t),this.each(function(n){var r=e(this),i=r.outerHeight(),s=r.outerWidth(),o=e("<div />",{"class":t.outerClass,css:{width:s,height:i,overflow:"hidden",top:0,left:0,position:"relative"},mouseenter:function(){r.next().animate({top:"-"+t.insettop+"px",left:"-"+t.insetleft+"px",height:i,width:s,opacity:.1},{duration:t.speed,queue:!1,complete:function(){}})},mouseleave:function(){r.next().animate({top:0,left:0,height:i-(t.insettop+t.insetbottom)+"px",width:s-(t.insetleft+t.insetright)+"px",opacity:1},{duration:t.speed,queue:!1})}}),u=e("<div />",{"class":t.innerClass,css:{height:i-(t.insettop+t.insetbottom)+"px",width:s-(t.insetleft+t.insetright)+"px","border-left":t.insetleft+"px "+t.borderType+" "+t.borderColor,"border-right":t.insetright+"px "+t.borderType+" "+t.borderColor,"border-top":t.insettop+"px "+t.borderType+" "+t.borderColor,"border-bottom":t.insetbottom+"px "+t.borderType+" "+t.borderColor,position:"absolute",top:0,left:0}});r.wrap(o).after(u)})}})(jQuery);