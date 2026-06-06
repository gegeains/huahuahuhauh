// 滚动卡片渐入动画
const cards = document.querySelectorAll('.adv-card,.ser-card');
const cardObserver = new IntersectionObserver((list)=>{
    list.forEach(item=>{
        if(item.isIntersecting){
            item.target.style.opacity = '1';
            item.target.style.transform = 'translateY(0)';
        }
    })
},{threshold:0.15})

cards.forEach(card=>{
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = '0.6s ease';
    cardObserver.observe(card);
})

// 页面滚动导航栏细微变化
window.addEventListener('scroll',()=>{
    const nav = document.querySelector('.navbar');
    if(window.scrollY>80){
        nav.style.boxShadow = '0 3px 15px rgba(37,99,235,0.08)';
    }else{
        nav.style.boxShadow = '0 2px 12px #eee';
    }
})