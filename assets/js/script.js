// 鼠鼠安乐窝 - 顶部导航高亮当前页面 + 淡入效果
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.parentElement.classList.add('active');
            // 更新顶部显示的当前页面名称
            const currentThemeSpan = document.querySelector('.current-theme');
            if (currentThemeSpan) {
                currentThemeSpan.textContent = link.textContent;
            }
        }
    });
});

// 页面完全加载后添加 loaded 类，触发淡入效果
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});