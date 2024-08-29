let tabs = document.querySelectorAll('.tab');
let paras=document.querySelectorAll('.container')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      paras .forEach(para => {
            para.style.display = 'none';
        });
        let targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'block';
        
    });
});
