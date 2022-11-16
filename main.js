const inp = document.querySelector('.our-data')
const btn = document.querySelector('.add')
const form_head = document.querySelector('.form-head')
const sort_data = document.querySelector('.sort')
const sort_data_2 = document.querySelector('.sort_2')
// all data
let data = [{
    content: '',
    id: 1
}]
let id = data.length;
// render function
const addElem = () => {
        data.map((element) => {
        // add new input
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'for-inp')
        const newInp = document.createElement('input')
        newInp.value= element.content
        // add delete button
        const del = document.createElement('span')
        del.setAttribute('class', "del")
        del.textContent = 'x'
        del.setAttribute('onclick', `deleteItem(${element.id})`)
        
        // for change input content
        newInp.addEventListener('focusout', (event) => {
            let updated_Element = data.find((elem => elem.id === element.id))
            updated_Element.content = event.target.value
            console.log(data)
        })

        // append input
        newDiv.append(newInp, del)
        form_head.append(newDiv)
   })
   console.log(data)
}
// delete item
const deleteItem = (id) => {
    data = data.filter((el) => el.id !== id)
    console.log(data)
    form_head.innerHTML = ''
    addElem();
}

inp.addEventListener('focusout', (e) => {
    data[0] = {
        content: e.target.value,
        id: 1
    }
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    id++;
    data.push({
        content:'',
        id:id
    })
    form_head.innerHTML = ''
    addElem();
})

sort_data.addEventListener('click', () => {
    if(data.length<2){
        return ;
    }
    data = data.sort((a,b) => a.content > b.content ? 1 : -1);
        form_head.innerHTML = '';
        addElem();
        sort_data.classList.toggle('active')
        sort_data_2.classList.toggle('active')
})

sort_data_2.addEventListener('click', () => {
    if(data.length<2){
        return;
    }
    data = data.sort((a,b) => b.content > a.content ? 1 : -1);
    form_head.innerHTML = '';
    addElem(); 
    sort_data_2.classList.toggle('active')
    sort_data.classList.toggle('active')
    
})
