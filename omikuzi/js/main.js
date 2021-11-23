'use strict' //厳密なエラーチェック
{
    const btn = document.getElementById('btn');

    btn.addEventListener('click',()=>{
        // const result = [
        //     '大吉',
        //     '中吉',
        //     '小吉',
        //     '末吉',
        //     '凶',
        //     '大凶'
        // ]
        const n = Math.random();
        if (n<0.05){
            // 5%
            btn.textContent = '大吉';
        }else if (n<0.2){
            // 15％
            btn.textContent =  '中吉';
        }else {
            // 80％
            btn.textContent =  '吉';
        }
        // const n = Math.floor(Math.random() * result.length);
        // btn.textContent = result[n];
    });
    
    btn.addEventListener('mousedown',()=>{
        btn.classList.add('pressed');
    });

    btn.addEventListener('mouseup',()=>{
        btn.classList.remove('pressed');
    });



}