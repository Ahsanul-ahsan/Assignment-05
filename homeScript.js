
const allFilterBtn = document.getElementById('all-filter-btn');
const openFilterBtn = document.getElementById('open-filter-btn');
const closedFilterBtn = document.getElementById('closed-filter-btn');

const filterButtons = [allFilterBtn, openFilterBtn, closedFilterBtn];

function Button(clickedButton) {
    filterButtons.forEach(btn => {
        btn.classList.remove('bg-blue-700', 'text-white');
        btn.classList.add('bg-gray-100', 'text-black');
    });
    clickedButton.classList.remove('bg-gray-100', 'text-black');
    clickedButton.classList.add('bg-blue-700', 'text-white');
}

allFilterBtn.addEventListener('click', function () {
    Button(allFilterBtn);

});

openFilterBtn.addEventListener('click', function () {
    Button(openFilterBtn);
});

closedFilterBtn.addEventListener('click', function () {
    Button(closedFilterBtn);
});


// card js
const card = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((res) => res.json())
        .then((data) => displayCard(data.data))

};

// card display js
const displayCard = (data) => {
    const cardContainer = document.getElementById("card-container");
    data.forEach(card => {
        const newCard = document.createElement("div");
        newCard.innerHTML = `
     <div class="max-w-sm rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden  h-[350px] space-y-2">
             <div class="h-2 ${card.status == "open" ? "bg-green-500" : "bg-[#A855F7]"} w-full"></div>
            <div class="p-3">
                <div class="flex justify-between items-start mb-3">
                    <div
                    class=" ">
                    ${card.status == "open" ? `<img src="./assets/Open-Status.png" alt="">` : ` <img src="./assets/Closed- Status .png" alt="">`}
                   
                   
                    </div>
                    <span
                        class="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        ${card.priority}
                    </span>
                </div>

                <h3 class="text-gray-800 font-bold text-lg mb-2">
                    ${card.title}
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed mb-3">
                    ${card.description}
                </p>

                <div class="flex gap-2 mb-6">
                    
                        ${card.labels.map(label => `
                         <span
                         class="bg-red-100 text-red-500 text-[11px] font-semibold px-3 py-1 rounded shadow-sm uppercase">
                            ${label}
                            
                              </span>
                            `)

                .join("")}
                    
                </div>

                <div class="pt-2 border-t border-gray-100">
                    <p class="text-gray-400 text-xs italic">
                        #${card.id} by <span class="text-gray-500 font-medium not-italic">${card.author}</span>
                    </p>
                    <p class="text-gray-400 text-[10px] mt-1">
                        ${card.updatedAt}
                    </p>
                </div>
            </div>
        </div>
   
   `;

        cardContainer.appendChild(newCard);
    });

};
card();