export const exp0 = (sketch) => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    sketch.setup = () => {
        sketch.createCanvas(w, h);
        sketch.angleMode(sketch.DEGREES);
    };

    let angle = 0;
    let a = 5;

    let sc = 5;
    let scPoint = 0.05;
    let scPos = 5;
    let scNeg = -5;

    let myFill = 210;
    let fillPoint = 28;

    let r = Math.random() * 190 + 60;
    let g = Math.random() * 190 + 60;
    let b = Math.random() * 190 + 60;

    let scanLineX = Math.random() * w;
    let scanLineY = Math.random() * h;
    let scanX = Math.random();
    let scanY = Math.random();

    let scanLineX2 = Math.random() * w;
    let scanLineY2 = Math.random() * h;
    let scanX2 = Math.random();
    let scanY2 = Math.random();

    let mainR = 50;
    let centerX = 0;
    let centerY = 0;

    let mainCenterX = w / 2;
    let mainCenterY = h / 2;

    let strLen;

    sketch.draw = () => {
        mainCenterX += 10 * Math.random(); // go right
        mainCenterY += 10 * Math.random(); // go down
        mainCenterX -= 10 * Math.random(); // go left
        mainCenterY -= 10 * Math.random(); // go up

        // shake center
        centerX = 0.5 * Math.random();
        centerY = 0.5 * Math.random();

        // when too close to edges, throw
        if (mainCenterX < 1) mainCenterX += 2;
        if (mainCenterY < 1) mainCenterY += 2;
        if (mainCenterX > w) mainCenterX -= 2;
        if (mainCenterY > h) mainCenterY -= 2;

        sketch.background(myFill);

        // grains
        sketch.push();
        sketch.strokeWeight(Math.random() * 2);

        sketch.stroke(255);
        for (let i = 0; i < 50; i++) {
            sketch.point(Math.random() * w, Math.random() * h);
        }

        sketch.stroke(0);
        for (let i = 0; i < 50; i++) {
            sketch.point(Math.random() * w, Math.random() * h);
        }
        sketch.pop();

        // scanners
        sketch.push();
        sketch.stroke(r, g, g);
        sketch.strokeWeight(Math.random() * scanX);
        scanLineX += scanX * Math.random();
        if (scanLineX < 0) scanLineX = w;
        if (scanLineX > w) scanLineX = 0;
        scanX += Math.random() / 2;
        scanX -= Math.random() / 2;
        sketch.line(scanLineX, 0, scanLineX, h);

        sketch.stroke(g, r, b);
        sketch.strokeWeight(Math.random() * scanX2);
        scanLineX2 += scanX2 * Math.random();
        if (scanLineX2 < 0) scanLineX2 = w;
        if (scanLineX2 > w) scanLineX2 = 0;
        scanX2 += Math.random() / 2;
        scanX2 -= Math.random() / 2;
        sketch.line(scanLineX2, 0, scanLineX2, h);

        sketch.stroke(b, b, g);
        sketch.strokeWeight(Math.random() * scanY);
        scanLineY += scanY * Math.random();
        if (scanLineY < 0) scanLineY = h;
        if (scanLineY > h) scanLineY = 0;
        scanY += Math.random() / 2;
        scanY -= Math.random() / 2;
        sketch.line(0, scanLineY, w, scanLineY);

        sketch.stroke(g, b, r);
        sketch.strokeWeight(Math.random() * scanY2);
        scanLineY2 += scanY2 * Math.random();
        if (scanLineY2 < 0) scanLineY2 = h;
        if (scanLineY2 > h) scanLineY2 = 0;
        scanY2 += Math.random() / 2;
        scanY2 -= Math.random() / 2;
        sketch.line(0, scanLineY2, w, scanLineY2);
        sketch.pop();

        // the ball
        sketch.push();
        sketch.translate(mainCenterX, mainCenterY);

        //--------------back strings
        sketch.push();
        strLen = sc;
        sketch.strokeWeight(Math.random() * 2);

        sketch.stroke(r, g, g);
        sketch.line(centerX, centerY, (scanLineX - w / 2) / strLen, -h / 2 / strLen);
        sketch.push(); //string ball

        sketch.push();
        sketch.fill(myFill);

        sketch.strokeWeight(Math.random());
        sketch.stroke(r, g, g);
        sketch.ellipse(scanLineX, scanLineY, 7, 7);
        sketch.ellipse(scanLineX2, scanLineY2, 7, 7);
        sketch.stroke(r, r, b);
        sketch.ellipse(scanLineX, scanLineX2, 7, 7);
        sketch.ellipse(scanLineY, scanLineY2, 7, 7);

        sketch.strokeWeight(Math.random());
        sketch.stroke(g, r, b);
        sketch.ellipse(-scanLineX, -scanLineY, 7, 7);
        sketch.ellipse(-scanLineX2, -scanLineY2, 7, 7);
        sketch.stroke(g, r, g);
        sketch.ellipse(-scanLineX, -scanLineX2, 7, 7);
        sketch.ellipse(-scanLineY, -scanLineY2, 7, 7);

        sketch.strokeWeight(Math.random());
        sketch.stroke(b, b, g);
        sketch.ellipse(scanLineX, -scanLineY, 7, 7);
        sketch.ellipse(scanLineX2, -scanLineY2, 7, 7);
        sketch.stroke(b, r, g);
        sketch.ellipse(scanLineX, -scanLineX2, 7, 7);
        sketch.ellipse(scanLineY, -scanLineY2, 7, 7);

        sketch.strokeWeight(Math.random());
        sketch.stroke(g, b, r);
        sketch.ellipse(-scanLineX, scanLineY, 7, 7);
        sketch.ellipse(-scanLineX2, scanLineY2, 7, 7);
        sketch.stroke(g, b, b);
        sketch.ellipse(-scanLineX, scanLineX2, 7, 7);
        sketch.ellipse(-scanLineY, scanLineY2, 7, 7);

        sketch.pop();

        sketch.stroke(r, g, g);
        sketch.fill(r, g, b);
        sketch.ellipse((scanLineX - w / 2) / strLen, -h / 2 / strLen, 10, 10);
        sketch.pop();

        sketch.stroke(g, r, b);
        sketch.line(centerX, centerY, (scanLineX2 - w / 2) / strLen, h / 2 / strLen);
        sketch.push(); //string ball

        sketch.stroke(g, r, b);
        sketch.fill(r, g, b);
        sketch.ellipse((scanLineX2 - w / 2) / strLen, h / 2 / strLen, 10, 10);
        sketch.pop();

        sketch.stroke(b, b, g);
        sketch.line(centerX, centerY, -w / 2 / strLen, (scanLineY - h / 2) / strLen);
        sketch.push(); //string ball

        sketch.stroke(b, b, g);
        sketch.fill(r, g, b);
        sketch.ellipse(-w / 2 / strLen, (scanLineY - h / 2) / strLen, 10, 10);
        sketch.pop();

        sketch.stroke(g, b, r);
        sketch.line(centerX, centerY, w / 2 / strLen, (scanLineY2 - h / 2) / strLen);
        sketch.push(); //string ball

        sketch.stroke(g, b, r);
        sketch.fill(r, g, b);
        sketch.ellipse(w / 2 / strLen, (scanLineY2 - h / 2) / strLen, 10, 10);
        sketch.pop();

        sketch.pop();
        //--------------back strings

        sketch.scale(sc);
        sketch.stroke(r, g, b);
        sketch.strokeWeight(Math.random() + 0.8);
        if (scPos > 10 || scNeg < -10) sketch.fill(b, g, r);
        else sketch.fill(myFill * 1.2);
        sketch.ellipse(centerX, centerY, mainR, mainR); // main circle

        sketch.push();
        sketch.rotate(Math.random() * 360);
        sketch.stroke(myFill * 3);
        sketch.strokeWeight(Math.random());
        sketch.line(centerX, centerY, 0, mainR / 2 - 0.8); // white inner lines
        sketch.pop();

        //core circles
        sketch.push();
        sketch.strokeWeight(0.3);

        sketch.rotate(myFill);
        sketch.stroke(g, b, r);
        sketch.ellipse(centerX, centerY, mainR / 2.4, mainR / 2.4);

        sketch.rotate(myFill * r);
        sketch.stroke(b, b, g);
        sketch.ellipse(centerX, centerY, mainR / 2.6, mainR / 2.6);

        sketch.rotate(myFill * g);
        sketch.stroke(g, r, b);
        sketch.ellipse(centerX, centerY, mainR / 2.8, mainR / 2.8);

        sketch.rotate(myFill * b);
        sketch.stroke(r, g, g);
        sketch.ellipse(centerX, centerY, mainR / 3, mainR / 3);
        sketch.pop();

        //main outer circle
        sketch.rotate(angle);
        sketch.fill(r, g, b);
        sketch.scale(1);
        sketch.ellipse(centerX, centerY, 15, 15);
        sketch.push();
        sketch.strokeWeight(Math.random() * 2.5);
        sketch.line(0, 0, 0, w * 15);
        sketch.pop();

        //core balls
        sketch.rotate(angle * 1.2);
        sketch.stroke(r + 50, g + 50, b - 50);
        sketch.fill(r + 50, g + 50, b - 50);
        sketch.ellipse(centerX, centerY, 10, 10);
        sketch.push();
        sketch.strokeWeight(Math.random() * 2.0);
        sketch.line(0, 0, 0, w * 15);
        sketch.pop();

        sketch.rotate(angle * 0.2);
        sketch.stroke(r + 20, g + 50, b + 80);
        sketch.fill(r + 20, g + 50, b + 80);
        sketch.ellipse(centerX, centerY, 5, 5);
        sketch.push();
        sketch.strokeWeight(Math.random() * 1.5);
        sketch.line(0, 0, 0, w * 15);
        sketch.pop();

        angle += a;
        a += Math.random() * 2;
        a -= Math.random() * 2;

        if (a > 10 || a < -10) {
            r = Math.random() * 190 + 50;
            g = Math.random() * 190 + 50;
            b = Math.random() * 190 + 50;
            a = 0;
        }

        sc -= scPoint;

        if (sc > scPos) {
            scPoint = -scPoint;
            scNeg += Math.random();
            scNeg -= Math.random();
        }

        if (sc < scNeg) {
            scPoint = -scPoint;
            scPos += Math.random();
            scPos -= Math.random();
        }

        if (sc < 0) myFill = fillPoint * -sc;
        else myFill = fillPoint * sc;

        sketch.pop();
    };
};
