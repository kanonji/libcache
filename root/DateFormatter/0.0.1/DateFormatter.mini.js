/*
Copyright (c) 2006, NAKAMURA Satoru
All rights reserved.

Redistribution and use in source and binary forms, with or without 
modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice,
      this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.
    * Neither the name of the NAKAMURA Satoru nor the names of its contributors
      may be used to endorse or promote products derived from this
      software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES 
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON 
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS 
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*//**
 * DateFormatter
 * 
 * @website http://clonedoppelganger.net/
 * @version 0.0.1
 * 
 * Example:
 *  var now = new Date();
 *  alert(DateFormatter.format(now, "Y/m/d H:i:s"));
 */var DateFormatter={format:function(e,t){if(typeof t!="string")return;var n=e.getFullYear(),r=e.getMonth(),i=e.getDate(),s=e.getDay(),o=e.getHours(),u=e.getMinutes(),a=e.getSeconds(),f="";for(var l=0,c=t.length;l<c;l++){var h=t.charAt(l);switch(h){case"#":if(l==c-1)break;f+=t.charAt(++l);break;case"Y":f+=n;break;case"y":f+=n.toString().substr(2,2);break;case"m":f+=this.preZero(r+1);break;case"n":f+=r+1;break;case"d":f+=this.preZero(i);break;case"j":f+=i;break;case"w":f+=s;break;case"N":f+=this.isoDay(s);break;case"l":f+=this.weekFullEn[s];break;case"D":f+=this.weekFullEn[s].substr(0,3);break;case"J":f+=this.weekJp[s];break;case"F":f+=this.monthFullEn[r];break;case"M":f+=this.monthFullEn[r].substr(0,3);break;case"O":f+=this.monthOldJp[r];break;case"a":f+=this.ampm(o);break;case"A":f+=this.ampm(o).toUpperCase();break;case"H":f+=this.preZero(o);break;case"h":f+=this.preZero(this.from24to12(o));break;case"g":f+=this.from24to12(o);break;case"G":f+=o;break;case"i":f+=this.preZero(u);break;case"s":f+=this.preZero(a);break;case"t":f+=this.lastDayOfMonth(e);break;case"L":f+=this.isLeapYear(n);break;case"z":f+=this.dateCount(n,r,i);break;case"S":f+=this.dateSuffix[i-1];break;default:f+=h}}return f},weekFullEn:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekJp:["日","月","火","水","木","金","土"],monthFullEn:["January","February","March","April","May","June","July","August","September","October","November","December"],monthOldJp:["睦月","如月","弥生","卯月","皐月","水無月","文月","葉月","長月","神無月","霜月","師走"],dateSuffix:["st","nd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th","st"],preZero:function(e){return parseInt(e)<10?"0"+e:e},from24to12:function(e){return e>12?e-12:e},ampm:function(e){return e<12?"am":"pm"},isoDay:function(e){return e==0?"7":e},lastDayOfMonth:function(e){var t=new Date(e.getFullYear(),e.getMonth()+1,1);return t.setTime(t.getTime()-1),t.getDate()},isLeapYear:function(e){var t=new Date(e,0,1),n=0;for(var r=0;r<12;r++)t.setMonth(r),n+=this.lastDayOfMonth(t);return n==365?"0":"1"},dateCount:function(e,t,n){var r=new Date(e,0,1),i=-1;for(var s=0;s<t;s++)r.setMonth(s),i+=this.lastDayOfMonth(r);return i+n}};