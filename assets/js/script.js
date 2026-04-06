// 鼠鼠安乐窝 - 顶部导航 + 主题切换 + 淡入效果
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.parentElement.classList.add('active');
            const currentThemeSpan = document.querySelector('.current-theme');
            if (currentThemeSpan) {
                currentThemeSpan.textContent = link.textContent;
            }
        }
    });

    // 主题切换功能
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    // 检查本地存储或系统偏好
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        html.setAttribute('data-theme', 'dark');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // 更新图标
            const icon = this.querySelector('i');
            if (newTheme === 'dark') {
                icon.className = 'mdi mdi-weather-sunny';
            } else {
                icon.className = 'mdi mdi-weather-night';
            }
        });
    }
});

// 页面完全加载后添加 loaded 类，触发淡入效果
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});