const container = document.querySelector('.container');
const displayDiv = document.querySelector('.on-click');
let div = document.querySelector('.div')
const topic = document.querySelector('.title')
console.log(div);
let card1 = {
    topic:'Qui est esse',
    subTopic: 'Qui est esse...',
    content: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
};
let card2 = {
    topic: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    subTopic:'ea molestias quasi exercitati...',
    content:'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
};
let card3 = {
    topic: 'eum et est occaecati',
    subTopic:'eum et est occaecati...',
    content:'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
};
let card4 = {
    topic: 'nesciunt quas odio',
    subTopic: 'nesciunt quas odio',
    content: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque',
};
let card5 = {
    topic:'dolorem eum magni eos aperiam quia',
    subTopic: 'dolorem eum magni eo...',
    content: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae',
};
let card6 = {
    topic: 'magnam facilis autem',
    subTopic: 'magnam facilis autem...',
    content: 'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas',
};
let card7 = {
    topic: 'dolorem dolore est ipsam',
    subTopic: 'dolorem dolore est i...',
    content: 'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores ;excepturi ipsam ut commodi dolor voluptatum modi aut vitae',
};
let card8 = {
    topic:'magnam facilis autem',
    subTopic:'magnam facilis autem',
    content:'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas',
};
let card9 = {
    topic:'dolorem dolore est ipsam',
    subTopic:'dolorem dolore est i...',
    content:'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae',
};
let card10 = {
    topic:'nesciunt iure omnis dolorem tempora et accusantium',
    subTopic:'nesciunt iure omnis...',
    content:'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas',
};
const arrContainer = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];
function render() {
    let postHTML = '';
    for (let i = 0; i < arrContainer.length; i++){
        let html =`
        <button class="card" onclick="let res = arrContainer.slice(${i},${i +1});render();copy(); topic.innerHTML = res[0].topic; div.innerHTML = res[0].content">
            <h5>
                ${arrContainer[i].topic}
            </h5>
            <p class="sub-topic">
                ${arrContainer[i].subTopic}
            </p>
            <p class="inner-text">
                cc
            </p>
        </button>
        `
        postHTML+= html;
    }
    container.innerHTML = postHTML;
}
render()

function copy(){
    container.classList.toggle("container-hide");
    displayDiv.classList.toggle("display");
}
function display() {
    container.classList.toggle("container-hide");
    displayDiv.classList.toggle("display");
}




//arrContainer.forEach((item, i)=>{
    //     let html =`
    //     <button class="card" onclick="copy()">
    //         <h5>
    //             ${item.topic}
    //         </h5>
    //         <p class="sub-topic">
    //             ${i}  ${item.subTopic}
    //         </p>
    //         <p class="inner-text">
    //             ${item.content}
    //         </p>
    //     </button>
    //     `
    //     container.insertAdjacentHTML("beforeend", html)
    // });