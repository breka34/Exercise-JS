
function changeColor(color) {
    document.getElementById('left').style.background = color;
    }
    var boja = document.getElementById('btnLeft');
    /* var leftDiv = document.getElementById('left'); */
    
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      return color;
    }
    var b = 102;
    console.log(b);
    
    function changeColor(e) {
      e.stopPropagation();
      this.style.backgroundColor = getRandomColor();
      console.log(this.id, ' element was clicked');
    
    }
    boja.style.backgroundColor = getRandomColor();
    boja.addEventListener('click', changeColor);
     
    
    //typeWriter
    var text = prompt('Unesi neke nebitne informacije');
    var x = 0;
    function ispis() {
      if (x < text.length) {
        var paragraph = document.getElementById('p');
        paragraph.innerHTML += text.charAt(x);
        x++;
        setTimeout(ispis, 60);
      }
    }
    
    //to do list 
    
    var form = document.getElementById('addForm');
    var itemList = document.getElementById('items');
    var submit = document.getElementById('submit');
    
    //form submit event
    
    form.addEventListener('submit', addItem);
    
    //Deleete Event
    itemList.addEventListener('click', removeItem);
    
    
    function addItem(e) {
    var newItem = document.getElementById('item').value;
    e.preventDefault();
      //console.log(1);
      //create new LI elem
    
      var li = document.createElement('li');
      //add clas
      li.className = 'list-group-item';
    
      //ad text node
      li.appendChild(document.createTextNode(newItem));
      console.log(li);
    
      //create del button
      var deleteBtn = document.createElement('button');
    
      //add claass to deleteBtn
    
      deleteBtn.className = 'btn  delete';
      //append text node
      deleteBtn.appendChild(document.createTextNode('X'));
    
      //append Btn
      li.appendChild(deleteBtn);
    
      itemList.appendChild(li);
    
    
    }
    //remove item
    
    function removeItem(e) {
      if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
          var li = e.target.parentElement;
          itemList.removeChild(li);
        }
      }
    }
    
    
    //footer / countingDown
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    var countDown = new Date('Aug 20, 2020 07:00').getTime(),
      y = setInterval(function() {
        let now = new Date().getTime(),
          distance = countDown - now;
        document.getElementById('days').innerText = Math.floor(distance / (day)),
          document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    
      }, second)
    