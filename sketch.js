var dog, happyDog, database, foodS, foodStock;

function preload()
{
	dog=loadImage("doglmg1.png")
  happyDog=loadImage("doglmg.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
    dog = createSprite(250,250,10,10);
    dog.shapeColor = "red";
    dogPosition=database.ref("dog/position");
    dogPosition.on("value",readStock,writeStock)
    dog=createSprite(250,250,50,50)
}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog)
  }
    stroke();
    textSize(50);
    fill("white");
    text("Note: Press UP_ARROW Key To Feed Leo Milk!");
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if (x<=0) {
    x=0;
  } else {
    x=x-1;
  }
database.ref("/").update({
  Food:x
})
  }
