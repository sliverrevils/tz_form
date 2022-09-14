
const categories=[
    {
        name:'категория № 1',
        checks:['check1','check2','check3']
    },
    {
        name:'категория № 2',
        checks:['check4','check5','check6']
    },
    {
        name:'категория № 3',
        checks:['check7','check8','check9']
    },
]

window.addEventListener('DOMContentLoaded',()=>{
    const categoriesEl=document.querySelector('.categories');
    const propsEl=document.querySelector('.props');
   
    //CATEGORIES LIST
    categories.forEach(el=>{
        categoriesEl.innerHTML+=`<option>${el.name}</option>`
    });

    //ADD CHECKBOX FROM SELECT CATEGORIE
    function onCategoriesSelect(event){
        const index=event?categories.findIndex(el=>el.name===event.target.value):-1;        
        if(index>=0){
            propsEl.innerHTML='';
            console.log(categories[index].checks);
            categories[index].checks.forEach(el=>propsEl.innerHTML+=`<label class='props_check'>${el} <input type="checkbox" name="${el}"></label> <br>`)
        }else{
            propsEl.innerHTML=`
            <h3> cвойства и детали </h3>
           <h5>например,квадратура,размеры и т.д</h5>
           <h5>Сначала выберите категорию</h5>`
        } 
    }
    onCategoriesSelect();
    categoriesEl.addEventListener('change',onCategoriesSelect);

    //ON SUBMIT
    document.querySelector('form').onsubmit=function(event){
        event.preventDefault();        
        const formData=new FormData(this);
        console.log(Array.from(formData))
        alert(JSON.stringify(Array.from(formData).reduce((acc,el)=>{acc[el[0]]=el[1];return acc},{}),null,2));
    }
})