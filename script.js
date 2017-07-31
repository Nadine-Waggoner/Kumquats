var thelist1 = ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Whale_shark_Georgia_aquarium.jpg/1200px-Whale_shark_Georgia_aquarium.jpg", "http://media.buzzle.com/media/images-en/gallery/aquatic-animals/900-163014234-puffer-fish-in-ocean.jpg", "https://www.itsnature.org/wp-content/uploads/2011/01/3100747747_101dc2d719.jpg", "https://www.wired.com/wp-content/uploads/images_blogs/wiredscience/2014/01/Os-female-striking-snail-b-med.jpg",];
var thelist2 = ["http://i5.bbs.fd.zol-img.com.cn/t_s800x5000/g4/M07/04/0E/Cg-4WVIpu1GIfJPgAAGT9U8FK9QAALS3QL2jMQAAZQN655.jpg", "http://images4.fanpop.com/image/photos/22100000/The-number-numbers-22189064-1732-1732.jpg", "http://www.hdgalaxynote3wallpapers.com/wp-content/uploads/Fire/Fire%20number%203%20Galaxy%20Note%203%20Wallpapers.jpg"]
var thelist = ["https://www.organicfacts.net/wp-content/uploads/2013/06/kumquat.jpg", "http://www.stethnews.com/wp-content/uploads/2015/05/Kumquats-Benefits.jpg", "https://jansenphoto.files.wordpress.com/2016/01/kumquats-143-5x7.jpg?w=840", "http://www.seriouseats.com/images/2015/01/autumn-giles-kumquat-creamsicle-smoothie-3.jpg", "https://static01.nyt.com/images/2013/01/16/dining/16KUMQUAT_SPAN/16KUMQUAT_SPAN-articleLarge-v2.jpg", "http://farm5.static.flickr.com/4044/4357104231_30e4e2ffb5.jpg", "http://4.bp.blogspot.com/-2Y5HztWhqcY/TbXNCpLIeyI/AAAAAAAAAbY/QsVMClV1rzs/s1600/sugared.jpg", "https://www.metro.ca/userfiles/image/fruits-vegetables-herbs/kumquat01_small.jpg"]
count = -1;
function next_photo(){
  count = count + 1;
  if (count == thelist.length) {
    count = 0;
  }
  return thelist[count];
}

count2 = thelist.length;
function previous_photo(){
  count2 = count2 - 1;
  if (count2 == -1) {
    count2 = thelist.length - 1;
  }
  return thelist[count2];
}


function change_picture(){
  document.getElementById("photo").src = next_photo();
}

function change_picture2(){
  document.getElementById("photo").src = previous_photo();
}
