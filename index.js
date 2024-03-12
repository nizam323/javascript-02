

let txt ="<h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptas, unde ut excepturi neque cum, facilis, tempore omnis iste ipsum debitis sed consectetur provident. In sequi perferendis praesentium nobis quis.</h1>";
let convtxt = txt.toUpperCase();
document.write(convtxt);

function inc(){
       let v1 = prompt("ENTER WORD YOU WANT TO FIND") ;
       let asad = v1.toUpperCase();
       let find = convtxt.includes(asad);
       if(find==true){window.alert(`FOUND ${asad}`)}
       else if(v1==null){window.alert("PLEASE FILL INPUT")}
       else{window.alert(`TEXT (${asad}) NOT FOUND`)};

}