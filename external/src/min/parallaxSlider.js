define("parallaxSlider",function(a,b,c){"use zeptojs";var d=a("prefix"),e=a("isDom"),f=a("stylesheet"),g=function(a){var b,c,h,i,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,e="",g="",j=document.documentElement.clientHeight;if("string"==typeof a.container){if(b=document.querySelector(a.container),!b)throw"Container unexist!"}else{if(!a.container.nodeType||1!=a.container.nodeType)throw"Container unexist!";b=a.container}if(a.onchange="function"==typeof a.onchange?a.onchange:function(){},a.duration=a.duration||300,a.duration2=a.duration2||100,a.direction=a.direction||"Y",c="Y"==a.direction,c?(e="translate3d(0,",g=",0)"):(e="translate3d(",g=",0,0)"),i=c?"pageY":"pageX",j=c?document.documentElement.clientHeight:document.documentElement.clientWidth,k=function(){var d,e,a=b.childNodes,c=[];for(d=0,e=a.length;e>d;++d)1==b.childNodes[d].nodeType&&c.push(b.childNodes[d]);return c}(),k.length){for(l=k.length,m=[],n=0;l>n;++n)o=k[n].querySelector("[halo-slider-speed]"),m[n]=o?[o,parseFloat(o.getAttribute("halo-slider-speed"))||1]:void 0;for(a.first=a.first||0,a.first>=l?a.first=l-1:a.first<0&&(a.first=0),p=a.first,q=p+1,r=p-1,a.infinite&&(0>r&&(r=l-1),q>l-1&&(q=0)),f.add("[HALOSLIDER] > *{"+d+"transform:translateZ(0);}"),b.style.cssText+="width:100%; height:100%; overflow:hidden;",b.parentNode.style.overflow="hidden",window.addEventListener("resize",function(){j=c?document.documentElement.clientHeight:document.documentElement.clientWidth}),u=function(a,b){t=a,s=setTimeout(function(){a(),t=a=null},b)},v=function(){clearTimeout(s),"function"==typeof t&&t()},w=!1,x=!1,y=function(a){var b=a.targetTouches||a.changedTouches,c=b[0];J=c.pageX,K=c.pageY,h=c[i],v()},z=function(a){var b=a.targetTouches||a.changedTouches,c=b[0],f=c[i],l=f-h;k[r].style[d+"transform"]=e+(l-j)+"px"+g,k[p].style[d+"transform"]=e+l+"px"+g,k[q].style[d+"transform"]=e+(l+j)+"px"+g,B(p,l)},A=function(a){var b=a.targetTouches||a.changedTouches,c=b[0],f=c[i],m=f-h;l-1>p&&p>0?(k[r].style[d+"transform"]=e+(m-j)+"px"+g,k[p].style[d+"transform"]=e+m+"px"+g,k[q].style[d+"transform"]=e+(m+j)+"px"+g,B(p,m),w=x=!1):m>0?0==p?(k[p].style[d+"transform"]=e+m/3+"px"+g,k[q].style[d+"transform"]=e+j+"px"+g,B(p,m),w=!0):(k[r].style[d+"transform"]=e+(m-j)+"px"+g,k[p].style[d+"transform"]=e+m+"px"+g,x=!1):0>m&&(p==l-1?(k[p].style[d+"transform"]=e+m/3+"px"+g,k[r].style[d+"transform"]=e+-1*j+"px"+g,B(p,m/3),x=!0):(k[p].style[d+"transform"]=e+m+"px"+g,k[q].style[d+"transform"]=e+(m+j)+"px"+g,B(p,m),w=!1))},B=function(a,b){if(m[a]&&b){var c=m[a][0],e=m[a][1];c.style[d+"transform"]=b>=0?"translate3d(0,0,0)":"translate3d(0,"+b*(e-1)+"px,0)"}},C=function(b){var s,t,v,w,c=b.changedTouches||b.targetTouches,f=c[0],n=f[i],o=n-h;o>0&&o>=a.offset?(s=d+"transform "+a.duration/1e3+"s linear",k[p].style[d+"transition"]=s,k[r].style[d+"transition"]=s,k[r].style[d+"transform"]=e+0+"px"+g,k[p].style[d+"transform"]=e+j+"px"+g,l-1>=q&&(k[q].style[d+"transform"]=e+j+"px"+g),t=p,v=r,w=q,u(function(){k[t].style[d+"transition"]=k[v].style[d+"transition"]="",a.onchange.call(k,t,v)},a.duration),F(-1)):0>o&&-1*o>=a.offset?(s=d+"transform "+a.duration/1e3+"s linear",k[p].style[d+"transition"]=s,k[p].style[d+"transform"]=e+-1*j+"px"+g,k[q].style[d+"transition"]=s,k[q].style[d+"transform"]=e+0+"px"+g,r>=0&&(k[r].style[d+"transform"]=e+-1*j+"px"+g),t=p,v=r,w=q,u(function(){k[t].style[d+"transition"]=k[w].style[d+"transition"]="",m[t]&&(m[t][0].style[d+"transform"]=e+"0px"+g),a.onchange.call(k,t,w)},a.duration),F(1)):0!=o&&(s=d+"transform "+a.duration2/1e3+"s linear",r>=0&&(k[r].style[d+"transition"]=s,k[r].style[d+"transform"]=e+-1*j+"px"+g),k[p].style[d+"transition"]=s,k[p].style[d+"transform"]=e+0+"px"+g,l-1>=q&&(k[q].style[d+"transition"]=s,k[q].style[d+"transform"]=e+j+"px"+g),m[p]&&(m[p][0].style[d+"transition"]=s,m[p][0].style[d+"transform"]=e+"0px"+g),t=p,v=r,w=q,u(function(){D||(k[t].style[d+"transition"]=""),r>=0&&(k[v].style[d+"transition"]=""),l-1>=q&&(k[w].style[d+"transition"]=""),m[p]&&(m[p][0].style[d+"transition"]="")},a.duration2))},D=!1,E=function(b){if(w||x){var c=d+"transform "+a.duration2/1e3+"s linear";k[p].style[d+"transition"]=c,k[p].style[d+"transform"]=e+0+"px"+g,m[p]&&(m[p][0].style[d+"transition"]=c,m[p][0].style[d+"transform"]=e+"0px"+g),u(function(){w=x=!1,k[p].style[d+"transition"]="",m[p]&&(m[p][0].style[d+"transition"]="")},a.duration2)}else C(b)},F=function(b){p+=b,r=p-1,q=p+1,a.infinite&&(p>=l?(p=0,r=l-1,q=1):p==l-1?q=0:0>p?(p=l-1,r=p-1,q=0):0==p&&(r=l-1))},G=function(){for(var b=0,c=k.length;c>b;++b)k[b].addEventListener("touchstart",y),a.infinite?(k[b].addEventListener("touchmove",z),k[b].addEventListener("touchend",C),k[b].addEventListener("touchcancel",C)):(k[b].addEventListener("touchmove",A),k[b].addEventListener("touchend",E),k[b].addEventListener("touchcancel",E))},H=function(){for(var b=0,c=k.length;c>b;++b)k[b].removeListener("touchstart",y),a.infinite?(k[b].removeListener("touchmove",z),k[b].removeListener("touchend",C),k[b].removeListener("touchcancel",C)):(k[b].removeListener("touchmove",A),k[b].removeListener("touchend",E),k[b].removeListener("touchcancel",E))},n=0,I=k.length;I>n;++n)k[n].style.cssText="position:absolute; left:0; top:0; width:100%; height:100%; overflow:hidden; "+(a.first==n?"":d+"transform:"+e+j+"px"+g);return G(),J=0,K=0,L={},L.lock=function(){H()},L.unlock=function(){G()},L.move=function(b){var c,f,h,i;b=parseInt(b)||0,(b>=0||l-1>=b)&&(c=d+"transform "+a.duration/1e3+"s linear",f=b>p?-1:1,a.infinite&&(f=k[b].style[d+"transform"].indexOf("-")>=0?1:-1),k[p].style[d+"transition"]=c,k[p].style[d+"transform"]=e+f*j+"px"+g,k[b].style[d+"transition"]=c,k[b].style[d+"transform"]=e+0+"px"+g,D=!0,h=p,i=b,u(function(){D=!1,k[h].style[d+"transition"]=k[i].style[d+"transition"]="",a.onchange.call(k,h,i)},a.duration),a.infinite?(p=b,r=p-1,q=p+1,0>r&&(r=l-1),q>l-1&&(q=0)):(p=b,r=p-1,q=p+1))},L}};c.exports=function(a){if(e(this))a.container=this,g(a);else if("[object Array]"==Object.prototype.toString.call(this))for(var b=0,c=this.length;c>b;++c)a.container=this[b],e(this[b])&&g(a);else g(a)}});