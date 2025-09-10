// 返回顶部功能
document.querySelector('.back-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 显示/隐藏返回顶部按钮
window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// 导航菜单激活状态
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// 表单提交
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('感谢您的留言！我们将尽快与您联系。');
    this.reset();
});

// 初始化隐藏返回顶部按钮
document.querySelector('.back-to-top').style.display = 'none';