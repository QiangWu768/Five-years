/**
 * 五周年纪念网站配置文件
 * 修改此文件来自定义网站内容
 */

// 基本信息配置
const CONFIG = {
    // 恋爱开始的日期（格式：年-月-日）
    startDate: '2018-10-01',
    
    // 网站标题
    title: '我们的五周年纪念',
    
    // 网站副标题
    subtitle: '我们在一起的第五个年头',
    
    // 是否自动播放背景音乐
    autoplayMusic: true,
    
    // 背景音乐URL（可以是本地音乐如 'music/our-song.mp3' 或在线音乐）
    musicUrl: 'https://example.com/your-love-song.mp3',
    
    // 颜色主题（可选：'pink', 'blue', 'purple', 'red', 'green'）
    theme: 'pink',
    
    // 字体设置（从 Google Fonts 选择）
    fonts: {
        title: 'Ma Shan Zheng',
        content: 'Noto Serif SC'
    }
};

// 时间线故事配置
const TIMELINE_STORIES = [
    {
        year: '第一年',
        title: '初识',
        content: '在这里描述你们相识的故事...',
        image: 'images/year1.jpg'
    },
    {
        year: '第二年',
        title: '共同成长',
        content: '在这里描述你们第二年的故事...',
        image: 'images/year2.jpg'
    },
    {
        year: '第三年',
        title: '风雨同舟',
        content: '在这里描述你们第三年的故事...',
        image: 'images/year3.jpg'
    },
    {
        year: '第四年',
        title: '相知相伴',
        content: '在这里描述你们第四年的故事...',
        image: 'images/year4.jpg'
    },
    {
        year: '第五年',
        title: '五周年',
        content: '在这里描述你们第五年的故事...',
        image: 'images/year5.jpg'
    }
];

// 照片墙配置
const GALLERY_PHOTOS = [
    { src: 'images/gallery/photo1.jpg', caption: '第一次约会' },
    { src: 'images/gallery/photo2.jpg', caption: '一起旅行' },
    { src: 'images/gallery/photo3.jpg', caption: '生日惊喜' },
    { src: 'images/gallery/photo4.jpg', caption: '一起看日出' },
    { src: 'images/gallery/photo5.jpg', caption: '圣诞节' },
    { src: 'images/gallery/photo6.jpg', caption: '第一次做饭' },
    { src: 'images/gallery/photo7.jpg', caption: '一起看电影' },
    { src: 'images/gallery/photo8.jpg', caption: '逛街购物' },
    { src: 'images/gallery/photo9.jpg', caption: '四周年纪念' }
];

// 爱的留言配置
const LOVE_LETTER = {
    greeting: '亲爱的，',
    paragraphs: [
        '五年的时光，转眼即逝。回首往事，有欢笑，有泪水，更多的是与你携手同行的温暖记忆。',
        '感谢你一直陪伴在我身边，给我力量和勇气。',
        '希望未来的日子，我们依然手牵手，肩并肩，一起面对生活的每一个挑战，分享每一刻的喜悦。'
    ],
    signature: '爱你的我'
}; 