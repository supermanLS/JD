window.onload=function(){
    // 下拉菜单
    var lis=$('.xlbtn');
       // console.log(lis) 
        
        for (var i = 0; i < lis.length; i++) {
            hover(lis[i],function(){
                var btns=$('.xlbtnnr',this)[0];
                   console.log(btns)         
                btns.style.display="block"
            },function(){
                var as=$('.xlbtnnr',this)[0];
                // console.log(as);
                as.style.display="none";
            })
        };

        // banner  选项卡
        var banbtns=$('li',$('.bannerleft')[0]);
        // console.log(banbtns)
        for (var i = 0; i < banbtns.length; i++) {
            hover(banbtns[i],function(){
                var btns=$('.bnlbox',this)[0];
                   console.log(btns)         
                btns.style.display="block"
            },function(){
                var as=$('.bnlbox',this)[0];
                // console.log(as);
                as.style.display="none";
            })
        };
             // 选项卡
			var btns=getClass('fzxbtright');
			var nrs=getClass('max-box');
			
			for (var i = 0; i < nrs.length; i++) {
				btn=btns[i].getElementsByTagName('li');
			    as=btns[i].getElementsByTagName('a');
			    nr=getClass('fzxbmmiddle',nrs[i]);
				
				aa(btn,as,nr)
			};
			function aa(btn,as,nr){

			 
	     	  for (var i = 0; i < btn.length; i++) {
		    	btn[i].index=i;

		    	btn[i].onmouseover=function(){
		    		for (var j = 0; j < nr.length; j++) {
		    			nr[j].style.display="none";
		    			btn[j].className='';
		    			as[j].id="";
		    		};
		    		nr[this.index].style.display="block";
		    		btn[this.index].className="fbtr";
		    		as[this.index].id="fbtra";
		    	}

		    };
      } 
    // 选项卡结束
    // 轮播图
    var bans=getClass('bannimg')[0];
    // console.log(bans)
    var imgs=bans.getElementsByTagName('a');
    // console.log(imgs);
    var banbtn=getClass('banbtn')[0];
    var bbtn=banbtn.getElementsByTagName('li');
    var index=0;
    var t=setInterval(bb,2000);
    function bb(){
    	index++;
    	if(index>imgs.length-1){
    		index=0;
    	}
    	for (var i = 0; i < imgs.length; i++) {
    		animate(imgs[i],{opacity:0})
    		bbtn[i].className='';
    	};
    	// imgs[index].style.zIndex='1';
        animate(imgs[index],{opacity:1})
    	bbtn[index].className='banbtna';
    }
    for (var i = 0; i < bbtn.length; i++) {
		bbtn[i].index=i;
		bbtn[i].onclick=function(){
			for(var j=0;j<imgs.length;j++){
				animate(imgs[j],{opacity:0})
				bbtn[j].className="";
			}
			animate(imgs[this.index],{opacity:1})
			this.className="banbtna";
			index=this.index;
		}
	
	};
     var box=getClass('bannermiddle')[0];
     box.onmouseover=function(){
     	clearInterval(t);
     }
     // console.log(box)
     box.onmouseout=function(){
     	t=setInterval(bb,2000);
     }  
     var right=getClass('imgright')[0];
     right.onclick=function(){
     	bb();
     }
     var left=getClass('imgleft')[0];
     left.onclick=function(){
     	index--;
     	if(index==-1){
     		index=imgs.length-1
     	}
     	 for (var i = 0; i < imgs.length; i++) {
         	 animate(imgs[i],{opacity:0})
         	 bbtn[i].className="";
         	
         };
            bbtn[index].className='banbtna';
         	 animate(imgs[index],{opacity:1})
     }
     //banner 轮播结束
     // 小banner 
    var flbox=getClass('flbox')
     for (var i = 0; i <flbox.length; i++) {
         bn(i);
     };
     function bn(a){
         var flbox=getClass('flbox')[a]
         var flimg=flbox.getElementsByTagName('div');
         var flw=parseInt(getStyle(flimg[0],'width'))
         // console.log(flimg)
         flbox.style.width=flw*flimg.length+'px';
         var flbtn=getClass('flbtn')[a].getElementsByTagName('li');
         var num=0;
         var s=setInterval(cc,2000)
         function cc(){
            animate(flbox,{marginLeft:-flw},400,function(){
                flbox.appendChild(getFirst(flbox));
                flbox.style.marginLeft=0;
                 num++;
             if(num>flimg.length-1){
                num=0;
             }
             for (var i = 0; i < flimg.length; i++) {
                 
                 flbtn[i].className='';
             };

             flbtn[num].className='flbtn1';

             
             })
            }
         for (var j = 0; j < flbtn.length; j++) {
             flbtn[j].aa=j;
             flbtn[j].onmouseover=function(){
                for (var i = 0; i < flbtn.length; i++) {
                    flbtn[i].className='';
                    
                }
                this.className='flbtn1';
                animate(flbox,{marginLeft:this.aa*-flw})
                num=this.aa;
                // console.log(this.aa)
             }
         };
         var  frlimga=getClass('frlimga')[a];
         frlimga.onmouseover=function(){
            clearInterval(s);
         }
         frlimga.onmouseout=function(){
            s=setInterval(cc,2000);
         }
         var fbleft=getClass('flbleft')[a];
         fbleft.onclick=function(){
            num--;
            if(num==-1){
                num=flimg.length-1;
            }
             for (var i = 0; i < flimg.length; i++) {
                
                 flbtn[i].className='';
             };
             flbtn[num].className='flbtn1';
             animate(flbox,{marginLeft:-num*flw})
         }
         var fbright=getClass('flbright')[a];
         fbright.onclick=function(){
            cc();
         }
     }

     // 图片移动
     var pzbox=getClass('move')
     for (var i = 0; i < pzbox.length; i++) {
        // if(i==1){
        //     i=2;
        // }
        var pzimg=pzbox[i].getElementsByTagName('img')[0];
        tp(pzimg);
     };
     
     // console.log(pzimg)
     function tp(pzimg){
         pzimg.onmouseover=function(){
            animate(pzimg,{marginLeft:-10},200);
         }
          pzimg.onmouseout=function(){
            animate(pzimg,{marginLeft:0},200);
         }
     }
     //侧边栏动画
     var cba=getClass('cba-box');
     for (var i = 0; i < cba.length; i++) {
         var cbaBox=getClass('cbdown',cba[i])[0];
         cb(cba[i],cbaBox)
     };
     
     // console.log(cbaBox)
     function cb(cba,cbabox){
        cba.onmouseover=function(){
            animate(cbabox,{left:-80},400,Tween.Quad.easeIn);
         }
         cba.onmouseout=function(){
            animate(cbabox,{left:0},600,Tween.Bounce.easeOut);
         }
     }
     // 坐下轮播
     var tw_box=$('.tw-box')[0];
     // console.log(tw_box)
     var twbox=$('.twbox1',tw_box);
     // console.log(twbox)
     var twh=parseInt(getStyle(twbox[0],'height'));
     // console.log(twh)
        tw_box.style.height=twh*twbox.length+'px';
        // console.log(tw_box.style.height)
      var num=0;
      setInterval(function(){

            animate(tw_box,{marginTop:-twh},500,function(){
                tw_box.appendChild(getFirst(tw_box));
                // console.log(getFirst(tw_box))
                tw_box.style.marginTop=0;    
            })
            
      },3000)
     // 左边栏
     var zbls=$('.zbl');
     // console.log(zbls)
     var arr=[];
     var zbtns=$('li',$('.zlist')[0])
     // console.log(zbtns)
     var zltop=$('.zltop');
      // console.log(zltop)
     var zlbot=$('.zlbot')
     var zlist=$('.zlist')[0];
     for (var i = 0; i < zbls.length; i++) {
             arr.push(zbls[i].offsetTop);
         }; 
     for (var i = 0; i < zbtns.length; i++) {
         zbtns[i].index=i;
         zbtns[i].onclick=function(){
            animate(document.body,{scrollTop:arr[this.index]})
            animate(document.documentElement,{scrollTop:arr[this.index]})
         }
     };
     window.onscroll=function(){
        var doc=document.body.scrollTop?document.body:document.documentElement;
        for (var i = 0; i < arr.length; i++) {
            if(arr[i]<=doc.scrollTop){
                for (var j = 0;j < zltop.length; j++) {
                    zltop[j].style.display='none';
                    // zltop[j].style.color='#fff';
                    zlbot[j].style.display='block';
                };
                zltop[i].style.display='block';
                // zltop[i].style.color='#c81623';
                zlbot[i].style.display='none';
                
                

            }

        };
         if(arr[0]>doc.scrollTop){
                zlist.style.display='none'
            }
             if(arr[0]<doc.scrollTop){
                zlist.style.display='block'
            }
             if(arr[arr.length-1]<doc.scrollTop){
                zlist.style.display='none'
            }
     }
     // console.log(arr)   

}