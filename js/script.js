// 获取配置的恋爱开始日期
const startDate = new Date(`${CONFIG.startDate}T00:00:00`);

// 页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置页面标题和副标题
    document.title = CONFIG.title;
    document.getElementById('site-title').textContent = CONFIG.title;
    document.getElementById('site-subtitle').textContent = CONFIG.subtitle;
    
    // 设置当前年份
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // 设置Google字体
    const googleFonts = document.getElementById('googleFonts');
    googleFonts.href = `https://fonts.googleapis.com/css2?family=${CONFIG.fonts.title.replace(/\s+/g, '+')}&family=${CONFIG.fonts.content.replace(/\s+/g, '+')}:wght@400;700&display=swap`;
    
    // 设置主题颜色
    applyTheme(CONFIG.theme);
    
    // 立即更新一次计时器
    updateCounter();
    
    // 每秒更新一次计时器
    setInterval(updateCounter, 1000);
    
    // 初始化时间线
    initTimeline();
    
    // 初始化图片库
    initGallery();
    
    // 初始化爱的留言
    initLoveLetter();
    
    // 设置音乐
    setupMusic();
    
    // 创建漂浮爱心效果
    createFloatingHearts();
    
    // 滚动动画
    scrollAnimation();
});

// 应用颜色主题
function applyTheme(theme) {
    let mainColor, secondaryColor, gradientStart, gradientEnd;
    
    switch(theme) {
        case 'blue':
            mainColor = '#3498db';
            secondaryColor = '#2980b9';
            gradientStart = '#e0f7fa';
            gradientEnd = '#f0f8ff';
            break;
        case 'purple':
            mainColor = '#9b59b6';
            secondaryColor = '#8e44ad';
            gradientStart = '#f3e5f5';
            gradientEnd = '#fff0f5';
            break;
        case 'red':
            mainColor = '#e74c3c';
            secondaryColor = '#c0392b';
            gradientStart = '#ffebee';
            gradientEnd = '#fff0f0';
            break;
        case 'green':
            mainColor = '#2ecc71';
            secondaryColor = '#27ae60';
            gradientStart = '#e8f5e9';
            gradientEnd = '#f0fff0';
            break;
        case 'pink':
        default:
            mainColor = '#e83e8c';
            secondaryColor = '#b3235e';
            gradientStart = '#ffe6f2';
            gradientEnd = '#f0f8ff';
    }
    
    // 创建CSS变量
    document.documentElement.style.setProperty('--main-color', mainColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--gradient-start', gradientStart);
    document.documentElement.style.setProperty('--gradient-end', gradientEnd);
}

// 初始化时间线
function initTimeline() {
    const container = document.getElementById('timeline-container');
    
    TIMELINE_STORIES.forEach((story, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';
        dateDiv.textContent = story.year;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';
        
        const title = document.createElement('h3');
        title.textContent = story.title;
        
        const paragraph = document.createElement('p');
        paragraph.textContent = story.content;
        
        const image = document.createElement('div');
        image.className = 'memory-image';
        image.id = `year-${index + 1}`;
        image.style.backgroundImage = `url('${story.image}')`;
        
        contentDiv.appendChild(title);
        contentDiv.appendChild(paragraph);
        contentDiv.appendChild(image);
        
        item.appendChild(dateDiv);
        item.appendChild(contentDiv);
        
        container.appendChild(item);
    });
}

// 初始化爱的留言
function initLoveLetter() {
    const letterContainer = document.getElementById('love-letter');
    
    // 添加问候
    const greeting = document.createElement('p');
    greeting.textContent = LOVE_LETTER.greeting;
    letterContainer.appendChild(greeting);
    
    // 添加段落
    LOVE_LETTER.paragraphs.forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        letterContainer.appendChild(paragraph);
    });
    
    // 添加署名
    const signature = document.createElement('p');
    signature.textContent = LOVE_LETTER.signature;
    letterContainer.appendChild(signature);
}

