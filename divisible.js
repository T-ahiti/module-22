
// show outpot from 1-100 but if the number is divisible by 3 then instead of the number show 'foo'
// show outpot from 1-100 but if the number is divisible by 5 then instead of the number show 'bar'
// show outpot from 1-100 but if the number is divisible by 3 then instead of the number show 'foobar'


for(let i=0; i<=50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log('foobar')
    }
    else if (i % 3 === 0){ 
         console.log('foo')
    }
    else if(i % 5 === 0){
        console.log('bar')
    }
    
    
    else{
        console.log(i)
    }
}
