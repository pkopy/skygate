

const test = {}

  const dbName = "forms";
  
  
  let db;
  
  let req = indexedDB.open(dbName, 2);
  req.onsuccess = function (evt) {
    db = this.result;
    console.log("openDb DONE");
  };
  req.onupgradeneeded = (evt) => {
    
    var objectStore = evt.currentTarget.result.createObjectStore("form", { autoIncrement : true })
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
  
  }
  
  
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

