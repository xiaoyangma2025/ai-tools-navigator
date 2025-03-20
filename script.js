// 添加页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tool-card');
    
    // 为每个卡片添加渐入动画
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // 添加点击效果
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const link = card.querySelector('a');
            if (link) {
                window.open(link.href, '_blank');
            }
        });
    });
}); 