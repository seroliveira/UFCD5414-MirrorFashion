!function($){"use strict";var isIphone=(window.orientation!==undefined),isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>-1
var Inputmask=function(element,options){if(isAndroid)return
this.$element=$(element)
this.options=$.extend({},$.fn.inputmask.defaults,options)
this.mask=String(options.mask)
this.init()
this.listen()
this.checkVal()}
Inputmask.prototype={init:function(){var defs=this.options.definitions
var len=this.mask.length
this.tests=[]
this.partialPosition=this.mask.length
this.firstNonMaskPos=null
$.each(this.mask.split(""),$.proxy(function(i,c){if(c=='?'){len--
this.partialPosition=i}else if(defs[c]){this.tests.push(new RegExp(defs[c]))
if(this.firstNonMaskPos===null)
this.firstNonMaskPos=this.tests.length-1}else{this.tests.push(null)}},this))
this.buffer=$.map(this.mask.split(""),$.proxy(function(c,i){if(c!='?')return defs[c]?this.options.placeholder:c},this))
this.focusText=this.$element.val()
this.$element.data("rawMaskFn",$.proxy(function(){return $.map(this.buffer,function(c,i){return this.tests[i]&&c!=this.options.placeholder?c:null}).join('')},this))},listen:function(){if(this.$element.attr("readonly"))return
var pasteEventName=(navigator.userAgent.match(/msie/i)?'paste':'input')+".mask"
this.$element.on("unmask",$.proxy(this.unmask,this)).on("focus.mask",$.proxy(this.focusEvent,this)).on("blur.mask",$.proxy(this.blurEvent,this)).on("keydown.mask",$.proxy(this.keydownEvent,this)).on("keypress.mask",$.proxy(this.keypressEvent,this)).on(pasteEventName,$.proxy(this.pasteEvent,this))},caret:function(begin,end){if(this.$element.length===0)return
if(typeof begin=='number'){end=(typeof end=='number')?end:begin
return this.$element.each(function(){if(this.setSelectionRange){this.setSelectionRange(begin,end)}else if(this.createTextRange){var range=this.createTextRange()
range.collapse(!0)
range.moveEnd('character',end)
range.moveStart('character',begin)
range.select()}})}else{if(this.$element[0].setSelectionRange){begin=this.$element[0].selectionStart
end=this.$element[0].selectionEnd}else if(document.selection&&document.selection.createRange){var range=document.selection.createRange()
begin=0-range.duplicate().moveStart('character',-100000)
end=begin+range.text.length}
return{begin:begin,end:end}}},seekNext:function(pos){var len=this.mask.length
while(++pos<=len&&!this.tests[pos]);return pos},seekPrev:function(pos){while(--pos>=0&&!this.tests[pos]);return pos},shiftL:function(begin,end){var len=this.mask.length
if(begin<0)return
for(var i=begin,j=this.seekNext(end);i<len;i++){if(this.tests[i]){if(j<len&&this.tests[i].test(this.buffer[j])){this.buffer[i]=this.buffer[j]
this.buffer[j]=this.options.placeholder}else break
j=this.seekNext(j)}}
this.writeBuffer()
this.caret(Math.max(this.firstNonMaskPos,begin))},shiftR:function(pos){var len=this.mask.length
for(var i=pos,c=this.options.placeholder;i<len;i++){if(this.tests[i]){var j=this.seekNext(i)
var t=this.buffer[i]
this.buffer[i]=c
if(j<len&&this.tests[j].test(t))
c=t
else break}}},unmask:function(){this.$element.unbind(".mask").removeData("inputmask")},focusEvent:function(){this.focusText=this.$element.val()
var len=this.mask.length
var pos=this.checkVal()
this.writeBuffer()
var that=this
var moveCaret=function(){if(pos==len)
that.caret(0,pos)
else that.caret(pos)}
if(navigator.userAgent.match(/msie/i))
moveCaret()
else setTimeout(moveCaret,0)},blurEvent:function(){this.checkVal()
if(this.$element.val()!=this.focusText)
this.$element.trigger('change')},keydownEvent:function(e){var k=e.which
if(k==8||k==46||(isIphone&&k==127)){var pos=this.caret(),begin=pos.begin,end=pos.end
if(end-begin===0){begin=k!=46?this.seekPrev(begin):(end=this.seekNext(begin-1))
end=k==46?this.seekNext(end):end}
this.clearBuffer(begin,end)
this.shiftL(begin,end-1)
return!1}else if(k==27){this.$element.val(this.focusText)
this.caret(0,this.checkVal())
return!1}},keypressEvent:function(e){var len=this.mask.length
var k=e.which,pos=this.caret()
if(e.ctrlKey||e.altKey||e.metaKey||k<32){return!0}else if(k){if(pos.end-pos.begin!==0){this.clearBuffer(pos.begin,pos.end)
this.shiftL(pos.begin,pos.end-1)}
var p=this.seekNext(pos.begin-1)
if(p<len){var c=String.fromCharCode(k)
if(this.tests[p].test(c)){this.shiftR(p)
this.buffer[p]=c
this.writeBuffer()
var next=this.seekNext(p)
this.caret(next)}}
return!1}},pasteEvent:function(){var that=this
setTimeout(function(){that.caret(that.checkVal(!0))},0)},clearBuffer:function(start,end){var len=this.mask.length
for(var i=start;i<end&&i<len;i++){if(this.tests[i])
this.buffer[i]=this.options.placeholder}},writeBuffer:function(){return this.$element.val(this.buffer.join('')).val()},checkVal:function(allow){var len=this.mask.length
var test=this.$element.val()
var lastMatch=-1
for(var i=0,pos=0;i<len;i++){if(this.tests[i]){this.buffer[i]=this.options.placeholder
while(pos++<test.length){var c=test.charAt(pos-1)
if(this.tests[i].test(c)){this.buffer[i]=c
lastMatch=i
break}}
if(pos>test.length)
break}else if(this.buffer[i]==test.charAt(pos)&&i!=this.partialPosition){pos++
lastMatch=i}}
if(!allow&&lastMatch+1<this.partialPosition){this.$element.val("")
this.clearBuffer(0,len)}else if(allow||lastMatch+1>=this.partialPosition){this.writeBuffer()
if(!allow)this.$element.val(this.$element.val().substring(0,lastMatch+1))}
return(this.partialPosition?i:this.firstNonMaskPos)}}
$.fn.inputmask=function(options){return this.each(function(){var $this=$(this),data=$this.data('inputmask')
if(!data)$this.data('inputmask',(data=new Inputmask(this,options)))})}
$.fn.inputmask.defaults={mask:"",placeholder:"_",definitions:{'9':"[0-9]",'a':"[A-Za-z]",'?':"[A-Za-z0-9]",'*':"."}}
$.fn.inputmask.Constructor=Inputmask
$(document).on('focus.inputmask.data-api','[data-mask]',function(e){var $this=$(this)
if($this.data('inputmask'))return
e.preventDefault()
$this.inputmask($this.data())})}(window.jQuery)