const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
    journeyBoard.classList.toggle("expanded");
});

const Data = 
  {
    tasks: [
      {
          task_id: 18882,
          task_title: "Explore the world of management",
          task_description:
              "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
          status: "notworkyet",
          assets: [
            {
              asset_id: 18883,
              asset_title: "Technical Project Management",
              asset_description: "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable\r\nStaggering Approach",
              asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
              asset_type: "display_asset",
              asset_content_type: "video"
          },
          {
              asset_id: 18884,
              asset_title: "Threadbuild",
              asset_description: "Watch the video and thread build, and jot out key threads while watching that video.",
              asset_content: " ",
              asset_type: "input_asset",
              asset_content_type: "threadbuilder"
          },
          {
              asset_id: 18885,
              asset_title: "Structure your pointers",
              asset_description: "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
              asset_content: " ",
              asset_type: "input_asset",
              asset_content_type: "article"
          },
          {
              asset_id: 18886,
              asset_title: "4SA Method",
              asset_description: "To explore more read more",
              asset_content: "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
              asset_type: "display_asset",
              asset_content_type: "article"
          }
          ],
      },
  ],  
};

const tasks = Data.tasks;

const cardsContainer = document.getElementById("cards-container");

function createCards(task) {
  
tasks.forEach((task) => {
  task.assets.forEach((asset) => {
      const card = document.createElement("div");
      card.className = "card mb-2 shadow-sm";

      const cardHeader = document.createElement("div");
      cardHeader.className = "card-header bg-black text-white";
      cardHeader.innerText = asset.asset_title;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const cardDescription = document.createElement("p");
      cardDescription.className = "card-text";
      cardDescription.innerText = "Description: " + asset.asset_description.replace(/\r\n/g, ", ");

      let cardContent;
      if (asset.asset_id === 18883) {
          cardContent = document.createElement("iframe");
          cardContent.src = asset.asset_content;
          cardContent.width = "100%";
          cardContent.height = "400";
          cardContent.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          cardContent.allowFullscreen = true;
      } else if (asset.asset_id === 18885) {
          cardContent = document.createElement("div");
          cardContent.innerHTML = `
              <hr>
              <h4 style="color:"black"">Title</h4>
              <textarea class="form-control mb-2"></textarea>
              <h4>Content</h4>
              <img src="assets/tools.png" alt="tools" style="width:100%">
              <textarea class="form-control mb-2" placeholder=""></textarea>
          `;
      } else if (asset.asset_id === 18884) {
          cardContent = document.createElement("div");
          cardContent.innerHTML = `
              <hr>
              <h4>Thread A</h4> 
              <br> 
              <div class="d-flex">
                <div class="flex-grow-1 mr-2">
                <label for="sub-thread" class="form-label">Sub Thread 1</label>
                <textarea class="form-control mb-2 flex-grow-1 mr-2" placeholder="Enter your sub-thread here"></textarea>
                </div>

                <div class="ml-2">
                <label for="sub-thread" class="form-label">Sub Interpretation 1</label>
                <textarea class="form-control mb-2 ml-2 " placeholder="Enter your interpretation here"></textarea>
                </div>
              </div
              <br>
              <br>
              <div class="d-flex align-items-center">
                <img class="btn option_buttons" src="assets/option_buttons.png" alt="Option_buttons" style="width:40%">
                <button class="btn select_button">Select Categ ↓</button>
                <button class="btn select_button">Select Process ↓</button>
              </div>
              <br>
              <br>
              
              <button class="btn btn-secondary float-start sub_btn">+ Sub-thread</button>
              <br>
              <br>

              <div>
                <label for="sub-thread" class="form-label summary">Summary for Thread A</label>
                <textarea class="form-control mb-2 flex-grow-1 mr-2" placeholder="Enter text here"></textarea>
              </div>

          `;
      } else {
          cardContent = document.createElement("p");
          cardContent.innerText = "No content available.";
      }

      cardBody.appendChild(cardDescription);
      cardBody.appendChild(cardContent);

      card.appendChild(cardHeader);
      card.appendChild(cardBody);

      cardsContainer.appendChild(card);
  });
});
}
tasks.forEach((task) => createCards(task));
