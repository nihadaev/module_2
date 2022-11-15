const inp = document.querySelector('.our-data')
const btn = document.querySelector('.add')
const form_head = document.querySelector('.form-head')
const for_inp = document.querySelector('.for-inp')


let data = [{
    content: '',
    id: 1
}]
let id = data.length;


const addElem = () => {
    data.map((element) => {
        // add new input
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'for-inp')
        const newInp = document.createElement('input')
        newInp.value= element.content
        // add delete button
        const del = document.createElement('img')
        del.setAttribute('src', "./img/del.svg")
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
    addElem()
}

inp.addEventListener('focusout', (e) => {
    data[0] = {
        content: e.target.value,
        id: 1
    }
    // console.log(data)
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


    // // add new input
    // const newDiv = document.createElement('div')
    // newDiv.setAttribute('class', 'for-inp')
    // const newInp = document.createElement('input')
    // newInp.setAttribute('myid',id)

    // // add delete button
    // const del = document.createElement('img')
    // del.setAttribute('src', "./img/del.svg")
    // del.setAttribute('myid', id)

    // // for change input content
    // newInp.addEventListener('focusout', (event) => {
    //     let inp_id = +newInp.getAttribute('myid')
    //     console.log(inp_id)
    //     let updated_Element = data.find((elem => elem.id === inp_id))
    //     updated_Element.content = event.target.value
        
    // })

    // // delete element
    // del.addEventListener('click', (e) => {
    //     let del_id = +del.getAttribute('myid')
    //     if (data.some((el) => el.id === del_id)) {
    //         data = data.filter((element) => element.id !== del_id)
    //         console.log(del_id)
    //     }
    //     console.log(data)
    // })
    // // append input
    // newDiv.append(newInp, del)
    // form_head.append(newDiv)
})

