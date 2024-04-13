const items=document.querySelectorAll('.item');

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'purple';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});
items.forEach((item)=>{
  item.addEventListener('mouseenter', function() {
    this.style.backgroundColor = ' #1BB3D1';
  })
  item.addEventListener('mouseleave', function() {
    this.style.backgroundColor = ''; 
});
})
