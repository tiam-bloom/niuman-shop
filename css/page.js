  var page1=document.getElementsByClassName('page1');
  var page2=document.getElementsByClassName('page2');
  var pages=document.getElementsByClassName('pages');
  // var active=document.getElementsByClassName('active');
  

function showPage2(){
    page1[0].setAttribute('style', 'display: none !important');
    page2[0].setAttribute('style', 'display: block !important');
    pages[0].children[0].children[1].setAttribute('style','background-color: #e5e5e5 !important');
    pages[0].children[0].children[2].setAttribute('style','background-color: #01a1ff !important');
    pages[0].children[0].children[1].children[0].setAttribute('style', 'color: black !important');
    pages[0].children[0].children[2].children[0].setAttribute('style', 'color: white !important');

}

function showPage1(){
    page2[0].setAttribute('style', 'display: none !important');
    page1[0].setAttribute('style', 'display: block !important');
    pages[0].children[0].children[2].setAttribute('style','background-color: #e5e5e5 !important');
    pages[0].children[0].children[1].setAttribute('style','background-color: #01a1ff !important');
    pages[0].children[0].children[2].children[0].setAttribute('style', 'color: black !important');
    pages[0].children[0].children[1].children[0].setAttribute('style', 'color: white !important');
}