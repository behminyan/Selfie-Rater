webpackJsonp([2],{DG0N:function(){},Jlkg:function(a,b,c){(function(a){var b=a(".snap"),c=a(".flash"),d=a(".canvas")[0],e=a(".download"),f=a("#myVideo")[0];b.on("click",function(){c.addClass("click"),setTimeout(function(){c.removeClass("click")},200),console.log(f.width,f.height,d.width,d.height);var b=d.getContext("2d"),g=110;b.drawImage(f,g,0,d.width+g-20,d.height+80,0,0,d.width,d.height);var h=d.toDataURL("image/png");e.attr("href",h)})}).call(b,c("7t+N"))},vGYV:function(a,b,c){(function(a,b){c("DG0N"),c("Jlkg"),c("OWGu"),a.ObjectTracker.prototype.track=function(b,c,d){var e=this,f=this.getClassifiers();if(!f)throw new Error("Object classifier not specified, try `new tracking.ObjectTracker(\"face\")`.");var g=[];f.forEach(function(f){g=g.concat(a.ViolaJones.detect(b,c,d,e.getInitialScale(),e.getScaleFactor(),e.getStepSize(),e.getEdgesDensity(),f))}),this.emit("track",{data:g,pixels:b,width:c,height:d})};var d=new a.ObjectTracker("face");d.setInitialScale(4),d.setStepSize(2),d.setEdgesDensity(0.1);var e=document.getElementById("face"),f=e.getContext("2d");d.on("track",function(a){f.clearRect(0,0,e.width,e.height),a.data.forEach(function(c){console.log(a),b.ajax({url:"http://18.220.71.37/rateme",type:"POST",data:JSON.stringify({pixels:Array.from(a.pixels),width:a.width,height:a.height}),contentType:"application/json",dataType:"json"}).done(function(a){console.log(a),document.getElementById("ratingNum").innerHTML=a.rating}),f.strokeStyle="#a64ceb",f.strokeRect(c.x,c.y,c.width,c.height),f.font="11px Helvetica",f.fillStyle="#fff",f.fillText("x: "+c.x+"px",c.x+c.width+5,c.y+11),f.fillText("y: "+c.y+"px",c.x+c.width+5,c.y+22)})});var g=a.track("#myVideo",d,{camera:!0});setTimeout(function(){g.stop(),console.log("Stopped task!")},3e4)}).call(b,c("KPBs"),c("7t+N"))}},["vGYV"]);
//# sourceMappingURL=main.4dfbb4e9.js.map