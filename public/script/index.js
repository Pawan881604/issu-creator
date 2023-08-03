const createBtn = document.getElementById('createBtn');
const indexForm = document.getElementById('index-form')
const remove = document.getElementById('remove')

// this from search part
const search = document.getElementById('search')
let searchText = document.getElementById('search-text-result')
// -------- all event listener------------
createBtn.addEventListener('click', ShowIndexForm)
remove.addEventListener('click', removeIndexForm)
//------- search event
search.addEventListener('input', searchFun)

// show Form function
function ShowIndexForm() {
  indexForm.classList.add('active-form')
}

//--Remove Form function
function removeIndexForm() {
  indexForm.classList.remove('active-form')
}

//------- search function
let s = document.querySelectorAll('.s-fun');
function searchFun(e) {
  let searchStr = ''
  //get and inpuyt data and trim
  let inputValue = e.target.value.trim();

  if (inputValue.length < 1) {
    searchStr += '';
  }
  if (inputValue == ' ') {
    searchStr += 'please enter a valid input'
  } else {
    searchStr += 'issu not found'
  }

  searchText.innerHTML = searchStr
  // this loop highlited whenever search
  for (let i = 0; i < s.length; i++) {
    let elementText = s[i].textContent;
    let highlightedText = elementText.replace(new RegExp(inputValue, 'gi'), match => `<span class="green-text">${match}</span>`);
    s[i].innerHTML = highlightedText;
  }

}




// filter function -------------

let filter = document.getElementById('filter');
let label = document.querySelectorAll('.label');
let project_list = document.querySelectorAll('.project-list');

// filter event
filter.addEventListener('change', (e) => {
  const input = e.target.value.toUpperCase();
  // run loop in project list and get real select output
  for (let i = 0; i < project_list.length; i++) {
    let labelsInProject = project_list[i].querySelectorAll('.label');
    let matchingLabels = [];

    labelsInProject.forEach((label) => {
      if (label.textContent.toUpperCase().includes(input)) {
        matchingLabels.push(label);
      }
    });
    // if find data and display none and block
    if (matchingLabels.length > 0) {
      project_list[i].style.display = 'block';
    } else {
      project_list[i].style.display = 'none';
    }
  }
});


