// Command "help", that lists all the possible commands
function help (){
  console.log(

    'function startApp() used to welcome App\n'+
    "function onDataReceived() receives the input sent by the user \n" +
    "function unknownCommand() is supposed to run when all other commands have failed \n"+
    "function quit() exits the App \n" +
    "function hello() says hello \n " +
    "function extended hello() using split\n" +
    "function remove() remove a specific tesl from tasks list"
  )
}
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();name
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n'|| text==='exit\n') {
    quit();
  }
  else if (text.startsWith('hello')) {
    hello(text); 
  }
  else if(text=="list\n") {
    list()
  }
  else if (text.startsWith('add')){
    add(text)
  }
  else if (text.startsWith('remove')) {
    remove(text); 
  } else if(text.startsWith('edit')){
    edit(text)
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){ 
  console.log(text.trim(" ")+"!")
}

/**list */
var list1=["first","second","third"];

//*function list
function list(){
  console.log(list1)
  list1.map((index)=>{
  console.log(`${list1.indexOf(index)+1}-${index}`);
  })}
  
  //function add
  function add(text){
    if(text.slice(3).trim() == ""){
      console.log('You have error,add a task')
    }
    else {
      list1.push(text.slice(3).trim())
      console.log("added")
    }
  }

  //functiom remove: remove a specific tesl from tasks list
  function remove(element){
    if(element === 'remove\n') {
      list1.pop()
    } else {
      element = element.replace('\n', '').trim()
      element = element.split(" ").slice(1).join(' ');
      list1.splice(parseInt(element) - 1,1)
      if(parseInt(element) > list1.length) console.log("not available number");
    }
  
  }
  //function edit 
  function edit(something){
    if(something=="edit\n"){
      console.log("please select a task number to edit")
    }
    else{
    index=something.trim().split(" ")[1]
    if(!parseInt(index)){
        list1[list1.length-1]=index
      }
    else{list1[index-1]=something.trim().split(" ")[2]}
  }
  }
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Yasmine Hannouf")

