// 鼠标滚动式导航栏效果
window.addEventListener("scroll",()=>{
    let header=document.querySelector("header nav");
    header.classList.toggle("sticky",window.scrollY>0);
})


// 首页轮播图
class Slide{
    constructor(){
        this.slideBoxDOM = document.querySelector('.part2');
        this.slideLeftBtnDOM = this.slideBoxDOM.querySelector(".slide-left-btn");
        this.slideRightBtnDOM = this.slideBoxDOM.querySelector(".slide-right-btn");
        this.bannerBoxDOM = this.slideBoxDOM.querySelector(".banner-box");
        this.paginationBoxDOM = this.slideBoxDOM.querySelector(".pagination-box");

        // 计数器
        this._currentIndex = 0;
        this._bannerItemDOMs = null;
        // bannerItemDOMs length
        this._bannerItemDOMsLen = 0;

        // 图片对象数据
        this.banners = [
            {
                imageName: '01.jpg',  
            },
            {
                imageName: '02.jpg',  
            },
            {
                imageName: '03.jpg',  
            },
            {
                imageName: '04.jpg',  
            },
            {
                imageName: '05.jpg',  
            },
            {
                imageName: '06.jpg',  
            },
            {
                imageName: '07.jpg',  
            },
            //可以继续增加图片
        ];
        this.imageUrl = '../image/';

        //定时器
        this.timer = null;
    };

    get currentIndex(){
        return this._currentIndex;
    }

    //用来监听计数器变化,根据变换来改变当前的横幅
    set currentIndex(num){
        // 将所有横幅归初始
        Object.values(this.bannerItemDOMs).forEach((item,i) =>{
            item.classList.remove('left','middle','right');
            item.onclick = null;
            this.paginationBoxDOM.children[i].classList.remove('chose');
        });

        if(num < 0){
            this._currentIndex = this.bannerItemDOMsLen - 1;
        } else if (num >= this.bannerItemDOMsLen) {
            this._currentIndex = 0;
        }else{
            this._currentIndex =  num;
        }
        this.paginationBoxDOM.children[this._currentIndex].classList.add('chose');

        if(this._currentIndex === 0){
            this.showCurrentBanner(this.bannerItemDOMsLen - 1 , this._currentIndex,this._currentIndex + 1);
        }else if(this._currentIndex === this.bannerItemDOMsLen - 1){
            this.showCurrentBanner(this._currentIndex - 1 , this._currentIndex,0)
        }else{
            this.showCurrentBanner(this._currentIndex - 1 ,this._currentIndex,this._currentIndex + 1);
        }
    }

    showCurrentBanner(leftIndex,mindleIndex,rightIndex){
        this.bannerItemDOMs[leftIndex].classList.add('left');
        this.bannerItemDOMs[mindleIndex].classList.add('middle');
        this.bannerItemDOMs[rightIndex].classList.add("right");
        this.bannerItemDOMs[leftIndex].onclick =() => {
            this._currentIndex--;
        }
        this.bannerItemDOMs[rightIndex].onclick = () =>{
            this._currentIndex++;
        }
    }

    
    getBannerItemDOMs(){
        return this.slideBoxDOM.querySelectorAll('.banner-item');
    }

    // 获取 banner-itemDOM 字符串，用来渲染 DOM
     getBannerItemHTML(imageName){
        return `<div class="banner-item"><img src="${this.imageUrl+imageName}"></div>`
    }

    //渲染DOM
    drawDOM(banners){
        this.bannerBoxDOM.innerHTML = banners.reduce((html,item) => {
            return html + this.getBannerItemHTML(item.imageName);
        },'');
        this.banners.forEach((item,i) => {
            const span = document.createElement('span');
            span.addEventListener('mouseover',()=>{
                this._currentIndex = 1;
            });
            this.paginationBoxDOM.append(span);
        });
    }

    //启动定时器
    openTimer(){
        this.timer = setInterval(() => {
            this.currentIndex++;
        },3000);
    }

    stopTimer(){
        clearInterval(this.timer);
    }

    init(){
        //初始化
        this.drawDOM(this.banners);
        this.bannerItemDOMs = this.getBannerItemDOMs();
        this.bannerItemDOMsLen = this.bannerItemDOMs.length;
        this.currentIndex = 0;
        

        //监听事件
        this.slideLeftBtnDOM.addEventListener('click',() =>{
            this.currentIndex--;
        })
        this.slideRightBtnDOM.addEventListener('click', () =>{
            this.currentIndex++;
        })

        //自动轮播
        this.openTimer();
        this.slideBoxDOM.addEventListener('mouseover',() =>{
            this.stopTimer();
        });
        this.slideBoxDOM.addEventListener('mouseout',() =>{
            this.openTimer();
        })
    }

}

new Slide().init();