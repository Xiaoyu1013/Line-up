let t = 0; // time variable

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(400, 400, 100);
}

function draw() {
  background(10, 10); // 半透明背景（创建足迹）

  // 创建 x 和 y 网格上的椭圆 
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // 每个圆的初始位置取决于鼠标位置
      const xAngle = map(mouseX, 0, width, -20 * PI, 20 * PI, true);
      const yAngle = map(mouseY, 0, height, -5 * PI, 5 * PI, true);
      // 也根据粒子的位置变化 
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // 每个粒子绕圈运动 
      const myX = x + 50 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // 绘制粒子
    }
  }

  t = t + 0.01; // 更新时间
}
