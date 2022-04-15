var dog, dogHappy;
var foodStock;
var changinggameState, readinggameState;
var bedroom, garden, washroom;

function preload(){
  dogImg=loadImage("images/Dog.png");
  dogHappy=loadImage("images/Happy.png");
  bedroom=loadImage("images/Bed Room.png");
  garden=loadImage("images/Garden.png");
  sadDog=loadImage("images/deadDog.png")

}

function setup() {
	database= firebase.database();
  createCanvas(800, 700);
  dog = createSprite(400,350,10,10);
  dog.addImage("dogImg",dogImg);

  dog.scale=0.15;
 

  database.ref('foodStock').on("value",readStock);
 textSize(20); 
}
function draw() {  
  background("green");
  fill("white")
  text("Food Remaining: "+foodStock,300,150)
  text("Note: Press UP ARROW To Feed The Dog",200,70);
  
  if(keyDown(UP_ARROW)){
     writeStock(foodStock-1);
     dog.addImage(dogHappy);
 }  
 
 drawSprites();
 }
 function readStock(data){
       foodStock=data.val();
 }
 function writeStock(x){
   if(x<=0){
     x=0;
   }
   database.ref('/').update({
     foodStock:x
   })
 }
 