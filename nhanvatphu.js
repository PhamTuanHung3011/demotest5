class NhanVatPhu {


    constructor(img,x,y,speedY,w,h,name) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.speedY = speedY;
        this.w = w;
        this.h = h;
        this.name = name;
    }

    drawNvPhu(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

}