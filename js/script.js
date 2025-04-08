/**
 * 主脚本文件
 */

// 页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    document.getElementById('current-year').textContent = new Date().getFullYear();
}); 