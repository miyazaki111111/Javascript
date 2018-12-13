(function(){
    'use strict'

    var slider= document.getElementById('slider');
    var lavel=document.getElementById('lavel');
    var btn=document.getElementById('btn');
    var result=document.getElementById('result');
    var symbols=document.getElementById('symbols');
    var numbers=document.getElementById('numbers');

    function getPassword(){
        var seed_letters="abcdefghijklmnopqrstuvwxyz";
        var seed_numbers="0123456789";
        var seed_symbols="!#$%&()";
var seed;

        var len=slider.value;
        var pwd =' ';
seed=seed_letters+seed_letters.toUpperCase();
if(numbers.checked){
    seed +=seed_numbers;
}
if(symbols.checked){
    seed +=seed_symbols;
}
        // for(var i=0;i<len;i++){
        //     pwd +=seed[Math.floor(Math.random()*seed.length)];
        // }
        while(len--) {
                pwd +=seed[Math.floor(Math.random()*seed.length)];
        }
        result.value=pwd;
    }
    slider.addEventListener('change', function(){
        label.innerHTML=this.value;
    })

    btn.addEventListener('click',function(){
        getPassword();
        // result.value="fdafadfasdfasd"
    })

    result.addEventListener('click',function(){
        this.select();
    })

    getPassword();
})();
