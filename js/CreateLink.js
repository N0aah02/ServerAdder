function createServerUrl(){
  if(create_from.create_name.value && create_from.create_ip.value && create_from.create_port.value){
    var link = 'http://serveradder.eynoah.club/?name=' + create_from.create_name.value + '&ip=' + create_from.create_ip.value + '&port=' + create_from.create_port.value;
    result_from.result.value = link;
  } else {
    alert('Please give a Server name and IP + Port to create a link to Join');
  }
}
