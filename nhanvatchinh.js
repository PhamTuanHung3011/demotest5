class NhanVatChinh {
    isMove = false;
    constructor(img,x,y,speedX,w,h) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.w = w;
        this.h = h;
    }


    drawNvChinh(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    moveNvChinh () {
        this.isMove = true;
    }
    stopNvChinh () {
        this.isMove = false;
    }


}