// 更新计时器
function updateCounter() {
    const now = new Date();
    const diff = Math.floor((now - startDate) / 1000);
    
    const years = Math.floor(diff / (365 * 24 * 60 * 60));
    const months = Math.floor((diff % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
    const days = Math.floor((diff % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((diff % (60 * 60)) / 60);
    const seconds = Math.floor(diff % 60);
    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// 初始化图片库
function initGallery() {
    const galleryContainer = document.getElementById('gallery');
    
    // 随机打乱图片顺序
    const shuffledImages = [...GALLERY_PHOTOS].sort(() => 0.5 - Math.random());
    
    shuffledImages.forEach(image => {
        // 创建图片项
        const item = document.createElement('div');
        item.className = 'gallery-item animate__animated';
        
        // 设置加载动画
        item.classList.add('animate__fadeIn');
        item.style.animationDelay = `${Math.random() * 0.5 + 0.1}s`;
        
        // 创建图片元素
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;
        img.loading = 'lazy'; // 懒加载
        
        // 创建图片说明
        const caption = document.createElement('div');
        caption.className = 'gallery-caption';
        caption.textContent = image.caption;
        
        // 添加到DOM
        item.appendChild(img);
        item.appendChild(caption);
        galleryContainer.appendChild(item);
        
        // 点击放大图片
        item.addEventListener('click', function() {
            openLightbox(image.src, image.caption);
        });
    });
}

// 创建图片查看器
function openLightbox(src, caption) {
    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay animate__animated animate__fadeIn';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.flexDirection = 'column';
    
    // 创建图片
    const img = document.createElement('img');
    img.className = 'animate__animated animate__zoomIn';
    img.src = src;
    img.alt = caption;
    img.style.maxWidth = '80%';
    img.style.maxHeight = '80vh';
    img.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
    
    // 创建说明
    const captionEl = document.createElement('div');
    captionEl.textContent = caption;
    captionEl.style.color = 'white';
    captionEl.style.marginTop = '20px';
    captionEl.style.fontSize = '1.2rem';
    
    // 创建关闭按钮
    const closeBtn = document.createElement('div');
    closeBtn.textContent = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '30px';
    closeBtn.style.color = 'white';
    closeBtn.style.fontSize = '2rem';
    closeBtn.style.cursor = 'pointer';
    
    // 关闭事件
    closeBtn.addEventListener('click', function() {
        overlay.classList.replace('animate__fadeIn', 'animate__fadeOut');
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 500);
    });
    
    // 点击背景关闭
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.replace('animate__fadeIn', 'animate__fadeOut');
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 500);
        }
    });
    
    // 添加到DOM
    overlay.appendChild(img);
    overlay.appendChild(captionEl);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
}

// 创建漂浮爱心
function createFloatingHearts() {
    const heart = document.getElementById('floating-heart');
    
    heart.addEventListener('click', function() {
        // 创建心形
        const newHeart = document.createElement('div');
        newHeart.className = 'animate__animated animate__fadeOutUp';
        newHeart.textContent = '❤️';
        newHeart.style.position = 'fixed';
        newHeart.style.left = `${Math.random() * 90 + 5}%`;
        newHeart.style.bottom = '10%';
        newHeart.style.fontSize = `${Math.random() * 2 + 1}rem`;
        newHeart.style.opacity = '0.8';
        newHeart.style.zIndex = '99';
        newHeart.style.animationDuration = '3s';
        newHeart.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
        
        document.body.appendChild(newHeart);
        
        // 播放音效
        const audio = new Audio('data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFzb25pY1N0dWRpb3MuY29tAFRYWFgAAAAhAAADbGVuZ3RoADI2NjkxAFRYWFgAAAAtAAADYXJ0aXN0AEJpZ1NvdW5kQmFuay5jb20gLyBMYXNvbmljU3R1ZGlvcy5jb20AAAAAAAAAAAA=');
        audio.volume = 0.3;
        audio.play();
        
        // 自动移除
        setTimeout(() => {
            document.body.removeChild(newHeart);
        }, 3000);
    });
}

// 设置背景音乐
function setupMusic() {
    const music = document.getElementById('bgMusic');
    
    // 设置音乐源
    music.src = CONFIG.musicUrl;
    
    // 添加自动播放功能
    if (CONFIG.autoplayMusic) {
        document.addEventListener('click', function() {
            music.play().catch(e => {
                console.log('音乐自动播放被浏览器阻止，需要用户手动播放');
            });
        }, { once: true });
    }
}

// 添加滚动动画
function scrollAnimation() {
    const animatedElements = document.querySelectorAll('.animate__animated');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
} 