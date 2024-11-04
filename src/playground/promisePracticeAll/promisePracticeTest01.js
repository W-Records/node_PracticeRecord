
function getUserData() {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {

            let result = true;
            let data = {
                "name": "tom",
                "age": 18
            };

            if(result){
                resolve(data)
            }
            else{
                reject("数据获取失败");
            }

        } ,2000)
    } )

}


let PromiseObject = getUserData();

console.log( PromiseObject ); 


async function getDataAsync(){

    console.log( PromiseObject );
    console.log( await getUserData() ); 
    console.log( PromiseObject );   
    
}

getDataAsync();
 
console.log( "外面代码" ); 
console.log( PromiseObject ); 
