const myImage = new Image();
myImage.src = 'data:image/png;base64,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';


myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 123;
    canvas.height =123;


    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

    ctx.clearRect(0,0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 500;

    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++){
        let row = [];
        for (let x = 0; x < canvas.width; x++){
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness,
                cellColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }

    function calculateRelativeBrightness(red, green, blue) {
        return (Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        ) * 0.01);
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = 4;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.angle = 0;
        }
        update() {
            if(this.y < 0 || this.y > canvas.height) this.y = 0;
            if(this.x < 0 || this.x > canvas.width) this.x = 0;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mappedImage[this.position1][this.position2][0];
            let movement = (2 - this.speed) + this.velocity;
            this.angle += this.speed*1.5;
            this.size = this.speed * 1.5;
            this.y += (movement + Math.sin(this.angle) * 3)*0.3;
            this.x += (movement + Math.cos(this.angle) * 2)*0.5;
            
            if(this.y >= canvas.height) {
                this.y = 0;
            }
            if(this.x >= canvas.width) {
                this.x = 0;
            }
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = mappedImage[this.position1][this.position2][1];
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function init(){
        for(let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle);
        }
    }
    init();
    function animate(){
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0,0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for(let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.5;
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
});
