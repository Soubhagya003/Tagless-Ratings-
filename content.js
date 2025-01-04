function isProblemPage() {
    // Example: Check for an element that exists only on problem pages
    return document.querySelector('div[style="padding: 0.5em;"]') !== null;
}

if(isProblemPage){



let isvisi=false;

function tog(){
    document.querySelectorAll('.tag-box').
    forEach(
        tag =>
        {
            if(tag.getAttribute('title')!='Difficulty'){
                //tag.remove();

                if(isvisi){
                    tag.style.display='none';
                }
                else{
                    tag.style.display='inline';

                }
            }

        }


    );

    

    tagbutt.innerText = isvisi ? 'Show Tags' : 'Hide Tags';
    isvisi=!isvisi;

}



document.querySelectorAll('.tag-box').
forEach(tag =>
    {//tag.style.display='none';
        if(tag.getAttribute('title')!='Difficulty'){
            tag.style.display='none';
        }

    }
);
document.querySelectorAll('.tag-box[title="Difficulty"]').
forEach(
    rating =>{
        rating.style.display='inline';
        rating.style.color='black';
        rating.style.fontWeight='bold';
    }
);

console.log("CF tags are hidden,only rating is shown");

const container=document.querySelector('div[style="padding: 0.5em;"]');

const tagbutt=document.createElement('button');
tagbutt.innerText='show tags';

tagbutt.id='tagbutt1';


container.appendChild(tagbutt);

tagbutt.addEventListener('click',tog);

}
