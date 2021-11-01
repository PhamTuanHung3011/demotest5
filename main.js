window.addEventListener("load", function () {
    let GAME_WIDTH = 1240;
    let GAME_HEIGHT = 560;
    let gameLive = true;
    let canvas = document.getElementById('mycanvas');
    let ctx = canvas.getContext('2d');
    // document.getElementById("mycanvas").addEventListener("click", function () {
    //     Hieu.moveNvChinh();
    // alert("Hello World!");


    let Luffy = new NhanVatPhu(document.getElementById('lufi'), 200, 0, 5, 80, 80, 'lufi');
    let Zoro = new NhanVatPhu(document.getElementById('zoro'), 310, 0, 3, 80, 80, 'zoro');
    let Tuan = new NhanVatPhu(document.getElementById('tuan'), 420, 0, 6, 80, 80, 'tuan');
    let PhanHai = new NhanVatPhu(document.getElementById('phanhai'), 530, 4, 5, 80, 80, 'phanhai');
    let PhanQuan = new NhanVatPhu(document.getElementById('phanquan'), 660, 0, 1, 200, 200, 'phanquan');
    let Mikami = new NhanVatPhu(document.getElementById('mikami'), 1050, 110, 0, 80, 80, 'mikami');
    let Hieu = new NhanVatChinh(document.getElementById('hieu'), 0, 200, 5, 100, 100);
    Mikami.drawNvPhu(ctx);
    let array = [Luffy, Zoro, Tuan, PhanHai, PhanQuan,Mikami];
    Hieu.drawNvChinh(ctx);

    canvas.addEventListener("mousedown", function () {
        Hieu.moveNvChinh()
        sound.play();
    })
    canvas.addEventListener('mouseup', function () {
        Hieu.stopNvChinh()
    })
   canvas.addEventListener('touchstart', function () {
        Hieu.moveNvChinh()
    });
   canvas.addEventListener('touchend', function () {
        Hieu.stopNvChinh()
    });

// canvas.addEventListener('mousedown', Hieu.moveNvChinh.apply(this));
// canvas.addEventListener('mouseup', Hieu.stopNvChinh.apply(this));
// canvas.addEventListener("touchstart", Hieu.moveNvChinh.apply(this));
// canvas.addEventListener('touchend', Hieu.stopNvChinh.apply(this));

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
            } else if (nhanvat.y >= GAME_HEIGHT - 70) {
                nhanvat.y = GAME_HEIGHT - 70;
                nhanvat.speedY *= -1;
            }
        });
    }

    function draw() {
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        Hieu.drawNvChinh(ctx);
        array.forEach(function (nhanvat, index) {
            nhanvat.drawNvPhu(ctx);
        });
    }

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
})
let sound = new Audio()
sound.src = 'audio/denvau.mp3';
document.getElementById('lufi').style.display = 'none';
document.getElementById('zoro').style.display = 'none';
document.getElementById('tuan').style.display = 'none';
document.getElementById('phanhai').style.display = 'none';
document.getElementById('phanquan').style.display = 'none';
document.getElementById('mikami').style.display = 'none';
document.getElementById('hieu').style.display = 'none';













