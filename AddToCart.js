var AddItemId = 0;
function AddToCart(item){
    AddItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',AddItemId)
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);
    var delbtn = document.createElement('button');
    delbtn.innerText('Delete');
    delbtn.setAttribute('onclick', 'del('+AddItemId+')');
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delbtn);
    cartItems.append(selectedItem);
}

function del(item){
    document.getElementById(item).remove();
}
