let master=document.querySelector('.master');
c=2
function fun1() {
  if (c%2==0) {
    master.classList.remove('day')
    master.classList.add('night')
    c++;
  }
  else{
    master.classList.remove('night')
    master.classList.add('day')
    c++;
  }

}
