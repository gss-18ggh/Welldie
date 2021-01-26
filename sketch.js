//Create variables here
var  dog, happyDog, database, foodS, foodStock, readStock;
var doggoI1, doggoI2

function preload()
{
  //load images here
  
  doggoI1 = loadImage("dogImg.png")
  doggoI2 = loadImage("dogImg1.png")


}

function setup() {

  database=firebase.database();
  console.log(database);

	createCanvas(500, 500);
  
foodStock = database.ref("food");
foodStock.on("value",  function(data){

  foodS = data.val();
  
  
  }) ;
dog = createSprite(250, 370, 10, 10);
dog.addImage(doggoI1);
dog.scale = 0.2



}


function draw() {  

  background(46, 139, 87);

if(keyDown("up")){

  writeStock(foodS);
  dog.addImage(doggoI1);

}

textSize(20)
  fill("white")
 text("food remaining: "+ foodS, 200, 100)
 text("NOTE: press up arrow Key to feed the dog", 70, 50);


  drawSprites();
  //add styles here

}



function writeStock(x){
if(x<=0){

  x = 0

}

else{

x = x-1

}

database.ref("/").update({

food:x

})  

}

