window.addEventListener("load", function () {
    let GAME_WIDTH = 1040;
    let GAME_HEIGHT = 560;
    let gameLive = true;
    let canvas = document.getElementById('mycanvas');
    let ctx = canvas.getContext('2d');

    let Luffy = new NhanVatPhu(document.getElementById('lufi'), 200, 0, 5, 100, 100, 'lufi');
    let Zoro = new NhanVatPhu(document.getElementById('zoro'), 310, 0, 6, 100, 100, 'zoro');
    let Tuan = new NhanVatPhu(document.getElementById('tuan'), 420, 0, 8, 100, 100, 'tuan');
    let PhanHai = new NhanVatPhu(document.getElementById('phanhai'), 530, 4, 5, 100, 100, 'phanhai');
    let PhanQuan = new NhanVatPhu(document.getElementById('phanquan'), 640, 0, 11, 100, 100, 'phanquan');
    let Mikami = new NhanVatPhu(document.getElementById('mikami'), 900, 110, 0, 150, 230, 'mikami');
    let Hieu = new NhanVatChinh(document.getElementById('hieu'), 0, 200, 5, 100, 100);
    Mikami.drawNvPhu(ctx);
    let array = [Luffy, Zoro, Tuan, PhanHai, PhanQuan]
    Hieu.drawNvChinh(ctx);

    canvas.addEventListener('mousedown', Hieu.moveNvChinh);
    canvas.addEventListener('mouseup', Hieu.stopNvChinh);
    canvas.addEventListener("touchstart", Hieu.moveNvChinh);
    canvas.addEventListener('touchend', Hieu.stopNvChinh);

    function update() {
        if (Hieu.isMove) {
            Hieu.x = Hieu.x + Hieu.speedX;
        }
        array.forEach(function (nhanvat, index) {
            if (check(Hieu, nhanvat)) {
                gameLive = false;
                alert('Game Over');
                window.location = "";
            }

            nhanvat.y += nhanvat.speedY;
            if (nhanvat.y <= 10) {
                nhanvat.y = 10;
                nhanvat.speedY *= -1;
            } else if (nhanvat.y >= GAME_HEIGHT - 50) {
                nhanvat.y = GAME_HEIGHT - 50;
                nhanvat.speedY *= -1;
            }
        });
    };

    function draw() {
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        Hieu.drawNvChinh(ctx);
        array.forEach(function (nhanvat, index) {
            nhanvat.drawNvPhu(ctx);
        });
    };

    function step() {
        update();
        draw();

        if (gameLive) {
            window.requestAnimationFrame(step);
        }
    }

    function check(rect1, rect2) {
        let closeOnWidth = Math.abs(rect1.x - rect2.x) <= Math.max(rect1.w, rect2.w);
        let closeOnHeight = Math.abs(rect1.y - rect2.y) <= Math.max(rect1.h, rect2.h);

        return closeOnHeight && closeOnWidth;
    }

    step();
});















