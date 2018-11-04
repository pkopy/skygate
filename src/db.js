

const test = {}

  const dbName = "forms";
  
  
  let db;
  
  let req = indexedDB.open(dbName, 2);
  req.onsuccess = function (evt) {
    // Better use "this" than "req" to get the result to avoid problems with
    // garbage collection.
    // db = req.result;
    db = this.result;
    console.log("openDb DONE");
  };
  req.onupgradeneeded = (evt) => {
    
    var objectStore = evt.currentTarget.result.createObjectStore("form", { autoIncrement : true })
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
  
  }
  
  // var request = indexedDB.open(dbName, 2);
  function getObjectStore(store_name, mode) {
    var tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }
  
  function get() {
    let tx = db.transaction(['form'])
    let objStore = tx.objectStore('form');
    console.log(objStore)
    let req = objStore.getAll()
    req.onsuccess = (evt) => {
      console.log(req.result)
    }
  }
  function add (){
    const cust = { ssn: "444-44-4441", name: "Billpx", age: 35, email: "bxxxillix@compakny.com" };
    var store = getObjectStore("form", "readwrite");
    var req;
    try {
      req = store.add(cust)
  
    } catch (e) {
      console.log(e)
      throw e
    }
  
    req.onsuccess = function (evt) {
      console.log("Insertion in DB successful");
      
      console.log(store);
    };
    req.onerror = function() {
      console.error("addPublication error", this.error);
      alert(this.error);
    };
  }
  

let data = get
module.export = data


// const butt = document.querySelector('button');

// butt.addEventListener('click', get)


// var db = event.target.result;
//     console.log(db)
//     var transaction = db.transaction("customers", "readwrite")
//   transaction.oncomplete = function(event) {
//     alert("All done!");
//   };
  
//   transaction.onerror = function(event) {
//     // Don't forget to handle errors!
//   };
  
//   var objectStore = transaction.objectStore("customers");
  
//     var request = objectStore.add(cust);
//     request.onsuccess = function(event) {
//       // event.target.result === customer.ssn;
//     };

// request.onerror = function(event) {
//   // Handle errors.
// };


  
  

  // // Create an objectStore to hold information about our customers. We're
  // // going to use "ssn" as our key path because it's guaranteed to be
  // // unique - or at least that's what I was told during the kickoff meeting.
  // var objectStore = db.createObjectStore("customers", { autoIncrement : true });

  // // Create an index to search customers by name. We may have duplicates
  // // so we can't use a unique index.
  // objectStore.createIndex("name", "name", { unique: false });

  // // Create an index to search customers by email. We want to ensure that
  // // no two customers have the same email, so use a unique index.
  // objectStore.createIndex("email", "email", { unique: true });
  //   console.log(db)
  // // Use transaction oncomplete to make sure the objectStore creation is 
  // // finished before adding data into it.
  // objectStore.transaction.oncomplete = function(event) {
  //   // Store values in the newly created objectStore.
  //   var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
  //   customerData.forEach(function(customer) {
  //       console.log(customer)
  //     customerObjectStore.add(customer);
  //   });
  // };


// request.onsuccess = (evt) => {
  
// }


// var request1 = indexedDB.open(dbName);

// request1.onupgradeneeded = (evt) => {
//     console.log(evt)
//     var db = evt.target.result;
//     var transaction = db.transaction("customers", "readwrite").objectStore("customers")
//     transaction.add(cust)

// }

// request1.onsuccess = (evt) => {
//     console.log(evt.target.result)
// }
// var request = indexedDB.open(dbName);

// request.onupgradeneeded = function (event) {

//     var db = event.target.result;

//     // Create another object store called "names" with the autoIncrement flag set as true.    
//     var objStore = db.createObjectStore("names", { autoIncrement : true });

//     // Because the "names" object store has the key generator, the key for the name value is generated automatically.
//     // The added records would be like:
//     // key : 1 => value : "Bill"
//     // key : 2 => value : "Donna"
//     customerData.forEach(function(customer) {
//         objStore.add(customer.name);
//     });
// };
