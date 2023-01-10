let landscape = isLandscape(400, 800);
if (landscape)
    console.log("The image is landscape.");
else
    console.log("The image is portrait.");


function isLandscape(width, height) {
    return (width > height);
}