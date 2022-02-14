// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! 
// Otherwise, you can be sure he's not...
// Note: keep the original order of the names in the output.

function friend(friends){
    friendList = [];
    for ( let i = 0; i < friends.length; i++){
        if (friends[i].length === 4){
            friendList.push(friends[i]);
        }
    } return friendList;
    // for ( let friend of friends){
    //     if (friend.length === 4){
    //         friendList.push(friend);
    //     }
    // } return friendList;
  }

  console.log(friend(["Ryan", "Kieran", "Mark"]));
  console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));