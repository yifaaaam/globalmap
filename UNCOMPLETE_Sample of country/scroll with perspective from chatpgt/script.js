window.addEventListener("scroll", function() {
    const scrollY = window.scrollY; // 获取垂直滚动距离

    // 调整滚动距离以适应您的需求，例如将滚动距离映射到旋转角度
    const rotationAngle = scrollY / 5; // 调整5以适应您的需求

    // 获取带有透视效果的容器元素
    const container = document.querySelector(".container");

    // 更新容器内内容的 transform 属性以应用视差效果
    container.querySelector(".content").style.top = `${rotationAngle}px`;
});