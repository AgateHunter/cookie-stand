

const seattle = {
    name: "Seattle",
    phoneNumbers: ["Main: 555-1212", "Fax: 555-6363"],
    render: function() {
            const rootElement = document.getElementById("root");
  
      const storeSection = document.createElement("section");
      storeSection.classList.add("location")
      rootElement.appendChild(storeSection);
  
      const firstTitle = document.createElement("h2");
      firstTitle.textContent = this.name;
      storeSection.appendChild(firstTitle);
  
      const storeDataList = document.createElement("ul");
      storeSection.appendChild(storeDataList);
  
     
      for( let i=0; i<this.phoneNumbers.length; i++ ) {
        const phoneItem = document.createElement('li');
        phoneItem.textContent = this.phoneNumbers[i];
        storeDataList.appendChild(phoneItem);
      }
    }
  }

  const tokyo = {
    name: "Tokyo",
    phoneNumbers: ["Main: 555-1212", "Fax: 555-6363"],
    render: function() {
            const rootElement = document.getElementById("root");
  
      const storeSection = document.createElement("section");
      storeSection.classList.add("location")
      rootElement.appendChild(storeSection);
  
      const firstTitle = document.createElement("h2");
      firstTitle.textContent = this.name;
      storeSection.appendChild(firstTitle);
  
      const storeDataList = document.createElement("ul");
      storeSection.appendChild(storeDataList);
  
     
      for( let i=0; i<this.phoneNumbers.length; i++ ) {
        const phoneItem = document.createElement('li');
        phoneItem.textContent = this.phoneNumbers[i];
        storeDataList.appendChild(phoneItem);
      }
    }
  }

  const dubai = {
    name: "Dubai",
    phoneNumbers: ["Main: 555-1212", "Fax: 555-6363"],
    render: function() {
            const rootElement = document.getElementById("root");
  
      const storeSection = document.createElement("section");
      storeSection.classList.add("location")
      rootElement.appendChild(storeSection);
  
      const firstTitle = document.createElement("h2");
      firstTitle.textContent = this.name;
      storeSection.appendChild(firstTitle);
  
      const storeDataList = document.createElement("ul");
      storeSection.appendChild(storeDataList);
  
     
      for( let i=0; i<this.phoneNumbers.length; i++ ) {
        const phoneItem = document.createElement('li');
        phoneItem.textContent = this.phoneNumbers[i];
        storeDataList.appendChild(phoneItem);
      }
    }
  }

  const paris = {
    name: "Paris",
    phoneNumbers: ["Main: 555-1212", "Fax: 555-6363"],
    render: function() {
            const rootElement = document.getElementById("root");
  
      const storeSection = document.createElement("section");
      storeSection.classList.add("location")
      rootElement.appendChild(storeSection);
  
      const firstTitle = document.createElement("h2");
      firstTitle.textContent = this.name;
      storeSection.appendChild(firstTitle);
  
      const storeDataList = document.createElement("ul");
      storeSection.appendChild(storeDataList);
  
     
      for( let i=0; i<this.phoneNumbers.length; i++ ) {
        const phoneItem = document.createElement('li');
        phoneItem.textContent = this.phoneNumbers[i];
        storeDataList.appendChild(phoneItem);
      }
    }
  }

  const lima = {
    name: "Lima",
    phoneNumbers: ["Main: 555-1212", "Fax: 555-6363"],
    render: function() {
            const rootElement = document.getElementById("root");
  
      const storeSection = document.createElement("section");
      storeSection.classList.add("location")
      rootElement.appendChild(storeSection);
  
      const firstTitle = document.createElement("h2");
      firstTitle.textContent = this.name;
      storeSection.appendChild(firstTitle);
  
      const storeDataList = document.createElement("ul");
      storeSection.appendChild(storeDataList);
  
     
      for( let i=0; i<this.phoneNumbers.length; i++ ) {
        const phoneItem = document.createElement('li');
        phoneItem.textContent = this.phoneNumbers[i];
        storeDataList.appendChild(phoneItem);
      }
    }
  }


  seattle.render();
  tokyo.render();
  paris.render();
  dubai.render();
  lima.render();
  