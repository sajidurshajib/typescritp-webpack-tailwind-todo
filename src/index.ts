let data = {topic:'', detail: '', bg_color: 'white'}

// title handle
const handleTopicChange = (e: Event)=>{
    const inputElement = e.target as HTMLInputElement
    const value = inputElement.value
    data.topic = value
}
const topic = document.getElementById('topic') as HTMLInputElement
topic.addEventListener('input', handleTopicChange)


// detail handle
const handleDetailChange = (e: Event)=>{
    const detailElement = e.target as HTMLInputElement
    const value = detailElement.value
    data.detail = value

    // detail for length
    const detailForLength = document.getElementById('detail') as HTMLTextAreaElement
    if(detailForLength.rows){
        detailForLength.rows = value.split('\n').length > 2 ? value.split('\n').length : 2
    }
}
const detail = document.getElementById('detail') as HTMLTextAreaElement
detail.addEventListener('input', handleDetailChange)



const radioButtons = document.querySelectorAll<HTMLInputElement>('input[name="note_bg_color"]');

radioButtons.forEach((radio: HTMLInputElement) => {
    radio.addEventListener("change", () => {
        if (radio.checked) {
            const selectedValue = radio.value;
            data.bg_color = selectedValue
        }
    });
});


const submitBtn = document.getElementById('submit') as HTMLButtonElement
submitBtn.addEventListener('click',(e)=>{
    topic.value = ''
    detail.value = ''
    const white_btn = document.getElementById('white_color') as HTMLInputElement
    white_btn.checked = true
    if(data.topic.length !== 0 && data.detail.length !==0){
        save(data)
    }
})


if(localStorage.getItem('todos') !== null){
    let allTodosFromStorage = JSON.parse(localStorage.getItem('todos') || '[]')
    allTodosFromStorage.forEach((item: {id:Number, topic:String, detail:String, bg_color: String})=>{
        
        let div = document.createElement('div')
        div.classList.add(`bg-${item.bg_color}-400`, 'w-10/12', 'p-4','my-8', 'mx-auto', 'rounded-md', 'relative')
        
        let topic= document.createTextNode(String(item.topic))
        let detail = document.createTextNode(String(item.detail))
        
        let h4 = document.createElement('h4')
        h4.classList.add('text-xl', 'font-bold', 'text-indigo-900')
        let p = document.createElement('p')
        p.classList.add('text-indigo-900')
        
        h4.appendChild(topic)
        p.appendChild(detail)
        div.appendChild(h4)
        div.appendChild(p)

        let btn = document.createElement('button')
        btn.appendChild(document.createTextNode('x'))
        btn.classList.add('absolute', 'right-4', 'top-4', 'text-red-900', 'crossButton')
        btn.setAttribute('data-id',String(item.id))
        div.appendChild(btn)

        document.getElementById('allTodos')?.appendChild(div)
    })
}


let buttons = document.getElementsByClassName('crossButton') as HTMLCollectionOf<HTMLButtonElement>
let buttonsArray = Array.from(buttons) as HTMLButtonElement[]
buttonsArray.forEach(element => {
    element.addEventListener('click',()=>{
        console.log(element.dataset.id)
        remove(Number(element.dataset.id))
    })
});

const save = (obj: {})=>{
    obj = {...obj, id:Date.now()}
    let getObjArray = localStorage.getItem('todos')
    if(getObjArray === null){
        localStorage.setItem('todos', JSON.stringify([obj]))
    }else{
        let data = JSON.parse(getObjArray)
        let newData = [...data, obj]
        localStorage.setItem('todos', JSON.stringify(newData))
    }
}


function remove(id: Number){
    let  array = JSON.parse(localStorage.getItem('todos') || '[]')
      
    let objectIdToRemove = id;
      
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === objectIdToRemove) {
            array.splice(i, 1);
            localStorage.setItem('todos', JSON.stringify(array))
            location.reload()
            break;
        }
    }
      
}