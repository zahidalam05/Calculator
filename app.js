// let inputBox=document.getElementById('InputBox');
// let buttons=document.querySelectorAll('button');
// let string='';

// buttons.forEach((button) => {
//     button.addEventListener('click',(button) =>
//     {
//         if(button.target.innerText== '=')
//         {
//             string=String(eval(string));
//             inputBox.value=string;
//             // string='';
//         }
//         else if(button.target.innerText=='AC')
//         {
//             string='';
//             inputBox.value=string;
//         }
//         else if(button.target.innerText=='DEL')
//         {
//             string=string.substring(0,string.length-1);
//             inputBox.value=string;
//         }

//         else
//         {
//             string+=button.target.textContent;
//             inputBox.value=string;
//         }
//     });
// });


let inputBox=document.getElementById("InputBox");
let buttons=document.querySelectorAll("button");
let string='';
buttons.forEach((button)=>
{
    button.addEventListener('click',(button) =>
    {
        if(button.target.innerText=='=')
        {
            string=String(eval(string));
            inputBox.value=string;
            string='';
        }

        else if(button.target.innerText=='AC')
        {
            string='';
            inputBox.value=string;
        }
        else if(button.target.innerText=='DEL')
        {
            string =string.substring(0,string.length-1);
            inputBox.value=string;
        }

        else
        {
            string+=button.target.textContent;
            inputBox.value=string;
        }
    });
});

