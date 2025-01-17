export function localStorageHandler (method,key,value = null) {
    if (method === 'set') {
        localStorage.setItem(key, value);
        console.log('Item set in local storage');
    }
    else if (method == 'get') {
        return localStorage.getItem(key)
    }
    else if (method == 'remove') {
        localStorage.removeItem(key);
        console.log('Item removed from local storage');
    }else if (method == 'update'){
      localStorage.setItem(key, JSON.stringify(JSON.parse(localStorage.getItem(key)).concat(value)))
    }
    else {
        console.log('Invalid method');
    }
}
export async function serverUsersHandler(methode,id = null,name = null,password = null,email, onError = null) {
    if(methode === 'get'){
        const query = new Parse.Query("users");
    
        try {
          const player = await query.get(id);  // Replace with the actual objectId
          console.log("Player Name: " + player.get("username"));
          console.log("Email: " + player.get("email"));
          console.log("Password " + player.get("password"));
        } catch (error) {
          console.error("Error retrieving object: " + error.message);
          if(onError != null) {
            onError(error.message);
          }
        }
    }

    if (methode === 'set'){
        async function createParseUser() {
            let user = new Parse.Object('users');
            user.set("username", name);
            user.set("email", email);
            user.set("password", password);
            console.log(user.get('username'));
            try {
              user = await user.save();
              if (user !== null) {
                console.log(
                  `New object created with success! ObjectId: ${
                    user.id
                  }, ${user.get("username")}`
                );
              }
            } catch (error) {
              console.log(`Error: ${error.message}`);
            }
          }

          createParseUser()
    }
  }

  export async function serverRoomsHandler(methode,roomStatus,id = null,name = null,password = null,count = 2, onError = null,updateTo  = null) {
    if(methode === 'get'){
      
      if (roomStatus == 'room'){
          const query = new Parse.Query("rooms");
          
          try {
            const player = await query.get(id);  // Replace with the actual objectId
            console.log(player.get(name));
              return player.get(name);
            } catch (error) {
              console.error("Error retrieving object: " + error.message);
              if(onError != null) {
                onError(error.message);
              }
            }
          }else{
            const query = new Parse.Query("rooms");
        
            try {
              const player = await query.get(id);  // Replace with the actual objectId
              console.log(player.get('password'));
                return player.get('password');
            } catch (error) {
              console.error("Error retrieving object: " + error.message);
              if(onError != null) {
                onError(error.message);
              }
            }
        }
    }
    
    if (methode === 'update'){
      if (name == "clear"){
        
        async function updateRooms() {
          const query = new Parse.Query("rooms");
          
          try {
            const roomsList = await query.get('egYhCENGAt');  // Replace with the actual objectId
            console.log('roomsList cleared');
            roomsList.set("password", JSON.stringify([]));
            await roomsList.save();
            console.log("Object updated successfully!");
          } catch (error) {
            console.error("Error updating object: " + error.message);
          }
        }
  
        updateRooms()
      }else if(name == 'room'){
        async function updateRooms() {
          const query = new Parse.Query("rooms");
          
          try {
            const roomsList = await query.get(id);  // Replace with the actual objectId
            roomsList.set(password, JSON.stringify(JSON.parse(roomsList.get(password)).concat([updateTo])));
            console.log(JSON.stringify(JSON.parse(roomsList.get(password)).concat([updateTo])));
            await roomsList.save();
            console.log("Object updated successfully!");
          } catch (error) {
            console.error("Error updating object: " + error.message);
          }
        }
  
        updateRooms()
      }else{
        if (roomStatus === 'list'){
            async function updateRooms() {
                const query = new Parse.Query("rooms");
                
                try {
                  const roomsList = await query.get('egYhCENGAt');  // Replace with the actual objectId
                  console.log(JSON.stringify(JSON.parse(roomsList.get('password')).concat([password])));
                  roomsList.set("password", JSON.stringify([]));
                  await roomsList.save();
                  console.log("Object updated successfully!");
                } catch (error) {
                  console.error("Error updating object: " + error.message);
                }
              }
    
              updateRooms()
      }


        }
        if (roomStatus === 'room'){
            if (updateTo === 'completed'){
                async function updateRooms() {
                    const query = new Parse.Query("rooms");
                    
                    try {
                      const room = await query.get(id);  // Replace with the actual objectId
                      room.set("status", 'completed');
                      await room.save();
                      console.log("Object updated successfully!");
                    } catch (error) {
                      console.error("Error updating object: " + error.message);
                    }
                  }
        
                  updateRooms()
            }
        }

    }
    if (methode === 'set'){
        async function createParseroom() {
            let rooms = new Parse.Object('rooms');
            rooms.set("name", name);
            rooms.set("password", password);
            rooms.set("maxcount", count)
            rooms.set("playersInRoom", JSON.stringify([]))
            rooms.set('roomStatus', roomStatus)
            console.log(rooms.get('name'));
            try {
              rooms = await rooms.save();
              if (rooms !== null) {
                async function updateRooms() {
                  const query = new Parse.Query("rooms");
                  
                  try {
                    const roomsList = await query.get('egYhCENGAt');  // Replace with the actual objectId
                    console.log(JSON.stringify(JSON.parse(roomsList.get('password')).concat([[rooms.id,name,String(count),rooms.get('playersInRoom')]])));
                    roomsList.set("password", JSON.stringify(JSON.parse(roomsList.get('password')).concat([[rooms.id,name,String(count),rooms.get('playersInRoom')]])));
                    await roomsList.save();
                    console.log("Object updated successfully!");
                  } catch (error) {
                    console.error("Error updating object: " + error.message);
                  }
                }
      
                updateRooms()
                if (localStorageHandler('get','myRooms')){
                  localStorageHandler('update','myRooms',[[rooms.id,name]])
                }else{
                  localStorageHandler('set','myRooms',JSON.stringify([[rooms.id,name]]))
                }

                console.log(
                  `New object created with success! ObjectId: ${
                    rooms.id
                  }, ${rooms.get("name")}`
                );
                
              }
            } catch (error) {
              console.log(`Error: ${error.message}`);
            }
          }

          createParseroom()
    }
  }