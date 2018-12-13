(function(){

    var comment=document.getElementById('comment');
    var label=document.getElementById('label');

    var LIMIT = 0;

    label.innerHTML=LIMIT;

    comment.addEventListener('keyup',function(){

            label.innerHTML=this.value.length;
    })
})();
