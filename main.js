/**
 * @TODO get a reference to the Firebase Database object
 */

 const database = firebase.database().ref();

 /**
  * @TODO get const references to the following elements:
  *      - div with id #all-messages
  *      - input with id #username
  *      - input with id #message
  *      - button with id #send-btn and the updateDB
  *        function as an onclick event handler
  */
 
 const allBlogs = document.getElementById('all_blogs');
 const nameElem = document.getElementById('name');
 const titleElem = document.getElementById('title');
 const linkElem = document.getElementById('link');
 const sendBtn = document.getElementById('send-btn');
 if(sendBtn){
    sendBtn.onclick = updateDB;
 }
 /**
  * @TODO create a function called updateDB which takes
  * one parameter, the event, that:
  *      - gets the values of the input elements and stores
  *        the data in a temporary object with the keys USERNAME
  *        and MESSAGE
  *      - console.logs the object above
  *      - writes this object to the database
  *      - resets the value of #message input element
  */
 
 function updateDB(event){
     event.preventDefault();
     const data = {
         NAME: nameElem.value,
         TITLE: titleElem.value,
         LINK: linkElem.value,
     }
     
     // GET PUSH PUT DELETE
     // Write to Database
     database.push(data);
 
     // Reset message field
     nameElem.value = '';
     titleElem.value = '';
     linkElem.value = '';
 }
 
 /**
  * @TODO add the addMessageToBoard function as an event
  * handler for the "child_added" event on the database
  * object
  */
 
 database.on('child_added', addMessageToBoard);
 
 /**
  * @TODO create a function called addMessageToBoard that
  * takes one parameter rowData which:
  *      - console.logs the data within rowData
  *      - creates a new HTML element for a single message
  *        containing the appropriate data
  *      - appends this HTML to the div with id
  *        #all-messages (we should have a reference already!)
  * 
  */
 
 function addMessageToBoard(rowData){
     const data = rowData.val();
     // console.log(data);
 
     let singleBlogs = makeSingleBlogHTML(data.NAME, data.TITLE, data.LINK);
 
     // Append this single message to #allMessages
     allBlogs.append(singleBlogs);
 }
 
 /** 
  * @TODO create a function called makeSingleMessageHTML which takes
  * two parameters, usernameTxt and messageTxt, that:
  *      - creates a parent div with the class .single-message
  * 
  *      - creates a p tag with the class .single-message-username
  *      - update the innerHTML of this p to be the username 
  *        provided in the parameter object
  *      - appends this p tag to the parent div
  * 
  *      - creates a p tag
  *      - updates the innerHTML of this p to be the message
  *        text provided in the parameter object
  *      - appends this p tag to the parent div
  * 
  *      - returns the parent div
  */
 
 function makeSingleBlogHTML(nameTxt, titleTxt, linkTxt){
     // create parent div
     let parentDiv = document.createElement('div');
     parentDiv.className = 'single_blog';
     parentDiv.style.marginBottom ='50px';
 
     // Create username p
     let nameP = document.createElement('p');
     nameP.className = 'info';
 
     nameP.innerHTML = 'Name: ' + nameTxt;
 
     // Append username to div
     parentDiv.append(nameP);
 
     let titleP = document.createElement('p');
     titleP.className = 'info';
     titleP.innerHTML = 'Title: ' + titleTxt;
     parentDiv.append(titleP);

     let linkP = document.createElement('a');
     titleP.className = 'info';
     linkP.href = linkTxt;
     linkP.target = '_blank';
     linkP.innerHTML = 'Link: ' + linkTxt;
     parentDiv.append(linkP);
 
     return parentDiv;
 }
let buttonRef = document.getElementById("submitButton");
function onClick(event){
    event.preventDefault();
    let DataUser = document.getElementById("linkgiven");
    userdata = DataUser.value
}