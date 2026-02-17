function toggleBtn(){
  const bar = document.getElementById('bar')
  const close = document.getElementById('close')
  const nav = document.getElementById('nav')

 if(bar.style.display !== 'none'){
    bar.style.display = 'none';
    close.style.display = 'block';
    nav.style.display = 'block';   
  }else{
    bar.style.display = 'block';
    close.style.display = 'none';
    nav.style.display = 'none'; 
  }
}
