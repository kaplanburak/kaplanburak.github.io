export const exp1 = (s) => {
    const totalWidth = window.innerWidth;
    const totalHeight = window.innerHeight;
    const isHorizontal = totalWidth >= totalHeight;

    s.setup = () => {
        s.createCanvas(totalWidth, totalHeight);
    };

    let d = -40;
    let shifter = 0;
    let speed = 2.5;
    let dVelocity = 20;
    let amtMultiplier = 0.1;

    const start = -((isHorizontal ? totalWidth : totalHeight) / 2);
    const end = (isHorizontal ? totalWidth : totalHeight) / 2;

    s.draw = () => {
        s.background(12);
        s.translate(totalWidth / 2, totalHeight / 2);
        s.rotate(-speed * shifter);

        const a = start + shifter;
        const b = end - shifter;

        if (a > 0 || b > (isHorizontal ? totalWidth : totalHeight) / 2) {
            speed *= -1;
            d = Math.random() * 200;
            dVelocity = Math.random() * 20;

            amtMultiplier = Math.random() * (0.1 - 0.01) + 0.01;
        }
        shifter += speed;

        const y = 0;

        s.strokeWeight(-a * 0.2);
        s.stroke((b * (shifter / speed)) / b, (b + speed) / a, a * speed);

        s.point(a, y);
        s.point(b, y);

        d += speed / dVelocity;

        for (let i = 0; i <= 10; i++) {
            s.strokeWeight(7 - speed * Math.random() * i * 0.1);

            const amt = i * amtMultiplier;
            const amtR = 1 - amt;
            const diff = amt - amtR;

            const c = s.lerp(a, b, amt - (diff * d) / 100);
            s.rotate((speed / (shifter + -diff)) * (c / b - a));
            s.stroke(a * speed, shifter / speed, (b + c) / a);

            s.point(c, y);
        }
    };
};
