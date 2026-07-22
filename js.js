<script>
    var img = document.getElementById("img")
var images = ["/Users/ansel/Documents/Personal Website/homepage/imagepool/regatta.jpg",
            "/Users/ansel/Documents/Personal Website/homepage/imagepool/windmills.jpg",
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/skyline.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/skyline2.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/owen.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/train.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/zeke.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/milkyway.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/jets.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/snowplow.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/katie.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/charles.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/river.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/kitesurfing.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/muni.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/poleman.jpg',
            '/Users/ansel/Documents/Personal Website/homepage/imagepool/shelburne.jpg',]

img.src = images[Math.floor(Math.random()*images.length)];



setInterval(function(){img.src = images[Math.floor(Math.random()*images.length)]},  12000 );
</script>
